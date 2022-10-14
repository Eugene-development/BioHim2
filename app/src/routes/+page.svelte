<script>
	import axios from 'axios';

	import { formEmail, mobileMenu, selectBrand, selectContainer } from '../stores';
	import { useInvert } from '../functions/invert';
	import { useClick } from '../functions/click_outside';
	const { invert, invertToFalse } = useInvert;
	const { clickOutside } = useClick;

	const changeVisibleFormEmail = () => formEmail.update(invert);
	const changeVisibleMobileMenu = () => mobileMenu.update(invert);
	const changeVisibleSelectBrand = () => selectBrand.update(invert);
	const changeVisibleSelectContainer = () => selectContainer.update(invert);

	const closeVisibleSelected = () => {
		selectContainer.update(invertToFalse);
		selectBrand.update(invertToFalse);
	};

	// const test = () => console.log(123);

	let brands = [
		{ id: 1, value: `Марка А`, unavailable: false },
		{ id: 2, value: `Марка Б`, unavailable: false },
		{ id: 3, value: `Медицинская`, unavailable: false }
	];

	let containers = [
		{ id: 1, value: `Евро куб` },
		{ id: 2, value: `Канистра 30 литров` }
	];

	let brandSelected = 'Выберите марку перекиси';
	let containerSelected = 'Выберите тару';
	let volume = '';
	let email = '';

	const url = `/sendMainFormBH`;
	// INFO: ENV file

	const apiCRUD = {
		// baseURL: 'http://127.0.0.1:8000/',
		baseURL: 'https://larux.ru:7721/',

		headers: {
			Authorization: `Bearer 8`
		}
	};
	async function sendEmail() {
		try {
			const data = { brand: brandSelected, container: containerSelected, volume, email };
			changeVisibleFormEmail();

			await axios.post(url, data, apiCRUD);
		} catch (error) {
			console.error(error);
		}
	}

	const title = 'Техническая и медицинская перекись водорода крупным и мелким оптом';
	const description =
		'Оптовая продажа технической и медицинской перекиси водорода от производителя';
	const main_text =
		'Техническая и медицинская перекись водорода в IBC-контейнерах и в канистрах 30л (34кг) по оптовым ценам от заводов производителей с доставкой или самовывозом. Вся продукция сопровождается сертификатами качества.';
	const a_text =
		'Техническая и медицинская перекись водорода применяются в разных отраслях промышленности и в быту';
	const b_text = 'Медицинская перекись водорода';

	const title_v2 = 'Техническая перекись водорода крупным и мелким оптом';
	const description_v2 = 'Оптовая продажа технической перекиси водорода от производителя';
	const main_text_v2 =
		'Техническая перекись водорода в IBC-контейнерах и в канистрах 30л (34кг) по оптовым ценам от заводов производителей с доставкой или самовывозом. Вся продукция сопровождается сертификатами качества.';
	const a_text_v2 =
		'Техническая перекись водорода применяются в разных отраслях промышленности и в быту';
	const b_text_v2 = 'Техническая перекись водорода';

	// export let content = {
	// 	title,
	// 	description,
	// 	main_text,
	// 	a_text,
	// 	b_text
	// };

	export let content = {
		title: title_v2,
		description: description_v2,
		main_text: main_text_v2,
		a_text: a_text_v2,
		b_text: b_text_v2
	};
</script>

<svelte:head>
	<title>{content.title}</title>
	<meta name="description" content={content.description} />
</svelte:head>

<div class="">
	<div class="xl:hidden px-1 py-2 sm:px-4 md:px-8 bg-gradient-to-br from-blue-600 to-green-700">
		<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
		<div class="mx-auto flex items-center justify-between px-4">
			<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
			<!--                    <div class="flex">-->
			<!--                        <svg class="hidden sm:block h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6 text-red-500" fill="none"-->
			<!--                             stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"-->
			<!--                             xmlns="http://www.w3.org/2000/svg">-->
			<!--                            <path d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"-->
			<!--                                  stroke-linecap="round"-->
			<!--                                  stroke-linejoin="round"/>-->
			<!--                        </svg>-->
			<!--                        <a class="text-gray-300 pl-1 rounded-md text-xs sm:text-base md:text-lg font-medium"-->
			<!--                           href="tel:+78005558111">8 800-555-8-111</a>-->
			<!--                    </div>-->

			<div class="flex ">
				<svg
					class="h-4 w-4 sm:h-6 sm:w-6 text-gray-100 "
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				<span class="rounded-md pl-1 text-xs font-medium text-gray-200 sm:text-base md:text-lg"
					>+7 (495) 080-81-01</span
				>
			</div>

			<div class="flex">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4 sm:h-6 sm:w-6 text-gray-100 "
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
					/>
				</svg>
				<a
					class="rounded-md pl-1 text-xs font-medium text-gray-100 sm:text-base md:text-lg"
					href="tel:+79306888862">biohim.org@yandex.ru</a
				>
			</div>
		</div>
	</div>

	<div class="relative overflow-hidden">
		<header class="relative">
			<div class="bg-main py-2 border-b-2 border-cyan-100">
				<nav
					class="relative mx-auto flex max-w-full items-center justify-between px-4 py-2 sm:px-6 "
					aria-label="Global"
				>
					<div class="flex flex-1 items-center">
						<div class="flex w-full items-center justify-between lg:w-auto">
							<a href="#1">
								<span class="sr-only">Work</span>
								<img
									class="h-8 w-auto sm:h-10"
									src="https://storage.yandexcloud.net/brand-logo/biohim/logo/logo.svg"
									alt="logo"
								/>
							</a>
							<div class="md:hidden -mr-2 flex items-center ">
								<button
									on:click={changeVisibleMobileMenu}
									type="button"
									class="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
									aria-expanded="false"
								>
									<span class="sr-only">Open main menu</span>
									<!-- Heroicon name: outline/bars-3 -->
									<svg
										class="h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
										/>
									</svg>
								</button>
							</div>
						</div>

						<div class="hidden md:flex space-x-8 md:ml-8 ">
							<a href="#1" class="text-base font-medium text-white hover:text-gray-300">Главная</a>

							<a href="#2" class="text-base font-medium text-white hover:text-gray-300"
								>Производство</a
							>

							<a href="#3" class="text-base font-medium text-white hover:text-gray-300"
								>Информация</a
							>

							<a href="#4" class="text-base font-medium text-white hover:text-gray-300"
								>Применение</a
							>

							<a href="#5" class="text-base font-medium text-white hover:text-gray-300"
								>О&nbsp;нас
							</a>
						</div>
					</div>
					<div class="hidden xl:flex xl:items-center xl:space-x-6">
						<div class="mr-2">
							<div class=" flex items-center md:ml-2">
								<div class="items-center">
									<div class="flex items-center justify-between">
										<div class="flex space-x-2 px-2 py-1 mx-1 rounded-md items-center antialiased">
											<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="h-6 w-6 text-cyan-400"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												stroke-width="2"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
												/>
											</svg>
											<span class="text-gray-50 text-xs sm:text-lg font-bold "
												>+7 (495) 080-81-01</span
											>
											<!-- <a href="tel:+74950808101" class="text-gray-50 text-xs sm:text-lg font-bold "
												>+7 (495) 080-81-01</a
											> -->
										</div>
										<div class="flex space-x-2 px-2 py-1 mx-1 rounded-md items-center antialiased">
											<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="h-6 w-6 text-cyan-400"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												stroke-width="2"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
												/>
											</svg>
											<p class="text-gray-50 text-xs sm:text-xl font-bold">biohim.org@yandex.ru</p>
										</div>
									</div>
								</div>

								<!--												                        <button type="button" class="bg-gray-800 p-1 rounded-full text-cyan-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white animate-pulse">-->
								<!--												                            <span class="sr-only">View notifications</span>-->
								<!--												                            &lt;!&ndash; Heroicon name: outline/bell &ndash;&gt;-->
								<!--												                            <svg class="h-6 w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">-->
								<!--												                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />-->
								<!--												                            </svg>-->
								<!--												                        </button>-->
							</div>
						</div>
					</div>
				</nav>
			</div>

			<!--
              Mobile menu, show/hide based on menu open state.

              Entering: "duration-150 ease-out"
                From: "opacity-0 scale-95"
                To: "opacity-100 scale-100"
              Leaving: "duration-100 ease-in"
                From: "opacity-100 scale-100"
                To: "opacity-0 scale-95"
            -->
			{#if $mobileMenu}
				<div class="absolute inset-x-0 top-0 origin-top transform p-2 transition md:hidden">
					<div
						class="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5"
					>
						<div class="flex items-center justify-between px-5 pt-4">
							<div>
								<img
									class="h-8 w-auto"
									src="https://tailwindui.com/img/logos/workflow-mark.svg?from-color=teal&from-shade=500&to-color=cyan&to-shade=600&toShade=600"
									alt=""
								/>
							</div>
							<div class="-mr-2">
								<button
									on:click={changeVisibleMobileMenu}
									type="button"
									class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600"
								>
									<span class="sr-only">Close menu</span>
									<!-- Heroicon name: outline/x-mark -->
									<svg
										class="h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>
							</div>
						</div>
						<div class="pt-5 pb-6">
							<div class="space-y-1 px-2">
								<a
									on:click={changeVisibleMobileMenu}
									href="#1"
									class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
									>Главная</a
								>

								<a
									on:click={changeVisibleMobileMenu}
									href="#2"
									class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
									>Производство</a
								>

								<a
									on:click={changeVisibleMobileMenu}
									href="#3"
									class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
									>Информация</a
								>

								<a
									on:click={changeVisibleMobileMenu}
									href="#4"
									class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
									>Применение</a
								>

								<a
									on:click={changeVisibleMobileMenu}
									href="#5"
									class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
									>О нас</a
								>
							</div>
							<!-- <div class="mt-6 px-5">
			                            <a href="#" class="block w-full rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-4 text-center font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700">Start free trial</a>
			                        </div>
			                        <div class="mt-6 px-5">
			                            <p class="text-center text-base font-medium text-gray-700">Existing customer? <a href="#" class="text-gray-900 hover:underline">Login</a></p>
			                        </div> -->
						</div>
					</div>
				</div>
			{/if}
		</header>

		<main class="bg-main">
			<div
				id="1"
				class="bg-[url('https://storage.yandexcloud.net/brand-logo/biohim/foto/bg.png')] sm:pt-4 sm:pb-36 md:pb-24 lg:pb-0 lg:overflow-hidden "
			>
				<div class="mx-auto max-w-7xl lg:px-8">
					<div class="lg:grid lg:grid-cols-2 lg:gap-4">
						<div
							class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left"
						>
							<div class=" lg:py-24 py-12 bg-main bg-opacity-60 px-2">
								<span
									class="inline-flex items-center rounded-full bg-black p-1.5 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
								>
									<span
										class="rounded-full bg-gradient-to-br from-blue-500 to-green-600 px-3 py-1 text-xs sm:text-sm font-semibold leading-5 text-white"
										>Перекись водорода</span
									>
									<span class="ml-4 text-xs sm:text-sm">по оптовым ценам</span>
									<!-- Heroicon name: mini/chevron-right -->
									<svg
										aria-hidden="true"
										class="ml-2 h-5 w-5 text-gray-700"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											clip-rule="evenodd"
											d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
											fill-rule="evenodd"
										/>
									</svg>
								</span>
								<h1
									class="mt-4 text-2xl font-bold tracking-tight text-white sm:mt-5 sm:text-4xl lg:mt-6"
								>
									<span class="block text-cyan-100">ООО ТК "ФОРВАРД ЛАЙН"</span>
									<!--                                    <span class="block bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text pb-3 text-transparent sm:pb-5">Н<span class="text-lg">2</span>O<span class="text-lg">2</span></span>-->
								</h1>
								<!-- TODO moderator -->
								<p class="mt-8 text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
									{content.main_text}
								</p>

								<div class=" py-12">
									<form
										on:submit|preventDefault|once={sendEmail}
										class="sm:mx-auto sm:max-w-xl lg:mx-0"
									>
										<div class="my-3">
											<div class="relative mt-1">
												<button
													on:click={changeVisibleSelectBrand}
													required
													type="button"
													class="relative w-full cursor-default rounded-md border border-gray-300 bg-white px-4 py-3 text-left shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 sm:text-base text-gray-800"
													aria-haspopup="listbox"
													aria-expanded="true"
													aria-labelledby="listbox-label"
												>
													<span class="block truncate">{brandSelected}</span>
													<span
														class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
													>
														<!-- Heroicon name: mini/chevron-up-down -->
														<svg
															class="h-5 w-5 text-gray-400"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 20 20"
															fill="currentColor"
															aria-hidden="true"
														>
															<path
																fill-rule="evenodd"
																d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
																clip-rule="evenodd"
															/>
														</svg>
													</span>
												</button>

												{#if $selectBrand}
													<div on:outclick={closeVisibleSelected} use:clickOutside>
														<ul
															class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border-2 border-cyan-500"
															tabindex="-1"
															role="listbox"
															aria-labelledby="listbox-label"
															aria-activedescendant="listbox-option-3"
														>
															{#each brands as { value }, i}
																<li
																	class="text-gray-900 hover:text-white hover:bg-cyan-600 relative cursor-default select-none py-2 pl-3 pr-9"
																	id="listbox-option-0"
																	role="option"
																>
																	<button
																		class="w-full text-left"
																		on:click={(e) => {
																			brandSelected = e.target.innerText;
																			changeVisibleSelectBrand();
																		}}
																	>
																		<span class="font-normal block truncate">{value}</span>
																		<span
																			class="text-white absolute inset-y-0 right-0 flex items-center pr-4"
																		>
																			<!-- Heroicon name: mini/check -->
																			<svg
																				class="h-5 w-5"
																				xmlns="http://www.w3.org/2000/svg"
																				viewBox="0 0 20 20"
																				fill="currentColor"
																				aria-hidden="true"
																			>
																				<path
																					fill-rule="evenodd"
																					d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																					clip-rule="evenodd"
																				/>
																			</svg>
																		</span>
																	</button>
																</li>
															{/each}
														</ul>
													</div>
												{/if}
											</div>
										</div>
										<div class="my-3">
											<div class="relative mt-1">
												<button
													on:click={changeVisibleSelectContainer}
													required
													type="button"
													class="relative w-full cursor-default rounded-md border border-gray-300 bg-white  px-4 py-3 text-left shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 sm:text-base text-gray-800"
													aria-haspopup="listbox"
													aria-expanded="true"
													aria-labelledby="listbox-label"
												>
													<span class="block truncate">{containerSelected}</span>
													<span
														class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
													>
														<!-- Heroicon name: mini/chevron-up-down -->
														<svg
															class="h-5 w-5 text-gray-400"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 20 20"
															fill="currentColor"
															aria-hidden="true"
														>
															<path
																fill-rule="evenodd"
																d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
																clip-rule="evenodd"
															/>
														</svg>
													</span>
												</button>

												{#if $selectContainer}
													<div on:outclick={closeVisibleSelected} use:clickOutside>
														<ul
															class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border-2 border-cyan-500"
															tabindex="-1"
															role="listbox"
															aria-labelledby="listbox-label"
															aria-activedescendant="listbox-option-3"
														>
															{#each containers as { value }, i}
																<li
																	class="text-gray-900 hover:text-white hover:bg-cyan-600 relative cursor-default select-none py-2 pl-3 pr-9"
																	id="listbox-option-0"
																	role="option"
																>
																	<button
																		class="w-full text-left"
																		on:click={(e) => {
																			containerSelected = e.target.innerText;
																			changeVisibleSelectContainer();
																		}}
																	>
																		<span class="font-normal block truncate">{value}</span>
																		<span
																			class="text-white absolute inset-y-0 right-0 flex items-center pr-4"
																		>
																			<!-- Heroicon name: mini/check -->
																			<svg
																				class="h-5 w-5"
																				xmlns="http://www.w3.org/2000/svg"
																				viewBox="0 0 20 20"
																				fill="currentColor"
																				aria-hidden="true"
																			>
																				<path
																					fill-rule="evenodd"
																					d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																					clip-rule="evenodd"
																				/>
																			</svg>
																		</span>
																	</button>
																</li>
															{/each}
														</ul>
													</div>
												{/if}
											</div>
										</div>

										<div class="my-3">
											<label for="volume" class="sr-only">Желаемый объём</label>
											<input
												required
												bind:value={volume}
												class="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
												id="volume"
												placeholder="Желаемый объём"
												type="text"
											/>
										</div>

										<div class="sm:flex">
											{#if $formEmail}
												<div class="min-w-0 flex-1">
													<label for="email" class="sr-only">Ваша почта</label>
													<input
														required
														bind:value={email}
														class="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
														id="email"
														placeholder="Ваша почта"
														type="email"
													/>
												</div>

												<div class="mt-3 sm:mt-0 sm:ml-3">
													<button
														class="block w-full rounded-md bg-gradient-to-br from-blue-500 to-green-600 py-3 px-4 font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
														type="submit"
													>
														Отправить запрос на цену
													</button>
												</div>
											{:else}
												<span
													class="block w-full rounded-md bg-gradient-to-br from-blue-500 to-green-600 py-3 px-4 font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
												>
													Заявка отправлена. Ожидайте ответа на почту.
												</span>
											{/if}
										</div>
										<p class="mt-3 text-sm text-gray-300 sm:mt-4">
											Отправьте ваш запрос и получите актуальную цену на перекись водорода.
										</p>
									</form>
								</div>
							</div>
						</div>
						<div class="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
							<div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
								<!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
								<img
									class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
									src=""
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Feature section with screenshot -->
			<div class="relative bg-gray-50 pt-16 sm:pt-24 lg:pt-32" id="2">
				<div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
					<div>
						<h2 class="text-lg font-semibold text-cyan-600">Производство</h2>
						<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Производство перекиси водорода
						</p>
						<p class="mx-auto mt-5 max-w-prose text-xl text-gray-700">
							Перекись водорода производится на территории России, Турции, Индии, Китая, Финляндии и
							поставляется напрямую с заводов изготовителей через наши склады.
						</p>
					</div>
					<div class="mt-12 -mb-10 sm:-mb-24 lg:-mb-80 ">
						<div class="relative">
							<img
								class="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 grayscale"
								src="https://storage.yandexcloud.net/brand-logo/biohim/foto/bg5.jpeg"
								alt=""
							/>
							<div
								class="absolute inset-0 bg-cyan-500 mix-blend-multiply opacity-70"
								aria-hidden="true"
							/>
						</div>
					</div>
				</div>
			</div>

			<!-- Feature section with grid -->
			<div class="relative bg-white py-16 sm:py-24 lg:py-32" id="3">
				<div class="mx-auto max-w-md px-4  sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
					<h2 class="text-lg font-semibold text-cyan-600 text-center">Информация</h2>
					<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
						Общая информация о продукции
					</p>
					<p class="mx-auto mt-5 max-w-prose text-xl text-gray-700 text-center">
						Перекись водорода или пероксид водорода (Н-О-О-Н) - прозрачная, бесцветная жидкость.
						Используется только в водных растворах, и смешивающаяся с водой в любых соотношениях.
						Молекулярный вес перекиси водорода 34,02.
					</p>

					<div class="mt-12">
						<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
							<div class="pt-8 shadow-xl shadow-gray-900">
								<div class="flow-root bg-main px-6 pb-8">
									<div class="-mt-6">
										<div>
											<span
												class="inline-flex items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-green-600 p-3 shadow-lg"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="currentColor"
													class="w-6 h-6 text-white"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
													/>
												</svg>
											</span>
										</div>
										<h3 class="mt-8 text-xl font-medium tracking-tight text-gray-50">Продукция</h3>
										<p class="mt-5 text-base text-gray-50">
											Перекись для мед. нужд (35‑40%) и техническая перекись водорода марки
											А(35‑40%) и Б(30‑40%)
										</p>
									</div>
								</div>
							</div>

							<div class="pt-8 shadow-xl shadow-gray-900">
								<div class="flow-root bg-main px-6 pb-8">
									<div class="-mt-6">
										<div>
											<span
												class="inline-flex items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-green-600 p-3 shadow-lg"
											>
												<!-- Heroicon name: outline/lock-closed -->
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="currentColor"
													class="w-6 h-6 text-white"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
													/>
												</svg>
											</span>
										</div>
										<h3 class="mt-8 text-xl font-medium tracking-tight text-gray-50">Стоимость</h3>
										<p class="mt-5 text-base text-gray-50">
											Актуальная цена предоставляется только по запросу клиента через форму обратной
											связи на сайте
										</p>
									</div>
								</div>
							</div>

							<div class="pt-8 shadow-xl shadow-gray-900">
								<div class="flow-root bg-main px-6 pb-8">
									<div class="-mt-6">
										<div>
											<span
												class="inline-flex items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-green-600 p-3 shadow-lg"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="currentColor"
													class="w-6 h-6 text-white"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
													/>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
													/>
												</svg>
											</span>
										</div>
										<h3 class="mt-8 text-xl font-medium tracking-tight text-gray-50">Доставка</h3>
										<p class="mt-5 text-base text-gray-50">
											Отгрузка осуществляется со складов Москвы и Дзержинска спецтрансортом или
											самовывозом
										</p>
									</div>
								</div>
							</div>

							<div class="pt-8 shadow-xl shadow-gray-900">
								<div class="flow-root  bg-main px-6 pb-8">
									<div class="-mt-6">
										<div>
											<span
												class="inline-flex items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-green-600 p-3 shadow-lg"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="currentColor"
													class="w-6 h-6 text-white"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
													/>
												</svg>
											</span>
										</div>
										<h3 class="mt-8 text-xl font-medium tracking-tight text-gray-50">Фасовка</h3>
										<p class="mt-5 text-base text-gray-50">
											Продукция фасуется в IBC-контейнеры по 1000 литров (1070 кг), а также в
											канистры 30л (34кг)
										</p>
									</div>
								</div>
							</div>

							<div class="pt-8 shadow-xl shadow-gray-900">
								<div class="flow-root bg-main px-6 pb-8">
									<div class="-mt-6">
										<div>
											<span
												class="inline-flex items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-green-600 p-3 shadow-lg"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="currentColor"
													class="w-6 h-6 text-white"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
													/>
												</svg>
											</span>
										</div>
										<h3 class="mt-8 text-xl font-medium tracking-tight text-gray-50">Хранение</h3>
										<p class="mt-5 text-base text-gray-50">
											Перекись хранится в помещениях складского назначения при температуре не выше
											25‑30 ºС
										</p>
									</div>
								</div>
							</div>

							<div class="pt-8 shadow-xl shadow-gray-900">
								<div class="flow-root bg-main px-6 pb-8">
									<div class="-mt-6">
										<div>
											<span
												class="inline-flex items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-green-600 p-3 shadow-lg"
											>
												<!-- Heroicon name: outline/shield-check -->
												<svg
													class="h-6 w-6 text-white"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="currentColor"
													aria-hidden="true"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
													/>
												</svg>
											</span>
										</div>
										<h3 class="mt-8 text-xl font-medium tracking-tight text-gray-50">Гарантии</h3>
										<p class="mt-5 text-base text-gray-50">
											Каждая партия отпускаемой продукции отгружается после лабораторной проверки
											качества
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="bg-gradient-to-b from-white to-gray-50" id="4">
				<div
					class="max-w-2xl mx-auto px-4 pt-6 pb-24 sm:px-6 sm:pt-12 sm:pb-36 lg:max-w-7xl lg:px-8"
				>
					<!-- Details section -->
					<section aria-labelledby="details-heading">
						<div class="text-center">
							<h2 class="text-lg font-semibold text-cyan-600">Применение</h2>
							<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
								Применение перекиси водорода
							</p>
							<!-- TODO moderator -->
							<p class="mx-auto mt-5 max-w-prose text-xl text-gray-700">
								{content.a_text}
							</p>
						</div>

						<div class="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
							<div>
								<div class="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
									<img
										src="https://storage.yandexcloud.net/brand-logo/biohim/foto/bussein.jpg"
										alt=""
										class="w-full h-96 object-center object-cover"
									/>
								</div>
								<p class="mt-8 text-base text-gray-700">
									<strong>Техническая перекись водорода</strong> активно применяется как в профессиональных
									сферах человеческой деятельности (промышленность, медицина, транспорт) так и в быту.
									Как правило, вещество используется для отбеливания, дезинфекции и обеззараживания различных
									поверхностей – мебели, оборудования, тканей, инструментов и прочих немедецинских материалов.
								</p>
								<p class="mt-8 text-base text-gray-700">
									Применять техническую перекись разрешается только в хорошо вентилируемых
									помещениях и на открытых площадках. Средство быстро растворяется в обычной воде,
									не имеет запаха и цвета. Широко используется для очистки воды в бассейнах и
									искусственных прудах.
								</p>
							</div>
							<div>
								<div class="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
									<img
										src="https://storage.yandexcloud.net/brand-logo/biohim/foto/fotohim2.jpg"
										alt=""
										class="w-full h-96 object-center object-cover"
									/>
								</div>
								<!-- TODO moderator -->

								<p class="mt-8 text-base text-gray-700">
									<strong>{content.b_text}</strong> применяется в медучреждениях и лабораториях для дезинфекции
									поверхностей в помещениях, жёсткой мебели, поверхностей аппаратов и приборов, санитарно-технического
									оборудования, белья, посуды , игрушек, предметов ухода за больными. А также для дезинфекции
									транспорта и предстерилизационной очистки медицинских изделий.
								</p>
								<p class="mt-8 text-base text-gray-700">
									Перекись водорода обладает высокой антимикробной активностью в отношении бактерий,
									в том числе спорообразующих вирусов и грибов (возбудителей дерматофитий). Также
									эффективна в борьбе с коронавиросом, для оббезараживания воды и для очитки
									бассейнов.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>

			<div class="bg-gray-100" id="5">
				<div class="pt-16 sm:pt-16 lg:pt-20">
					<div class="text-lg max-w-prose mx-auto">
						<h1>
							<span
								class="block text-base text-center text-cyan-600 font-semibold tracking-wide uppercase"
								>О нас</span
							>
							<span
								class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
								>Информация о компании</span
							>
						</h1>
					</div>
				</div>
				<div class="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
					<div class="relative">
						<div class="absolute inset-0 h-1/2 bg-gray-100" />
						<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
							<div
								class="max-w-lg mx-auto rounded-lg shadow-lg shadow-gray-400 overflow-hidden lg:max-w-none lg:flex"
							>
								<div class="flex-1 bg-white px-6 py-8 lg:p-12">
									<h3 class="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
										ООО ТК "ФОРВАРД ЛАЙН"
									</h3>
									<p class="mt-6 text-base text-gray-700">
										Более 8 лет мы занимаемся оптовой торговлей химической продукцией и, в
										частности, медицинской и технической перекисью водорода. За это время
										зарекомендовали себя как надёжного и лояльного контрагента, с которым можно
										иметь длительные деловые отношения. Приглашаем вас к взаимовыгодному
										сотрудничеству на постоянной основе.
									</p>
									<p class="mt-6 text-base text-gray-700">
										Юридический адрес: Нижегородская область, г. Дзержинск, б-р Мира д. 27а, офис
										302
									</p>
									<p class="mt-6 text-base text-gray-700">Директор: Смолина Анна Адольфовна</p>
									<p class="mt-6 text-base text-gray-700">
										Ведущий специалист: Ходаков Игорь Викторович
									</p>
									<div class="mt-8">
										<div class="flex items-center">
											<h3 class="flex-shrink-0 pr-4 bg-white text-2xl font-semibold text-cyan-600">
												Реквизиты
											</h3>
											<div class="flex-1 border-t-2 border-gray-200" />
										</div>
										<ul
											class="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5"
										>
											<li class="flex items-start lg:col-span-1">
												<div class="flex-shrink-0">
													<!-- Heroicon name: solid/check-circle -->
													<svg
														class="h-5 w-5 text-cyan-600"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
													>
														<path
															fill-rule="evenodd"
															d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
															clip-rule="evenodd"
														/>
													</svg>
												</div>
												<p class="ml-3 text-sm text-gray-700">ИНН 5249133142</p>
											</li>

											<li class="flex items-start lg:col-span-1">
												<div class="flex-shrink-0">
													<!-- Heroicon name: solid/check-circle -->
													<svg
														class="h-5 w-5 text-cyan-600"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
													>
														<path
															fill-rule="evenodd"
															d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
															clip-rule="evenodd"
														/>
													</svg>
												</div>
												<p class="ml-3 text-sm text-gray-700">КПП 524901001</p>
											</li>

											<li class="flex items-start lg:col-span-1">
												<div class="flex-shrink-0">
													<!-- Heroicon name: solid/check-circle -->
													<svg
														class="h-5 w-5 text-cyan-600"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
													>
														<path
															fill-rule="evenodd"
															d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
															clip-rule="evenodd"
														/>
													</svg>
												</div>
												<p class="ml-3 text-sm text-gray-700">ОГРН 1145249001853</p>
											</li>

											<li class="flex items-start lg:col-span-1">
												<div class="flex-shrink-0">
													<!-- Heroicon name: solid/check-circle -->
													<svg
														class="h-5 w-5 text-cyan-600"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
													>
														<path
															fill-rule="evenodd"
															d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
															clip-rule="evenodd"
														/>
													</svg>
												</div>
												<p class="ml-3 text-sm text-gray-700">Регистрация 10.04.2014</p>
											</li>
										</ul>
									</div>
								</div>
								<!--								<div class="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">-->
								<!--									<p class="text-lg leading-6 font-medium text-gray-900"></p>-->
								<!--									<div class="mt-4 flex items-center justify-center text-5xl tracking-tight font-bold text-gray-900">-->
								<!--										&lt;!&ndash;                            <span> ₽ 0</span>&ndash;&gt;-->
								<!--										&lt;!&ndash;                            <span class="ml-3 text-xl font-medium text-gray-700 tracking-normal"> RUB </span>&ndash;&gt;-->
								<!--									</div>-->
								<!--									&lt;!&ndash;                        <p class="mt-4 text-sm">&ndash;&gt;-->
								<!--									&lt;!&ndash;                            <a href="#" class="font-medium text-gray-700 underline"> Learn about our membership policy </a>&ndash;&gt;-->
								<!--									&lt;!&ndash;                        </p>&ndash;&gt;-->
								<!--									<div class="mt-6">-->
								<!--										<div class="rounded-md shadow">-->
								<!--											<a href="#" class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"> Отправить запрос</a>-->
								<!--										</div>-->
								<!--									</div>-->
								<!--									<div class="mt-4 text-sm">-->
								<!--										<a href="#" class="font-medium text-gray-900">-->
								<!--											Ответим на вашу почту в ближайшее время-->
								<!--											<span class="font-normal text-gray-700"> </span>-->
								<!--										</a>-->
								<!--									</div>-->
								<!--								</div>-->
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- CTA Section -->
			<div class="relative bg-main">
				<div class="relative h-56 bg-cyan-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
					<img
						class="h-full w-full object-cover"
						src="https://storage.yandexcloud.net/brand-logo/biohim/foto/team4.png"
						alt="Продажа перекиси водорода"
					/>
					<div
						aria-hidden="true"
						class="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-600 mix-blend-multiply"
					/>
				</div>
				<div
					class="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32"
				>
					<div class="md:ml-auto md:w-1/2 md:pl-10">
						<h2 class="text-lg font-semibold text-gray-300">Поддержка</h2>
						<p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Сопровождение сделки
						</p>
						<p class="mt-3 text-lg text-gray-300">
							Наши специалисты учавствует в процессе сделки от начала первой консультации до факта
							фактической отгрузки перекиси водорода клиенту.
						</p>
						<div class="mt-8">
							<div class="inline-flex rounded-md shadow">
								<a
									href="#1"
									class="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
								>
									Отправить запрос на цену
									<!-- Heroicon name: mini/arrow-top-right-on-square -->
									<svg
										class="-mr-1 ml-3 h-5 w-5 text-gray-400"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
											clip-rule="evenodd"
										/>
										<path
											fill-rule="evenodd"
											d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
											clip-rule="evenodd"
										/>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>

		<footer class="bg-gray-50">
			<div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
				<nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
					<div class="px-5 py-2">
						<a href="#1" class="text-base text-gray-700"> Главная </a>
					</div>
					<div class="px-5 py-2">
						<a href="#2" class="text-base text-gray-700"> Производство </a>
					</div>
					<div class="px-5 py-2">
						<a href="#3" class="text-base text-gray-700"> Информация </a>
					</div>
					<div class="px-5 py-2">
						<a href="#4" class="text-base text-gray-700"> Применение </a>
					</div>
					<div class="px-5 py-2">
						<a href="#5" class="text-base text-gray-700"> О нас </a>
					</div>
				</nav>

				<p class="mt-8 text-center text-base text-gray-400">
					<span>
						&copy; 2015-2022. Компания ООО ТК "ФОРВАРД ЛАЙН"

						<a
							class="rounded-md pl-1 text-xs font-medium text-gray-400 sm:text-base md:text-lg"
							href="tel:+74950808101">+7 (495) 080-81-01</a
						>
					</span>

					<br />Обслуживание сайта 8 (495) 147-55-50
				</p>
			</div>
		</footer>
	</div>
</div>

<div class="flex " />
