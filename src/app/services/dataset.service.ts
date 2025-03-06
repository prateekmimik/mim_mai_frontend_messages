import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface DatasetResponse {
  X: string[]
  Y: number[][]
  categoryNames: string[]
}

type Genre = "news" | "direct" | "social"

@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  baseUrl = 'http://localhost:8080'
  
  headers = new HttpHeaders({
      'Content-Type': 'application/json'
  })

  constructor(private httpClient: HttpClient) {}

  getDataset(genre: Genre = 'news') {
    const url = `${this.baseUrl}/dataset?genre=${genre}`
    return this.httpClient.get(url)
  }

  tokenizeSentence(sentence: string) {
    const url = `${this.baseUrl}/tokenize`
    const headers = this.headers
    return this.httpClient.post(url,{sentence:sentence},{headers})
  }

  tokensMatrix(documents: string[][]) {
    const url = `${this.baseUrl}/tokensMatrix`
    const headers = this.headers
    return this.httpClient.post(url,{documents:documents},{headers})
  }
}
