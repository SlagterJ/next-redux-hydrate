# Next Redux Hydrate

A simple, lightweight library that dispatches a HYDRATE action when the app is
on the client.

## Motivation

I've always written my global states in Redux, I often use SocketIO for when I
need a websocket connection to the server. Thus, when I switched to Next.JS
there would be two connections, one for the SSR and one for the actual client.
<br/> I needed a way to make sure the SocketIO connection only connects when the
app is on the client. Having to write separate logic for every state and reducer
is inefficient. Next-redux-wrapper provided a solution but covers too many
usecases. I wanted something that would just be a hook that does its thing and
then doesn't bother you.

---

## Usage

### Installation

NPM

```sh
npm install next-redux-hydrate
```

Yarn

```sh
yarn add next-redux-hydrate
```

### Getting started

```TS
// _app.tsx (or .js)

// ...
import { useReduxHydrate } from "next-redux-hydrate";
// ...

// ...
const MyApp = ({ Component, pageProps }: AppProps) => {
  useReduxHydrate({ store });

  return (
  // ...
```

This dispatches HYDRATE when the app is on the client.

### Using in reducers

```TS
// counterSlice.ts (or .js)

// ...
import { HYDRATE } from "next-redux-hydrate";

const initialState = {
  value: 1,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // ...
  },
  // ...
  extraReducers: {
    // ...
    [HYDRATE]: (state) => {
      // Add 1 to the counter when the app is on the client
      state.value = state.value + 1;
    },
    // ...
  },
});
// ...
```

That's it!
