
import type { Protocol } from '../types/protocol';


const protocolModules = import.meta.glob<{ default: Protocol }>('../data/protocols/*.json', { eager: true });


export function getAllProtocols(): Protocol[] {
    return Object.values(protocolModules).map(module => module.default);
}


export function getProtocolByScheme(scheme: string): Protocol | undefined {
    return getAllProtocols().find(p => p.scheme.toLowerCase() === scheme.toLowerCase());
}


export function getProtocolsByPlatform(platform: Protocol['platforms'][number]): Protocol[] {
    return getAllProtocols().filter(p => p.platforms.includes(platform));
}


export function searchProtocols(query: string): Protocol[] {
    const lowerQuery = query.toLowerCase();
    return getAllProtocols().filter(p =>
        p.name.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery) ||
        p.scheme.toLowerCase().includes(lowerQuery)
    );
}
