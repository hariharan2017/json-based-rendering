import { takeLatest } from "redux-saga/effects";
import { FETCH_API_DATA } from "./types";
import axios from "axios";

interface ResponseObject {
  data: Object[]
}

export function* getData() {
  try {
    const result: ResponseObject = yield axios.get("https://swapi.dev/api/people");
    console.log(result.data);
  } catch (err) {
    console.log(err);
  }
}

export default function* sagas() {
  yield takeLatest(FETCH_API_DATA, getData);
}