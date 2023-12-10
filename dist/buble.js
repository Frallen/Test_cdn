function Et(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let s = 0; s < o.length; s++)
    n[o[s]] = !0;
  return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
const L = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, _t = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], X = () => {
}, as = () => !1, jt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), nn = (e) => e.startsWith("onUpdate:"), W = Object.assign, eo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, vr = Object.prototype.hasOwnProperty, R = (e, t) => vr.call(e, t), C = Array.isArray, Ze = (e) => pn(e) === "[object Map]", ps = (e) => pn(e) === "[object Set]", P = (e) => typeof e == "function", z = (e) => typeof e == "string", Nt = (e) => typeof e == "symbol", B = (e) => e !== null && typeof e == "object", to = (e) => (B(e) || P(e)) && P(e.then) && P(e.catch), ds = Object.prototype.toString, pn = (e) => ds.call(e), no = (e) => pn(e).slice(8, -1), hs = (e) => pn(e) === "[object Object]", oo = (e) => z(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Jt = /* @__PURE__ */ Et(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), br = /* @__PURE__ */ Et(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), dn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, yr = /-(\w)/g, Ie = dn((e) => e.replace(yr, (t, n) => n ? n.toUpperCase() : "")), Or = /\B([A-Z])/g, ie = dn(
  (e) => e.replace(Or, "-$1").toLowerCase()
), hn = dn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ye = dn((e) => e ? `on${hn(e)}` : ""), st = (e, t) => !Object.is(e, t), yt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, on = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, wr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Po = (e) => {
  const t = z(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let To;
const sn = () => To || (To = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function so(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = z(o) ? Cr(o) : so(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (z(e) || B(e))
    return e;
}
const xr = /;(?![^(]*\))/g, Dr = /:([^]+)/, Vr = /\/\*[^]*?\*\//g;
function Cr(e) {
  const t = {};
  return e.replace(Vr, "").split(xr).forEach((n) => {
    if (n) {
      const o = n.split(Dr);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function ro(e) {
  let t = "";
  if (z(e))
    t = e;
  else if (C(e))
    for (let n = 0; n < e.length; n++) {
      const o = ro(e[n]);
      o && (t += o + " ");
    }
  else if (B(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Pr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Tr = /* @__PURE__ */ Et(Pr);
function _s(e) {
  return !!e || e === "";
}
const $r = (e) => z(e) ? e : e == null ? "" : C(e) || B(e) && (e.toString === ds || !P(e.toString)) ? JSON.stringify(e, ms, 2) : String(e), ms = (e, t) => t && t.__v_isRef ? ms(e, t.value) : Ze(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, s], r) => (n[Cn(o, r) + " =>"] = s, n),
    {}
  )
} : ps(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Cn(n))
} : Nt(t) ? Cn(t) : B(t) && !C(t) && !hs(t) ? String(t) : t, Cn = (e, t = "") => {
  var n;
  return Nt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
function Sn(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let ae;
class Ir {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = ae, !t && ae && (this.index = (ae.scopes || (ae.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = ae;
      try {
        return ae = this, t();
      } finally {
        ae = n;
      }
    } else
      process.env.NODE_ENV !== "production" && Sn("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ae = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    ae = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Rr(e, t = ae) {
  t && t.active && t.effects.push(e);
}
function Ar() {
  return ae;
}
const $t = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, gs = (e) => (e.w & We) > 0, Es = (e) => (e.n & We) > 0, Mr = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= We;
}, Sr = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const s = t[o];
      gs(s) && !Es(s) ? s.delete(e) : t[n++] = s, s.w &= ~We, s.n &= ~We;
    }
    t.length = n;
  }
}, jn = /* @__PURE__ */ new WeakMap();
let xt = 0, We = 1;
const Fn = 30;
let ne;
const Qe = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Hn = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class io {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Rr(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = ne, n = Le;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = ne, ne = this, Le = !0, We = 1 << ++xt, xt <= Fn ? Mr(this) : $o(this), this.fn();
    } finally {
      xt <= Fn && Sr(this), We = 1 << --xt, ne = this.parent, Le = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    ne === this ? this.deferStop = !0 : this.active && ($o(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function $o(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Le = !0;
const Ns = [];
function it() {
  Ns.push(Le), Le = !1;
}
function ct() {
  const e = Ns.pop();
  Le = e === void 0 ? !0 : e;
}
function Q(e, t, n) {
  if (Le && ne) {
    let o = jn.get(e);
    o || jn.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || o.set(n, s = $t());
    const r = process.env.NODE_ENV !== "production" ? { effect: ne, target: e, type: t, key: n } : void 0;
    Un(s, r);
  }
}
function Un(e, t) {
  let n = !1;
  xt <= Fn ? Es(e) || (e.n |= We, n = !gs(e)) : n = !e.has(ne), n && (e.add(ne), ne.deps.push(e), process.env.NODE_ENV !== "production" && ne.onTrack && ne.onTrack(
    W(
      {
        effect: ne
      },
      t
    )
  ));
}
function De(e, t, n, o, s, r) {
  const c = jn.get(e);
  if (!c)
    return;
  let l = [];
  if (t === "clear")
    l = [...c.values()];
  else if (n === "length" && C(e)) {
    const a = Number(o);
    c.forEach((h, p) => {
      (p === "length" || !Nt(p) && p >= a) && l.push(h);
    });
  } else
    switch (n !== void 0 && l.push(c.get(n)), t) {
      case "add":
        C(e) ? oo(n) && l.push(c.get("length")) : (l.push(c.get(Qe)), Ze(e) && l.push(c.get(Hn)));
        break;
      case "delete":
        C(e) || (l.push(c.get(Qe)), Ze(e) && l.push(c.get(Hn)));
        break;
      case "set":
        Ze(e) && l.push(c.get(Qe));
        break;
    }
  const u = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: s, oldTarget: r } : void 0;
  if (l.length === 1)
    l[0] && (process.env.NODE_ENV !== "production" ? dt(l[0], u) : dt(l[0]));
  else {
    const a = [];
    for (const h of l)
      h && a.push(...h);
    process.env.NODE_ENV !== "production" ? dt($t(a), u) : dt($t(a));
  }
}
function dt(e, t) {
  const n = C(e) ? e : [...e];
  for (const o of n)
    o.computed && Io(o, t);
  for (const o of n)
    o.computed || Io(o, t);
}
function Io(e, t) {
  (e !== ne || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(W({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const jr = /* @__PURE__ */ Et("__proto__,__v_isRef,__isVue"), vs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Nt)
), Ro = /* @__PURE__ */ Fr();
function Fr() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = I(this);
      for (let r = 0, c = this.length; r < c; r++)
        Q(o, "get", r + "");
      const s = o[t](...n);
      return s === -1 || s === !1 ? o[t](...n.map(I)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      it();
      const o = I(this)[t].apply(this, n);
      return ct(), o;
    };
  }), e;
}
function Hr(e) {
  const t = I(this);
  return Q(t, "has", e), t.hasOwnProperty(e);
}
class bs {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._shallow = n;
  }
  get(t, n, o) {
    const s = this._isReadonly, r = this._shallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return o === (s ? r ? Cs : Vs : r ? Ds : xs).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const c = C(t);
    if (!s) {
      if (c && R(Ro, n))
        return Reflect.get(Ro, n, o);
      if (n === "hasOwnProperty")
        return Hr;
    }
    const l = Reflect.get(t, n, o);
    return (Nt(n) ? vs.has(n) : jr(n)) || (s || Q(t, "get", n), r) ? l : Y(l) ? c && oo(n) ? l : l.value : B(l) ? s ? Ps(l) : lo(l) : l;
  }
}
class ys extends bs {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let r = t[n];
    if (ke(r) && Y(r) && !Y(o))
      return !1;
    if (!this._shallow && (!rn(o) && !ke(o) && (r = I(r), o = I(o)), !C(t) && Y(r) && !Y(o)))
      return r.value = o, !0;
    const c = C(t) && oo(n) ? Number(n) < t.length : R(t, n), l = Reflect.set(t, n, o, s);
    return t === I(s) && (c ? st(o, r) && De(t, "set", n, o, r) : De(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = R(t, n), s = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && De(t, "delete", n, void 0, s), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Nt(n) || !vs.has(n)) && Q(t, "has", n), o;
  }
  ownKeys(t) {
    return Q(
      t,
      "iterate",
      C(t) ? "length" : Qe
    ), Reflect.ownKeys(t);
  }
}
class Os extends bs {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && Sn(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && Sn(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Ur = /* @__PURE__ */ new ys(), Kr = /* @__PURE__ */ new Os(), Lr = /* @__PURE__ */ new ys(
  !0
), Br = /* @__PURE__ */ new Os(!0), co = (e) => e, _n = (e) => Reflect.getPrototypeOf(e);
function Lt(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = I(e), r = I(t);
  n || (st(t, r) && Q(s, "get", t), Q(s, "get", r));
  const { has: c } = _n(s), l = o ? co : n ? fo : It;
  if (c.call(s, t))
    return l(e.get(t));
  if (c.call(s, r))
    return l(e.get(r));
  e !== s && e.get(t);
}
function Bt(e, t = !1) {
  const n = this.__v_raw, o = I(n), s = I(e);
  return t || (st(e, s) && Q(o, "has", e), Q(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function Wt(e, t = !1) {
  return e = e.__v_raw, !t && Q(I(e), "iterate", Qe), Reflect.get(e, "size", e);
}
function Ao(e) {
  e = I(e);
  const t = I(this);
  return _n(t).has.call(t, e) || (t.add(e), De(t, "add", e, e)), this;
}
function Mo(e, t) {
  t = I(t);
  const n = I(this), { has: o, get: s } = _n(n);
  let r = o.call(n, e);
  r ? process.env.NODE_ENV !== "production" && ws(n, o, e) : (e = I(e), r = o.call(n, e));
  const c = s.call(n, e);
  return n.set(e, t), r ? st(t, c) && De(n, "set", e, t, c) : De(n, "add", e, t), this;
}
function So(e) {
  const t = I(this), { has: n, get: o } = _n(t);
  let s = n.call(t, e);
  s ? process.env.NODE_ENV !== "production" && ws(t, n, e) : (e = I(e), s = n.call(t, e));
  const r = o ? o.call(t, e) : void 0, c = t.delete(e);
  return s && De(t, "delete", e, void 0, r), c;
}
function jo() {
  const e = I(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? Ze(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && De(e, "clear", void 0, void 0, n), o;
}
function kt(e, t) {
  return function(o, s) {
    const r = this, c = r.__v_raw, l = I(c), u = t ? co : e ? fo : It;
    return !e && Q(l, "iterate", Qe), c.forEach((a, h) => o.call(s, u(a), u(h), r));
  };
}
function zt(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, r = I(s), c = Ze(r), l = e === "entries" || e === Symbol.iterator && c, u = e === "keys" && c, a = s[e](...o), h = n ? co : t ? fo : It;
    return !t && Q(
      r,
      "iterate",
      u ? Hn : Qe
    ), {
      // iterator protocol
      next() {
        const { value: p, done: N } = a.next();
        return N ? { value: p, done: N } : {
          value: l ? [h(p[0]), h(p[1])] : h(p),
          done: N
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Fe(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${hn(e)} operation ${n}failed: target is readonly.`,
        I(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Wr() {
  const e = {
    get(r) {
      return Lt(this, r);
    },
    get size() {
      return Wt(this);
    },
    has: Bt,
    add: Ao,
    set: Mo,
    delete: So,
    clear: jo,
    forEach: kt(!1, !1)
  }, t = {
    get(r) {
      return Lt(this, r, !1, !0);
    },
    get size() {
      return Wt(this);
    },
    has: Bt,
    add: Ao,
    set: Mo,
    delete: So,
    clear: jo,
    forEach: kt(!1, !0)
  }, n = {
    get(r) {
      return Lt(this, r, !0);
    },
    get size() {
      return Wt(this, !0);
    },
    has(r) {
      return Bt.call(this, r, !0);
    },
    add: Fe("add"),
    set: Fe("set"),
    delete: Fe("delete"),
    clear: Fe("clear"),
    forEach: kt(!0, !1)
  }, o = {
    get(r) {
      return Lt(this, r, !0, !0);
    },
    get size() {
      return Wt(this, !0);
    },
    has(r) {
      return Bt.call(this, r, !0);
    },
    add: Fe("add"),
    set: Fe("set"),
    delete: Fe("delete"),
    clear: Fe("clear"),
    forEach: kt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    e[r] = zt(
      r,
      !1,
      !1
    ), n[r] = zt(
      r,
      !0,
      !1
    ), t[r] = zt(
      r,
      !1,
      !0
    ), o[r] = zt(
      r,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    o
  ];
}
const [
  kr,
  zr,
  qr,
  Jr
] = /* @__PURE__ */ Wr();
function mn(e, t) {
  const n = t ? e ? Jr : qr : e ? zr : kr;
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    R(n, s) && s in o ? n : o,
    s,
    r
  );
}
const Yr = {
  get: /* @__PURE__ */ mn(!1, !1)
}, Xr = {
  get: /* @__PURE__ */ mn(!1, !0)
}, Zr = {
  get: /* @__PURE__ */ mn(!0, !1)
}, Qr = {
  get: /* @__PURE__ */ mn(!0, !0)
};
function ws(e, t, n) {
  const o = I(n);
  if (o !== n && t.call(e, o)) {
    const s = no(e);
    console.warn(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const xs = /* @__PURE__ */ new WeakMap(), Ds = /* @__PURE__ */ new WeakMap(), Vs = /* @__PURE__ */ new WeakMap(), Cs = /* @__PURE__ */ new WeakMap();
function Gr(e) {
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
function ei(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Gr(no(e));
}
function lo(e) {
  return ke(e) ? e : gn(
    e,
    !1,
    Ur,
    Yr,
    xs
  );
}
function ti(e) {
  return gn(
    e,
    !1,
    Lr,
    Xr,
    Ds
  );
}
function Ps(e) {
  return gn(
    e,
    !0,
    Kr,
    Zr,
    Vs
  );
}
function Dt(e) {
  return gn(
    e,
    !0,
    Br,
    Qr,
    Cs
  );
}
function gn(e, t, n, o, s) {
  if (!B(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const c = ei(e);
  if (c === 0)
    return e;
  const l = new Proxy(
    e,
    c === 2 ? o : n
  );
  return s.set(e, l), l;
}
function Ge(e) {
  return ke(e) ? Ge(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ke(e) {
  return !!(e && e.__v_isReadonly);
}
function rn(e) {
  return !!(e && e.__v_isShallow);
}
function Kn(e) {
  return Ge(e) || ke(e);
}
function I(e) {
  const t = e && e.__v_raw;
  return t ? I(t) : e;
}
function Ts(e) {
  return on(e, "__v_skip", !0), e;
}
const It = (e) => B(e) ? lo(e) : e, fo = (e) => B(e) ? Ps(e) : e;
function $s(e) {
  Le && ne && (e = I(e), process.env.NODE_ENV !== "production" ? Un(e.dep || (e.dep = $t()), {
    target: e,
    type: "get",
    key: "value"
  }) : Un(e.dep || (e.dep = $t())));
}
function Is(e, t) {
  e = I(e);
  const n = e.dep;
  n && (process.env.NODE_ENV !== "production" ? dt(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : dt(n));
}
function Y(e) {
  return !!(e && e.__v_isRef === !0);
}
function ni(e) {
  return oi(e, !1);
}
function oi(e, t) {
  return Y(e) ? e : new si(e, t);
}
class si {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : I(t), this._value = n ? t : It(t);
  }
  get value() {
    return $s(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || rn(t) || ke(t);
    t = n ? t : I(t), st(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : It(t), Is(this, t));
  }
}
function Rs(e) {
  return Y(e) ? e.value : e;
}
const ri = {
  get: (e, t, n) => Rs(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return Y(s) && !Y(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function As(e) {
  return Ge(e) ? e : new Proxy(e, ri);
}
class ii {
  constructor(t, n, o, s) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new io(t, () => {
      this._dirty || (this._dirty = !0, Is(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = o;
  }
  get value() {
    const t = I(this);
    return $s(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
function ci(e, t, n = !1) {
  let o, s;
  const r = P(e);
  r ? (o = e, s = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : X) : (o = e.get, s = e.set);
  const c = new ii(o, s, r || !s, n);
  return process.env.NODE_ENV !== "production" && t && !n && (c.effect.onTrack = t.onTrack, c.effect.onTrigger = t.onTrigger), c;
}
const et = [];
function Yt(e) {
  et.push(e);
}
function Xt() {
  et.pop();
}
function y(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  it();
  const n = et.length ? et[et.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = li();
  if (o)
    Re(
      o,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        s.map(
          ({ vnode: r }) => `at <${On(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...fi(s)), console.warn(...r);
  }
  ct();
}
function li() {
  let e = et[et.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function fi(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...ui(n));
  }), t;
}
function ui({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${On(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [s, ...ai(e.props), r] : [s + r];
}
function ai(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Ms(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Ms(e, t, n) {
  return z(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Y(t) ? (t = Ms(e, I(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : P(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = I(t), n ? t : [`${e}=`, t]);
}
const uo = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function Re(e, t, n, o) {
  let s;
  try {
    s = o ? e(...o) : e();
  } catch (r) {
    En(r, t, n);
  }
  return s;
}
function he(e, t, n, o) {
  if (P(e)) {
    const r = Re(e, t, n, o);
    return r && to(r) && r.catch((c) => {
      En(c, t, n);
    }), r;
  }
  const s = [];
  for (let r = 0; r < e.length; r++)
    s.push(he(e[r], t, n, o));
  return s;
}
function En(e, t, n, o = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const c = t.proxy, l = process.env.NODE_ENV !== "production" ? uo[n] : n;
    for (; r; ) {
      const a = r.ec;
      if (a) {
        for (let h = 0; h < a.length; h++)
          if (a[h](e, c, l) === !1)
            return;
      }
      r = r.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Re(
        u,
        null,
        10,
        [e, c, l]
      );
      return;
    }
  }
  pi(e, n, s, o);
}
function pi(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = uo[t];
    if (n && Yt(n), y(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Xt(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Rt = !1, Ln = !1;
const G = [];
let we = 0;
const mt = [];
let ye = null, He = 0;
const Ss = /* @__PURE__ */ Promise.resolve();
let ao = null;
const di = 100;
function js(e) {
  const t = ao || Ss;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function hi(e) {
  let t = we + 1, n = G.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = G[o], r = At(s);
    r < e || r === e && s.pre ? t = o + 1 : n = o;
  }
  return t;
}
function Nn(e) {
  (!G.length || !G.includes(
    e,
    Rt && e.allowRecurse ? we + 1 : we
  )) && (e.id == null ? G.push(e) : G.splice(hi(e.id), 0, e), Fs());
}
function Fs() {
  !Rt && !Ln && (Ln = !0, ao = Ss.then(Ks));
}
function _i(e) {
  const t = G.indexOf(e);
  t > we && G.splice(t, 1);
}
function Hs(e) {
  C(e) ? mt.push(...e) : (!ye || !ye.includes(
    e,
    e.allowRecurse ? He + 1 : He
  )) && mt.push(e), Fs();
}
function Fo(e, t, n = Rt ? we + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < G.length; n++) {
    const o = G[n];
    if (o && o.pre) {
      if (e && o.id !== e.uid || process.env.NODE_ENV !== "production" && po(t, o))
        continue;
      G.splice(n, 1), n--, o();
    }
  }
}
function Us(e) {
  if (mt.length) {
    const t = [...new Set(mt)];
    if (mt.length = 0, ye) {
      ye.push(...t);
      return;
    }
    for (ye = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ye.sort((n, o) => At(n) - At(o)), He = 0; He < ye.length; He++)
      process.env.NODE_ENV !== "production" && po(e, ye[He]) || ye[He]();
    ye = null, He = 0;
  }
}
const At = (e) => e.id == null ? 1 / 0 : e.id, mi = (e, t) => {
  const n = At(e) - At(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Ks(e) {
  Ln = !1, Rt = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), G.sort(mi);
  const t = process.env.NODE_ENV !== "production" ? (n) => po(e, n) : X;
  try {
    for (we = 0; we < G.length; we++) {
      const n = G[we];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        Re(n, null, 14);
      }
    }
  } finally {
    we = 0, G.length = 0, Us(e), Rt = !1, ao = null, (G.length || mt.length) && Ks(e);
  }
}
function po(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > di) {
      const o = t.ownerInstance, s = o && mr(o.type);
      return y(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let tt = !1;
const pt = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (sn().__VUE_HMR_RUNTIME__ = {
  createRecord: Pn(Ls),
  rerender: Pn(Ni),
  reload: Pn(vi)
});
const rt = /* @__PURE__ */ new Map();
function gi(e) {
  const t = e.type.__hmrId;
  let n = rt.get(t);
  n || (Ls(t, e.type), n = rt.get(t)), n.instances.add(e);
}
function Ei(e) {
  rt.get(e.type.__hmrId).instances.delete(e);
}
function Ls(e, t) {
  return rt.has(e) ? !1 : (rt.set(e, {
    initialDef: Pt(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Pt(e) {
  return gr(e) ? e.__vccOpts : e;
}
function Ni(e, t) {
  const n = rt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Pt(o.type).render = t), o.renderCache = [], tt = !0, o.update(), tt = !1;
  }));
}
function vi(e, t) {
  const n = rt.get(e);
  if (!n)
    return;
  t = Pt(t), Ho(n.initialDef, t);
  const o = [...n.instances];
  for (const s of o) {
    const r = Pt(s.type);
    pt.has(r) || (r !== n.initialDef && Ho(r, t), pt.add(r)), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (pt.add(r), s.ceReload(t.styles), pt.delete(r)) : s.parent ? Nn(s.parent.update) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Hs(() => {
    for (const s of o)
      pt.delete(
        Pt(s.type)
      );
  });
}
function Ho(e, t) {
  W(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Pn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let xe, Vt = [], Bn = !1;
function Ft(e, ...t) {
  xe ? xe.emit(e, ...t) : Bn || Vt.push({ event: e, args: t });
}
function Bs(e, t) {
  var n, o;
  xe = e, xe ? (xe.enabled = !0, Vt.forEach(({ event: s, args: r }) => xe.emit(s, ...r)), Vt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Bs(r, t);
  }), setTimeout(() => {
    xe || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Bn = !0, Vt = []);
  }, 3e3)) : (Bn = !0, Vt = []);
}
function bi(e, t) {
  Ft("app:init", e, t, {
    Fragment: Oe,
    Text: Ht,
    Comment: _e,
    Static: en
  });
}
function yi(e) {
  Ft("app:unmount", e);
}
const Oi = /* @__PURE__ */ ho(
  "component:added"
  /* COMPONENT_ADDED */
), Ws = /* @__PURE__ */ ho(
  "component:updated"
  /* COMPONENT_UPDATED */
), wi = /* @__PURE__ */ ho(
  "component:removed"
  /* COMPONENT_REMOVED */
), xi = (e) => {
  xe && typeof xe.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !xe.cleanupBuffer(e) && wi(e);
};
function ho(e) {
  return (t) => {
    Ft(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Di = /* @__PURE__ */ ks(
  "perf:start"
  /* PERFORMANCE_START */
), Vi = /* @__PURE__ */ ks(
  "perf:end"
  /* PERFORMANCE_END */
);
function ks(e) {
  return (t, n, o) => {
    Ft(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Ci(e, t, n) {
  Ft(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
function Pi(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || L;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: h,
      propsOptions: [p]
    } = e;
    if (h)
      if (!(t in h))
        (!p || !(Ye(t) in p)) && y(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Ye(t)}" prop.`
        );
      else {
        const N = h[t];
        P(N) && (N(...n) || y(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let s = n;
  const r = t.startsWith("update:"), c = r && t.slice(7);
  if (c && c in o) {
    const h = `${c === "modelValue" ? "model" : c}Modifiers`, { number: p, trim: N } = o[h] || L;
    N && (s = n.map((x) => z(x) ? x.trim() : x)), p && (s = n.map(wr));
  }
  if (process.env.NODE_ENV !== "production" && Ci(e, t, s), process.env.NODE_ENV !== "production") {
    const h = t.toLowerCase();
    h !== t && o[Ye(h)] && y(
      `Event "${h}" is emitted in component ${On(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${ie(t)}" instead of "${t}".`
    );
  }
  let l, u = o[l = Ye(t)] || // also try camelCase event handler (#2249)
  o[l = Ye(Ie(t))];
  !u && r && (u = o[l = Ye(ie(t))]), u && he(
    u,
    e,
    6,
    s
  );
  const a = o[l + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, he(
      a,
      e,
      6,
      s
    );
  }
}
function zs(e, t, n = !1) {
  const o = t.emitsCache, s = o.get(e);
  if (s !== void 0)
    return s;
  const r = e.emits;
  let c = {}, l = !1;
  if (!P(e)) {
    const u = (a) => {
      const h = zs(a, t, !0);
      h && (l = !0, W(c, h));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !l ? (B(e) && o.set(e, null), null) : (C(r) ? r.forEach((u) => c[u] = null) : W(c, r), B(e) && o.set(e, c), c);
}
function vn(e, t) {
  return !e || !jt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), R(e, t[0].toLowerCase() + t.slice(1)) || R(e, ie(t)) || R(e, t));
}
let ce = null, qs = null;
function cn(e) {
  const t = ce;
  return ce = e, qs = e && e.type.__scopeId || null, t;
}
function Ti(e, t = ce, n) {
  if (!t || e._n)
    return e;
  const o = (...s) => {
    o._d && Zo(-1);
    const r = cn(t);
    let c;
    try {
      c = e(...s);
    } finally {
      cn(r), o._d && Zo(1);
    }
    return process.env.NODE_ENV !== "production" && Ws(t), c;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let Wn = !1;
function ln() {
  Wn = !0;
}
function Tn(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: s,
    props: r,
    propsOptions: [c],
    slots: l,
    attrs: u,
    emit: a,
    render: h,
    renderCache: p,
    data: N,
    setupState: x,
    ctx: F,
    inheritAttrs: M
  } = e;
  let k, J;
  const me = cn(e);
  process.env.NODE_ENV !== "production" && (Wn = !1);
  try {
    if (n.shapeFlag & 4) {
      const T = s || o, Ve = process.env.NODE_ENV !== "production" && x.__isScriptSetup ? new Proxy(T, {
        get(Ee, le, re) {
          return y(
            `Property '${String(
              le
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(Ee, le, re);
        }
      }) : T;
      k = pe(
        h.call(
          Ve,
          T,
          p,
          r,
          x,
          N,
          F
        )
      ), J = u;
    } else {
      const T = t;
      process.env.NODE_ENV !== "production" && u === r && ln(), k = pe(
        T.length > 1 ? T(
          r,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return ln(), u;
            },
            slots: l,
            emit: a
          } : { attrs: u, slots: l, emit: a }
        ) : T(
          r,
          null
          /* we know it doesn't need it */
        )
      ), J = t.props ? u : Ii(u);
    }
  } catch (T) {
    Tt.length = 0, En(T, e, 1), k = Be(_e);
  }
  let H = k, ge;
  if (process.env.NODE_ENV !== "production" && k.patchFlag > 0 && k.patchFlag & 2048 && ([H, ge] = $i(k)), J && M !== !1) {
    const T = Object.keys(J), { shapeFlag: Ve } = H;
    if (T.length) {
      if (Ve & 7)
        c && T.some(nn) && (J = Ri(
          J,
          c
        )), H = ze(H, J);
      else if (process.env.NODE_ENV !== "production" && !Wn && H.type !== _e) {
        const Ee = Object.keys(u), le = [], re = [];
        for (let Ce = 0, Me = Ee.length; Ce < Me; Ce++) {
          const fe = Ee[Ce];
          jt(fe) ? nn(fe) || le.push(fe[2].toLowerCase() + fe.slice(3)) : re.push(fe);
        }
        re.length && y(
          `Extraneous non-props attributes (${re.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), le.length && y(
          `Extraneous non-emits event listeners (${le.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Uo(H) && y(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), H = ze(H), H.dirs = H.dirs ? H.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Uo(H) && y(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), H.transition = n.transition), process.env.NODE_ENV !== "production" && ge ? ge(H) : k = H, cn(me), k;
}
const $i = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Js(t);
  if (!o)
    return [e, void 0];
  const s = t.indexOf(o), r = n ? n.indexOf(o) : -1, c = (l) => {
    t[s] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [pe(o), c];
};
function Js(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (No(o)) {
      if (o.type !== _e || o.children === "v-if") {
        if (t)
          return;
        t = o;
      }
    } else
      return;
  }
  return t;
}
const Ii = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || jt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ri = (e, t) => {
  const n = {};
  for (const o in e)
    (!nn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Uo = (e) => e.shapeFlag & 7 || e.type === _e;
function Ai(e, t, n) {
  const { props: o, children: s, component: r } = e, { props: c, children: l, patchFlag: u } = t, a = r.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (s || l) && tt || t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return o ? Ko(o, c, a) : !!c;
    if (u & 8) {
      const h = t.dynamicProps;
      for (let p = 0; p < h.length; p++) {
        const N = h[p];
        if (c[N] !== o[N] && !vn(a, N))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : o === c ? !1 : o ? c ? Ko(o, c, a) : !0 : !!c;
  return !1;
}
function Ko(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < o.length; s++) {
    const r = o[s];
    if (t[r] !== e[r] && !vn(n, r))
      return !0;
  }
  return !1;
}
function Mi({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Si = Symbol.for("v-ndc"), ji = (e) => e.__isSuspense;
function Fi(e, t) {
  t && t.pendingBranch ? C(e) ? t.effects.push(...e) : t.effects.push(e) : Hs(e);
}
const qt = {};
function $n(e, t, n) {
  return process.env.NODE_ENV !== "production" && !P(t) && y(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Ys(e, t, n);
}
function Ys(e, t, { immediate: n, deep: o, flush: s, onTrack: r, onTrigger: c } = L) {
  var l;
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && y(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && y(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const u = (T) => {
    y(
      "Invalid watch source: ",
      T,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, a = Ar() === ((l = Z) == null ? void 0 : l.scope) ? Z : null;
  let h, p = !1, N = !1;
  if (Y(e) ? (h = () => e.value, p = rn(e)) : Ge(e) ? (h = () => e, o = !0) : C(e) ? (N = !0, p = e.some((T) => Ge(T) || rn(T)), h = () => e.map((T) => {
    if (Y(T))
      return T.value;
    if (Ge(T))
      return ht(T);
    if (P(T))
      return Re(T, a, 2);
    process.env.NODE_ENV !== "production" && u(T);
  })) : P(e) ? t ? h = () => Re(e, a, 2) : h = () => {
    if (!(a && a.isUnmounted))
      return x && x(), he(
        e,
        a,
        3,
        [F]
      );
  } : (h = X, process.env.NODE_ENV !== "production" && u(e)), t && o) {
    const T = h;
    h = () => ht(T());
  }
  let x, F = (T) => {
    x = H.onStop = () => {
      Re(T, a, 4), x = H.onStop = void 0;
    };
  }, M;
  if (St)
    if (F = X, t ? n && he(t, a, 3, [
      h(),
      N ? [] : void 0,
      F
    ]) : h(), s === "sync") {
      const T = Jc();
      M = T.__watcherHandles || (T.__watcherHandles = []);
    } else
      return X;
  let k = N ? new Array(e.length).fill(qt) : qt;
  const J = () => {
    if (H.active)
      if (t) {
        const T = H.run();
        (o || p || (N ? T.some((Ve, Ee) => st(Ve, k[Ee])) : st(T, k))) && (x && x(), he(t, a, 3, [
          T,
          // pass undefined as the old value when it's changed for the first time
          k === qt ? void 0 : N && k[0] === qt ? [] : k,
          F
        ]), k = T);
      } else
        H.run();
  };
  J.allowRecurse = !!t;
  let me;
  s === "sync" ? me = J : s === "post" ? me = () => se(J, a && a.suspense) : (J.pre = !0, a && (J.id = a.uid), me = () => Nn(J));
  const H = new io(h, me);
  process.env.NODE_ENV !== "production" && (H.onTrack = r, H.onTrigger = c), t ? n ? J() : k = H.run() : s === "post" ? se(
    H.run.bind(H),
    a && a.suspense
  ) : H.run();
  const ge = () => {
    H.stop(), a && a.scope && eo(a.scope.effects, H);
  };
  return M && M.push(ge), ge;
}
function Hi(e, t, n) {
  const o = this.proxy, s = z(e) ? e.includes(".") ? Xs(o, e) : () => o[e] : e.bind(o, o);
  let r;
  P(t) ? r = t : (r = t.handler, n = t);
  const c = Z;
  gt(this);
  const l = Ys(s, r.bind(o), n);
  return c ? gt(c) : ot(), l;
}
function Xs(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
function ht(e, t) {
  if (!B(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), Y(e))
    ht(e.value, t);
  else if (C(e))
    for (let n = 0; n < e.length; n++)
      ht(e[n], t);
  else if (ps(e) || Ze(e))
    e.forEach((n) => {
      ht(n, t);
    });
  else if (hs(e))
    for (const n in e)
      ht(e[n], t);
  return e;
}
function Zs(e) {
  br(e) && y("Do not use built-in directive ids as custom directive id: " + e);
}
function qe(e, t, n, o) {
  const s = e.dirs, r = t && t.dirs;
  for (let c = 0; c < s.length; c++) {
    const l = s[c];
    r && (l.oldValue = r[c].value);
    let u = l.dir[o];
    u && (it(), he(u, n, 8, [
      e.el,
      l,
      e,
      t
    ]), ct());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Qs(e, t) {
  return P(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => W({ name: e.name }, t, { setup: e }))()
  ) : e;
}
const Zt = (e) => !!e.type.__asyncLoader, _o = (e) => e.type.__isKeepAlive;
function Ui(e, t) {
  Gs(e, "a", t);
}
function Ki(e, t) {
  Gs(e, "da", t);
}
function Gs(e, t, n = Z) {
  const o = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (bn(t, o, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      _o(s.parent.vnode) && Li(o, t, n, s), s = s.parent;
  }
}
function Li(e, t, n, o) {
  const s = bn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  er(() => {
    eo(o[t], s);
  }, n);
}
function bn(e, t, n = Z, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...c) => {
      if (n.isUnmounted)
        return;
      it(), gt(n);
      const l = he(t, n, e, c);
      return ot(), ct(), l;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = Ye(uo[e].replace(/ hook$/, ""));
    y(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Ae = (e) => (t, n = Z) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!St || e === "sp") && bn(e, (...o) => t(...o), n)
), Bi = Ae("bm"), Wi = Ae("m"), ki = Ae("bu"), zi = Ae("u"), qi = Ae("bum"), er = Ae("um"), Ji = Ae("sp"), Yi = Ae(
  "rtg"
), Xi = Ae(
  "rtc"
);
function Zi(e, t = Z) {
  bn("ec", e, t);
}
const kn = (e) => e ? hr(e) ? yo(e) || e.proxy : kn(e.parent) : null, nt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ W(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Dt(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Dt(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Dt(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Dt(e.refs) : e.refs,
    $parent: (e) => kn(e.parent),
    $root: (e) => kn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => go(e),
    $forceUpdate: (e) => e.f || (e.f = () => Nn(e.update)),
    $nextTick: (e) => e.n || (e.n = js.bind(e.proxy)),
    $watch: (e) => Hi.bind(e)
  })
), mo = (e) => e === "_" || e === "$", In = (e, t) => e !== L && !e.__isScriptSetup && R(e, t), tr = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: s, props: r, accessCache: c, type: l, appContext: u } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let a;
    if (t[0] !== "$") {
      const x = c[t];
      if (x !== void 0)
        switch (x) {
          case 1:
            return o[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (In(o, t))
          return c[t] = 1, o[t];
        if (s !== L && R(s, t))
          return c[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && R(a, t)
        )
          return c[t] = 3, r[t];
        if (n !== L && R(n, t))
          return c[t] = 4, n[t];
        zn && (c[t] = 0);
      }
    }
    const h = nt[t];
    let p, N;
    if (h)
      return t === "$attrs" ? (Q(e, "get", t), process.env.NODE_ENV !== "production" && ln()) : process.env.NODE_ENV !== "production" && t === "$slots" && Q(e, "get", t), h(e);
    if (
      // css module (injected by vue-loader)
      (p = l.__cssModules) && (p = p[t])
    )
      return p;
    if (n !== L && R(n, t))
      return c[t] = 4, n[t];
    if (
      // global properties
      N = u.config.globalProperties, R(N, t)
    )
      return N[t];
    process.env.NODE_ENV !== "production" && ce && (!z(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== L && mo(t[0]) && R(s, t) ? y(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === ce && y(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: r } = e;
    return In(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && R(s, t) ? (y(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== L && R(o, t) ? (o[t] = n, !0) : R(e.props, t) ? (process.env.NODE_ENV !== "production" && y(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && y(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: s, propsOptions: r }
  }, c) {
    let l;
    return !!n[c] || e !== L && R(e, c) || In(t, c) || (l = r[0]) && R(l, c) || R(o, c) || R(nt, c) || R(s.config.globalProperties, c);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : R(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (tr.ownKeys = (e) => (y(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Qi(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(nt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => nt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: X
    });
  }), t;
}
function Gi(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: X
    });
  });
}
function ec(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(I(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (mo(o[0])) {
        y(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: X
      });
    }
  });
}
function Lo(e) {
  return C(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function tc() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? y(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let zn = !0;
function nc(e) {
  const t = go(e), n = e.proxy, o = e.ctx;
  zn = !1, t.beforeCreate && Bo(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: r,
    methods: c,
    watch: l,
    provide: u,
    inject: a,
    // lifecycle
    created: h,
    beforeMount: p,
    mounted: N,
    beforeUpdate: x,
    updated: F,
    activated: M,
    deactivated: k,
    beforeDestroy: J,
    beforeUnmount: me,
    destroyed: H,
    unmounted: ge,
    render: T,
    renderTracked: Ve,
    renderTriggered: Ee,
    errorCaptured: le,
    serverPrefetch: re,
    // public API
    expose: Ce,
    inheritAttrs: Me,
    // assets
    components: fe,
    directives: Ut,
    filters: wo
  } = t, Se = process.env.NODE_ENV !== "production" ? tc() : null;
  if (process.env.NODE_ENV !== "production") {
    const [S] = e.propsOptions;
    if (S)
      for (const j in S)
        Se("Props", j);
  }
  if (a && oc(a, o, Se), c)
    for (const S in c) {
      const j = c[S];
      P(j) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, S, {
        value: j.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[S] = j.bind(n), process.env.NODE_ENV !== "production" && Se("Methods", S)) : process.env.NODE_ENV !== "production" && y(
        `Method "${S}" has type "${typeof j}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (s) {
    process.env.NODE_ENV !== "production" && !P(s) && y(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const S = s.call(n, n);
    if (process.env.NODE_ENV !== "production" && to(S) && y(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !B(S))
      process.env.NODE_ENV !== "production" && y("data() should return an object.");
    else if (e.data = lo(S), process.env.NODE_ENV !== "production")
      for (const j in S)
        Se("Data", j), mo(j[0]) || Object.defineProperty(o, j, {
          configurable: !0,
          enumerable: !0,
          get: () => S[j],
          set: X
        });
  }
  if (zn = !0, r)
    for (const S in r) {
      const j = r[S], Ne = P(j) ? j.bind(n, n) : P(j.get) ? j.get.bind(n, n) : X;
      process.env.NODE_ENV !== "production" && Ne === X && y(`Computed property "${S}" has no getter.`);
      const wn = !P(j) && P(j.set) ? j.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        y(
          `Write operation failed: computed property "${S}" is readonly.`
        );
      } : X, vt = zc({
        get: Ne,
        set: wn
      });
      Object.defineProperty(o, S, {
        enumerable: !0,
        configurable: !0,
        get: () => vt.value,
        set: (lt) => vt.value = lt
      }), process.env.NODE_ENV !== "production" && Se("Computed", S);
    }
  if (l)
    for (const S in l)
      nr(l[S], o, n, S);
  if (u) {
    const S = P(u) ? u.call(n) : u;
    Reflect.ownKeys(S).forEach((j) => {
      fc(j, S[j]);
    });
  }
  h && Bo(h, e, "c");
  function oe(S, j) {
    C(j) ? j.forEach((Ne) => S(Ne.bind(n))) : j && S(j.bind(n));
  }
  if (oe(Bi, p), oe(Wi, N), oe(ki, x), oe(zi, F), oe(Ui, M), oe(Ki, k), oe(Zi, le), oe(Xi, Ve), oe(Yi, Ee), oe(qi, me), oe(er, ge), oe(Ji, re), C(Ce))
    if (Ce.length) {
      const S = e.exposed || (e.exposed = {});
      Ce.forEach((j) => {
        Object.defineProperty(S, j, {
          get: () => n[j],
          set: (Ne) => n[j] = Ne
        });
      });
    } else
      e.exposed || (e.exposed = {});
  T && e.render === X && (e.render = T), Me != null && (e.inheritAttrs = Me), fe && (e.components = fe), Ut && (e.directives = Ut);
}
function oc(e, t, n = X) {
  C(e) && (e = qn(e));
  for (const o in e) {
    const s = e[o];
    let r;
    B(s) ? "default" in s ? r = Qt(
      s.from || o,
      s.default,
      !0
      /* treat default function as factory */
    ) : r = Qt(s.from || o) : r = Qt(s), Y(r) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (c) => r.value = c
    }) : t[o] = r, process.env.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Bo(e, t, n) {
  he(
    C(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function nr(e, t, n, o) {
  const s = o.includes(".") ? Xs(n, o) : () => n[o];
  if (z(e)) {
    const r = t[e];
    P(r) ? $n(s, r) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e}"`, r);
  } else if (P(e))
    $n(s, e.bind(n));
  else if (B(e))
    if (C(e))
      e.forEach((r) => nr(r, t, n, o));
    else {
      const r = P(e.handler) ? e.handler.bind(n) : t[e.handler];
      P(r) ? $n(s, r, e) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else
    process.env.NODE_ENV !== "production" && y(`Invalid watch option: "${o}"`, e);
}
function go(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: c }
  } = e.appContext, l = r.get(t);
  let u;
  return l ? u = l : !s.length && !n && !o ? u = t : (u = {}, s.length && s.forEach(
    (a) => fn(u, a, c, !0)
  ), fn(u, t, c)), B(t) && r.set(t, u), u;
}
function fn(e, t, n, o = !1) {
  const { mixins: s, extends: r } = t;
  r && fn(e, r, n, !0), s && s.forEach(
    (c) => fn(e, c, n, !0)
  );
  for (const c in t)
    if (o && c === "expose")
      process.env.NODE_ENV !== "production" && y(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = sc[c] || n && n[c];
      e[c] = l ? l(e[c], t[c]) : t[c];
    }
  return e;
}
const sc = {
  data: Wo,
  props: ko,
  emits: ko,
  // objects
  methods: Ct,
  computed: Ct,
  // lifecycle
  beforeCreate: te,
  created: te,
  beforeMount: te,
  mounted: te,
  beforeUpdate: te,
  updated: te,
  beforeDestroy: te,
  beforeUnmount: te,
  destroyed: te,
  unmounted: te,
  activated: te,
  deactivated: te,
  errorCaptured: te,
  serverPrefetch: te,
  // assets
  components: Ct,
  directives: Ct,
  // watch
  watch: ic,
  // provide / inject
  provide: Wo,
  inject: rc
};
function Wo(e, t) {
  return t ? e ? function() {
    return W(
      P(e) ? e.call(this, this) : e,
      P(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function rc(e, t) {
  return Ct(qn(e), qn(t));
}
function qn(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function te(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ct(e, t) {
  return e ? W(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ko(e, t) {
  return e ? C(e) && C(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : W(
    /* @__PURE__ */ Object.create(null),
    Lo(e),
    Lo(t ?? {})
  ) : t;
}
function ic(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = W(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = te(e[o], t[o]);
  return n;
}
function or() {
  return {
    app: null,
    config: {
      isNativeTag: as,
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
let cc = 0;
function lc(e, t) {
  return function(o, s = null) {
    P(o) || (o = W({}, o)), s != null && !B(s) && (process.env.NODE_ENV !== "production" && y("root props passed to app.mount() must be an object."), s = null);
    const r = or();
    process.env.NODE_ENV !== "production" && Object.defineProperty(r.config, "unwrapInjectedRef", {
      get() {
        return !0;
      },
      set() {
        y(
          "app.config.unwrapInjectedRef has been deprecated. 3.3 now always unwraps injected refs in Options API."
        );
      }
    });
    const c = /* @__PURE__ */ new WeakSet();
    let l = !1;
    const u = r.app = {
      _uid: cc++,
      _component: o,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: ts,
      get config() {
        return r.config;
      },
      set config(a) {
        process.env.NODE_ENV !== "production" && y(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(a, ...h) {
        return c.has(a) ? process.env.NODE_ENV !== "production" && y("Plugin has already been applied to target app.") : a && P(a.install) ? (c.add(a), a.install(u, ...h)) : P(a) ? (c.add(a), a(u, ...h)) : process.env.NODE_ENV !== "production" && y(
          'A plugin must either be a function or an object with an "install" function.'
        ), u;
      },
      mixin(a) {
        return r.mixins.includes(a) ? process.env.NODE_ENV !== "production" && y(
          "Mixin has already been applied to target app" + (a.name ? `: ${a.name}` : "")
        ) : r.mixins.push(a), u;
      },
      component(a, h) {
        return process.env.NODE_ENV !== "production" && Zn(a, r.config), h ? (process.env.NODE_ENV !== "production" && r.components[a] && y(`Component "${a}" has already been registered in target app.`), r.components[a] = h, u) : r.components[a];
      },
      directive(a, h) {
        return process.env.NODE_ENV !== "production" && Zs(a), h ? (process.env.NODE_ENV !== "production" && r.directives[a] && y(`Directive "${a}" has already been registered in target app.`), r.directives[a] = h, u) : r.directives[a];
      },
      mount(a, h, p) {
        if (l)
          process.env.NODE_ENV !== "production" && y(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && a.__vue_app__ && y(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const N = Be(o, s);
          return N.appContext = r, process.env.NODE_ENV !== "production" && (r.reload = () => {
            e(ze(N), a, p);
          }), h && t ? t(N, a) : e(N, a, p), l = !0, u._container = a, a.__vue_app__ = u, process.env.NODE_ENV !== "production" && (u._instance = N.component, bi(u, ts)), yo(N.component) || N.component.proxy;
        }
      },
      unmount() {
        l ? (e(null, u._container), process.env.NODE_ENV !== "production" && (u._instance = null, yi(u)), delete u._container.__vue_app__) : process.env.NODE_ENV !== "production" && y("Cannot unmount an app that is not mounted.");
      },
      provide(a, h) {
        return process.env.NODE_ENV !== "production" && a in r.provides && y(
          `App already provides property with key "${String(a)}". It will be overwritten with the new value.`
        ), r.provides[a] = h, u;
      },
      runWithContext(a) {
        un = u;
        try {
          return a();
        } finally {
          un = null;
        }
      }
    };
    return u;
  };
}
let un = null;
function fc(e, t) {
  if (!Z)
    process.env.NODE_ENV !== "production" && y("provide() can only be used inside setup().");
  else {
    let n = Z.provides;
    const o = Z.parent && Z.parent.provides;
    o === n && (n = Z.provides = Object.create(o)), n[e] = t;
  }
}
function Qt(e, t, n = !1) {
  const o = Z || ce;
  if (o || un) {
    const s = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : un._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && P(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && y(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && y("inject() can only be used inside setup() or functional components.");
}
function uc(e, t, n, o = !1) {
  const s = {}, r = {};
  on(r, yn, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), sr(e, t, s, r);
  for (const c in e.propsOptions[0])
    c in s || (s[c] = void 0);
  process.env.NODE_ENV !== "production" && ir(t || {}, s, e), n ? e.props = o ? s : ti(s) : e.type.props ? e.props = s : e.props = r, e.attrs = r;
}
function ac(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function pc(e, t, n, o) {
  const {
    props: s,
    attrs: r,
    vnode: { patchFlag: c }
  } = e, l = I(s), [u] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && ac(e)) && (o || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const h = e.vnode.dynamicProps;
      for (let p = 0; p < h.length; p++) {
        let N = h[p];
        if (vn(e.emitsOptions, N))
          continue;
        const x = t[N];
        if (u)
          if (R(r, N))
            x !== r[N] && (r[N] = x, a = !0);
          else {
            const F = Ie(N);
            s[F] = Jn(
              u,
              l,
              F,
              x,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          x !== r[N] && (r[N] = x, a = !0);
      }
    }
  } else {
    sr(e, t, s, r) && (a = !0);
    let h;
    for (const p in l)
      (!t || // for camelCase
      !R(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = ie(p)) === p || !R(t, h))) && (u ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[h] !== void 0) && (s[p] = Jn(
        u,
        l,
        p,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete s[p]);
    if (r !== l)
      for (const p in r)
        (!t || !R(t, p)) && (delete r[p], a = !0);
  }
  a && De(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && ir(t || {}, s, e);
}
function sr(e, t, n, o) {
  const [s, r] = e.propsOptions;
  let c = !1, l;
  if (t)
    for (let u in t) {
      if (Jt(u))
        continue;
      const a = t[u];
      let h;
      s && R(s, h = Ie(u)) ? !r || !r.includes(h) ? n[h] = a : (l || (l = {}))[h] = a : vn(e.emitsOptions, u) || (!(u in o) || a !== o[u]) && (o[u] = a, c = !0);
    }
  if (r) {
    const u = I(n), a = l || L;
    for (let h = 0; h < r.length; h++) {
      const p = r[h];
      n[p] = Jn(
        s,
        u,
        p,
        a[p],
        e,
        !R(a, p)
      );
    }
  }
  return c;
}
function Jn(e, t, n, o, s, r) {
  const c = e[n];
  if (c != null) {
    const l = R(c, "default");
    if (l && o === void 0) {
      const u = c.default;
      if (c.type !== Function && !c.skipFactory && P(u)) {
        const { propsDefaults: a } = s;
        n in a ? o = a[n] : (gt(s), o = a[n] = u.call(
          null,
          t
        ), ot());
      } else
        o = u;
    }
    c[
      0
      /* shouldCast */
    ] && (r && !l ? o = !1 : c[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === ie(n)) && (o = !0));
  }
  return o;
}
function rr(e, t, n = !1) {
  const o = t.propsCache, s = o.get(e);
  if (s)
    return s;
  const r = e.props, c = {}, l = [];
  let u = !1;
  if (!P(e)) {
    const h = (p) => {
      u = !0;
      const [N, x] = rr(p, t, !0);
      W(c, N), x && l.push(...x);
    };
    !n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!r && !u)
    return B(e) && o.set(e, _t), _t;
  if (C(r))
    for (let h = 0; h < r.length; h++) {
      process.env.NODE_ENV !== "production" && !z(r[h]) && y("props must be strings when using array syntax.", r[h]);
      const p = Ie(r[h]);
      zo(p) && (c[p] = L);
    }
  else if (r) {
    process.env.NODE_ENV !== "production" && !B(r) && y("invalid props options", r);
    for (const h in r) {
      const p = Ie(h);
      if (zo(p)) {
        const N = r[h], x = c[p] = C(N) || P(N) ? { type: N } : W({}, N);
        if (x) {
          const F = Jo(Boolean, x.type), M = Jo(String, x.type);
          x[
            0
            /* shouldCast */
          ] = F > -1, x[
            1
            /* shouldCastTrue */
          ] = M < 0 || F < M, (F > -1 || R(x, "default")) && l.push(p);
        }
      }
    }
  }
  const a = [c, l];
  return B(e) && o.set(e, a), a;
}
function zo(e) {
  return e[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && y(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Yn(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function qo(e, t) {
  return Yn(e) === Yn(t);
}
function Jo(e, t) {
  return C(t) ? t.findIndex((n) => qo(n, e)) : P(t) && qo(t, e) ? 0 : -1;
}
function ir(e, t, n) {
  const o = I(t), s = n.propsOptions[0];
  for (const r in s) {
    let c = s[r];
    c != null && dc(
      r,
      o[r],
      c,
      !R(e, r) && !R(e, ie(r))
    );
  }
}
function dc(e, t, n, o) {
  const { type: s, required: r, validator: c, skipCheck: l } = n;
  if (r && o) {
    y('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !r)) {
    if (s != null && s !== !0 && !l) {
      let u = !1;
      const a = C(s) ? s : [s], h = [];
      for (let p = 0; p < a.length && !u; p++) {
        const { valid: N, expectedType: x } = _c(t, a[p]);
        h.push(x || ""), u = N;
      }
      if (!u) {
        y(mc(e, t, h));
        return;
      }
    }
    c && !c(t) && y('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const hc = /* @__PURE__ */ Et(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function _c(e, t) {
  let n;
  const o = Yn(t);
  if (hc(o)) {
    const s = typeof e;
    n = s === o.toLowerCase(), !n && s === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = B(e) : o === "Array" ? n = C(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function mc(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(hn).join(" | ")}`;
  const s = n[0], r = no(t), c = Yo(t, s), l = Yo(t, r);
  return n.length === 1 && Xo(s) && !gc(s, r) && (o += ` with value ${c}`), o += `, got ${r} `, Xo(r) && (o += `with value ${l}.`), o;
}
function Yo(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Xo(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function gc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const cr = (e) => e[0] === "_" || e === "$stable", Eo = (e) => C(e) ? e.map(pe) : [pe(e)], Ec = (e, t, n) => {
  if (t._n)
    return t;
  const o = Ti((...s) => (process.env.NODE_ENV !== "production" && Z && y(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Eo(t(...s))), n);
  return o._c = !1, o;
}, lr = (e, t, n) => {
  const o = e._ctx;
  for (const s in e) {
    if (cr(s))
      continue;
    const r = e[s];
    if (P(r))
      t[s] = Ec(s, r, o);
    else if (r != null) {
      process.env.NODE_ENV !== "production" && y(
        `Non-function value encountered for slot "${s}". Prefer function slots for better performance.`
      );
      const c = Eo(r);
      t[s] = () => c;
    }
  }
}, fr = (e, t) => {
  process.env.NODE_ENV !== "production" && !_o(e.vnode) && y(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Eo(t);
  e.slots.default = () => n;
}, Nc = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = I(t), on(t, "_", n)) : lr(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && fr(e, t);
  on(e.slots, yn, 1);
}, vc = (e, t, n) => {
  const { vnode: o, slots: s } = e;
  let r = !0, c = L;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && tt ? (W(s, t), De(e, "set", "$slots")) : n && l === 1 ? r = !1 : (W(s, t), !n && l === 1 && delete s._) : (r = !t.$stable, lr(t, s)), c = t;
  } else
    t && (fr(e, t), c = { default: 1 });
  if (r)
    for (const l in s)
      !cr(l) && c[l] == null && delete s[l];
};
function Xn(e, t, n, o, s = !1) {
  if (C(e)) {
    e.forEach(
      (N, x) => Xn(
        N,
        t && (C(t) ? t[x] : t),
        n,
        o,
        s
      )
    );
    return;
  }
  if (Zt(o) && !s)
    return;
  const r = o.shapeFlag & 4 ? yo(o.component) || o.component.proxy : o.el, c = s ? null : r, { i: l, r: u } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    y(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const a = t && t.r, h = l.refs === L ? l.refs = {} : l.refs, p = l.setupState;
  if (a != null && a !== u && (z(a) ? (h[a] = null, R(p, a) && (p[a] = null)) : Y(a) && (a.value = null)), P(u))
    Re(u, l, 12, [c, h]);
  else {
    const N = z(u), x = Y(u);
    if (N || x) {
      const F = () => {
        if (e.f) {
          const M = N ? R(p, u) ? p[u] : h[u] : u.value;
          s ? C(M) && eo(M, r) : C(M) ? M.includes(r) || M.push(r) : N ? (h[u] = [r], R(p, u) && (p[u] = h[u])) : (u.value = [r], e.k && (h[e.k] = u.value));
        } else
          N ? (h[u] = c, R(p, u) && (p[u] = c)) : x ? (u.value = c, e.k && (h[e.k] = c)) : process.env.NODE_ENV !== "production" && y("Invalid template ref type:", u, `(${typeof u})`);
      };
      c ? (F.id = -1, se(F, n)) : F();
    } else
      process.env.NODE_ENV !== "production" && y("Invalid template ref type:", u, `(${typeof u})`);
  }
}
let Ot, Ke;
function Te(e, t) {
  e.appContext.config.performance && an() && Ke.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Di(e, t, an() ? Ke.now() : Date.now());
}
function $e(e, t) {
  if (e.appContext.config.performance && an()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Ke.mark(o), Ke.measure(
      `<${On(e, e.type)}> ${t}`,
      n,
      o
    ), Ke.clearMarks(n), Ke.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && Vi(e, t, an() ? Ke.now() : Date.now());
}
function an() {
  return Ot !== void 0 || (typeof window < "u" && window.performance ? (Ot = !0, Ke = window.performance) : Ot = !1), Ot;
}
function bc() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const se = Fi;
function yc(e) {
  return Oc(e);
}
function Oc(e, t) {
  bc();
  const n = sn();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Bs(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: s,
    patchProp: r,
    createElement: c,
    createText: l,
    createComment: u,
    setText: a,
    setElementText: h,
    parentNode: p,
    nextSibling: N,
    setScopeId: x = X,
    insertStaticContent: F
  } = e, M = (i, f, d, _ = null, m = null, v = null, O = !1, E = null, b = process.env.NODE_ENV !== "production" && tt ? !1 : !!f.dynamicChildren) => {
    if (i === f)
      return;
    i && !wt(i, f) && (_ = Kt(i), je(i, m, v, !0), i = null), f.patchFlag === -2 && (b = !1, f.dynamicChildren = null);
    const { type: g, ref: D, shapeFlag: w } = f;
    switch (g) {
      case Ht:
        k(i, f, d, _);
        break;
      case _e:
        J(i, f, d, _);
        break;
      case en:
        i == null ? me(f, d, _, O) : process.env.NODE_ENV !== "production" && H(i, f, d, O);
        break;
      case Oe:
        Ut(
          i,
          f,
          d,
          _,
          m,
          v,
          O,
          E,
          b
        );
        break;
      default:
        w & 1 ? Ve(
          i,
          f,
          d,
          _,
          m,
          v,
          O,
          E,
          b
        ) : w & 6 ? wo(
          i,
          f,
          d,
          _,
          m,
          v,
          O,
          E,
          b
        ) : w & 64 || w & 128 ? g.process(
          i,
          f,
          d,
          _,
          m,
          v,
          O,
          E,
          b,
          ft
        ) : process.env.NODE_ENV !== "production" && y("Invalid VNode type:", g, `(${typeof g})`);
    }
    D != null && m && Xn(D, i && i.ref, v, f || i, !f);
  }, k = (i, f, d, _) => {
    if (i == null)
      o(
        f.el = l(f.children),
        d,
        _
      );
    else {
      const m = f.el = i.el;
      f.children !== i.children && a(m, f.children);
    }
  }, J = (i, f, d, _) => {
    i == null ? o(
      f.el = u(f.children || ""),
      d,
      _
    ) : f.el = i.el;
  }, me = (i, f, d, _) => {
    [i.el, i.anchor] = F(
      i.children,
      f,
      d,
      _,
      i.el,
      i.anchor
    );
  }, H = (i, f, d, _) => {
    if (f.children !== i.children) {
      const m = N(i.anchor);
      T(i), [f.el, f.anchor] = F(
        f.children,
        d,
        m,
        _
      );
    } else
      f.el = i.el, f.anchor = i.anchor;
  }, ge = ({ el: i, anchor: f }, d, _) => {
    let m;
    for (; i && i !== f; )
      m = N(i), o(i, d, _), i = m;
    o(f, d, _);
  }, T = ({ el: i, anchor: f }) => {
    let d;
    for (; i && i !== f; )
      d = N(i), s(i), i = d;
    s(f);
  }, Ve = (i, f, d, _, m, v, O, E, b) => {
    O = O || f.type === "svg", i == null ? Ee(
      f,
      d,
      _,
      m,
      v,
      O,
      E,
      b
    ) : Ce(
      i,
      f,
      m,
      v,
      O,
      E,
      b
    );
  }, Ee = (i, f, d, _, m, v, O, E) => {
    let b, g;
    const { type: D, props: w, shapeFlag: V, transition: $, dirs: A } = i;
    if (b = i.el = c(
      i.type,
      v,
      w && w.is,
      w
    ), V & 8 ? h(b, i.children) : V & 16 && re(
      i.children,
      b,
      null,
      _,
      m,
      v && D !== "foreignObject",
      O,
      E
    ), A && qe(i, null, _, "created"), le(b, i, i.scopeId, O, _), w) {
      for (const U in w)
        U !== "value" && !Jt(U) && r(
          b,
          U,
          null,
          w[U],
          v,
          i.children,
          _,
          m,
          Pe
        );
      "value" in w && r(b, "value", null, w.value), (g = w.onVnodeBeforeMount) && be(g, _, i);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty(b, "__vnode", {
      value: i,
      enumerable: !1
    }), Object.defineProperty(b, "__vueParentComponent", {
      value: _,
      enumerable: !1
    })), A && qe(i, null, _, "beforeMount");
    const K = wc(m, $);
    K && $.beforeEnter(b), o(b, f, d), ((g = w && w.onVnodeMounted) || K || A) && se(() => {
      g && be(g, _, i), K && $.enter(b), A && qe(i, null, _, "mounted");
    }, m);
  }, le = (i, f, d, _, m) => {
    if (d && x(i, d), _)
      for (let v = 0; v < _.length; v++)
        x(i, _[v]);
    if (m) {
      let v = m.subTree;
      if (process.env.NODE_ENV !== "production" && v.patchFlag > 0 && v.patchFlag & 2048 && (v = Js(v.children) || v), f === v) {
        const O = m.vnode;
        le(
          i,
          O,
          O.scopeId,
          O.slotScopeIds,
          m.parent
        );
      }
    }
  }, re = (i, f, d, _, m, v, O, E, b = 0) => {
    for (let g = b; g < i.length; g++) {
      const D = i[g] = E ? Ue(i[g]) : pe(i[g]);
      M(
        null,
        D,
        f,
        d,
        _,
        m,
        v,
        O,
        E
      );
    }
  }, Ce = (i, f, d, _, m, v, O) => {
    const E = f.el = i.el;
    let { patchFlag: b, dynamicChildren: g, dirs: D } = f;
    b |= i.patchFlag & 16;
    const w = i.props || L, V = f.props || L;
    let $;
    d && Je(d, !1), ($ = V.onVnodeBeforeUpdate) && be($, d, f, i), D && qe(f, i, d, "beforeUpdate"), d && Je(d, !0), process.env.NODE_ENV !== "production" && tt && (b = 0, O = !1, g = null);
    const A = m && f.type !== "foreignObject";
    if (g ? (Me(
      i.dynamicChildren,
      g,
      E,
      d,
      _,
      A,
      v
    ), process.env.NODE_ENV !== "production" && Gt(i, f)) : O || Ne(
      i,
      f,
      E,
      null,
      d,
      _,
      A,
      v,
      !1
    ), b > 0) {
      if (b & 16)
        fe(
          E,
          f,
          w,
          V,
          d,
          _,
          m
        );
      else if (b & 2 && w.class !== V.class && r(E, "class", null, V.class, m), b & 4 && r(E, "style", w.style, V.style, m), b & 8) {
        const K = f.dynamicProps;
        for (let U = 0; U < K.length; U++) {
          const q = K[U], ue = w[q], ut = V[q];
          (ut !== ue || q === "value") && r(
            E,
            q,
            ue,
            ut,
            m,
            i.children,
            d,
            _,
            Pe
          );
        }
      }
      b & 1 && i.children !== f.children && h(E, f.children);
    } else
      !O && g == null && fe(
        E,
        f,
        w,
        V,
        d,
        _,
        m
      );
    (($ = V.onVnodeUpdated) || D) && se(() => {
      $ && be($, d, f, i), D && qe(f, i, d, "updated");
    }, _);
  }, Me = (i, f, d, _, m, v, O) => {
    for (let E = 0; E < f.length; E++) {
      const b = i[E], g = f[E], D = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        b.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (b.type === Oe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !wt(b, g) || // - In the case of a component, it could contain anything.
        b.shapeFlag & 70) ? p(b.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          d
        )
      );
      M(
        b,
        g,
        D,
        null,
        _,
        m,
        v,
        O,
        !0
      );
    }
  }, fe = (i, f, d, _, m, v, O) => {
    if (d !== _) {
      if (d !== L)
        for (const E in d)
          !Jt(E) && !(E in _) && r(
            i,
            E,
            d[E],
            null,
            O,
            f.children,
            m,
            v,
            Pe
          );
      for (const E in _) {
        if (Jt(E))
          continue;
        const b = _[E], g = d[E];
        b !== g && E !== "value" && r(
          i,
          E,
          g,
          b,
          O,
          f.children,
          m,
          v,
          Pe
        );
      }
      "value" in _ && r(i, "value", d.value, _.value);
    }
  }, Ut = (i, f, d, _, m, v, O, E, b) => {
    const g = f.el = i ? i.el : l(""), D = f.anchor = i ? i.anchor : l("");
    let { patchFlag: w, dynamicChildren: V, slotScopeIds: $ } = f;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (tt || w & 2048) && (w = 0, b = !1, V = null), $ && (E = E ? E.concat($) : $), i == null ? (o(g, d, _), o(D, d, _), re(
      f.children,
      d,
      D,
      m,
      v,
      O,
      E,
      b
    )) : w > 0 && w & 64 && V && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    i.dynamicChildren ? (Me(
      i.dynamicChildren,
      V,
      d,
      m,
      v,
      O,
      E
    ), process.env.NODE_ENV !== "production" ? Gt(i, f) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (f.key != null || m && f === m.subTree) && Gt(
        i,
        f,
        !0
        /* shallow */
      )
    )) : Ne(
      i,
      f,
      d,
      D,
      m,
      v,
      O,
      E,
      b
    );
  }, wo = (i, f, d, _, m, v, O, E, b) => {
    f.slotScopeIds = E, i == null ? f.shapeFlag & 512 ? m.ctx.activate(
      f,
      d,
      _,
      O,
      b
    ) : Se(
      f,
      d,
      _,
      m,
      v,
      O,
      b
    ) : oe(i, f, b);
  }, Se = (i, f, d, _, m, v, O) => {
    const E = i.component = jc(
      i,
      _,
      m
    );
    if (process.env.NODE_ENV !== "production" && E.type.__hmrId && gi(E), process.env.NODE_ENV !== "production" && (Yt(i), Te(E, "mount")), _o(i) && (E.ctx.renderer = ft), process.env.NODE_ENV !== "production" && Te(E, "init"), Hc(E), process.env.NODE_ENV !== "production" && $e(E, "init"), E.asyncDep) {
      if (m && m.registerDep(E, S), !i.el) {
        const b = E.subTree = Be(_e);
        J(null, b, f, d);
      }
      return;
    }
    S(
      E,
      i,
      f,
      d,
      m,
      v,
      O
    ), process.env.NODE_ENV !== "production" && (Xt(), $e(E, "mount"));
  }, oe = (i, f, d) => {
    const _ = f.component = i.component;
    if (Ai(i, f, d))
      if (_.asyncDep && !_.asyncResolved) {
        process.env.NODE_ENV !== "production" && Yt(f), j(_, f, d), process.env.NODE_ENV !== "production" && Xt();
        return;
      } else
        _.next = f, _i(_.update), _.update();
    else
      f.el = i.el, _.vnode = f;
  }, S = (i, f, d, _, m, v, O) => {
    const E = () => {
      if (i.isMounted) {
        let { next: D, bu: w, u: V, parent: $, vnode: A } = i, K = D, U;
        process.env.NODE_ENV !== "production" && Yt(D || i.vnode), Je(i, !1), D ? (D.el = A.el, j(i, D, O)) : D = A, w && yt(w), (U = D.props && D.props.onVnodeBeforeUpdate) && be(U, $, D, A), Je(i, !0), process.env.NODE_ENV !== "production" && Te(i, "render");
        const q = Tn(i);
        process.env.NODE_ENV !== "production" && $e(i, "render");
        const ue = i.subTree;
        i.subTree = q, process.env.NODE_ENV !== "production" && Te(i, "patch"), M(
          ue,
          q,
          // parent may have changed if it's in a teleport
          p(ue.el),
          // anchor may have changed if it's in a fragment
          Kt(ue),
          i,
          m,
          v
        ), process.env.NODE_ENV !== "production" && $e(i, "patch"), D.el = q.el, K === null && Mi(i, q.el), V && se(V, m), (U = D.props && D.props.onVnodeUpdated) && se(
          () => be(U, $, D, A),
          m
        ), process.env.NODE_ENV !== "production" && Ws(i), process.env.NODE_ENV !== "production" && Xt();
      } else {
        let D;
        const { el: w, props: V } = f, { bm: $, m: A, parent: K } = i, U = Zt(f);
        if (Je(i, !1), $ && yt($), !U && (D = V && V.onVnodeBeforeMount) && be(D, K, f), Je(i, !0), w && Vn) {
          const q = () => {
            process.env.NODE_ENV !== "production" && Te(i, "render"), i.subTree = Tn(i), process.env.NODE_ENV !== "production" && $e(i, "render"), process.env.NODE_ENV !== "production" && Te(i, "hydrate"), Vn(
              w,
              i.subTree,
              i,
              m,
              null
            ), process.env.NODE_ENV !== "production" && $e(i, "hydrate");
          };
          U ? f.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !i.isUnmounted && q()
          ) : q();
        } else {
          process.env.NODE_ENV !== "production" && Te(i, "render");
          const q = i.subTree = Tn(i);
          process.env.NODE_ENV !== "production" && $e(i, "render"), process.env.NODE_ENV !== "production" && Te(i, "patch"), M(
            null,
            q,
            d,
            _,
            i,
            m,
            v
          ), process.env.NODE_ENV !== "production" && $e(i, "patch"), f.el = q.el;
        }
        if (A && se(A, m), !U && (D = V && V.onVnodeMounted)) {
          const q = f;
          se(
            () => be(D, K, q),
            m
          );
        }
        (f.shapeFlag & 256 || K && Zt(K.vnode) && K.vnode.shapeFlag & 256) && i.a && se(i.a, m), i.isMounted = !0, process.env.NODE_ENV !== "production" && Oi(i), f = d = _ = null;
      }
    }, b = i.effect = new io(
      E,
      () => Nn(g),
      i.scope
      // track it in component's effect scope
    ), g = i.update = () => b.run();
    g.id = i.uid, Je(i, !0), process.env.NODE_ENV !== "production" && (b.onTrack = i.rtc ? (D) => yt(i.rtc, D) : void 0, b.onTrigger = i.rtg ? (D) => yt(i.rtg, D) : void 0, g.ownerInstance = i), g();
  }, j = (i, f, d) => {
    f.component = i;
    const _ = i.vnode.props;
    i.vnode = f, i.next = null, pc(i, f.props, _, d), vc(i, f.children, d), it(), Fo(i), ct();
  }, Ne = (i, f, d, _, m, v, O, E, b = !1) => {
    const g = i && i.children, D = i ? i.shapeFlag : 0, w = f.children, { patchFlag: V, shapeFlag: $ } = f;
    if (V > 0) {
      if (V & 128) {
        vt(
          g,
          w,
          d,
          _,
          m,
          v,
          O,
          E,
          b
        );
        return;
      } else if (V & 256) {
        wn(
          g,
          w,
          d,
          _,
          m,
          v,
          O,
          E,
          b
        );
        return;
      }
    }
    $ & 8 ? (D & 16 && Pe(g, m, v), w !== g && h(d, w)) : D & 16 ? $ & 16 ? vt(
      g,
      w,
      d,
      _,
      m,
      v,
      O,
      E,
      b
    ) : Pe(g, m, v, !0) : (D & 8 && h(d, ""), $ & 16 && re(
      w,
      d,
      _,
      m,
      v,
      O,
      E,
      b
    ));
  }, wn = (i, f, d, _, m, v, O, E, b) => {
    i = i || _t, f = f || _t;
    const g = i.length, D = f.length, w = Math.min(g, D);
    let V;
    for (V = 0; V < w; V++) {
      const $ = f[V] = b ? Ue(f[V]) : pe(f[V]);
      M(
        i[V],
        $,
        d,
        null,
        m,
        v,
        O,
        E,
        b
      );
    }
    g > D ? Pe(
      i,
      m,
      v,
      !0,
      !1,
      w
    ) : re(
      f,
      d,
      _,
      m,
      v,
      O,
      E,
      b,
      w
    );
  }, vt = (i, f, d, _, m, v, O, E, b) => {
    let g = 0;
    const D = f.length;
    let w = i.length - 1, V = D - 1;
    for (; g <= w && g <= V; ) {
      const $ = i[g], A = f[g] = b ? Ue(f[g]) : pe(f[g]);
      if (wt($, A))
        M(
          $,
          A,
          d,
          null,
          m,
          v,
          O,
          E,
          b
        );
      else
        break;
      g++;
    }
    for (; g <= w && g <= V; ) {
      const $ = i[w], A = f[V] = b ? Ue(f[V]) : pe(f[V]);
      if (wt($, A))
        M(
          $,
          A,
          d,
          null,
          m,
          v,
          O,
          E,
          b
        );
      else
        break;
      w--, V--;
    }
    if (g > w) {
      if (g <= V) {
        const $ = V + 1, A = $ < D ? f[$].el : _;
        for (; g <= V; )
          M(
            null,
            f[g] = b ? Ue(f[g]) : pe(f[g]),
            d,
            A,
            m,
            v,
            O,
            E,
            b
          ), g++;
      }
    } else if (g > V)
      for (; g <= w; )
        je(i[g], m, v, !0), g++;
    else {
      const $ = g, A = g, K = /* @__PURE__ */ new Map();
      for (g = A; g <= V; g++) {
        const ee = f[g] = b ? Ue(f[g]) : pe(f[g]);
        ee.key != null && (process.env.NODE_ENV !== "production" && K.has(ee.key) && y(
          "Duplicate keys found during update:",
          JSON.stringify(ee.key),
          "Make sure keys are unique."
        ), K.set(ee.key, g));
      }
      let U, q = 0;
      const ue = V - A + 1;
      let ut = !1, Do = 0;
      const bt = new Array(ue);
      for (g = 0; g < ue; g++)
        bt[g] = 0;
      for (g = $; g <= w; g++) {
        const ee = i[g];
        if (q >= ue) {
          je(ee, m, v, !0);
          continue;
        }
        let ve;
        if (ee.key != null)
          ve = K.get(ee.key);
        else
          for (U = A; U <= V; U++)
            if (bt[U - A] === 0 && wt(ee, f[U])) {
              ve = U;
              break;
            }
        ve === void 0 ? je(ee, m, v, !0) : (bt[ve - A] = g + 1, ve >= Do ? Do = ve : ut = !0, M(
          ee,
          f[ve],
          d,
          null,
          m,
          v,
          O,
          E,
          b
        ), q++);
      }
      const Vo = ut ? xc(bt) : _t;
      for (U = Vo.length - 1, g = ue - 1; g >= 0; g--) {
        const ee = A + g, ve = f[ee], Co = ee + 1 < D ? f[ee + 1].el : _;
        bt[g] === 0 ? M(
          null,
          ve,
          d,
          Co,
          m,
          v,
          O,
          E,
          b
        ) : ut && (U < 0 || g !== Vo[U] ? lt(ve, d, Co, 2) : U--);
      }
    }
  }, lt = (i, f, d, _, m = null) => {
    const { el: v, type: O, transition: E, children: b, shapeFlag: g } = i;
    if (g & 6) {
      lt(i.component.subTree, f, d, _);
      return;
    }
    if (g & 128) {
      i.suspense.move(f, d, _);
      return;
    }
    if (g & 64) {
      O.move(i, f, d, ft);
      return;
    }
    if (O === Oe) {
      o(v, f, d);
      for (let w = 0; w < b.length; w++)
        lt(b[w], f, d, _);
      o(i.anchor, f, d);
      return;
    }
    if (O === en) {
      ge(i, f, d);
      return;
    }
    if (_ !== 2 && g & 1 && E)
      if (_ === 0)
        E.beforeEnter(v), o(v, f, d), se(() => E.enter(v), m);
      else {
        const { leave: w, delayLeave: V, afterLeave: $ } = E, A = () => o(v, f, d), K = () => {
          w(v, () => {
            A(), $ && $();
          });
        };
        V ? V(v, A, K) : K();
      }
    else
      o(v, f, d);
  }, je = (i, f, d, _ = !1, m = !1) => {
    const {
      type: v,
      props: O,
      ref: E,
      children: b,
      dynamicChildren: g,
      shapeFlag: D,
      patchFlag: w,
      dirs: V
    } = i;
    if (E != null && Xn(E, null, d, i, !0), D & 256) {
      f.ctx.deactivate(i);
      return;
    }
    const $ = D & 1 && V, A = !Zt(i);
    let K;
    if (A && (K = O && O.onVnodeBeforeUnmount) && be(K, f, i), D & 6)
      Nr(i.component, d, _);
    else {
      if (D & 128) {
        i.suspense.unmount(d, _);
        return;
      }
      $ && qe(i, null, f, "beforeUnmount"), D & 64 ? i.type.remove(
        i,
        f,
        d,
        m,
        ft,
        _
      ) : g && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (v !== Oe || w > 0 && w & 64) ? Pe(
        g,
        f,
        d,
        !1,
        !0
      ) : (v === Oe && w & 384 || !m && D & 16) && Pe(b, f, d), _ && xn(i);
    }
    (A && (K = O && O.onVnodeUnmounted) || $) && se(() => {
      K && be(K, f, i), $ && qe(i, null, f, "unmounted");
    }, d);
  }, xn = (i) => {
    const { type: f, el: d, anchor: _, transition: m } = i;
    if (f === Oe) {
      process.env.NODE_ENV !== "production" && i.patchFlag > 0 && i.patchFlag & 2048 && m && !m.persisted ? i.children.forEach((O) => {
        O.type === _e ? s(O.el) : xn(O);
      }) : Er(d, _);
      return;
    }
    if (f === en) {
      T(i);
      return;
    }
    const v = () => {
      s(d), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (i.shapeFlag & 1 && m && !m.persisted) {
      const { leave: O, delayLeave: E } = m, b = () => O(d, v);
      E ? E(i.el, v, b) : b();
    } else
      v();
  }, Er = (i, f) => {
    let d;
    for (; i !== f; )
      d = N(i), s(i), i = d;
    s(f);
  }, Nr = (i, f, d) => {
    process.env.NODE_ENV !== "production" && i.type.__hmrId && Ei(i);
    const { bum: _, scope: m, update: v, subTree: O, um: E } = i;
    _ && yt(_), m.stop(), v && (v.active = !1, je(O, i, f, d)), E && se(E, f), se(() => {
      i.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && i.asyncDep && !i.asyncResolved && i.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve()), process.env.NODE_ENV !== "production" && xi(i);
  }, Pe = (i, f, d, _ = !1, m = !1, v = 0) => {
    for (let O = v; O < i.length; O++)
      je(i[O], f, d, _, m);
  }, Kt = (i) => i.shapeFlag & 6 ? Kt(i.component.subTree) : i.shapeFlag & 128 ? i.suspense.next() : N(i.anchor || i.el), xo = (i, f, d) => {
    i == null ? f._vnode && je(f._vnode, null, null, !0) : M(f._vnode || null, i, f, null, null, null, d), Fo(), Us(), f._vnode = i;
  }, ft = {
    p: M,
    um: je,
    m: lt,
    r: xn,
    mt: Se,
    mc: re,
    pc: Ne,
    pbc: Me,
    n: Kt,
    o: e
  };
  let Dn, Vn;
  return t && ([Dn, Vn] = t(
    ft
  )), {
    render: xo,
    hydrate: Dn,
    createApp: lc(xo, Dn)
  };
}
function Je({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function wc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Gt(e, t, n = !1) {
  const o = e.children, s = t.children;
  if (C(o) && C(s))
    for (let r = 0; r < o.length; r++) {
      const c = o[r];
      let l = s[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[r] = Ue(s[r]), l.el = c.el), n || Gt(c, l)), l.type === Ht && (l.el = c.el), process.env.NODE_ENV !== "production" && l.type === _e && !l.el && (l.el = c.el);
    }
}
function xc(e) {
  const t = e.slice(), n = [0];
  let o, s, r, c, l;
  const u = e.length;
  for (o = 0; o < u; o++) {
    const a = e[o];
    if (a !== 0) {
      if (s = n[n.length - 1], e[s] < a) {
        t[o] = s, n.push(o);
        continue;
      }
      for (r = 0, c = n.length - 1; r < c; )
        l = r + c >> 1, e[n[l]] < a ? r = l + 1 : c = l;
      a < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), n[r] = o);
    }
  }
  for (r = n.length, c = n[r - 1]; r-- > 0; )
    n[r] = c, c = t[c];
  return n;
}
const Dc = (e) => e.__isTeleport, Oe = Symbol.for("v-fgt"), Ht = Symbol.for("v-txt"), _e = Symbol.for("v-cmt"), en = Symbol.for("v-stc"), Tt = [];
let de = null;
function Vc(e = !1) {
  Tt.push(de = e ? null : []);
}
function Cc() {
  Tt.pop(), de = Tt[Tt.length - 1] || null;
}
let Mt = 1;
function Zo(e) {
  Mt += e;
}
function Pc(e) {
  return e.dynamicChildren = Mt > 0 ? de || _t : null, Cc(), Mt > 0 && de && de.push(e), e;
}
function Tc(e, t, n, o, s, r) {
  return Pc(
    ar(
      e,
      t,
      n,
      o,
      s,
      r,
      !0
      /* isBlock */
    )
  );
}
function No(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function wt(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && pt.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const $c = (...e) => pr(
  ...e
), yn = "__vInternal", ur = ({ key: e }) => e ?? null, tn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? z(e) || Y(e) || P(e) ? { i: ce, r: e, k: t, f: !!n } : e : null);
function ar(e, t = null, n = null, o = 0, s = null, r = e === Oe ? 0 : 1, c = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ur(t),
    ref: t && tn(t),
    scopeId: qs,
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
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: ce
  };
  return l ? (vo(u, n), r & 128 && e.normalize(u)) : n && (u.shapeFlag |= z(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && y("VNode created with invalid key (NaN). VNode type:", u.type), Mt > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  de && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && de.push(u), u;
}
const Be = process.env.NODE_ENV !== "production" ? $c : pr;
function pr(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === Si) && (process.env.NODE_ENV !== "production" && !e && y(`Invalid vnode type when creating vnode: ${e}.`), e = _e), No(e)) {
    const l = ze(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && vo(l, n), Mt > 0 && !r && de && (l.shapeFlag & 6 ? de[de.indexOf(e)] = l : de.push(l)), l.patchFlag |= -2, l;
  }
  if (gr(e) && (e = e.__vccOpts), t) {
    t = Ic(t);
    let { class: l, style: u } = t;
    l && !z(l) && (t.class = ro(l)), B(u) && (Kn(u) && !C(u) && (u = W({}, u)), t.style = so(u));
  }
  const c = z(e) ? 1 : ji(e) ? 128 : Dc(e) ? 64 : B(e) ? 4 : P(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && c & 4 && Kn(e) && (e = I(e), y(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), ar(
    e,
    t,
    n,
    o,
    s,
    c,
    r,
    !0
  );
}
function Ic(e) {
  return e ? Kn(e) || yn in e ? W({}, e) : e : null;
}
function ze(e, t, n = !1) {
  const { props: o, ref: s, patchFlag: r, children: c } = e, l = t ? Ac(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && ur(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? C(s) ? s.concat(tn(t)) : [s, tn(t)] : tn(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && r === -1 && C(c) ? c.map(dr) : c,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Oe ? r === -1 ? 16 : r | 16 : r,
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
    ssContent: e.ssContent && ze(e.ssContent),
    ssFallback: e.ssFallback && ze(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function dr(e) {
  const t = ze(e);
  return C(e.children) && (t.children = e.children.map(dr)), t;
}
function Rc(e = " ", t = 0) {
  return Be(Ht, null, e, t);
}
function pe(e) {
  return e == null || typeof e == "boolean" ? Be(_e) : C(e) ? Be(
    Oe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Ue(e) : Be(Ht, null, String(e));
}
function Ue(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ze(e);
}
function vo(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (C(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), vo(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(yn in t) ? t._ctx = ce : s === 3 && ce && (ce.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    P(t) ? (t = { default: t, _ctx: ce }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Rc(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ac(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = ro([t.class, o.class]));
      else if (s === "style")
        t.style = so([t.style, o.style]);
      else if (jt(s)) {
        const r = t[s], c = o[s];
        c && r !== c && !(C(r) && r.includes(c)) && (t[s] = r ? [].concat(r, c) : c);
      } else
        s !== "" && (t[s] = o[s]);
  }
  return t;
}
function be(e, t, n, o = null) {
  he(e, t, 7, [
    n,
    o
  ]);
}
const Mc = or();
let Sc = 0;
function jc(e, t, n) {
  const o = e.type, s = (t ? t.appContext : e.appContext) || Mc, r = {
    uid: Sc++,
    vnode: e,
    type: o,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new Ir(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: rr(o, s),
    emitsOptions: zs(o, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: L,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: L,
    data: L,
    props: L,
    attrs: L,
    slots: L,
    refs: L,
    setupState: L,
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
  return process.env.NODE_ENV !== "production" ? r.ctx = Qi(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Pi.bind(null, r), e.ce && e.ce(r), r;
}
let Z = null, bo, at, Qo = "__VUE_INSTANCE_SETTERS__";
(at = sn()[Qo]) || (at = sn()[Qo] = []), at.push((e) => Z = e), bo = (e) => {
  at.length > 1 ? at.forEach((t) => t(e)) : at[0](e);
};
const gt = (e) => {
  bo(e), e.scope.on();
}, ot = () => {
  Z && Z.scope.off(), bo(null);
}, Fc = /* @__PURE__ */ Et("slot,component");
function Zn(e, t) {
  const n = t.isNativeTag || as;
  (Fc(e) || n(e)) && y(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function hr(e) {
  return e.vnode.shapeFlag & 4;
}
let St = !1;
function Hc(e, t = !1) {
  St = t;
  const { props: n, children: o } = e.vnode, s = hr(e);
  uc(e, n, s, t), Nc(e, o);
  const r = s ? Uc(e, t) : void 0;
  return St = !1, r;
}
function Uc(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && Zn(o.name, e.appContext.config), o.components) {
      const r = Object.keys(o.components);
      for (let c = 0; c < r.length; c++)
        Zn(r[c], e.appContext.config);
    }
    if (o.directives) {
      const r = Object.keys(o.directives);
      for (let c = 0; c < r.length; c++)
        Zs(r[c]);
    }
    o.compilerOptions && Kc() && y(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Ts(new Proxy(e.ctx, tr)), process.env.NODE_ENV !== "production" && Gi(e);
  const { setup: s } = o;
  if (s) {
    const r = e.setupContext = s.length > 1 ? Bc(e) : null;
    gt(e), it();
    const c = Re(
      s,
      e,
      0,
      [process.env.NODE_ENV !== "production" ? Dt(e.props) : e.props, r]
    );
    if (ct(), ot(), to(c)) {
      if (c.then(ot, ot), t)
        return c.then((l) => {
          Go(e, l, t);
        }).catch((l) => {
          En(l, e, 0);
        });
      if (e.asyncDep = c, process.env.NODE_ENV !== "production" && !e.suspense) {
        const l = (n = o.name) != null ? n : "Anonymous";
        y(
          `Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Go(e, c, t);
  } else
    _r(e, t);
}
function Go(e, t, n) {
  P(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : B(t) ? (process.env.NODE_ENV !== "production" && No(t) && y(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = As(t), process.env.NODE_ENV !== "production" && ec(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && y(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), _r(e, n);
}
let Qn;
const Kc = () => !Qn;
function _r(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && Qn && !o.render) {
      const s = o.template || go(e).template;
      if (s) {
        process.env.NODE_ENV !== "production" && Te(e, "compile");
        const { isCustomElement: r, compilerOptions: c } = e.appContext.config, { delimiters: l, compilerOptions: u } = o, a = W(
          W(
            {
              isCustomElement: r,
              delimiters: l
            },
            c
          ),
          u
        );
        o.render = Qn(s, a), process.env.NODE_ENV !== "production" && $e(e, "compile");
      }
    }
    e.render = o.render || X;
  }
  {
    gt(e), it();
    try {
      nc(e);
    } finally {
      ct(), ot();
    }
  }
  process.env.NODE_ENV !== "production" && !o.render && e.render === X && !t && (o.template ? y(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : y("Component is missing template or render function."));
}
function es(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    process.env.NODE_ENV !== "production" ? {
      get(t, n) {
        return ln(), Q(e, "get", "$attrs"), t[n];
      },
      set() {
        return y("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return y("setupContext.attrs is readonly."), !1;
      }
    } : {
      get(t, n) {
        return Q(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function Lc(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return Q(e, "get", "$slots"), t[n];
    }
  }));
}
function Bc(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && y("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (C(n) ? o = "array" : Y(n) && (o = "ref")), o !== "object" && y(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return es(e);
    },
    get slots() {
      return Lc(e);
    },
    get emit() {
      return (n, ...o) => e.emit(n, ...o);
    },
    expose: t
  }) : {
    get attrs() {
      return es(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function yo(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(As(Ts(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in nt)
          return nt[n](e);
      },
      has(t, n) {
        return n in t || n in nt;
      }
    }));
}
const Wc = /(?:^|[-_])(\w)/g, kc = (e) => e.replace(Wc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function mr(e, t = !0) {
  return P(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function On(e, t, n = !1) {
  let o = mr(t);
  if (!o && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && e && e.parent) {
    const s = (r) => {
      for (const c in r)
        if (r[c] === t)
          return c;
    };
    o = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return o ? kc(o) : n ? "App" : "Anonymous";
}
function gr(e) {
  return P(e) && "__vccOpts" in e;
}
const zc = (e, t) => ci(e, t, St), qc = Symbol.for("v-scx"), Jc = () => {
  {
    const e = Qt(qc);
    return e || process.env.NODE_ENV !== "production" && y(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Rn(e) {
  return !!(e && e.__v_isShallow);
}
function Yc() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, s = {
    header(p) {
      return B(p) ? p.__isVue ? ["div", e, "VueInstance"] : Y(p) ? [
        "div",
        {},
        ["span", e, h(p)],
        "<",
        l(p.value),
        ">"
      ] : Ge(p) ? [
        "div",
        {},
        ["span", e, Rn(p) ? "ShallowReactive" : "Reactive"],
        "<",
        l(p),
        `>${ke(p) ? " (readonly)" : ""}`
      ] : ke(p) ? [
        "div",
        {},
        ["span", e, Rn(p) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(p),
        ">"
      ] : null : null;
    },
    hasBody(p) {
      return p && p.__isVue;
    },
    body(p) {
      if (p && p.__isVue)
        return [
          "div",
          {},
          ...r(p.$)
        ];
    }
  };
  function r(p) {
    const N = [];
    p.type.props && p.props && N.push(c("props", I(p.props))), p.setupState !== L && N.push(c("setup", p.setupState)), p.data !== L && N.push(c("data", I(p.data)));
    const x = u(p, "computed");
    x && N.push(c("computed", x));
    const F = u(p, "inject");
    return F && N.push(c("injected", F)), N.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: p }]
    ]), N;
  }
  function c(p, N) {
    return N = W({}, N), Object.keys(N).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        p
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(N).map((x) => [
          "div",
          {},
          ["span", o, x + ": "],
          l(N[x], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(p, N = !0) {
    return typeof p == "number" ? ["span", t, p] : typeof p == "string" ? ["span", n, JSON.stringify(p)] : typeof p == "boolean" ? ["span", o, p] : B(p) ? ["object", { object: N ? I(p) : p }] : ["span", n, String(p)];
  }
  function u(p, N) {
    const x = p.type;
    if (P(x))
      return;
    const F = {};
    for (const M in p.ctx)
      a(x, M, N) && (F[M] = p.ctx[M]);
    return F;
  }
  function a(p, N, x) {
    const F = p[x];
    if (C(F) && F.includes(N) || B(F) && N in F || p.extends && a(p.extends, N, x) || p.mixins && p.mixins.some((M) => a(M, N, x)))
      return !0;
  }
  function h(p) {
    return Rn(p) ? "ShallowRef" : p.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const ts = "3.3.11", Xc = "http://www.w3.org/2000/svg", Xe = typeof document < "u" ? document : null, ns = Xe && /* @__PURE__ */ Xe.createElement("template"), Zc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const s = t ? Xe.createElementNS(Xc, e) : Xe.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && s.setAttribute("multiple", o.multiple), s;
  },
  createText: (e) => Xe.createTextNode(e),
  createComment: (e) => Xe.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Xe.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, s, r) {
    const c = n ? n.previousSibling : t.lastChild;
    if (s && (s === r || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === r || !(s = s.nextSibling)); )
        ;
    else {
      ns.innerHTML = o ? `<svg>${e}</svg>` : e;
      const l = ns.content;
      if (o) {
        const u = l.firstChild;
        for (; u.firstChild; )
          l.appendChild(u.firstChild);
        l.removeChild(u);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      c ? c.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Qc = Symbol("_vtc");
function Gc(e, t, n) {
  const o = e[Qc];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const el = Symbol("_vod");
function tl(e, t, n) {
  const o = e.style, s = z(n);
  if (n && !s) {
    if (t && !z(t))
      for (const r in t)
        n[r] == null && Gn(o, r, "");
    for (const r in n)
      Gn(o, r, n[r]);
  } else {
    const r = o.display;
    s ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), el in e && (o.display = r);
  }
}
const nl = /[^\\];\s*$/, os = /\s*!important$/;
function Gn(e, t, n) {
  if (C(n))
    n.forEach((o) => Gn(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && nl.test(n) && y(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = ol(e, t);
    os.test(n) ? e.setProperty(
      ie(o),
      n.replace(os, ""),
      "important"
    ) : e[o] = n;
  }
}
const ss = ["Webkit", "Moz", "ms"], An = {};
function ol(e, t) {
  const n = An[t];
  if (n)
    return n;
  let o = Ie(t);
  if (o !== "filter" && o in e)
    return An[t] = o;
  o = hn(o);
  for (let s = 0; s < ss.length; s++) {
    const r = ss[s] + o;
    if (r in e)
      return An[t] = r;
  }
  return t;
}
const rs = "http://www.w3.org/1999/xlink";
function sl(e, t, n, o, s) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(rs, t.slice(6, t.length)) : e.setAttributeNS(rs, t, n);
  else {
    const r = Tr(t);
    n == null || r && !_s(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : n);
  }
}
function rl(e, t, n, o, s, r, c) {
  if (t === "innerHTML" || t === "textContent") {
    o && c(o, s, r), e[t] = n ?? "";
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && // custom elements may use _value internally
  !l.includes("-")) {
    e._value = n;
    const a = l === "OPTION" ? e.getAttribute("value") : e.value, h = n ?? "";
    a !== h && (e.value = h), n == null && e.removeAttribute(t);
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = _s(n) : n == null && a === "string" ? (n = "", u = !0) : a === "number" && (n = 0, u = !0);
  }
  try {
    e[t] = n;
  } catch (a) {
    process.env.NODE_ENV !== "production" && !u && y(
      `Failed setting prop "${t}" on <${l.toLowerCase()}>: value ${n} is invalid.`,
      a
    );
  }
  u && e.removeAttribute(t);
}
function il(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function cl(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const is = Symbol("_vei");
function ll(e, t, n, o, s = null) {
  const r = e[is] || (e[is] = {}), c = r[t];
  if (o && c)
    c.value = o;
  else {
    const [l, u] = fl(t);
    if (o) {
      const a = r[t] = pl(o, s);
      il(e, l, a, u);
    } else
      c && (cl(e, l, c, u), r[t] = void 0);
  }
}
const cs = /(?:Once|Passive|Capture)$/;
function fl(e) {
  let t;
  if (cs.test(e)) {
    t = {};
    let o;
    for (; o = e.match(cs); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ie(e.slice(2)), t];
}
let Mn = 0;
const ul = /* @__PURE__ */ Promise.resolve(), al = () => Mn || (ul.then(() => Mn = 0), Mn = Date.now());
function pl(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    he(
      dl(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = al(), n;
}
function dl(e, t) {
  if (C(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (s) => !s._stopped && o && o(s));
  } else
    return t;
}
const ls = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, hl = (e, t, n, o, s = !1, r, c, l, u) => {
  t === "class" ? Gc(e, o, s) : t === "style" ? tl(e, n, o) : jt(t) ? nn(t) || ll(e, t, n, o, c) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : _l(e, t, o, s)) ? rl(
    e,
    t,
    o,
    r,
    c,
    l,
    u
  ) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), sl(e, t, o, s));
};
function _l(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ls(t) && P(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return ls(t) && z(n) ? !1 : t in e;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ml(e, t) {
  const n = /* @__PURE__ */ Qs(e);
  class o extends Oo {
    constructor(r) {
      super(n, r, t);
    }
  }
  return o.def = n, o;
}
const gl = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Oo extends gl {
  constructor(t, n = {}, o) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && o ? o(this._createVNode(), this.shadowRoot) : (process.env.NODE_ENV !== "production" && this.shadowRoot && y(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, this._ob && (this._ob.disconnect(), this._ob = null), js(() => {
      this._connected || (us(null, this.shadowRoot), this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let o = 0; o < this.attributes.length; o++)
      this._setAttr(this.attributes[o].name);
    this._ob = new MutationObserver((o) => {
      for (const s of o)
        this._setAttr(s.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (o, s = !1) => {
      const { props: r, styles: c } = o;
      let l;
      if (r && !C(r))
        for (const u in r) {
          const a = r[u];
          (a === Number || a && a.type === Number) && (u in this._props && (this._props[u] = Po(this._props[u])), (l || (l = /* @__PURE__ */ Object.create(null)))[Ie(u)] = !0);
        }
      this._numberProps = l, s && this._resolveProps(o), this._applyStyles(c), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then((o) => t(o, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: n } = t, o = C(n) ? n : Object.keys(n || {});
    for (const s of Object.keys(this))
      s[0] !== "_" && o.includes(s) && this._setProp(s, this[s], !0, !1);
    for (const s of o.map(Ie))
      Object.defineProperty(this, s, {
        get() {
          return this._getProp(s);
        },
        set(r) {
          this._setProp(s, r);
        }
      });
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    const o = Ie(t);
    this._numberProps && this._numberProps[o] && (n = Po(n)), this._setProp(o, n, !1);
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
  _setProp(t, n, o = !0, s = !0) {
    n !== this._props[t] && (this._props[t] = n, s && this._instance && this._update(), o && (n === !0 ? this.setAttribute(ie(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(ie(t), n + "") : n || this.removeAttribute(ie(t))));
  }
  _update() {
    us(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = Be(this._def, W({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0, process.env.NODE_ENV !== "production" && (n.ceReload = (r) => {
        this._styles && (this._styles.forEach((c) => this.shadowRoot.removeChild(c)), this._styles.length = 0), this._applyStyles(r), this._instance = null, this._update();
      });
      const o = (r, c) => {
        this.dispatchEvent(
          new CustomEvent(r, {
            detail: c
          })
        );
      };
      n.emit = (r, ...c) => {
        o(r, c), ie(r) !== r && o(ie(r), c);
      };
      let s = this;
      for (; s = s && (s.parentNode || s.host); )
        if (s instanceof Oo) {
          n.parent = s._instance, n.provides = s._instance.provides;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((n) => {
      const o = document.createElement("style");
      o.textContent = n, this.shadowRoot.appendChild(o), process.env.NODE_ENV !== "production" && (this._styles || (this._styles = [])).push(o);
    });
  }
}
const El = ["ctrl", "shift", "alt", "meta"], Nl = {
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
  exact: (e, t) => El.some((n) => e[`${n}Key`] && !t.includes(n))
}, vl = (e, t) => e._withMods || (e._withMods = (n, ...o) => {
  for (let s = 0; s < t.length; s++) {
    const r = Nl[t[s]];
    if (r && r(n, t))
      return;
  }
  return e(n, ...o);
}), bl = /* @__PURE__ */ W({ patchProp: hl }, Zc);
let fs;
function yl() {
  return fs || (fs = yc(bl));
}
const us = (...e) => {
  yl().render(...e);
};
function Ol() {
  Yc();
}
process.env.NODE_ENV !== "production" && Ol();
const wl = /* @__PURE__ */ Qs({
  __name: "Buble.ce",
  setup(e) {
    const t = ni(1);
    return (n, o) => (Vc(), Tc("div", {
      class: "fixed bottom-4 right-4 bg-blue-500 rounded-full py-5 px-7 text-white cursor-pointer select-none",
      onClick: o[0] || (o[0] = vl((s) => t.value++, ["stop"]))
    }, $r(Rs(t)), 1));
  }
}), xl = /* @__PURE__ */ ml(wl);
customElements.define("Buble", xl);
