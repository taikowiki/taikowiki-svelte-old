<script>
	import { browser } from '$app/environment';
	import { onMount, tick } from 'svelte';

	export let gamecenter;

	let container;
	onMount(async () => {
		await load();
	});

	async function load() {
		await tick();
		if (browser) {
			container.innerText = '';
			var options = {
				//지도를 생성할 때 필요한 기본 옵션
				center: new kakao.maps.LatLng(37.5127598014303, 126.944975816586), //지도의 중심좌표.
				level: 9 //지도의 레벨(확대, 축소 정도)
			};

			var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
			var geocoder = new kakao.maps.services.Geocoder(); //geocoder 준비

			gamecenter.forEach((e) => {
				geocoder.addressSearch(e.address, function (result, status) {
					if (status === kakao.maps.services.Status.OK) {
						//위도 경도 가져오기
						var x = Number(result[0].x);
						var y = Number(result[0].y);
						e.location = new kakao.maps.LatLng(y, x);

						//마커 생성
						var markerPosition = e.location; //마커 위치 설정
						var marker = new kakao.maps.Marker({
							//마커 생성
							position: markerPosition
						});
						marker.setMap(map); //마커 올리기

						//인포 윈도우 설정
						var iwContent = /*html*/ `
                                <div style="width: 150px;display: flex;justify-content: center;align-items: center;">
                                ${e.name}
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
								let target = document.querySelector(`#p${e.list}`);
								if (target) {
									let scroll = target.offsetTop - (window.innerHeight - Number(getComputedStyle(target).height.replace('px', ''))) / 2;
									window.scrollTo(scrollX, scroll);
								}
							}
						});
					}
				});
			});
		}
	}
</script>

<div class="wrapper">
	<div class="container" bind:this={container} />
</div>

<style>
	.wrapper {
		width: 700px;
		height: 320px;
		background-color: rgb(238, 239, 241);
		margin-top: 30px;
		border-radius: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.container {
		width: 680px;
		height: 300px;
		border-radius: 30px;
	}

	@media only screen and (max-width: 767px) {
		.wrapper {
			width: 100%;
		}

		.container {
			width: calc(100% - 20px);
		}
	}
</style>
