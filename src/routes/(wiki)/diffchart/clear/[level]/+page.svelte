<script>
	import Banner from './components/banner.svelte';
	import Grade from './components/grade.svelte';

	export let data;

	/**
	 * 단계(졸업+, 졸업 등...)에 해당하는 곡만 걸러줌
	 * @param grade
	 */
	function getSongsByGrade(grade) {
		let song = data.diffChart.filter((e) => e.grade === grade);
		song.forEach((e, i, a) => {
			let song2 = data.songs.find((el) => el.song_no === e.song_no);
			if(!song2){
				a[i] = null
			}
			else{
				for (const key in song2) {
				e[key] = song2[key];
			}
			}
		});
		return song.filter(e => e !== null).sort((a, b) => b.order - a.order);
	}
</script>

<div class="grade">
	<Banner />
	<Grade text={'졸업+'} songs={getSongsByGrade(8)} textStyle="background-color:#B93FEA;background-image: url('/ex/assets/img/icon/page/diffchart/clear/장식1.png'), url('/ex/assets/img/icon/page/diffchart/clear/장식2.png');background-size: contain, 55px;background-repeat: no-repeat;background-position: left, calc(50% + 200px) 10%;" />
	<Grade text={'졸업'} songs={getSongsByGrade(7)} textStyle="background-color:#E8348F;background-image: url('/ex/assets/img/icon/page/diffchart/clear/장식4.png'), url('/ex/assets/img/icon/page/diffchart/clear/장식5.png');background-size: 55px;background-repeat: no-repeat;background-position: calc(50% - 100px) 25%, calc(50% + 100px) 25%;" />
	<Grade text={'최상'} songs={getSongsByGrade(6)} textStyle="background-color:#EF3059;" />
	<Grade text={'상'} songs={getSongsByGrade(5)} textStyle="background-color:#EB7535;" />
	<Grade text={'중상'} songs={getSongsByGrade(4)} textStyle="background-color:#E6B439;" />
	<Grade text={'중'} songs={getSongsByGrade(3)} textStyle="background-color:#60CE37;" />
	<Grade text={'중하'} songs={getSongsByGrade(2)} textStyle="background-color:#37B0CB;" />
	<Grade text={'하'} songs={getSongsByGrade(1)} textStyle="background-color:#4161D8;" />
	<Grade text={'최하'} songs={getSongsByGrade(0)} textStyle="background-color:#7F7F7F;" />
	<Grade text={'개인차'} songs={getSongsByGrade(9)} textStyle="background-color:#C9C9C9;color:black;" />
</div>

<style>
	.grade{
		width:100%;
	}

	
</style>