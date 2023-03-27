# Async / Defer Timing Test

A quick demo to show that the `async` attribute can cause unreliable timing of
scripts.

Experiment with the following attribute assignments:

- `async`
- `defer`
- `async defer`
- `defer async`
- No attribute

You should find that `async` scripts can appear at any time, or not at all.
This is because the `ol` element has not always been created by the time the
script is trying to call upon it.   
Deferred scripts will load after the DOM, as will scripts placed at the bottom
of the `body` element. If a script at the bottom of the `body` has no
attribute, it will load before any deferred scripts. It is more common to see
the script placed in the `head` with `defer` in modern development.  
Combining `defer` and `async` ensures the script loads after the DOM, but will
not maintain the order in which they load. This may be preferred in some
situations. The order of the attributes makes no difference to the timing,
`async defer` is the same as `defer async`.
