import { create } from "domain";
import { Promise } from 'es6-promise';

export interface IPingIxoNode {
    status: string
}

export interface IDictionary<T> {
    [key: string]: T
}

export interface ISovrinDidModel {
    did: string
    verifyKey: string
    secret: ISovrinDidSecretModel

}

export interface ISovrinDidSecretModel {
    seed: string
    signKey: string
}

export interface IPingResult {
    jsonrpc: string,
    id: number,
    result: string
}

export interface ICredentialProviderResult {
    provider: any,
    credentialProviderInstance: any,
}

export class Signature {
    type: string;
    created: Date;
    creator: string;
    signature: string;
    publicKey: string;

    constructor(type: string, created: Date, did: string, publicKey: string, signature: string) {
        this.type = type;
        this.created = created;
        this.creator = did;
        this.publicKey = publicKey;
        this.signature = signature;
    }
}

export interface IxoCredentialProvider {
    sign(dataToSign: any, templateName?: string): Promise<Signature>,
    getDid(): string

}