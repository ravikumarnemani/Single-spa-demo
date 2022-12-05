import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class SessionStorageService {
    constructor() { }

    public writeToSessionStorage(key: string, value: any) {
        if (value) {
            value = JSON.stringify(value);
            sessionStorage.setItem(key, value);
        }
    }
    public readFromSessionStorage<T>(key: string): T {
        const value = sessionStorage.getItem(key);

        if (value && value !== 'undefined' && value !== 'null') {
            const instance = <T>JSON.parse(value);
            return instance;
        }
        return <T>JSON.parse('{}');
    }
    public removeFromSessionStorage(key: string) {
        if (key) {
            sessionStorage.removeItem(key);
        }
    }
}
