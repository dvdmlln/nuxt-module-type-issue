import { type FetchOptions } from 'ofetch'
import { type NitroFetchRequest } from 'nitropack'

export function useUtil() {
    async function get<T = unknown>(
        request: NitroFetchRequest,
        options?: FetchOptions,
    ) {
        return await $fetch<T>(request, {
            ...options,
            method: 'GET',
        })
    }

    return { get }
}
