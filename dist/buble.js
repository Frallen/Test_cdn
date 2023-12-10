function mn(e, t) {
  const n = /* @__PURE__ */ Object.create(null), s = e.split(",");
  for (let i = 0; i < s.length; i++)
    n[s[i]] = !0;
  return t ? (i) => !!n[i.toLowerCase()] : (i) => !!n[i];
}
const z = {}, Xe = [], ce = () => {
}, gi = () => !1, Ct = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), hn = (e) => e.startsWith("onUpdate:"), B = Object.assign, gn = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, vi = Object.prototype.hasOwnProperty, M = (e, t) => vi.call(e, t), x = Array.isArray, Je = (e) => kt(e) === "[object Map]", Es = (e) => kt(e) === "[object Set]", A = (e) => typeof e == "function", X = (e) => typeof e == "string", Ze = (e) => typeof e == "symbol", F = (e) => e !== null && typeof e == "object", Ss = (e) => (F(e) || A(e)) && A(e.then) && A(e.catch), Ds = Object.prototype.toString, kt = (e) => Ds.call(e), bi = (e) => kt(e).slice(8, -1), Is = (e) => kt(e) === "[object Object]", vn = (e) => X(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Tt = /* @__PURE__ */ mn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Lt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ei = /-(\w)/g, Ee = Lt((e) => e.replace(Ei, (t, n) => n ? n.toUpperCase() : "")), Si = /\B([A-Z])/g, re = Lt(
  (e) => e.replace(Si, "-$1").toLowerCase()
), Os = Lt((e) => e.charAt(0).toUpperCase() + e.slice(1)), Vt = Lt((e) => e ? `on${Os(e)}` : ""), je = (e, t) => !Object.is(e, t), Wt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, At = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Di = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Hn = (e) => {
  const t = X(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Kn;
const nn = () => Kn || (Kn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function bn(e) {
  if (x(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = X(s) ? xi(s) : bn(s);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (X(e) || F(e))
    return e;
}
const Ii = /;(?![^(]*\))/g, Oi = /:([^]+)/, Ti = /\/\*[^]*?\*\//g;
function xi(e) {
  const t = {};
  return e.replace(Ti, "").split(Ii).forEach((n) => {
    if (n) {
      const s = n.split(Oi);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function En(e) {
  let t = "";
  if (X(e))
    t = e;
  else if (x(e))
    for (let n = 0; n < e.length; n++) {
      const s = En(e[n]);
      s && (t += s + " ");
    }
  else if (F(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Ni = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", yi = /* @__PURE__ */ mn(Ni);
function Ts(e) {
  return !!e || e === "";
}
const Ai = (e) => X(e) ? e : e == null ? "" : x(e) || F(e) && (e.toString === Ds || !A(e.toString)) ? JSON.stringify(e, xs, 2) : String(e), xs = (e, t) => t && t.__v_isRef ? xs(e, t.value) : Je(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], r) => (n[Yt(s, r) + " =>"] = i, n),
    {}
  )
} : Es(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Yt(n))
} : Ze(t) ? Yt(t) : F(t) && !x(t) && !Is(t) ? String(t) : t, Yt = (e, t = "") => {
  var n;
  return Ze(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
let ie;
class Ri {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = ie, !t && ie && (this.index = (ie.scopes || (ie.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = ie;
      try {
        return ie = this, t();
      } finally {
        ie = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ie = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    ie = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Pi(e, t = ie) {
  t && t.active && t.effects.push(e);
}
function wi() {
  return ie;
}
const Sn = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Ns = (e) => (e.w & Ae) > 0, ys = (e) => (e.n & Ae) > 0, Mi = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Ae;
}, Ci = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let s = 0; s < t.length; s++) {
      const i = t[s];
      Ns(i) && !ys(i) ? i.delete(e) : t[n++] = i, i.w &= ~Ae, i.n &= ~Ae;
    }
    t.length = n;
  }
}, sn = /* @__PURE__ */ new WeakMap();
let rt = 0, Ae = 1;
const rn = 30;
let oe;
const Ue = Symbol(""), on = Symbol("");
class Dn {
  constructor(t, n = null, s) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Pi(this, s);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = oe, n = xe;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = oe, oe = this, xe = !0, Ae = 1 << ++rt, rt <= rn ? Mi(this) : Bn(this), this.fn();
    } finally {
      rt <= rn && Ci(this), Ae = 1 << --rt, oe = this.parent, xe = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    oe === this ? this.deferStop = !0 : this.active && (Bn(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Bn(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let xe = !0;
const As = [];
function Qe() {
  As.push(xe), xe = !1;
}
function et() {
  const e = As.pop();
  xe = e === void 0 ? !0 : e;
}
function te(e, t, n) {
  if (xe && oe) {
    let s = sn.get(e);
    s || sn.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || s.set(n, i = Sn()), Rs(i);
  }
}
function Rs(e, t) {
  let n = !1;
  rt <= rn ? ys(e) || (e.n |= Ae, n = !Ns(e)) : n = !e.has(oe), n && (e.add(oe), oe.deps.push(e));
}
function Se(e, t, n, s, i, r) {
  const l = sn.get(e);
  if (!l)
    return;
  let a = [];
  if (t === "clear")
    a = [...l.values()];
  else if (n === "length" && x(e)) {
    const u = Number(s);
    l.forEach((p, h) => {
      (h === "length" || !Ze(h) && h >= u) && a.push(p);
    });
  } else
    switch (n !== void 0 && a.push(l.get(n)), t) {
      case "add":
        x(e) ? vn(n) && a.push(l.get("length")) : (a.push(l.get(Ue)), Je(e) && a.push(l.get(on)));
        break;
      case "delete":
        x(e) || (a.push(l.get(Ue)), Je(e) && a.push(l.get(on)));
        break;
      case "set":
        Je(e) && a.push(l.get(Ue));
        break;
    }
  if (a.length === 1)
    a[0] && ln(a[0]);
  else {
    const u = [];
    for (const p of a)
      p && u.push(...p);
    ln(Sn(u));
  }
}
function ln(e, t) {
  const n = x(e) ? e : [...e];
  for (const s of n)
    s.computed && Xn(s);
  for (const s of n)
    s.computed || Xn(s);
}
function Xn(e, t) {
  (e !== oe || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const ki = /* @__PURE__ */ mn("__proto__,__v_isRef,__isVue"), Ps = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ze)
), Jn = /* @__PURE__ */ Li();
function Li() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = C(this);
      for (let r = 0, l = this.length; r < l; r++)
        te(s, "get", r + "");
      const i = s[t](...n);
      return i === -1 || i === !1 ? s[t](...n.map(C)) : i;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Qe();
      const s = C(this)[t].apply(this, n);
      return et(), s;
    };
  }), e;
}
function Ui(e) {
  const t = C(this);
  return te(t, "has", e), t.hasOwnProperty(e);
}
class ws {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._shallow = n;
  }
  get(t, n, s) {
    const i = this._isReadonly, r = this._shallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return s === (i ? r ? $i : Ls : r ? ks : Cs).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const l = x(t);
    if (!i) {
      if (l && M(Jn, n))
        return Reflect.get(Jn, n, s);
      if (n === "hasOwnProperty")
        return Ui;
    }
    const a = Reflect.get(t, n, s);
    return (Ze(n) ? Ps.has(n) : ki(n)) || (i || te(t, "get", n), r) ? a : q(a) ? l && vn(n) ? a : a.value : F(a) ? i ? Us(a) : Tn(a) : a;
  }
}
class Ms extends ws {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let r = t[n];
    if (Ye(r) && q(r) && !q(s))
      return !1;
    if (!this._shallow && (!Rt(s) && !Ye(s) && (r = C(r), s = C(s)), !x(t) && q(r) && !q(s)))
      return r.value = s, !0;
    const l = x(t) && vn(n) ? Number(n) < t.length : M(t, n), a = Reflect.set(t, n, s, i);
    return t === C(i) && (l ? je(s, r) && Se(t, "set", n, s) : Se(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = M(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && Se(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Ze(n) || !Ps.has(n)) && te(t, "has", n), s;
  }
  ownKeys(t) {
    return te(
      t,
      "iterate",
      x(t) ? "length" : Ue
    ), Reflect.ownKeys(t);
  }
}
class zi extends ws {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const ji = /* @__PURE__ */ new Ms(), Fi = /* @__PURE__ */ new zi(), Gi = /* @__PURE__ */ new Ms(
  !0
), In = (e) => e, Ut = (e) => Reflect.getPrototypeOf(e);
function bt(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const i = C(e), r = C(t);
  n || (je(t, r) && te(i, "get", t), te(i, "get", r));
  const { has: l } = Ut(i), a = s ? In : n ? Nn : at;
  if (l.call(i, t))
    return a(e.get(t));
  if (l.call(i, r))
    return a(e.get(r));
  e !== i && e.get(t);
}
function Et(e, t = !1) {
  const n = this.__v_raw, s = C(n), i = C(e);
  return t || (je(e, i) && te(s, "has", e), te(s, "has", i)), e === i ? n.has(e) : n.has(e) || n.has(i);
}
function St(e, t = !1) {
  return e = e.__v_raw, !t && te(C(e), "iterate", Ue), Reflect.get(e, "size", e);
}
function Vn(e) {
  e = C(e);
  const t = C(this);
  return Ut(t).has.call(t, e) || (t.add(e), Se(t, "add", e, e)), this;
}
function Wn(e, t) {
  t = C(t);
  const n = C(this), { has: s, get: i } = Ut(n);
  let r = s.call(n, e);
  r || (e = C(e), r = s.call(n, e));
  const l = i.call(n, e);
  return n.set(e, t), r ? je(t, l) && Se(n, "set", e, t) : Se(n, "add", e, t), this;
}
function Yn(e) {
  const t = C(this), { has: n, get: s } = Ut(t);
  let i = n.call(t, e);
  i || (e = C(e), i = n.call(t, e)), s && s.call(t, e);
  const r = t.delete(e);
  return i && Se(t, "delete", e, void 0), r;
}
function $n() {
  const e = C(this), t = e.size !== 0, n = e.clear();
  return t && Se(e, "clear", void 0, void 0), n;
}
function Dt(e, t) {
  return function(s, i) {
    const r = this, l = r.__v_raw, a = C(l), u = t ? In : e ? Nn : at;
    return !e && te(a, "iterate", Ue), l.forEach((p, h) => s.call(i, u(p), u(h), r));
  };
}
function It(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, r = C(i), l = Je(r), a = e === "entries" || e === Symbol.iterator && l, u = e === "keys" && l, p = i[e](...s), h = n ? In : t ? Nn : at;
    return !t && te(
      r,
      "iterate",
      u ? on : Ue
    ), {
      // iterator protocol
      next() {
        const { value: S, done: I } = p.next();
        return I ? { value: S, done: I } : {
          value: a ? [h(S[0]), h(S[1])] : h(S),
          done: I
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Oe(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Hi() {
  const e = {
    get(r) {
      return bt(this, r);
    },
    get size() {
      return St(this);
    },
    has: Et,
    add: Vn,
    set: Wn,
    delete: Yn,
    clear: $n,
    forEach: Dt(!1, !1)
  }, t = {
    get(r) {
      return bt(this, r, !1, !0);
    },
    get size() {
      return St(this);
    },
    has: Et,
    add: Vn,
    set: Wn,
    delete: Yn,
    clear: $n,
    forEach: Dt(!1, !0)
  }, n = {
    get(r) {
      return bt(this, r, !0);
    },
    get size() {
      return St(this, !0);
    },
    has(r) {
      return Et.call(this, r, !0);
    },
    add: Oe("add"),
    set: Oe("set"),
    delete: Oe("delete"),
    clear: Oe("clear"),
    forEach: Dt(!0, !1)
  }, s = {
    get(r) {
      return bt(this, r, !0, !0);
    },
    get size() {
      return St(this, !0);
    },
    has(r) {
      return Et.call(this, r, !0);
    },
    add: Oe("add"),
    set: Oe("set"),
    delete: Oe("delete"),
    clear: Oe("clear"),
    forEach: Dt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    e[r] = It(
      r,
      !1,
      !1
    ), n[r] = It(
      r,
      !0,
      !1
    ), t[r] = It(
      r,
      !1,
      !0
    ), s[r] = It(
      r,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    s
  ];
}
const [
  Ki,
  Bi,
  Xi,
  Ji
] = /* @__PURE__ */ Hi();
function On(e, t) {
  const n = t ? e ? Ji : Xi : e ? Bi : Ki;
  return (s, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(
    M(n, i) && i in s ? n : s,
    i,
    r
  );
}
const Vi = {
  get: /* @__PURE__ */ On(!1, !1)
}, Wi = {
  get: /* @__PURE__ */ On(!1, !0)
}, Yi = {
  get: /* @__PURE__ */ On(!0, !1)
}, Cs = /* @__PURE__ */ new WeakMap(), ks = /* @__PURE__ */ new WeakMap(), Ls = /* @__PURE__ */ new WeakMap(), $i = /* @__PURE__ */ new WeakMap();
function qi(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Zi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : qi(bi(e));
}
function Tn(e) {
  return Ye(e) ? e : xn(
    e,
    !1,
    ji,
    Vi,
    Cs
  );
}
function Qi(e) {
  return xn(
    e,
    !1,
    Gi,
    Wi,
    ks
  );
}
function Us(e) {
  return xn(
    e,
    !0,
    Fi,
    Yi,
    Ls
  );
}
function xn(e, t, n, s, i) {
  if (!F(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const l = Zi(e);
  if (l === 0)
    return e;
  const a = new Proxy(
    e,
    l === 2 ? s : n
  );
  return i.set(e, a), a;
}
function Ve(e) {
  return Ye(e) ? Ve(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ye(e) {
  return !!(e && e.__v_isReadonly);
}
function Rt(e) {
  return !!(e && e.__v_isShallow);
}
function zs(e) {
  return Ve(e) || Ye(e);
}
function C(e) {
  const t = e && e.__v_raw;
  return t ? C(t) : e;
}
function js(e) {
  return At(e, "__v_skip", !0), e;
}
const at = (e) => F(e) ? Tn(e) : e, Nn = (e) => F(e) ? Us(e) : e;
function Fs(e) {
  xe && oe && (e = C(e), Rs(e.dep || (e.dep = Sn())));
}
function Gs(e, t) {
  e = C(e);
  const n = e.dep;
  n && ln(n);
}
function q(e) {
  return !!(e && e.__v_isRef === !0);
}
function er(e) {
  return tr(e, !1);
}
function tr(e, t) {
  return q(e) ? e : new nr(e, t);
}
class nr {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : C(t), this._value = n ? t : at(t);
  }
  get value() {
    return Fs(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Rt(t) || Ye(t);
    t = n ? t : C(t), je(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : at(t), Gs(this));
  }
}
function Hs(e) {
  return q(e) ? e.value : e;
}
const sr = {
  get: (e, t, n) => Hs(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return q(i) && !q(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Ks(e) {
  return Ve(e) ? e : new Proxy(e, sr);
}
class ir {
  constructor(t, n, s, i) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new Dn(t, () => {
      this._dirty || (this._dirty = !0, Gs(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = s;
  }
  get value() {
    const t = C(this);
    return Fs(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
function rr(e, t, n = !1) {
  let s, i;
  const r = A(e);
  return r ? (s = e, i = ce) : (s = e.get, i = e.set), new ir(s, i, r || !i, n);
}
function Ne(e, t, n, s) {
  let i;
  try {
    i = s ? e(...s) : e();
  } catch (r) {
    zt(r, t, n);
  }
  return i;
}
function ae(e, t, n, s) {
  if (A(e)) {
    const r = Ne(e, t, n, s);
    return r && Ss(r) && r.catch((l) => {
      zt(l, t, n);
    }), r;
  }
  const i = [];
  for (let r = 0; r < e.length; r++)
    i.push(ae(e[r], t, n, s));
  return i;
}
function zt(e, t, n, s = !0) {
  const i = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const l = t.proxy, a = n;
    for (; r; ) {
      const p = r.ec;
      if (p) {
        for (let h = 0; h < p.length; h++)
          if (p[h](e, l, a) === !1)
            return;
      }
      r = r.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Ne(
        u,
        null,
        10,
        [e, l, a]
      );
      return;
    }
  }
  or(e, n, i, s);
}
function or(e, t, n, s = !0) {
  console.error(e);
}
let ut = !1, cn = !1;
const Y = [];
let me = 0;
const We = [];
let ve = null, ke = 0;
const Bs = /* @__PURE__ */ Promise.resolve();
let yn = null;
function Xs(e) {
  const t = yn || Bs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function lr(e) {
  let t = me + 1, n = Y.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = Y[s], r = pt(i);
    r < e || r === e && i.pre ? t = s + 1 : n = s;
  }
  return t;
}
function An(e) {
  (!Y.length || !Y.includes(
    e,
    ut && e.allowRecurse ? me + 1 : me
  )) && (e.id == null ? Y.push(e) : Y.splice(lr(e.id), 0, e), Js());
}
function Js() {
  !ut && !cn && (cn = !0, yn = Bs.then(Ws));
}
function cr(e) {
  const t = Y.indexOf(e);
  t > me && Y.splice(t, 1);
}
function ar(e) {
  x(e) ? We.push(...e) : (!ve || !ve.includes(
    e,
    e.allowRecurse ? ke + 1 : ke
  )) && We.push(e), Js();
}
function qn(e, t, n = ut ? me + 1 : 0) {
  for (; n < Y.length; n++) {
    const s = Y[n];
    if (s && s.pre) {
      if (e && s.id !== e.uid)
        continue;
      Y.splice(n, 1), n--, s();
    }
  }
}
function Vs(e) {
  if (We.length) {
    const t = [...new Set(We)];
    if (We.length = 0, ve) {
      ve.push(...t);
      return;
    }
    for (ve = t, ve.sort((n, s) => pt(n) - pt(s)), ke = 0; ke < ve.length; ke++)
      ve[ke]();
    ve = null, ke = 0;
  }
}
const pt = (e) => e.id == null ? 1 / 0 : e.id, ur = (e, t) => {
  const n = pt(e) - pt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Ws(e) {
  cn = !1, ut = !0, Y.sort(ur);
  const t = ce;
  try {
    for (me = 0; me < Y.length; me++) {
      const n = Y[me];
      n && n.active !== !1 && Ne(n, null, 14);
    }
  } finally {
    me = 0, Y.length = 0, Vs(), ut = !1, yn = null, (Y.length || We.length) && Ws();
  }
}
function pr(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || z;
  let i = n;
  const r = t.startsWith("update:"), l = r && t.slice(7);
  if (l && l in s) {
    const h = `${l === "modelValue" ? "model" : l}Modifiers`, { number: S, trim: I } = s[h] || z;
    I && (i = n.map((y) => X(y) ? y.trim() : y)), S && (i = n.map(Di));
  }
  let a, u = s[a = Vt(t)] || // also try camelCase event handler (#2249)
  s[a = Vt(Ee(t))];
  !u && r && (u = s[a = Vt(re(t))]), u && ae(
    u,
    e,
    6,
    i
  );
  const p = s[a + "Once"];
  if (p) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, ae(
      p,
      e,
      6,
      i
    );
  }
}
function Ys(e, t, n = !1) {
  const s = t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let l = {}, a = !1;
  if (!A(e)) {
    const u = (p) => {
      const h = Ys(p, t, !0);
      h && (a = !0, B(l, h));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !a ? (F(e) && s.set(e, null), null) : (x(r) ? r.forEach((u) => l[u] = null) : B(l, r), F(e) && s.set(e, l), l);
}
function jt(e, t) {
  return !e || !Ct(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), M(e, t[0].toLowerCase() + t.slice(1)) || M(e, re(t)) || M(e, t));
}
let he = null, $s = null;
function Pt(e) {
  const t = he;
  return he = e, $s = e && e.type.__scopeId || null, t;
}
function dr(e, t = he, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && ls(-1);
    const r = Pt(t);
    let l;
    try {
      l = e(...i);
    } finally {
      Pt(r), s._d && ls(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function $t(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: i,
    props: r,
    propsOptions: [l],
    slots: a,
    attrs: u,
    emit: p,
    render: h,
    renderCache: S,
    data: I,
    setupState: y,
    ctx: G,
    inheritAttrs: w
  } = e;
  let K, V;
  const J = Pt(e);
  try {
    if (n.shapeFlag & 4) {
      const R = i || s, ue = R;
      K = _e(
        h.call(
          ue,
          R,
          S,
          r,
          y,
          I,
          G
        )
      ), V = u;
    } else {
      const R = t;
      K = _e(
        R.length > 1 ? R(
          r,
          { attrs: u, slots: a, emit: p }
        ) : R(
          r,
          null
          /* we know it doesn't need it */
        )
      ), V = t.props ? u : fr(u);
    }
  } catch (R) {
    ct.length = 0, zt(R, e, 1), K = ye(dt);
  }
  let W = K;
  if (V && w !== !1) {
    const R = Object.keys(V), { shapeFlag: ue } = W;
    R.length && ue & 7 && (l && R.some(hn) && (V = _r(
      V,
      l
    )), W = $e(W, V));
  }
  return n.dirs && (W = $e(W), W.dirs = W.dirs ? W.dirs.concat(n.dirs) : n.dirs), n.transition && (W.transition = n.transition), K = W, Pt(J), K;
}
const fr = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ct(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, _r = (e, t) => {
  const n = {};
  for (const s in e)
    (!hn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function mr(e, t, n) {
  const { props: s, children: i, component: r } = e, { props: l, children: a, patchFlag: u } = t, p = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return s ? Zn(s, l, p) : !!l;
    if (u & 8) {
      const h = t.dynamicProps;
      for (let S = 0; S < h.length; S++) {
        const I = h[S];
        if (l[I] !== s[I] && !jt(p, I))
          return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable) ? !0 : s === l ? !1 : s ? l ? Zn(s, l, p) : !0 : !!l;
  return !1;
}
function Zn(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (t[r] !== e[r] && !jt(n, r))
      return !0;
  }
  return !1;
}
function hr({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const gr = Symbol.for("v-ndc"), vr = (e) => e.__isSuspense;
function br(e, t) {
  t && t.pendingBranch ? x(e) ? t.effects.push(...e) : t.effects.push(e) : ar(e);
}
const Ot = {};
function qt(e, t, n) {
  return qs(e, t, n);
}
function qs(e, t, { immediate: n, deep: s, flush: i, onTrack: r, onTrigger: l } = z) {
  var a;
  const u = wi() === ((a = $) == null ? void 0 : a.scope) ? $ : null;
  let p, h = !1, S = !1;
  if (q(e) ? (p = () => e.value, h = Rt(e)) : Ve(e) ? (p = () => e, s = !0) : x(e) ? (S = !0, h = e.some((R) => Ve(R) || Rt(R)), p = () => e.map((R) => {
    if (q(R))
      return R.value;
    if (Ve(R))
      return Be(R);
    if (A(R))
      return Ne(R, u, 2);
  })) : A(e) ? t ? p = () => Ne(e, u, 2) : p = () => {
    if (!(u && u.isUnmounted))
      return I && I(), ae(
        e,
        u,
        3,
        [y]
      );
  } : p = ce, t && s) {
    const R = p;
    p = () => Be(R());
  }
  let I, y = (R) => {
    I = J.onStop = () => {
      Ne(R, u, 4), I = J.onStop = void 0;
    };
  }, G;
  if (_t)
    if (y = ce, t ? n && ae(t, u, 3, [
      p(),
      S ? [] : void 0,
      y
    ]) : p(), i === "sync") {
      const R = vo();
      G = R.__watcherHandles || (R.__watcherHandles = []);
    } else
      return ce;
  let w = S ? new Array(e.length).fill(Ot) : Ot;
  const K = () => {
    if (J.active)
      if (t) {
        const R = J.run();
        (s || h || (S ? R.some((ue, Fe) => je(ue, w[Fe])) : je(R, w))) && (I && I(), ae(t, u, 3, [
          R,
          // pass undefined as the old value when it's changed for the first time
          w === Ot ? void 0 : S && w[0] === Ot ? [] : w,
          y
        ]), w = R);
      } else
        J.run();
  };
  K.allowRecurse = !!t;
  let V;
  i === "sync" ? V = K : i === "post" ? V = () => ee(K, u && u.suspense) : (K.pre = !0, u && (K.id = u.uid), V = () => An(K));
  const J = new Dn(p, V);
  t ? n ? K() : w = J.run() : i === "post" ? ee(
    J.run.bind(J),
    u && u.suspense
  ) : J.run();
  const W = () => {
    J.stop(), u && u.scope && gn(u.scope.effects, J);
  };
  return G && G.push(W), W;
}
function Er(e, t, n) {
  const s = this.proxy, i = X(e) ? e.includes(".") ? Zs(s, e) : () => s[e] : e.bind(s, s);
  let r;
  A(t) ? r = t : (r = t.handler, n = t);
  const l = $;
  qe(this);
  const a = qs(i, r.bind(s), n);
  return l ? qe(l) : ze(), a;
}
function Zs(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let i = 0; i < n.length && s; i++)
      s = s[n[i]];
    return s;
  };
}
function Be(e, t) {
  if (!F(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), q(e))
    Be(e.value, t);
  else if (x(e))
    for (let n = 0; n < e.length; n++)
      Be(e[n], t);
  else if (Es(e) || Je(e))
    e.forEach((n) => {
      Be(n, t);
    });
  else if (Is(e))
    for (const n in e)
      Be(e[n], t);
  return e;
}
function Me(e, t, n, s) {
  const i = e.dirs, r = t && t.dirs;
  for (let l = 0; l < i.length; l++) {
    const a = i[l];
    r && (a.oldValue = r[l].value);
    let u = a.dir[s];
    u && (Qe(), ae(u, n, 8, [
      e.el,
      a,
      e,
      t
    ]), et());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Qs(e, t) {
  return A(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => B({ name: e.name }, t, { setup: e }))()
  ) : e;
}
const xt = (e) => !!e.type.__asyncLoader, ei = (e) => e.type.__isKeepAlive;
function Sr(e, t) {
  ti(e, "a", t);
}
function Dr(e, t) {
  ti(e, "da", t);
}
function ti(e, t, n = $) {
  const s = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Ft(t, s, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      ei(i.parent.vnode) && Ir(s, t, n, i), i = i.parent;
  }
}
function Ir(e, t, n, s) {
  const i = Ft(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  ni(() => {
    gn(s[t], i);
  }, n);
}
function Ft(e, t, n = $, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...l) => {
      if (n.isUnmounted)
        return;
      Qe(), qe(n);
      const a = ae(t, n, e, l);
      return ze(), et(), a;
    });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
const De = (e) => (t, n = $) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!_t || e === "sp") && Ft(e, (...s) => t(...s), n)
), Or = De("bm"), Tr = De("m"), xr = De("bu"), Nr = De("u"), yr = De("bum"), ni = De("um"), Ar = De("sp"), Rr = De(
  "rtg"
), Pr = De(
  "rtc"
);
function wr(e, t = $) {
  Ft("ec", e, t);
}
const an = (e) => e ? fi(e) ? Cn(e) || e.proxy : an(e.parent) : null, lt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ B(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => an(e.parent),
    $root: (e) => an(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Rn(e),
    $forceUpdate: (e) => e.f || (e.f = () => An(e.update)),
    $nextTick: (e) => e.n || (e.n = Xs.bind(e.proxy)),
    $watch: (e) => Er.bind(e)
  })
), Zt = (e, t) => e !== z && !e.__isScriptSetup && M(e, t), Mr = {
  get({ _: e }, t) {
    const { ctx: n, setupState: s, data: i, props: r, accessCache: l, type: a, appContext: u } = e;
    let p;
    if (t[0] !== "$") {
      const y = l[t];
      if (y !== void 0)
        switch (y) {
          case 1:
            return s[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (Zt(s, t))
          return l[t] = 1, s[t];
        if (i !== z && M(i, t))
          return l[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (p = e.propsOptions[0]) && M(p, t)
        )
          return l[t] = 3, r[t];
        if (n !== z && M(n, t))
          return l[t] = 4, n[t];
        un && (l[t] = 0);
      }
    }
    const h = lt[t];
    let S, I;
    if (h)
      return t === "$attrs" && te(e, "get", t), h(e);
    if (
      // css module (injected by vue-loader)
      (S = a.__cssModules) && (S = S[t])
    )
      return S;
    if (n !== z && M(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      I = u.config.globalProperties, M(I, t)
    )
      return I[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: r } = e;
    return Zt(i, t) ? (i[t] = n, !0) : s !== z && M(s, t) ? (s[t] = n, !0) : M(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, propsOptions: r }
  }, l) {
    let a;
    return !!n[l] || e !== z && M(e, l) || Zt(t, l) || (a = r[0]) && M(a, l) || M(s, l) || M(lt, l) || M(i.config.globalProperties, l);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : M(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Qn(e) {
  return x(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let un = !0;
function Cr(e) {
  const t = Rn(e), n = e.proxy, s = e.ctx;
  un = !1, t.beforeCreate && es(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: r,
    methods: l,
    watch: a,
    provide: u,
    inject: p,
    // lifecycle
    created: h,
    beforeMount: S,
    mounted: I,
    beforeUpdate: y,
    updated: G,
    activated: w,
    deactivated: K,
    beforeDestroy: V,
    beforeUnmount: J,
    destroyed: W,
    unmounted: R,
    render: ue,
    renderTracked: Fe,
    renderTriggered: tt,
    errorCaptured: Ie,
    serverPrefetch: Kt,
    // public API
    expose: Re,
    inheritAttrs: nt,
    // assets
    components: mt,
    directives: ht,
    filters: Bt
  } = t;
  if (p && kr(p, s, null), l)
    for (const j in l) {
      const L = l[j];
      A(L) && (s[j] = L.bind(n));
    }
  if (i) {
    const j = i.call(n, n);
    F(j) && (e.data = Tn(j));
  }
  if (un = !0, r)
    for (const j in r) {
      const L = r[j], Pe = A(L) ? L.bind(n, n) : A(L.get) ? L.get.bind(n, n) : ce, gt = !A(L) && A(L.set) ? L.set.bind(n) : ce, we = ho({
        get: Pe,
        set: gt
      });
      Object.defineProperty(s, j, {
        enumerable: !0,
        configurable: !0,
        get: () => we.value,
        set: (pe) => we.value = pe
      });
    }
  if (a)
    for (const j in a)
      si(a[j], s, n, j);
  if (u) {
    const j = A(u) ? u.call(n) : u;
    Reflect.ownKeys(j).forEach((L) => {
      Gr(L, j[L]);
    });
  }
  h && es(h, e, "c");
  function Z(j, L) {
    x(L) ? L.forEach((Pe) => j(Pe.bind(n))) : L && j(L.bind(n));
  }
  if (Z(Or, S), Z(Tr, I), Z(xr, y), Z(Nr, G), Z(Sr, w), Z(Dr, K), Z(wr, Ie), Z(Pr, Fe), Z(Rr, tt), Z(yr, J), Z(ni, R), Z(Ar, Kt), x(Re))
    if (Re.length) {
      const j = e.exposed || (e.exposed = {});
      Re.forEach((L) => {
        Object.defineProperty(j, L, {
          get: () => n[L],
          set: (Pe) => n[L] = Pe
        });
      });
    } else
      e.exposed || (e.exposed = {});
  ue && e.render === ce && (e.render = ue), nt != null && (e.inheritAttrs = nt), mt && (e.components = mt), ht && (e.directives = ht);
}
function kr(e, t, n = ce) {
  x(e) && (e = pn(e));
  for (const s in e) {
    const i = e[s];
    let r;
    F(i) ? "default" in i ? r = Nt(
      i.from || s,
      i.default,
      !0
      /* treat default function as factory */
    ) : r = Nt(i.from || s) : r = Nt(i), q(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (l) => r.value = l
    }) : t[s] = r;
  }
}
function es(e, t, n) {
  ae(
    x(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function si(e, t, n, s) {
  const i = s.includes(".") ? Zs(n, s) : () => n[s];
  if (X(e)) {
    const r = t[e];
    A(r) && qt(i, r);
  } else if (A(e))
    qt(i, e.bind(n));
  else if (F(e))
    if (x(e))
      e.forEach((r) => si(r, t, n, s));
    else {
      const r = A(e.handler) ? e.handler.bind(n) : t[e.handler];
      A(r) && qt(i, r, e);
    }
}
function Rn(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: l }
  } = e.appContext, a = r.get(t);
  let u;
  return a ? u = a : !i.length && !n && !s ? u = t : (u = {}, i.length && i.forEach(
    (p) => wt(u, p, l, !0)
  ), wt(u, t, l)), F(t) && r.set(t, u), u;
}
function wt(e, t, n, s = !1) {
  const { mixins: i, extends: r } = t;
  r && wt(e, r, n, !0), i && i.forEach(
    (l) => wt(e, l, n, !0)
  );
  for (const l in t)
    if (!(s && l === "expose")) {
      const a = Lr[l] || n && n[l];
      e[l] = a ? a(e[l], t[l]) : t[l];
    }
  return e;
}
const Lr = {
  data: ts,
  props: ns,
  emits: ns,
  // objects
  methods: ot,
  computed: ot,
  // lifecycle
  beforeCreate: Q,
  created: Q,
  beforeMount: Q,
  mounted: Q,
  beforeUpdate: Q,
  updated: Q,
  beforeDestroy: Q,
  beforeUnmount: Q,
  destroyed: Q,
  unmounted: Q,
  activated: Q,
  deactivated: Q,
  errorCaptured: Q,
  serverPrefetch: Q,
  // assets
  components: ot,
  directives: ot,
  // watch
  watch: zr,
  // provide / inject
  provide: ts,
  inject: Ur
};
function ts(e, t) {
  return t ? e ? function() {
    return B(
      A(e) ? e.call(this, this) : e,
      A(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ur(e, t) {
  return ot(pn(e), pn(t));
}
function pn(e) {
  if (x(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Q(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ot(e, t) {
  return e ? B(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ns(e, t) {
  return e ? x(e) && x(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : B(
    /* @__PURE__ */ Object.create(null),
    Qn(e),
    Qn(t ?? {})
  ) : t;
}
function zr(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = B(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Q(e[s], t[s]);
  return n;
}
function ii() {
  return {
    app: null,
    config: {
      isNativeTag: gi,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let jr = 0;
function Fr(e, t) {
  return function(s, i = null) {
    A(s) || (s = B({}, s)), i != null && !F(i) && (i = null);
    const r = ii(), l = /* @__PURE__ */ new WeakSet();
    let a = !1;
    const u = r.app = {
      _uid: jr++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: bo,
      get config() {
        return r.config;
      },
      set config(p) {
      },
      use(p, ...h) {
        return l.has(p) || (p && A(p.install) ? (l.add(p), p.install(u, ...h)) : A(p) && (l.add(p), p(u, ...h))), u;
      },
      mixin(p) {
        return r.mixins.includes(p) || r.mixins.push(p), u;
      },
      component(p, h) {
        return h ? (r.components[p] = h, u) : r.components[p];
      },
      directive(p, h) {
        return h ? (r.directives[p] = h, u) : r.directives[p];
      },
      mount(p, h, S) {
        if (!a) {
          const I = ye(s, i);
          return I.appContext = r, h && t ? t(I, p) : e(I, p, S), a = !0, u._container = p, p.__vue_app__ = u, Cn(I.component) || I.component.proxy;
        }
      },
      unmount() {
        a && (e(null, u._container), delete u._container.__vue_app__);
      },
      provide(p, h) {
        return r.provides[p] = h, u;
      },
      runWithContext(p) {
        Mt = u;
        try {
          return p();
        } finally {
          Mt = null;
        }
      }
    };
    return u;
  };
}
let Mt = null;
function Gr(e, t) {
  if ($) {
    let n = $.provides;
    const s = $.parent && $.parent.provides;
    s === n && (n = $.provides = Object.create(s)), n[e] = t;
  }
}
function Nt(e, t, n = !1) {
  const s = $ || he;
  if (s || Mt) {
    const i = s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : Mt._context.provides;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && A(t) ? t.call(s && s.proxy) : t;
  }
}
function Hr(e, t, n, s = !1) {
  const i = {}, r = {};
  At(r, Ht, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), ri(e, t, i, r);
  for (const l in e.propsOptions[0])
    l in i || (i[l] = void 0);
  n ? e.props = s ? i : Qi(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function Kr(e, t, n, s) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: l }
  } = e, a = C(i), [u] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const h = e.vnode.dynamicProps;
      for (let S = 0; S < h.length; S++) {
        let I = h[S];
        if (jt(e.emitsOptions, I))
          continue;
        const y = t[I];
        if (u)
          if (M(r, I))
            y !== r[I] && (r[I] = y, p = !0);
          else {
            const G = Ee(I);
            i[G] = dn(
              u,
              a,
              G,
              y,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          y !== r[I] && (r[I] = y, p = !0);
      }
    }
  } else {
    ri(e, t, i, r) && (p = !0);
    let h;
    for (const S in a)
      (!t || // for camelCase
      !M(t, S) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = re(S)) === S || !M(t, h))) && (u ? n && // for camelCase
      (n[S] !== void 0 || // for kebab-case
      n[h] !== void 0) && (i[S] = dn(
        u,
        a,
        S,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete i[S]);
    if (r !== a)
      for (const S in r)
        (!t || !M(t, S)) && (delete r[S], p = !0);
  }
  p && Se(e, "set", "$attrs");
}
function ri(e, t, n, s) {
  const [i, r] = e.propsOptions;
  let l = !1, a;
  if (t)
    for (let u in t) {
      if (Tt(u))
        continue;
      const p = t[u];
      let h;
      i && M(i, h = Ee(u)) ? !r || !r.includes(h) ? n[h] = p : (a || (a = {}))[h] = p : jt(e.emitsOptions, u) || (!(u in s) || p !== s[u]) && (s[u] = p, l = !0);
    }
  if (r) {
    const u = C(n), p = a || z;
    for (let h = 0; h < r.length; h++) {
      const S = r[h];
      n[S] = dn(
        i,
        u,
        S,
        p[S],
        e,
        !M(p, S)
      );
    }
  }
  return l;
}
function dn(e, t, n, s, i, r) {
  const l = e[n];
  if (l != null) {
    const a = M(l, "default");
    if (a && s === void 0) {
      const u = l.default;
      if (l.type !== Function && !l.skipFactory && A(u)) {
        const { propsDefaults: p } = i;
        n in p ? s = p[n] : (qe(i), s = p[n] = u.call(
          null,
          t
        ), ze());
      } else
        s = u;
    }
    l[
      0
      /* shouldCast */
    ] && (r && !a ? s = !1 : l[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === re(n)) && (s = !0));
  }
  return s;
}
function oi(e, t, n = !1) {
  const s = t.propsCache, i = s.get(e);
  if (i)
    return i;
  const r = e.props, l = {}, a = [];
  let u = !1;
  if (!A(e)) {
    const h = (S) => {
      u = !0;
      const [I, y] = oi(S, t, !0);
      B(l, I), y && a.push(...y);
    };
    !n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!r && !u)
    return F(e) && s.set(e, Xe), Xe;
  if (x(r))
    for (let h = 0; h < r.length; h++) {
      const S = Ee(r[h]);
      ss(S) && (l[S] = z);
    }
  else if (r)
    for (const h in r) {
      const S = Ee(h);
      if (ss(S)) {
        const I = r[h], y = l[S] = x(I) || A(I) ? { type: I } : B({}, I);
        if (y) {
          const G = os(Boolean, y.type), w = os(String, y.type);
          y[
            0
            /* shouldCast */
          ] = G > -1, y[
            1
            /* shouldCastTrue */
          ] = w < 0 || G < w, (G > -1 || M(y, "default")) && a.push(S);
        }
      }
    }
  const p = [l, a];
  return F(e) && s.set(e, p), p;
}
function ss(e) {
  return e[0] !== "$";
}
function is(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function rs(e, t) {
  return is(e) === is(t);
}
function os(e, t) {
  return x(t) ? t.findIndex((n) => rs(n, e)) : A(t) && rs(t, e) ? 0 : -1;
}
const li = (e) => e[0] === "_" || e === "$stable", Pn = (e) => x(e) ? e.map(_e) : [_e(e)], Br = (e, t, n) => {
  if (t._n)
    return t;
  const s = dr((...i) => Pn(t(...i)), n);
  return s._c = !1, s;
}, ci = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (li(i))
      continue;
    const r = e[i];
    if (A(r))
      t[i] = Br(i, r, s);
    else if (r != null) {
      const l = Pn(r);
      t[i] = () => l;
    }
  }
}, ai = (e, t) => {
  const n = Pn(t);
  e.slots.default = () => n;
}, Xr = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = C(t), At(t, "_", n)) : ci(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && ai(e, t);
  At(e.slots, Ht, 1);
}, Jr = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let r = !0, l = z;
  if (s.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? r = !1 : (B(i, t), !n && a === 1 && delete i._) : (r = !t.$stable, ci(t, i)), l = t;
  } else
    t && (ai(e, t), l = { default: 1 });
  if (r)
    for (const a in i)
      !li(a) && l[a] == null && delete i[a];
};
function fn(e, t, n, s, i = !1) {
  if (x(e)) {
    e.forEach(
      (I, y) => fn(
        I,
        t && (x(t) ? t[y] : t),
        n,
        s,
        i
      )
    );
    return;
  }
  if (xt(s) && !i)
    return;
  const r = s.shapeFlag & 4 ? Cn(s.component) || s.component.proxy : s.el, l = i ? null : r, { i: a, r: u } = e, p = t && t.r, h = a.refs === z ? a.refs = {} : a.refs, S = a.setupState;
  if (p != null && p !== u && (X(p) ? (h[p] = null, M(S, p) && (S[p] = null)) : q(p) && (p.value = null)), A(u))
    Ne(u, a, 12, [l, h]);
  else {
    const I = X(u), y = q(u);
    if (I || y) {
      const G = () => {
        if (e.f) {
          const w = I ? M(S, u) ? S[u] : h[u] : u.value;
          i ? x(w) && gn(w, r) : x(w) ? w.includes(r) || w.push(r) : I ? (h[u] = [r], M(S, u) && (S[u] = h[u])) : (u.value = [r], e.k && (h[e.k] = u.value));
        } else
          I ? (h[u] = l, M(S, u) && (S[u] = l)) : y && (u.value = l, e.k && (h[e.k] = l));
      };
      l ? (G.id = -1, ee(G, n)) : G();
    }
  }
}
const ee = br;
function Vr(e) {
  return Wr(e);
}
function Wr(e, t) {
  const n = nn();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: i,
    patchProp: r,
    createElement: l,
    createText: a,
    createComment: u,
    setText: p,
    setElementText: h,
    parentNode: S,
    nextSibling: I,
    setScopeId: y = ce,
    insertStaticContent: G
  } = e, w = (o, c, d, f = null, _ = null, v = null, E = !1, g = null, b = !!c.dynamicChildren) => {
    if (o === c)
      return;
    o && !it(o, c) && (f = vt(o), pe(o, _, v, !0), o = null), c.patchFlag === -2 && (b = !1, c.dynamicChildren = null);
    const { type: m, ref: O, shapeFlag: D } = c;
    switch (m) {
      case Gt:
        K(o, c, d, f);
        break;
      case dt:
        V(o, c, d, f);
        break;
      case Qt:
        o == null && J(c, d, f, E);
        break;
      case be:
        mt(
          o,
          c,
          d,
          f,
          _,
          v,
          E,
          g,
          b
        );
        break;
      default:
        D & 1 ? ue(
          o,
          c,
          d,
          f,
          _,
          v,
          E,
          g,
          b
        ) : D & 6 ? ht(
          o,
          c,
          d,
          f,
          _,
          v,
          E,
          g,
          b
        ) : (D & 64 || D & 128) && m.process(
          o,
          c,
          d,
          f,
          _,
          v,
          E,
          g,
          b,
          Ge
        );
    }
    O != null && _ && fn(O, o && o.ref, v, c || o, !c);
  }, K = (o, c, d, f) => {
    if (o == null)
      s(
        c.el = a(c.children),
        d,
        f
      );
    else {
      const _ = c.el = o.el;
      c.children !== o.children && p(_, c.children);
    }
  }, V = (o, c, d, f) => {
    o == null ? s(
      c.el = u(c.children || ""),
      d,
      f
    ) : c.el = o.el;
  }, J = (o, c, d, f) => {
    [o.el, o.anchor] = G(
      o.children,
      c,
      d,
      f,
      o.el,
      o.anchor
    );
  }, W = ({ el: o, anchor: c }, d, f) => {
    let _;
    for (; o && o !== c; )
      _ = I(o), s(o, d, f), o = _;
    s(c, d, f);
  }, R = ({ el: o, anchor: c }) => {
    let d;
    for (; o && o !== c; )
      d = I(o), i(o), o = d;
    i(c);
  }, ue = (o, c, d, f, _, v, E, g, b) => {
    E = E || c.type === "svg", o == null ? Fe(
      c,
      d,
      f,
      _,
      v,
      E,
      g,
      b
    ) : Kt(
      o,
      c,
      _,
      v,
      E,
      g,
      b
    );
  }, Fe = (o, c, d, f, _, v, E, g) => {
    let b, m;
    const { type: O, props: D, shapeFlag: T, transition: N, dirs: P } = o;
    if (b = o.el = l(
      o.type,
      v,
      D && D.is,
      D
    ), T & 8 ? h(b, o.children) : T & 16 && Ie(
      o.children,
      b,
      null,
      f,
      _,
      v && O !== "foreignObject",
      E,
      g
    ), P && Me(o, null, f, "created"), tt(b, o, o.scopeId, E, f), D) {
      for (const k in D)
        k !== "value" && !Tt(k) && r(
          b,
          k,
          null,
          D[k],
          v,
          o.children,
          f,
          _,
          ge
        );
      "value" in D && r(b, "value", null, D.value), (m = D.onVnodeBeforeMount) && fe(m, f, o);
    }
    P && Me(o, null, f, "beforeMount");
    const U = Yr(_, N);
    U && N.beforeEnter(b), s(b, c, d), ((m = D && D.onVnodeMounted) || U || P) && ee(() => {
      m && fe(m, f, o), U && N.enter(b), P && Me(o, null, f, "mounted");
    }, _);
  }, tt = (o, c, d, f, _) => {
    if (d && y(o, d), f)
      for (let v = 0; v < f.length; v++)
        y(o, f[v]);
    if (_) {
      let v = _.subTree;
      if (c === v) {
        const E = _.vnode;
        tt(
          o,
          E,
          E.scopeId,
          E.slotScopeIds,
          _.parent
        );
      }
    }
  }, Ie = (o, c, d, f, _, v, E, g, b = 0) => {
    for (let m = b; m < o.length; m++) {
      const O = o[m] = g ? Te(o[m]) : _e(o[m]);
      w(
        null,
        O,
        c,
        d,
        f,
        _,
        v,
        E,
        g
      );
    }
  }, Kt = (o, c, d, f, _, v, E) => {
    const g = c.el = o.el;
    let { patchFlag: b, dynamicChildren: m, dirs: O } = c;
    b |= o.patchFlag & 16;
    const D = o.props || z, T = c.props || z;
    let N;
    d && Ce(d, !1), (N = T.onVnodeBeforeUpdate) && fe(N, d, c, o), O && Me(c, o, d, "beforeUpdate"), d && Ce(d, !0);
    const P = _ && c.type !== "foreignObject";
    if (m ? Re(
      o.dynamicChildren,
      m,
      g,
      d,
      f,
      P,
      v
    ) : E || L(
      o,
      c,
      g,
      null,
      d,
      f,
      P,
      v,
      !1
    ), b > 0) {
      if (b & 16)
        nt(
          g,
          c,
          D,
          T,
          d,
          f,
          _
        );
      else if (b & 2 && D.class !== T.class && r(g, "class", null, T.class, _), b & 4 && r(g, "style", D.style, T.style, _), b & 8) {
        const U = c.dynamicProps;
        for (let k = 0; k < U.length; k++) {
          const H = U[k], se = D[H], He = T[H];
          (He !== se || H === "value") && r(
            g,
            H,
            se,
            He,
            _,
            o.children,
            d,
            f,
            ge
          );
        }
      }
      b & 1 && o.children !== c.children && h(g, c.children);
    } else
      !E && m == null && nt(
        g,
        c,
        D,
        T,
        d,
        f,
        _
      );
    ((N = T.onVnodeUpdated) || O) && ee(() => {
      N && fe(N, d, c, o), O && Me(c, o, d, "updated");
    }, f);
  }, Re = (o, c, d, f, _, v, E) => {
    for (let g = 0; g < c.length; g++) {
      const b = o[g], m = c[g], O = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        b.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (b.type === be || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !it(b, m) || // - In the case of a component, it could contain anything.
        b.shapeFlag & 70) ? S(b.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          d
        )
      );
      w(
        b,
        m,
        O,
        null,
        f,
        _,
        v,
        E,
        !0
      );
    }
  }, nt = (o, c, d, f, _, v, E) => {
    if (d !== f) {
      if (d !== z)
        for (const g in d)
          !Tt(g) && !(g in f) && r(
            o,
            g,
            d[g],
            null,
            E,
            c.children,
            _,
            v,
            ge
          );
      for (const g in f) {
        if (Tt(g))
          continue;
        const b = f[g], m = d[g];
        b !== m && g !== "value" && r(
          o,
          g,
          m,
          b,
          E,
          c.children,
          _,
          v,
          ge
        );
      }
      "value" in f && r(o, "value", d.value, f.value);
    }
  }, mt = (o, c, d, f, _, v, E, g, b) => {
    const m = c.el = o ? o.el : a(""), O = c.anchor = o ? o.anchor : a("");
    let { patchFlag: D, dynamicChildren: T, slotScopeIds: N } = c;
    N && (g = g ? g.concat(N) : N), o == null ? (s(m, d, f), s(O, d, f), Ie(
      c.children,
      d,
      O,
      _,
      v,
      E,
      g,
      b
    )) : D > 0 && D & 64 && T && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    o.dynamicChildren ? (Re(
      o.dynamicChildren,
      T,
      d,
      _,
      v,
      E,
      g
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (c.key != null || _ && c === _.subTree) && ui(
      o,
      c,
      !0
      /* shallow */
    )) : L(
      o,
      c,
      d,
      O,
      _,
      v,
      E,
      g,
      b
    );
  }, ht = (o, c, d, f, _, v, E, g, b) => {
    c.slotScopeIds = g, o == null ? c.shapeFlag & 512 ? _.ctx.activate(
      c,
      d,
      f,
      E,
      b
    ) : Bt(
      c,
      d,
      f,
      _,
      v,
      E,
      b
    ) : Ln(o, c, b);
  }, Bt = (o, c, d, f, _, v, E) => {
    const g = o.component = ao(
      o,
      f,
      _
    );
    if (ei(o) && (g.ctx.renderer = Ge), uo(g), g.asyncDep) {
      if (_ && _.registerDep(g, Z), !o.el) {
        const b = g.subTree = ye(dt);
        V(null, b, c, d);
      }
      return;
    }
    Z(
      g,
      o,
      c,
      d,
      _,
      v,
      E
    );
  }, Ln = (o, c, d) => {
    const f = c.component = o.component;
    if (mr(o, c, d))
      if (f.asyncDep && !f.asyncResolved) {
        j(f, c, d);
        return;
      } else
        f.next = c, cr(f.update), f.update();
    else
      c.el = o.el, f.vnode = c;
  }, Z = (o, c, d, f, _, v, E) => {
    const g = () => {
      if (o.isMounted) {
        let { next: O, bu: D, u: T, parent: N, vnode: P } = o, U = O, k;
        Ce(o, !1), O ? (O.el = P.el, j(o, O, E)) : O = P, D && Wt(D), (k = O.props && O.props.onVnodeBeforeUpdate) && fe(k, N, O, P), Ce(o, !0);
        const H = $t(o), se = o.subTree;
        o.subTree = H, w(
          se,
          H,
          // parent may have changed if it's in a teleport
          S(se.el),
          // anchor may have changed if it's in a fragment
          vt(se),
          o,
          _,
          v
        ), O.el = H.el, U === null && hr(o, H.el), T && ee(T, _), (k = O.props && O.props.onVnodeUpdated) && ee(
          () => fe(k, N, O, P),
          _
        );
      } else {
        let O;
        const { el: D, props: T } = c, { bm: N, m: P, parent: U } = o, k = xt(c);
        if (Ce(o, !1), N && Wt(N), !k && (O = T && T.onVnodeBeforeMount) && fe(O, U, c), Ce(o, !0), D && Jt) {
          const H = () => {
            o.subTree = $t(o), Jt(
              D,
              o.subTree,
              o,
              _,
              null
            );
          };
          k ? c.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !o.isUnmounted && H()
          ) : H();
        } else {
          const H = o.subTree = $t(o);
          w(
            null,
            H,
            d,
            f,
            o,
            _,
            v
          ), c.el = H.el;
        }
        if (P && ee(P, _), !k && (O = T && T.onVnodeMounted)) {
          const H = c;
          ee(
            () => fe(O, U, H),
            _
          );
        }
        (c.shapeFlag & 256 || U && xt(U.vnode) && U.vnode.shapeFlag & 256) && o.a && ee(o.a, _), o.isMounted = !0, c = d = f = null;
      }
    }, b = o.effect = new Dn(
      g,
      () => An(m),
      o.scope
      // track it in component's effect scope
    ), m = o.update = () => b.run();
    m.id = o.uid, Ce(o, !0), m();
  }, j = (o, c, d) => {
    c.component = o;
    const f = o.vnode.props;
    o.vnode = c, o.next = null, Kr(o, c.props, f, d), Jr(o, c.children, d), Qe(), qn(o), et();
  }, L = (o, c, d, f, _, v, E, g, b = !1) => {
    const m = o && o.children, O = o ? o.shapeFlag : 0, D = c.children, { patchFlag: T, shapeFlag: N } = c;
    if (T > 0) {
      if (T & 128) {
        gt(
          m,
          D,
          d,
          f,
          _,
          v,
          E,
          g,
          b
        );
        return;
      } else if (T & 256) {
        Pe(
          m,
          D,
          d,
          f,
          _,
          v,
          E,
          g,
          b
        );
        return;
      }
    }
    N & 8 ? (O & 16 && ge(m, _, v), D !== m && h(d, D)) : O & 16 ? N & 16 ? gt(
      m,
      D,
      d,
      f,
      _,
      v,
      E,
      g,
      b
    ) : ge(m, _, v, !0) : (O & 8 && h(d, ""), N & 16 && Ie(
      D,
      d,
      f,
      _,
      v,
      E,
      g,
      b
    ));
  }, Pe = (o, c, d, f, _, v, E, g, b) => {
    o = o || Xe, c = c || Xe;
    const m = o.length, O = c.length, D = Math.min(m, O);
    let T;
    for (T = 0; T < D; T++) {
      const N = c[T] = b ? Te(c[T]) : _e(c[T]);
      w(
        o[T],
        N,
        d,
        null,
        _,
        v,
        E,
        g,
        b
      );
    }
    m > O ? ge(
      o,
      _,
      v,
      !0,
      !1,
      D
    ) : Ie(
      c,
      d,
      f,
      _,
      v,
      E,
      g,
      b,
      D
    );
  }, gt = (o, c, d, f, _, v, E, g, b) => {
    let m = 0;
    const O = c.length;
    let D = o.length - 1, T = O - 1;
    for (; m <= D && m <= T; ) {
      const N = o[m], P = c[m] = b ? Te(c[m]) : _e(c[m]);
      if (it(N, P))
        w(
          N,
          P,
          d,
          null,
          _,
          v,
          E,
          g,
          b
        );
      else
        break;
      m++;
    }
    for (; m <= D && m <= T; ) {
      const N = o[D], P = c[T] = b ? Te(c[T]) : _e(c[T]);
      if (it(N, P))
        w(
          N,
          P,
          d,
          null,
          _,
          v,
          E,
          g,
          b
        );
      else
        break;
      D--, T--;
    }
    if (m > D) {
      if (m <= T) {
        const N = T + 1, P = N < O ? c[N].el : f;
        for (; m <= T; )
          w(
            null,
            c[m] = b ? Te(c[m]) : _e(c[m]),
            d,
            P,
            _,
            v,
            E,
            g,
            b
          ), m++;
      }
    } else if (m > T)
      for (; m <= D; )
        pe(o[m], _, v, !0), m++;
    else {
      const N = m, P = m, U = /* @__PURE__ */ new Map();
      for (m = P; m <= T; m++) {
        const ne = c[m] = b ? Te(c[m]) : _e(c[m]);
        ne.key != null && U.set(ne.key, m);
      }
      let k, H = 0;
      const se = T - P + 1;
      let He = !1, jn = 0;
      const st = new Array(se);
      for (m = 0; m < se; m++)
        st[m] = 0;
      for (m = N; m <= D; m++) {
        const ne = o[m];
        if (H >= se) {
          pe(ne, _, v, !0);
          continue;
        }
        let de;
        if (ne.key != null)
          de = U.get(ne.key);
        else
          for (k = P; k <= T; k++)
            if (st[k - P] === 0 && it(ne, c[k])) {
              de = k;
              break;
            }
        de === void 0 ? pe(ne, _, v, !0) : (st[de - P] = m + 1, de >= jn ? jn = de : He = !0, w(
          ne,
          c[de],
          d,
          null,
          _,
          v,
          E,
          g,
          b
        ), H++);
      }
      const Fn = He ? $r(st) : Xe;
      for (k = Fn.length - 1, m = se - 1; m >= 0; m--) {
        const ne = P + m, de = c[ne], Gn = ne + 1 < O ? c[ne + 1].el : f;
        st[m] === 0 ? w(
          null,
          de,
          d,
          Gn,
          _,
          v,
          E,
          g,
          b
        ) : He && (k < 0 || m !== Fn[k] ? we(de, d, Gn, 2) : k--);
      }
    }
  }, we = (o, c, d, f, _ = null) => {
    const { el: v, type: E, transition: g, children: b, shapeFlag: m } = o;
    if (m & 6) {
      we(o.component.subTree, c, d, f);
      return;
    }
    if (m & 128) {
      o.suspense.move(c, d, f);
      return;
    }
    if (m & 64) {
      E.move(o, c, d, Ge);
      return;
    }
    if (E === be) {
      s(v, c, d);
      for (let D = 0; D < b.length; D++)
        we(b[D], c, d, f);
      s(o.anchor, c, d);
      return;
    }
    if (E === Qt) {
      W(o, c, d);
      return;
    }
    if (f !== 2 && m & 1 && g)
      if (f === 0)
        g.beforeEnter(v), s(v, c, d), ee(() => g.enter(v), _);
      else {
        const { leave: D, delayLeave: T, afterLeave: N } = g, P = () => s(v, c, d), U = () => {
          D(v, () => {
            P(), N && N();
          });
        };
        T ? T(v, P, U) : U();
      }
    else
      s(v, c, d);
  }, pe = (o, c, d, f = !1, _ = !1) => {
    const {
      type: v,
      props: E,
      ref: g,
      children: b,
      dynamicChildren: m,
      shapeFlag: O,
      patchFlag: D,
      dirs: T
    } = o;
    if (g != null && fn(g, null, d, o, !0), O & 256) {
      c.ctx.deactivate(o);
      return;
    }
    const N = O & 1 && T, P = !xt(o);
    let U;
    if (P && (U = E && E.onVnodeBeforeUnmount) && fe(U, c, o), O & 6)
      hi(o.component, d, f);
    else {
      if (O & 128) {
        o.suspense.unmount(d, f);
        return;
      }
      N && Me(o, null, c, "beforeUnmount"), O & 64 ? o.type.remove(
        o,
        c,
        d,
        _,
        Ge,
        f
      ) : m && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (v !== be || D > 0 && D & 64) ? ge(
        m,
        c,
        d,
        !1,
        !0
      ) : (v === be && D & 384 || !_ && O & 16) && ge(b, c, d), f && Un(o);
    }
    (P && (U = E && E.onVnodeUnmounted) || N) && ee(() => {
      U && fe(U, c, o), N && Me(o, null, c, "unmounted");
    }, d);
  }, Un = (o) => {
    const { type: c, el: d, anchor: f, transition: _ } = o;
    if (c === be) {
      mi(d, f);
      return;
    }
    if (c === Qt) {
      R(o);
      return;
    }
    const v = () => {
      i(d), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (o.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: E, delayLeave: g } = _, b = () => E(d, v);
      g ? g(o.el, v, b) : b();
    } else
      v();
  }, mi = (o, c) => {
    let d;
    for (; o !== c; )
      d = I(o), i(o), o = d;
    i(c);
  }, hi = (o, c, d) => {
    const { bum: f, scope: _, update: v, subTree: E, um: g } = o;
    f && Wt(f), _.stop(), v && (v.active = !1, pe(E, o, c, d)), g && ee(g, c), ee(() => {
      o.isUnmounted = !0;
    }, c), c && c.pendingBranch && !c.isUnmounted && o.asyncDep && !o.asyncResolved && o.suspenseId === c.pendingId && (c.deps--, c.deps === 0 && c.resolve());
  }, ge = (o, c, d, f = !1, _ = !1, v = 0) => {
    for (let E = v; E < o.length; E++)
      pe(o[E], c, d, f, _);
  }, vt = (o) => o.shapeFlag & 6 ? vt(o.component.subTree) : o.shapeFlag & 128 ? o.suspense.next() : I(o.anchor || o.el), zn = (o, c, d) => {
    o == null ? c._vnode && pe(c._vnode, null, null, !0) : w(c._vnode || null, o, c, null, null, null, d), qn(), Vs(), c._vnode = o;
  }, Ge = {
    p: w,
    um: pe,
    m: we,
    r: Un,
    mt: Bt,
    mc: Ie,
    pc: L,
    pbc: Re,
    n: vt,
    o: e
  };
  let Xt, Jt;
  return t && ([Xt, Jt] = t(
    Ge
  )), {
    render: zn,
    hydrate: Xt,
    createApp: Fr(zn, Xt)
  };
}
function Ce({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Yr(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ui(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (x(s) && x(i))
    for (let r = 0; r < s.length; r++) {
      const l = s[r];
      let a = i[r];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[r] = Te(i[r]), a.el = l.el), n || ui(l, a)), a.type === Gt && (a.el = l.el);
    }
}
function $r(e) {
  const t = e.slice(), n = [0];
  let s, i, r, l, a;
  const u = e.length;
  for (s = 0; s < u; s++) {
    const p = e[s];
    if (p !== 0) {
      if (i = n[n.length - 1], e[i] < p) {
        t[s] = i, n.push(s);
        continue;
      }
      for (r = 0, l = n.length - 1; r < l; )
        a = r + l >> 1, e[n[a]] < p ? r = a + 1 : l = a;
      p < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), n[r] = s);
    }
  }
  for (r = n.length, l = n[r - 1]; r-- > 0; )
    n[r] = l, l = t[l];
  return n;
}
const qr = (e) => e.__isTeleport, be = Symbol.for("v-fgt"), Gt = Symbol.for("v-txt"), dt = Symbol.for("v-cmt"), Qt = Symbol.for("v-stc"), ct = [];
let le = null;
function Zr(e = !1) {
  ct.push(le = e ? null : []);
}
function Qr() {
  ct.pop(), le = ct[ct.length - 1] || null;
}
let ft = 1;
function ls(e) {
  ft += e;
}
function eo(e) {
  return e.dynamicChildren = ft > 0 ? le || Xe : null, Qr(), ft > 0 && le && le.push(e), e;
}
function to(e, t, n, s, i, r) {
  return eo(
    di(
      e,
      t,
      n,
      s,
      i,
      r,
      !0
      /* isBlock */
    )
  );
}
function no(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function it(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ht = "__vInternal", pi = ({ key: e }) => e ?? null, yt = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? X(e) || q(e) || A(e) ? { i: he, r: e, k: t, f: !!n } : e : null);
function di(e, t = null, n = null, s = 0, i = null, r = e === be ? 0 : 1, l = !1, a = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && pi(t),
    ref: t && yt(t),
    scopeId: $s,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: he
  };
  return a ? (wn(u, n), r & 128 && e.normalize(u)) : n && (u.shapeFlag |= X(n) ? 8 : 16), ft > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  le && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && le.push(u), u;
}
const ye = so;
function so(e, t = null, n = null, s = 0, i = null, r = !1) {
  if ((!e || e === gr) && (e = dt), no(e)) {
    const a = $e(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && wn(a, n), ft > 0 && !r && le && (a.shapeFlag & 6 ? le[le.indexOf(e)] = a : le.push(a)), a.patchFlag |= -2, a;
  }
  if (mo(e) && (e = e.__vccOpts), t) {
    t = io(t);
    let { class: a, style: u } = t;
    a && !X(a) && (t.class = En(a)), F(u) && (zs(u) && !x(u) && (u = B({}, u)), t.style = bn(u));
  }
  const l = X(e) ? 1 : vr(e) ? 128 : qr(e) ? 64 : F(e) ? 4 : A(e) ? 2 : 0;
  return di(
    e,
    t,
    n,
    s,
    i,
    l,
    r,
    !0
  );
}
function io(e) {
  return e ? zs(e) || Ht in e ? B({}, e) : e : null;
}
function $e(e, t, n = !1) {
  const { props: s, ref: i, patchFlag: r, children: l } = e, a = t ? oo(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && pi(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? x(i) ? i.concat(yt(t)) : [i, yt(t)] : yt(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== be ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && $e(e.ssContent),
    ssFallback: e.ssFallback && $e(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function ro(e = " ", t = 0) {
  return ye(Gt, null, e, t);
}
function _e(e) {
  return e == null || typeof e == "boolean" ? ye(dt) : x(e) ? ye(
    be,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Te(e) : ye(Gt, null, String(e));
}
function Te(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : $e(e);
}
function wn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (x(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), wn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !(Ht in t) ? t._ctx = he : i === 3 && he && (he.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    A(t) ? (t = { default: t, _ctx: he }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [ro(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function oo(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = En([t.class, s.class]));
      else if (i === "style")
        t.style = bn([t.style, s.style]);
      else if (Ct(i)) {
        const r = t[i], l = s[i];
        l && r !== l && !(x(r) && r.includes(l)) && (t[i] = r ? [].concat(r, l) : l);
      } else
        i !== "" && (t[i] = s[i]);
  }
  return t;
}
function fe(e, t, n, s = null) {
  ae(e, t, 7, [
    n,
    s
  ]);
}
const lo = ii();
let co = 0;
function ao(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || lo, r = {
    uid: co++,
    vnode: e,
    type: s,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new Ri(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: oi(s, i),
    emitsOptions: Ys(s, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: z,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: z,
    data: z,
    props: z,
    attrs: z,
    slots: z,
    refs: z,
    setupState: z,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = pr.bind(null, r), e.ce && e.ce(r), r;
}
let $ = null, Mn, Ke, cs = "__VUE_INSTANCE_SETTERS__";
(Ke = nn()[cs]) || (Ke = nn()[cs] = []), Ke.push((e) => $ = e), Mn = (e) => {
  Ke.length > 1 ? Ke.forEach((t) => t(e)) : Ke[0](e);
};
const qe = (e) => {
  Mn(e), e.scope.on();
}, ze = () => {
  $ && $.scope.off(), Mn(null);
};
function fi(e) {
  return e.vnode.shapeFlag & 4;
}
let _t = !1;
function uo(e, t = !1) {
  _t = t;
  const { props: n, children: s } = e.vnode, i = fi(e);
  Hr(e, n, i, t), Xr(e, s);
  const r = i ? po(e, t) : void 0;
  return _t = !1, r;
}
function po(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = js(new Proxy(e.ctx, Mr));
  const { setup: s } = n;
  if (s) {
    const i = e.setupContext = s.length > 1 ? _o(e) : null;
    qe(e), Qe();
    const r = Ne(
      s,
      e,
      0,
      [e.props, i]
    );
    if (et(), ze(), Ss(r)) {
      if (r.then(ze, ze), t)
        return r.then((l) => {
          as(e, l, t);
        }).catch((l) => {
          zt(l, e, 0);
        });
      e.asyncDep = r;
    } else
      as(e, r, t);
  } else
    _i(e, t);
}
function as(e, t, n) {
  A(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : F(t) && (e.setupState = Ks(t)), _i(e, n);
}
let us;
function _i(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && us && !s.render) {
      const i = s.template || Rn(e).template;
      if (i) {
        const { isCustomElement: r, compilerOptions: l } = e.appContext.config, { delimiters: a, compilerOptions: u } = s, p = B(
          B(
            {
              isCustomElement: r,
              delimiters: a
            },
            l
          ),
          u
        );
        s.render = us(i, p);
      }
    }
    e.render = s.render || ce;
  }
  {
    qe(e), Qe();
    try {
      Cr(e);
    } finally {
      et(), ze();
    }
  }
}
function fo(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    {
      get(t, n) {
        return te(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function _o(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return fo(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Cn(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Ks(js(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in lt)
          return lt[n](e);
      },
      has(t, n) {
        return n in t || n in lt;
      }
    }));
}
function mo(e) {
  return A(e) && "__vccOpts" in e;
}
const ho = (e, t) => rr(e, t, _t), go = Symbol.for("v-scx"), vo = () => Nt(go), bo = "3.3.11", Eo = "http://www.w3.org/2000/svg", Le = typeof document < "u" ? document : null, ps = Le && /* @__PURE__ */ Le.createElement("template"), So = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t ? Le.createElementNS(Eo, e) : Le.createElement(e, n ? { is: n } : void 0);
    return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
  },
  createText: (e) => Le.createTextNode(e),
  createComment: (e) => Le.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Le.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, i, r) {
    const l = n ? n.previousSibling : t.lastChild;
    if (i && (i === r || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === r || !(i = i.nextSibling)); )
        ;
    else {
      ps.innerHTML = s ? `<svg>${e}</svg>` : e;
      const a = ps.content;
      if (s) {
        const u = a.firstChild;
        for (; u.firstChild; )
          a.appendChild(u.firstChild);
        a.removeChild(u);
      }
      t.insertBefore(a, n);
    }
    return [
      // first
      l ? l.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Do = Symbol("_vtc");
function Io(e, t, n) {
  const s = e[Do];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Oo = Symbol("_vod");
function To(e, t, n) {
  const s = e.style, i = X(n);
  if (n && !i) {
    if (t && !X(t))
      for (const r in t)
        n[r] == null && _n(s, r, "");
    for (const r in n)
      _n(s, r, n[r]);
  } else {
    const r = s.display;
    i ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"), Oo in e && (s.display = r);
  }
}
const ds = /\s*!important$/;
function _n(e, t, n) {
  if (x(n))
    n.forEach((s) => _n(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = xo(e, t);
    ds.test(n) ? e.setProperty(
      re(s),
      n.replace(ds, ""),
      "important"
    ) : e[s] = n;
  }
}
const fs = ["Webkit", "Moz", "ms"], en = {};
function xo(e, t) {
  const n = en[t];
  if (n)
    return n;
  let s = Ee(t);
  if (s !== "filter" && s in e)
    return en[t] = s;
  s = Os(s);
  for (let i = 0; i < fs.length; i++) {
    const r = fs[i] + s;
    if (r in e)
      return en[t] = r;
  }
  return t;
}
const _s = "http://www.w3.org/1999/xlink";
function No(e, t, n, s, i) {
  if (s && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(_s, t.slice(6, t.length)) : e.setAttributeNS(_s, t, n);
  else {
    const r = yi(t);
    n == null || r && !Ts(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : n);
  }
}
function yo(e, t, n, s, i, r, l) {
  if (t === "innerHTML" || t === "textContent") {
    s && l(s, i, r), e[t] = n ?? "";
    return;
  }
  const a = e.tagName;
  if (t === "value" && a !== "PROGRESS" && // custom elements may use _value internally
  !a.includes("-")) {
    e._value = n;
    const p = a === "OPTION" ? e.getAttribute("value") : e.value, h = n ?? "";
    p !== h && (e.value = h), n == null && e.removeAttribute(t);
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const p = typeof e[t];
    p === "boolean" ? n = Ts(n) : n == null && p === "string" ? (n = "", u = !0) : p === "number" && (n = 0, u = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  u && e.removeAttribute(t);
}
function Ao(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Ro(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const ms = Symbol("_vei");
function Po(e, t, n, s, i = null) {
  const r = e[ms] || (e[ms] = {}), l = r[t];
  if (s && l)
    l.value = s;
  else {
    const [a, u] = wo(t);
    if (s) {
      const p = r[t] = ko(s, i);
      Ao(e, a, p, u);
    } else
      l && (Ro(e, a, l, u), r[t] = void 0);
  }
}
const hs = /(?:Once|Passive|Capture)$/;
function wo(e) {
  let t;
  if (hs.test(e)) {
    t = {};
    let s;
    for (; s = e.match(hs); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : re(e.slice(2)), t];
}
let tn = 0;
const Mo = /* @__PURE__ */ Promise.resolve(), Co = () => tn || (Mo.then(() => tn = 0), tn = Date.now());
function ko(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    ae(
      Lo(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = Co(), n;
}
function Lo(e, t) {
  if (x(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((s) => (i) => !i._stopped && s && s(i));
  } else
    return t;
}
const gs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Uo = (e, t, n, s, i = !1, r, l, a, u) => {
  t === "class" ? Io(e, s, i) : t === "style" ? To(e, n, s) : Ct(t) ? hn(t) || Po(e, t, n, s, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : zo(e, t, s, i)) ? yo(
    e,
    t,
    s,
    r,
    l,
    a,
    u
  ) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), No(e, t, s, i));
};
function zo(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && gs(t) && A(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return gs(t) && X(n) ? !1 : t in e;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function jo(e, t) {
  const n = /* @__PURE__ */ Qs(e);
  class s extends kn {
    constructor(r) {
      super(n, r, t);
    }
  }
  return s.def = n, s;
}
const Fo = typeof HTMLElement < "u" ? HTMLElement : class {
};
class kn extends Fo {
  constructor(t, n = {}, s) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && s ? s(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, this._ob && (this._ob.disconnect(), this._ob = null), Xs(() => {
      this._connected || (bs(null, this.shadowRoot), this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let s = 0; s < this.attributes.length; s++)
      this._setAttr(this.attributes[s].name);
    this._ob = new MutationObserver((s) => {
      for (const i of s)
        this._setAttr(i.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (s, i = !1) => {
      const { props: r, styles: l } = s;
      let a;
      if (r && !x(r))
        for (const u in r) {
          const p = r[u];
          (p === Number || p && p.type === Number) && (u in this._props && (this._props[u] = Hn(this._props[u])), (a || (a = /* @__PURE__ */ Object.create(null)))[Ee(u)] = !0);
        }
      this._numberProps = a, i && this._resolveProps(s), this._applyStyles(l), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then((s) => t(s, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: n } = t, s = x(n) ? n : Object.keys(n || {});
    for (const i of Object.keys(this))
      i[0] !== "_" && s.includes(i) && this._setProp(i, this[i], !0, !1);
    for (const i of s.map(Ee))
      Object.defineProperty(this, i, {
        get() {
          return this._getProp(i);
        },
        set(r) {
          this._setProp(i, r);
        }
      });
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    const s = Ee(t);
    this._numberProps && this._numberProps[s] && (n = Hn(n)), this._setProp(s, n, !1);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, s = !0, i = !0) {
    n !== this._props[t] && (this._props[t] = n, i && this._instance && this._update(), s && (n === !0 ? this.setAttribute(re(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(re(t), n + "") : n || this.removeAttribute(re(t))));
  }
  _update() {
    bs(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = ye(this._def, B({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0;
      const s = (r, l) => {
        this.dispatchEvent(
          new CustomEvent(r, {
            detail: l
          })
        );
      };
      n.emit = (r, ...l) => {
        s(r, l), re(r) !== r && s(re(r), l);
      };
      let i = this;
      for (; i = i && (i.parentNode || i.host); )
        if (i instanceof kn) {
          n.parent = i._instance, n.provides = i._instance.provides;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((n) => {
      const s = document.createElement("style");
      s.textContent = n, this.shadowRoot.appendChild(s);
    });
  }
}
const Go = ["ctrl", "shift", "alt", "meta"], Ho = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Go.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ko = (e, t) => e._withMods || (e._withMods = (n, ...s) => {
  for (let i = 0; i < t.length; i++) {
    const r = Ho[t[i]];
    if (r && r(n, t))
      return;
  }
  return e(n, ...s);
}), Bo = /* @__PURE__ */ B({ patchProp: Uo }, So);
let vs;
function Xo() {
  return vs || (vs = Vr(Bo));
}
const bs = (...e) => {
  Xo().render(...e);
}, Jo = /* @__PURE__ */ Qs({
  __name: "Buble.ce",
  setup(e) {
    const t = er(1);
    return (n, s) => (Zr(), to("div", {
      class: "fixed bottom-4 right-4 bg-blue-500 rounded-full py-5 px-7 text-white cursor-pointer select-none",
      onClick: s[0] || (s[0] = Ko((i) => t.value++, ["stop"]))
    }, Ai(Hs(t)), 1));
  }
}), Vo = /* @__PURE__ */ jo(Jo);
customElements.define("Buble", Vo);
