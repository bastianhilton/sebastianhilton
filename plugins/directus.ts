import {
	createDirectus,
	rest,
	readItem,
	readItems,
	createItem,
	deleteItem,
	uploadFiles,
	readSingleton,
	readFieldsByCollection,
	registerUser,
	authentication,
	readMe,
	refresh,
	withToken,
	type AuthenticationStorage
} from '@directus/sdk';
import "dotenv"
import type {
	DirectusSchema
} from '~/types/directus';

export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig()
	class NuxtCookieStorage {
		cookie = useCookie("directus-data");
		get() {
			return this.cookie.value;
		}
		set(data: any) {
			this.cookie.value = data;
		}
	}

	const storage = new NuxtCookieStorage() as AuthenticationStorage;

	const directus = createDirectus < DirectusSchema > (`${config.public.directus.url}`)
		.with(authentication("cookie", {
			credentials: "include",
			storage
		}))
		.with(rest({
			credentials: "include"
		}));

		const isAuthenticated = async () => {
		try {
			const me = await directus.request(readMe());
			return me;
		} catch (error) {
			console.error(error)
			return false;
		}
	};

	const refreshToken = async () => {
		return directus.request(
			refresh('cookie')
		);
	};

	const logout = async () => {
		await directus.logout()
		navigateTo('/')
	}

	return {
		provide: {
			directus,
			readItem,
			readItems,
			createItem,
			deleteItem,
			uploadFiles,
			readSingleton,
			readFieldsByCollection,
			registerUser, isAuthenticated, refreshToken, logout, withToken
		},
	};
});