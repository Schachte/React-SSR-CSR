# React-SSR-CSR

Demo test implementing server-side rendering with React, Redux, GraphQL and Apollo.

Optimizations are shown through:
- Cache performance (default TTL on cache entries with auto updates through GraphQL mutations)
- Serverside rendering (TTIP (time to initial paint)) loads components on the serverside to rid the client from executing requests and downloading all assets.
