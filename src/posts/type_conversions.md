---
slug: "/XXX"
title: "XXX"
description: ""
tags: ["Rust"]
---

# XXX

Rust의 형변환에 대해...

## Automatic referencing and dereferencing

_자동참조_(_auto-referencing_)와 _자동참조읽기_(_auto-dereferencing_)는
특정타입을 참조하거나 참조를 읽어 원하는 형태로 유연하게 바꿔주는 역할을 한다.
사용예의 하나로 메소드를 호출을 들 수 있는데, 메소드를 호출할 때 리시버의 타입을 맞춰주어 보다 편리하게 기술할 수 있도록 돕는다.

## Deref coercion

`Deref` 특징을 구현한 타입에만 적용되며 함수나 메소드 호출시에
참조타입의 인자에 대해 인수의 유연한 타입변환을 제공하여 사용의 편리함을 더 한다.
