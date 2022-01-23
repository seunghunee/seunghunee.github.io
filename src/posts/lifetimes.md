---
slug: "/"
title: ""
description: ""
tags: ["Rust", "Ownership", "Lifetime"]
---

`&mut T`가 `T`에 대해 invariant인 이유는
즉, 예를들어 `&mut Box<&'short>`에 `&mut Box<&'long>`를 대입하지 못하는 이유는
마음대로 수정할 수 있으니 `'long`인 것을 대입 받았다가 `'middle`인 것으로 바꿔치기할 수 있으니까?
