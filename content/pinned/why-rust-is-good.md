+++
title = 'Why Rust Is Good'
description = 'A list of reasons why Rust is a good programming language'
date = 2024-02-03T14:20:52-07:00
+++

Features that make rust good. The fact and the simple reason it's good because of that fact.

{{< notice note >}}
This list is not exhaustive, but it's a good start.
{{< /notice >}}

[Here is an excellent talk to get more convincing and some code](https://www.youtube.com/watch?v=DnT-LUQgc7s)

## Does not have null.

You cannot get a null pointer error unless you do something like `unwrap`, but most of the time, there's better tools to handle the situation _built in_.

## No undefined behavior without `unsafe`.

You are _guaranteed to have zero undefined behavior_ if there is zero `unsafe` anywhere in your program (in code _you write_)

## Borrow checker.

Memory safety without GC.

## Type level thread safety.

Data is automatically _not allowed_ to be passed to a different thread unless it's in a suitable guard against it. This also means that splitting a computation across threads can be as easy as `par_iter` vs `iter`. [See the `rayon` crate](https://docs.rs/rayon/latest/rayon/).

## No runtime.

Suitable for systems programming, is quite fast, can be very small

## Zero-cost abstractions.

If you use an abstraction provided, they're guaranteed to be as good as if you wrote them yourself.

This includes features like futures and async.

## Zero Exceptions.

Excellent error handling tools, and all errors are error by value.

## Functional tools.

There are iterators, a generally functional construct, than can really help model problems well. There are also closures that suck less than other lang's

## Offers high level abstractions unlike C.

Lets you do things like attach methods to data.

## Macros

Macros range from simplifying your own code, to powering incredible abstractions like [`clap`](https://docs.rs/clap/latest/clap/)

## Excellent cross platform / cross compilation. This one is fairly obvious.

## Traits over classes and interfaces.

It separates the concerns into more manageable pieces. You can think of traits as abstract classes or interfaces. This also makes rust favor composition over inheritance (inheritance is not possible)

## Standardized build tool.

No more make, no more flags (most of the time), etc.

Cargo is excellent.

## Package repositories akin to npm or ones found in other programming languages.

You can not feel useless really fast

## Built in testing and test runner.

Nice to test stuff easily and efficiently

## Built in doc generation, including doc tests

All code written inside your docs is checked to be correct. The generated docs are also fucking excellent and almost everything you'll ever use is incredibly well documented.

## Built in feature flags that feel good.

`#[cfg(...)]` is very intuitive and quite simple to enable / disable features

## Editor support

Maintained version of plugins / LSP so all your editors work as you'd expect and quite well.

## The type system is quite good.

There isn't higher order type support (FP / haskell stuff), but, it's still quite good and does basically everything you could want

## Everything is immutable by default

You have to put `mut` to mutate it. This is nice because you can be sure it's not changing!

## Sum types

In the form of `enum`, which are _super nice_ to work with in defining different cases.

## Generics exist and are good.

They're also monomorphized so they're fast.

## Pattern matching

It exists in a lot of places, you can have _really clean_ looking and functioning code, using things like `match` `if let` `let ... else` inside function headers, etc. etc.

## Fantastic compiler errors (most of the time).

Even when they suck they tell you what the problem is. when you're learning, they often tell you _how to solve it_ (unless it's async lmao)
