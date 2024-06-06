<script>
	import { tick } from 'svelte';
	import { browser } from '$app/environment';
	import Modal from '$lib/components/modal.svelte';

	export let gamecenter;

	//기체 댓수
	let machines;
	$: machines = gamecenter.price.split(',').map((e) => {
		return {
			price: Number(e.split('|')[0]),
			songs: Number(e.split('|')[1])
		};
	});
	let priceType;
	$: {
		priceType = new Set();
		machines.forEach((e) => {
			priceType.add(e);
		});
	}

	//요일
	function getDay() {
		let today = new Date().getDay();

		let day;
		let text;
		switch (today) {
			case 1: {
				day = 'mon';
				text = '월';
				break;
			}
			case 2: {
				day = 'tue';
				text = '화';
				break;
			}
			case 3: {
				day = 'wed';
				text = '수';
				break;
			}
			case 4: {
				day = 'thu';
				text = '목';
				break;
			}
			case 5: {
				day = 'fri';
				text = '금';
				break;
			}
			case 6: {
				day = 'sat';
				text = '토';
				break;
			}
			case 7: {
				day = 'sun';
				text = '일';
				break;
			}
		}
		return {
			day,
			text
		};
	}

	//옵션
	let otherOptions = [
		{ text: '정수기', value: 'water' },
		{ text: '화장실', value: 'restroom' },
		{ text: '주차장', value: 'parking' },
		{ text: '캡쳐보드', value: 'capture' },
		{ text: '대여', value: 'rental' },
		{ text: '밤샘', value: 'night' },
		{ text: 'ATM', value: 'ATM' },
		{ text: '선풍기', value: 'fan' }
	];

	//모달
	let showModal1;
	let showModal2;

	//지도
	let container;
	let loaded = false;
	async function load() {
		if (!loaded) {
			await tick();
			if (browser && !loaded) {
				container.innerText = '';
				var geocoder = new kakao.maps.services.Geocoder(); //geocoder 준비

				geocoder.addressSearch(gamecenter.address, function (result, status) {
					if (status === kakao.maps.services.Status.OK) {
						var x = Number(result[0].x);
						var y = Number(result[0].y);
						let location = new kakao.maps.LatLng(y, x);

						var options = {
							//지도를 생성할 때 필요한 기본 옵션
							center: location,
							level: 1 //지도의 레벨(확대, 축소 정도)
						};

						var map = new kakao.maps.Map(container, options);

						var marker = new kakao.maps.Marker({
							//마커 생성
							position: location
						});
						marker.setMap(map); //마커 올리기

						//인포 윈도우 설정
						var iwContent = /*html*/ `
                        <div style="width: 150px;display: flex;justify-content: center;align-items: center;">
                                ${gamecenter.name}
                                </div>
                            `;
						var infowindow = new kakao.maps.InfoWindow({
							content: iwContent,
							disableAutoPan: true
						});

						//infowindow.open(map, marker);infowindow.opened = true;

						kakao.maps.event.addListener(marker, 'click', function () {
							//마커 클릭 이벤트
							if (infowindow.opened === true) {
								infowindow.close();
								infowindow.opened = false;
							} else {
								infowindow.open(map, marker);
								infowindow.opened = true;
							}
						});
					}
				});
			}
		}
	}
	let showMap = false;
	function toggle() {
		if (showMap) {
			showMap = false;
		} else {
			showMap = true;
		}
	}

	//기체 가격 색깔
	function priceColor(price){
		if(price.price / price.songs === 250){
			return '#E03B4B';
		}
		else if(price.price / price.songs === 1000 / 3){
			return '#e36362';
		}
		else{
			return '#eb7d7c';
		}
	}
	function machineColor(length){
		if(length === 3){
			return '#E03B4B';
		}
		else if(length === 2){
			return '#e36362';
		}
		else{
			return '#eb7d7c';
		}
	}
</script>

{#if gamecenter.name !== "춘천 레고랜드 근처 ???"}
<div class="container" style="display: flex;" id={'p' + gamecenter.list}>
	<div class="gc-data-line1">
		<div class="gc-data-line1-left">
			<div class="gc-data-name">{gamecenter.name}</div>
			<div class="gc-data-phoneaddress">
				<span class="gc-data-address" id="address">{gamecenter.address}</span>
				<br />
				<span class="gc-data-phone" id="phone"></span>
			</div>
			<div class="gc-data-machine">
				{#each [...priceType] as price}
					<span class="gc-data-machine-detail" style={`background-color:${priceColor(price)};}`}>{price.price}원 / {price.songs}곡</span>
				{/each}
				<span class="gc-data-machine-detail" style={`background-color:${machineColor(machines.length)};`}>{machines.length} 대</span>
			</div>
		</div>
		<div class="gc-data-line1-right for-pc">
			<div class="gc-data-img-container">
				<div class="gc-data-img-box">
					<img alt="" class="gc-data-img" onerror="this.remove();" src={`/ex/assets/img/gamecenter/${gamecenter.name}/외부.jpg`} loading="lazy" role="presentation" on:keydown={() => {}} on:click={()=> {showModal1 = true;}}/>
				</div>
				<div class="gc-data-img-box">
					<img alt="" class="gc-data-img" onerror="this.remove();" src={`/ex/assets/img/gamecenter/${gamecenter.name}/내부.jpg`} loading="lazy" role="presentation" on:keydown={() => {}} on:click={()=> {showModal2 = true;}}/>
				</div>
			</div>
		</div>
	</div>
	<div class="gc-data-line2">
		<div class="gc-data-time">
			<div class="gc-data-time-day" style="display: block;">{gamecenter[getDay().day]}<span style="font-size:18px; margin-left:3px;">({getDay().text})</span></div>
			<div class="gc-data-time-annotaion">전체 영업시간 보기</div>
		</div>
		<div class="gc-data-option-container">
			{#each otherOptions as otherOption}
				{#if gamecenter[otherOption.value] === 1}
					<div class="gc-data-option-note">{otherOption.text}</div>
				{:else}
					<div class="gc-data-option-note" style="text-decoration: line-through;color: rgb(172, 172, 172);">{otherOption.text}</div>
				{/if}
			{/each}
		</div>
		<div class="gc-data-img-mobile-container for-mobile">
			<img alt="" class="gc-data-img" onerror="this.remove();" src={`/ex/assets/img/gamecenter/${gamecenter.name}/외부.jpg`} loading="lazy" role="presentation" on:keydown={() => {}} on:click={()=> {showModal1 = true;}}/>
			<img alt="" class="gc-data-img" onerror="this.remove();" src={`/ex/assets/img/gamecenter/${gamecenter.name}/내부.jpg`} loading="lazy" role="presentation" on:keydown={() => {}} on:click={()=> {showModal2 = true;}}/>
		</div>
		<button
			class="gc-data-map-button"
			on:click={() => {
				load();
				toggle();
			}}>눌러서 지도보기</button
		>
	</div>
	<div class="gc-map" style={showMap ? `display:block;` : `display:none;`} bind:this={container}></div>
</div>
<Modal bind:showModal={showModal1}>
	<img alt="" class="modal" onerror="this.remove();" src={`/ex/assets/img/gamecenter/${gamecenter.name}/외부.jpg`} loading="lazy"/>
</Modal>
<Modal bind:showModal={showModal2}>
	<img alt="" class="modal" onerror="this.remove();" src={`/ex/assets/img/gamecenter/${gamecenter.name}/내부.jpg`} loading="lazy"/>
</Modal>
{/if}

<style>
	.gc-map {
		width: 680px;
		height: 300px;
		background-color: white;
		border-radius: 30px;
	}

	.container {
		margin-top: 25px;
		width: 950px;
		height: auto;
		padding-bottom: 10px;
		background-color: rgb(246, 246, 246);
		border-radius: 18px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.gc-data-line1 {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: 166px;
		margin-top: 15px;
	}

	.gc-data-line1-left {
		/* width:calc(90% - 550px); */
		width: 300px;
		height: 100%;
	}

	.gc-data-name {
		height: 40px;
		margin-top: 15px;
		margin-bottom: 10px;
		font-size: 29px;
		font-family: 'Noto Sans';
		font-weight: 900;
		letter-spacing: -2px;
		color: rgb(45, 45, 45);
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.gc-data-phoneaddress {
		height: 68px;
		padding-top: 5px;
	}

	.gc-data-address {
		min-height: 18px;

		font-size: 12px;
		font-family: 'Noto Sans JP', 'Noto Sans KR';
		font-weight: bold;
	}

	.gc-data-phone {
		height: 18px;

		font-size: 12px;
		font-family: 'Noto Sans JP', 'Noto Sans KR';
		font-weight: bold;
	}

	.gc-data-machine {
		width: calc(100% - 20px);

		margin-right: 20px;

		font-size: 15px;
		font-family: 'Noto Sans JP', 'Noto Sans KR';
		font-weight: bold;
		letter-spacing: 0px;
		color:white;

		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}

	.gc-data-machine-detail {
		height: 28px;

		padding-left: 10px;
		padding-right: 10px;

		margin-left: 2px;
		margin-right: 2px;

		border-radius: 10px;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.gc-data-line1-right {
		width: 600px;
		/* margin-left: 10px; */
	}

	.gc-data-img-container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
	}

	.gc-data-img-box {
		width: 295px;
		height: 100%;
		border-radius: 10px;

		display: flex;
		justify-content: center;
		align-items: center;

		transition: width 0.5s;
	}

	.gc-data-img {
		width: 295px;
		height: auto;
		border-radius: 10px;

		transition: width 0.5s;

		cursor: pointer;
	}

	.gc-data-line2 {
		width: 890px;
		height: 45px;
		margin-top: 20px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.gc-data-time {
		width: 293px;
		height: 100%;

		font-family: 'Noto Sans JP', 'Noto Sans KR';
		font-weight: bold;
		font-size: 25px;

		transform: translateY(-5px);

		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.gc-data-time-annotaion {
		font-size: 10px;
		cursor: pointer;
	}

	.gc-data-time .gc-data-time-day {
		display: none;
	}

	.gc-data-option-container {
		flex: 1 0 auto;
		height: 100%;

		/*margin-left: 20px;*/

		font-family: 'Noto Sans JP', 'Noto Sans KR';
		font-weight: bold;
		font-size: 12px;

		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}

	.gc-data-option-note {
		margin-left: 4px;
		margin-right: 4px;
	}

	.gc-data-map-button {
		width: 130px;
		height: 100%;

		font-family: 'Noto Sans JP', 'Noto Sans KR';
		font-weight: bold;
		font-size: 17px;
		letter-spacing: -1px;
		color: rgb(183, 183, 183);

		background: none;

		cursor: pointer;

		display: flex;
		justify-content: center;
		align-items: center;

		border: 0;
		margin: 0;
	}

	.modal{
		width:800px;
		max-width: 100%;
		height:auto;
	}

	@media only screen and (max-width: 767px) {
		.container {
			width: 100%;
			height: auto;
		}

		.gc-data-line1 {
			width: 100%;
			height: auto;

			margin-top: 10px;

			flex-direction: column;
		}

		.gc-data-line1-left {
			width: calc(100% - 30px);

			display: flex;
			flex-wrap: wrap;
			flex-direction: column;
		}

		.gc-data-name {
			font-size: 23px;

			margin-top: 0px;
			margin-bottom: 0;
		}

		.gc-data-phoneaddress {
			font-size: 10px;

			height: auto;

			padding-top: 0;
			margin-bottom: 8px;
		}

		.gc-data-machine {
			font-size: 12px;
			margin-bottom: 3px;
		}

		.gc-data-machine-detail {
			margin-left: 0;
			height: 25px;
		}

		.gc-data-line2 {
			width: calc(100% - 30px);
			height: auto;

			margin-top: 5px;

			flex-direction: column;
			flex-wrap: wrap;
			align-items: flex-start;
		}

		.gc-data-time {
			width: auto;
			font-size: 20px;

			flex-direction: row;
			align-items: center;
		}

		.gc-data-time-annotaion {
			margin-left: 10px;
			color: #4e4e4e;
		}

		.gc-data-option-container {
			margin-left: 0;

			font-weight: normal;
		}

		.gc-data-option-note {
			margin-left: 0;
		}

		.gc-data-map-button {
			width: 100%;

			margin-top: 3px;

			color: rgb(128, 128, 128);
		}

		/*mobile img*/
		.gc-data-img-mobile-container {
			width: 100%;

			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			row-gap: 10px;

			overflow-x: scroll;

			margin-top: 5px;

			-ms-overflow-style: none;
			scrollbar-width: none;
		}

		.gc-data-img-mobile-container img:nth-child(1) {
			margin-right: 10px;
		}

		.gc-data-img-mobile-container::-webkit-scrollbar {
			display: none;
		}
	}
</style>
