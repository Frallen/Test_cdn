function An(e, t) {
  const n = /* @__PURE__ */ Object.create(null), s = e.split(",");
  for (let r = 0; r < s.length; r++)
    n[s[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const k = {}, et = [], be = () => {
}, Br = () => !1, kt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Tn = (e) => e.startsWith("onUpdate:"), te = Object.assign, Rn = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Dr = Object.prototype.hasOwnProperty, j = (e, t) => Dr.call(e, t), O = Array.isArray, tt = (e) => $t(e) === "[object Map]", js = (e) => $t(e) === "[object Set]", T = (e) => typeof e == "function", X = (e) => typeof e == "string", it = (e) => typeof e == "symbol", $ = (e) => e !== null && typeof e == "object", Ns = (e) => ($(e) || T(e)) && T(e.then) && T(e.catch), Hs = Object.prototype.toString, $t = (e) => Hs.call(e), kr = (e) => $t(e).slice(8, -1), Ks = (e) => $t(e) === "[object Object]", Mn = (e) => X(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ft = /* @__PURE__ */ An(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), zt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, $r = /-(\w)/g, Ie = zt((e) => e.replace($r, (t, n) => n ? n.toUpperCase() : "")), zr = /\B([A-Z])/g, he = zt(
  (e) => e.replace(zr, "-$1").toLowerCase()
), Ls = zt((e) => e.charAt(0).toUpperCase() + e.slice(1)), sn = zt((e) => e ? `on${Ls(e)}` : ""), Je = (e, t) => !Object.is(e, t), rn = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Kt = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Wr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, ts = (e) => {
  const t = X(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ns;
const dn = () => ns || (ns = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Sn(e) {
  if (O(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = X(s) ? Yr(s) : Sn(s);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else if (X(e) || $(e))
    return e;
}
const qr = /;(?![^(]*\))/g, Jr = /:([^]+)/, Vr = /\/\*[^]*?\*\//g;
function Yr(e) {
  const t = {};
  return e.replace(Vr, "").split(qr).forEach((n) => {
    if (n) {
      const s = n.split(Jr);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Fn(e) {
  let t = "";
  if (X(e))
    t = e;
  else if (O(e))
    for (let n = 0; n < e.length; n++) {
      const s = Fn(e[n]);
      s && (t += s + " ");
    }
  else if ($(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Xr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Zr = /* @__PURE__ */ An(Xr);
function Us(e) {
  return !!e || e === "";
}
const Qr = (e) => X(e) ? e : e == null ? "" : O(e) || $(e) && (e.toString === Hs || !T(e.toString)) ? JSON.stringify(e, Bs, 2) : String(e), Bs = (e, t) => t && t.__v_isRef ? Bs(e, t.value) : tt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], o) => (n[on(s, o) + " =>"] = r, n),
    {}
  )
} : js(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => on(n))
} : it(t) ? on(t) : $(t) && !O(t) && !Ks(t) ? String(t) : t, on = (e, t = "") => {
  var n;
  return it(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
let ce;
class Ds {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = ce, !t && ce && (this.index = (ce.scopes || (ce.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = ce;
      try {
        return ce = this, t();
      } finally {
        ce = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ce = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    ce = this.parent;
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
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function ks(e) {
  return new Ds(e);
}
function Gr(e, t = ce) {
  t && t.active && t.effects.push(e);
}
function $s() {
  return ce;
}
function eo(e) {
  ce && ce.cleanups.push(e);
}
const jn = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, zs = (e) => (e.w & Ke) > 0, Ws = (e) => (e.n & Ke) > 0, to = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Ke;
}, no = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let s = 0; s < t.length; s++) {
      const r = t[s];
      zs(r) && !Ws(r) ? r.delete(e) : t[n++] = r, r.w &= ~Ke, r.n &= ~Ke;
    }
    t.length = n;
  }
}, Lt = /* @__PURE__ */ new WeakMap();
let dt = 0, Ke = 1;
const hn = 30;
let pe;
const We = Symbol(""), pn = Symbol("");
class Nn {
  constructor(t, n = null, s) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Gr(this, s);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = pe, n = Ne;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = pe, pe = this, Ne = !0, Ke = 1 << ++dt, dt <= hn ? to(this) : ss(this), this.fn();
    } finally {
      dt <= hn && no(this), Ke = 1 << --dt, pe = this.parent, Ne = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    pe === this ? this.deferStop = !0 : this.active && (ss(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function ss(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Ne = !0;
const qs = [];
function lt() {
  qs.push(Ne), Ne = !1;
}
function ct() {
  const e = qs.pop();
  Ne = e === void 0 ? !0 : e;
}
function oe(e, t, n) {
  if (Ne && pe) {
    let s = Lt.get(e);
    s || Lt.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || s.set(n, r = jn()), Js(r);
  }
}
function Js(e, t) {
  let n = !1;
  dt <= hn ? Ws(e) || (e.n |= Ke, n = !zs(e)) : n = !e.has(pe), n && (e.add(pe), pe.deps.push(e));
}
function Ae(e, t, n, s, r, o) {
  const i = Lt.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (n === "length" && O(e)) {
    const u = Number(s);
    i.forEach((a, g) => {
      (g === "length" || !it(g) && g >= u) && c.push(a);
    });
  } else
    switch (n !== void 0 && c.push(i.get(n)), t) {
      case "add":
        O(e) ? Mn(n) && c.push(i.get("length")) : (c.push(i.get(We)), tt(e) && c.push(i.get(pn)));
        break;
      case "delete":
        O(e) || (c.push(i.get(We)), tt(e) && c.push(i.get(pn)));
        break;
      case "set":
        tt(e) && c.push(i.get(We));
        break;
    }
  if (c.length === 1)
    c[0] && gn(c[0]);
  else {
    const u = [];
    for (const a of c)
      a && u.push(...a);
    gn(jn(u));
  }
}
function gn(e, t) {
  const n = O(e) ? e : [...e];
  for (const s of n)
    s.computed && rs(s);
  for (const s of n)
    s.computed || rs(s);
}
function rs(e, t) {
  (e !== pe || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
function so(e, t) {
  var n;
  return (n = Lt.get(e)) == null ? void 0 : n.get(t);
}
const ro = /* @__PURE__ */ An("__proto__,__v_isRef,__isVue"), Vs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(it)
), os = /* @__PURE__ */ oo();
function oo() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = F(this);
      for (let o = 0, i = this.length; o < i; o++)
        oe(s, "get", o + "");
      const r = s[t](...n);
      return r === -1 || r === !1 ? s[t](...n.map(F)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      lt();
      const s = F(this)[t].apply(this, n);
      return ct(), s;
    };
  }), e;
}
function io(e) {
  const t = F(this);
  return oe(t, "has", e), t.hasOwnProperty(e);
}
class Ys {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._shallow = n;
  }
  get(t, n, s) {
    const r = this._isReadonly, o = this._shallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return s === (r ? o ? yo : Gs : o ? Qs : Zs).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = O(t);
    if (!r) {
      if (i && j(os, n))
        return Reflect.get(os, n, s);
      if (n === "hasOwnProperty")
        return io;
    }
    const c = Reflect.get(t, n, s);
    return (it(n) ? Vs.has(n) : ro(n)) || (r || oe(t, "get", n), o) ? c : z(c) ? i && Mn(n) ? c : c.value : $(c) ? r ? er(c) : qt(c) : c;
  }
}
class Xs extends Ys {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let o = t[n];
    if (st(o) && z(o) && !z(s))
      return !1;
    if (!this._shallow && (!Ut(s) && !st(s) && (o = F(o), s = F(s)), !O(t) && z(o) && !z(s)))
      return o.value = s, !0;
    const i = O(t) && Mn(n) ? Number(n) < t.length : j(t, n), c = Reflect.set(t, n, s, r);
    return t === F(r) && (i ? Je(s, o) && Ae(t, "set", n, s) : Ae(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = j(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && Ae(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!it(n) || !Vs.has(n)) && oe(t, "has", n), s;
  }
  ownKeys(t) {
    return oe(
      t,
      "iterate",
      O(t) ? "length" : We
    ), Reflect.ownKeys(t);
  }
}
class lo extends Ys {
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
const co = /* @__PURE__ */ new Xs(), fo = /* @__PURE__ */ new lo(), uo = /* @__PURE__ */ new Xs(
  !0
), Hn = (e) => e, Wt = (e) => Reflect.getPrototypeOf(e);
function It(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = F(e), o = F(t);
  n || (Je(t, o) && oe(r, "get", t), oe(r, "get", o));
  const { has: i } = Wt(r), c = s ? Hn : n ? Un : _t;
  if (i.call(r, t))
    return c(e.get(t));
  if (i.call(r, o))
    return c(e.get(o));
  e !== r && e.get(t);
}
function At(e, t = !1) {
  const n = this.__v_raw, s = F(n), r = F(e);
  return t || (Je(e, r) && oe(s, "has", e), oe(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Tt(e, t = !1) {
  return e = e.__v_raw, !t && oe(F(e), "iterate", We), Reflect.get(e, "size", e);
}
function is(e) {
  e = F(e);
  const t = F(this);
  return Wt(t).has.call(t, e) || (t.add(e), Ae(t, "add", e, e)), this;
}
function ls(e, t) {
  t = F(t);
  const n = F(this), { has: s, get: r } = Wt(n);
  let o = s.call(n, e);
  o || (e = F(e), o = s.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), o ? Je(t, i) && Ae(n, "set", e, t) : Ae(n, "add", e, t), this;
}
function cs(e) {
  const t = F(this), { has: n, get: s } = Wt(t);
  let r = n.call(t, e);
  r || (e = F(e), r = n.call(t, e)), s && s.call(t, e);
  const o = t.delete(e);
  return r && Ae(t, "delete", e, void 0), o;
}
function fs() {
  const e = F(this), t = e.size !== 0, n = e.clear();
  return t && Ae(e, "clear", void 0, void 0), n;
}
function Rt(e, t) {
  return function(s, r) {
    const o = this, i = o.__v_raw, c = F(i), u = t ? Hn : e ? Un : _t;
    return !e && oe(c, "iterate", We), i.forEach((a, g) => s.call(r, u(a), u(g), o));
  };
}
function Mt(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, o = F(r), i = tt(o), c = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, a = r[e](...s), g = n ? Hn : t ? Un : _t;
    return !t && oe(
      o,
      "iterate",
      u ? pn : We
    ), {
      // iterator protocol
      next() {
        const { value: y, done: v } = a.next();
        return v ? { value: y, done: v } : {
          value: c ? [g(y[0]), g(y[1])] : g(y),
          done: v
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Se(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ao() {
  const e = {
    get(o) {
      return It(this, o);
    },
    get size() {
      return Tt(this);
    },
    has: At,
    add: is,
    set: ls,
    delete: cs,
    clear: fs,
    forEach: Rt(!1, !1)
  }, t = {
    get(o) {
      return It(this, o, !1, !0);
    },
    get size() {
      return Tt(this);
    },
    has: At,
    add: is,
    set: ls,
    delete: cs,
    clear: fs,
    forEach: Rt(!1, !0)
  }, n = {
    get(o) {
      return It(this, o, !0);
    },
    get size() {
      return Tt(this, !0);
    },
    has(o) {
      return At.call(this, o, !0);
    },
    add: Se("add"),
    set: Se("set"),
    delete: Se("delete"),
    clear: Se("clear"),
    forEach: Rt(!0, !1)
  }, s = {
    get(o) {
      return It(this, o, !0, !0);
    },
    get size() {
      return Tt(this, !0);
    },
    has(o) {
      return At.call(this, o, !0);
    },
    add: Se("add"),
    set: Se("set"),
    delete: Se("delete"),
    clear: Se("clear"),
    forEach: Rt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = Mt(
      o,
      !1,
      !1
    ), n[o] = Mt(
      o,
      !0,
      !1
    ), t[o] = Mt(
      o,
      !1,
      !0
    ), s[o] = Mt(
      o,
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
  ho,
  po,
  go,
  bo
] = /* @__PURE__ */ ao();
function Kn(e, t) {
  const n = t ? e ? bo : go : e ? po : ho;
  return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    j(n, r) && r in s ? n : s,
    r,
    o
  );
}
const mo = {
  get: /* @__PURE__ */ Kn(!1, !1)
}, _o = {
  get: /* @__PURE__ */ Kn(!1, !0)
}, wo = {
  get: /* @__PURE__ */ Kn(!0, !1)
}, Zs = /* @__PURE__ */ new WeakMap(), Qs = /* @__PURE__ */ new WeakMap(), Gs = /* @__PURE__ */ new WeakMap(), yo = /* @__PURE__ */ new WeakMap();
function xo(e) {
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
function vo(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : xo(kr(e));
}
function qt(e) {
  return st(e) ? e : Ln(
    e,
    !1,
    co,
    mo,
    Zs
  );
}
function Eo(e) {
  return Ln(
    e,
    !1,
    uo,
    _o,
    Qs
  );
}
function er(e) {
  return Ln(
    e,
    !0,
    fo,
    wo,
    Gs
  );
}
function Ln(e, t, n, s, r) {
  if (!$(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const i = vo(e);
  if (i === 0)
    return e;
  const c = new Proxy(
    e,
    i === 2 ? s : n
  );
  return r.set(e, c), c;
}
function Te(e) {
  return st(e) ? Te(e.__v_raw) : !!(e && e.__v_isReactive);
}
function st(e) {
  return !!(e && e.__v_isReadonly);
}
function Ut(e) {
  return !!(e && e.__v_isShallow);
}
function tr(e) {
  return Te(e) || st(e);
}
function F(e) {
  const t = e && e.__v_raw;
  return t ? F(t) : e;
}
function Jt(e) {
  return Kt(e, "__v_skip", !0), e;
}
const _t = (e) => $(e) ? qt(e) : e, Un = (e) => $(e) ? er(e) : e;
function nr(e) {
  Ne && pe && (e = F(e), Js(e.dep || (e.dep = jn())));
}
function sr(e, t) {
  e = F(e);
  const n = e.dep;
  n && gn(n);
}
function z(e) {
  return !!(e && e.__v_isRef === !0);
}
function Vt(e) {
  return Co(e, !1);
}
function Co(e, t) {
  return z(e) ? e : new Po(e, t);
}
class Po {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : F(t), this._value = n ? t : _t(t);
  }
  get value() {
    return nr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Ut(t) || st(t);
    t = n ? t : F(t), Je(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : _t(t), sr(this));
  }
}
function rr(e) {
  return z(e) ? e.value : e;
}
const Oo = {
  get: (e, t, n) => rr(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return z(r) && !z(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function or(e) {
  return Te(e) ? e : new Proxy(e, Oo);
}
function Io(e) {
  const t = O(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = ir(e, n);
  return t;
}
class Ao {
  constructor(t, n, s) {
    this._object = t, this._key = n, this._defaultValue = s, this.__v_isRef = !0;
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return so(F(this._object), this._key);
  }
}
class To {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function Ro(e, t, n) {
  return z(e) ? e : T(e) ? new To(e) : $(e) && arguments.length > 1 ? ir(e, t, n) : Vt(e);
}
function ir(e, t, n) {
  const s = e[t];
  return z(s) ? s : new Ao(e, t, n);
}
class Mo {
  constructor(t, n, s, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new Nn(t, () => {
      this._dirty || (this._dirty = !0, sr(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = s;
  }
  get value() {
    const t = F(this);
    return nr(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
function So(e, t, n = !1) {
  let s, r;
  const o = T(e);
  return o ? (s = e, r = be) : (s = e.get, r = e.set), new Mo(s, r, o || !r, n);
}
function He(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (o) {
    Yt(o, t, n);
  }
  return r;
}
function me(e, t, n, s) {
  if (T(e)) {
    const o = He(e, t, n, s);
    return o && Ns(o) && o.catch((i) => {
      Yt(i, t, n);
    }), o;
  }
  const r = [];
  for (let o = 0; o < e.length; o++)
    r.push(me(e[o], t, n, s));
  return r;
}
function Yt(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy, c = n;
    for (; o; ) {
      const a = o.ec;
      if (a) {
        for (let g = 0; g < a.length; g++)
          if (a[g](e, i, c) === !1)
            return;
      }
      o = o.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      He(
        u,
        null,
        10,
        [e, i, c]
      );
      return;
    }
  }
  Fo(e, n, r, s);
}
function Fo(e, t, n, s = !0) {
  console.error(e);
}
let wt = !1, bn = !1;
const ne = [];
let Ee = 0;
const nt = [];
let Pe = null, $e = 0;
const lr = /* @__PURE__ */ Promise.resolve();
let Bn = null;
function Dn(e) {
  const t = Bn || lr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function jo(e) {
  let t = Ee + 1, n = ne.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = ne[s], o = yt(r);
    o < e || o === e && r.pre ? t = s + 1 : n = s;
  }
  return t;
}
function kn(e) {
  (!ne.length || !ne.includes(
    e,
    wt && e.allowRecurse ? Ee + 1 : Ee
  )) && (e.id == null ? ne.push(e) : ne.splice(jo(e.id), 0, e), cr());
}
function cr() {
  !wt && !bn && (bn = !0, Bn = lr.then(ur));
}
function No(e) {
  const t = ne.indexOf(e);
  t > Ee && ne.splice(t, 1);
}
function Ho(e) {
  O(e) ? nt.push(...e) : (!Pe || !Pe.includes(
    e,
    e.allowRecurse ? $e + 1 : $e
  )) && nt.push(e), cr();
}
function us(e, t, n = wt ? Ee + 1 : 0) {
  for (; n < ne.length; n++) {
    const s = ne[n];
    if (s && s.pre) {
      if (e && s.id !== e.uid)
        continue;
      ne.splice(n, 1), n--, s();
    }
  }
}
function fr(e) {
  if (nt.length) {
    const t = [...new Set(nt)];
    if (nt.length = 0, Pe) {
      Pe.push(...t);
      return;
    }
    for (Pe = t, Pe.sort((n, s) => yt(n) - yt(s)), $e = 0; $e < Pe.length; $e++)
      Pe[$e]();
    Pe = null, $e = 0;
  }
}
const yt = (e) => e.id == null ? 1 / 0 : e.id, Ko = (e, t) => {
  const n = yt(e) - yt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function ur(e) {
  bn = !1, wt = !0, ne.sort(Ko);
  const t = be;
  try {
    for (Ee = 0; Ee < ne.length; Ee++) {
      const n = ne[Ee];
      n && n.active !== !1 && He(n, null, 14);
    }
  } finally {
    Ee = 0, ne.length = 0, fr(), wt = !1, Bn = null, (ne.length || nt.length) && ur();
  }
}
function Lo(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || k;
  let r = n;
  const o = t.startsWith("update:"), i = o && t.slice(7);
  if (i && i in s) {
    const g = `${i === "modelValue" ? "model" : i}Modifiers`, { number: y, trim: v } = s[g] || k;
    v && (r = n.map((I) => X(I) ? I.trim() : I)), y && (r = n.map(Wr));
  }
  let c, u = s[c = sn(t)] || // also try camelCase event handler (#2249)
  s[c = sn(Ie(t))];
  !u && o && (u = s[c = sn(he(t))]), u && me(
    u,
    e,
    6,
    r
  );
  const a = s[c + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, me(
      a,
      e,
      6,
      r
    );
  }
}
function ar(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const o = e.emits;
  let i = {}, c = !1;
  if (!T(e)) {
    const u = (a) => {
      const g = ar(a, t, !0);
      g && (c = !0, te(i, g));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !o && !c ? ($(e) && s.set(e, null), null) : (O(o) ? o.forEach((u) => i[u] = null) : te(i, o), $(e) && s.set(e, i), i);
}
function Xt(e, t) {
  return !e || !kt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), j(e, t[0].toLowerCase() + t.slice(1)) || j(e, he(t)) || j(e, t));
}
let ue = null, dr = null;
function Bt(e) {
  const t = ue;
  return ue = e, dr = e && e.type.__scopeId || null, t;
}
function Uo(e, t = ue, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && ys(-1);
    const o = Bt(t);
    let i;
    try {
      i = e(...r);
    } finally {
      Bt(o), s._d && ys(1);
    }
    return i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function ln(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    props: o,
    propsOptions: [i],
    slots: c,
    attrs: u,
    emit: a,
    render: g,
    renderCache: y,
    data: v,
    setupState: I,
    ctx: U,
    inheritAttrs: M
  } = e;
  let q, Z;
  const Y = Bt(e);
  try {
    if (n.shapeFlag & 4) {
      const R = r || s, J = R;
      q = ve(
        g.call(
          J,
          R,
          y,
          o,
          I,
          v,
          U
        )
      ), Z = u;
    } else {
      const R = t;
      q = ve(
        R.length > 1 ? R(
          o,
          { attrs: u, slots: c, emit: a }
        ) : R(
          o,
          null
          /* we know it doesn't need it */
        )
      ), Z = t.props ? u : Bo(u);
    }
  } catch (R) {
    bt.length = 0, Yt(R, e, 1), q = fe(vt);
  }
  let Q = q;
  if (Z && M !== !1) {
    const R = Object.keys(Z), { shapeFlag: J } = Q;
    R.length && J & 7 && (i && R.some(Tn) && (Z = Do(
      Z,
      i
    )), Q = rt(Q, Z));
  }
  return n.dirs && (Q = rt(Q), Q.dirs = Q.dirs ? Q.dirs.concat(n.dirs) : n.dirs), n.transition && (Q.transition = n.transition), q = Q, Bt(Y), q;
}
const Bo = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || kt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Do = (e, t) => {
  const n = {};
  for (const s in e)
    (!Tn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function ko(e, t, n) {
  const { props: s, children: r, component: o } = e, { props: i, children: c, patchFlag: u } = t, a = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return s ? as(s, i, a) : !!i;
    if (u & 8) {
      const g = t.dynamicProps;
      for (let y = 0; y < g.length; y++) {
        const v = g[y];
        if (i[v] !== s[v] && !Xt(a, v))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : s === i ? !1 : s ? i ? as(s, i, a) : !0 : !!i;
  return !1;
}
function as(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !Xt(n, o))
      return !0;
  }
  return !1;
}
function $o({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const zo = Symbol.for("v-ndc"), Wo = (e) => e.__isSuspense;
function qo(e, t) {
  t && t.pendingBranch ? O(e) ? t.effects.push(...e) : t.effects.push(e) : Ho(e);
}
const St = {};
function jt(e, t, n) {
  return hr(e, t, n);
}
function hr(e, t, { immediate: n, deep: s, flush: r, onTrack: o, onTrigger: i } = k) {
  var c;
  const u = $s() === ((c = ee) == null ? void 0 : c.scope) ? ee : null;
  let a, g = !1, y = !1;
  if (z(e) ? (a = () => e.value, g = Ut(e)) : Te(e) ? (a = () => e, s = !0) : O(e) ? (y = !0, g = e.some((R) => Te(R) || Ut(R)), a = () => e.map((R) => {
    if (z(R))
      return R.value;
    if (Te(R))
      return Ge(R);
    if (T(R))
      return He(R, u, 2);
  })) : T(e) ? t ? a = () => He(e, u, 2) : a = () => {
    if (!(u && u.isUnmounted))
      return v && v(), me(
        e,
        u,
        3,
        [I]
      );
  } : a = be, t && s) {
    const R = a;
    a = () => Ge(R());
  }
  let v, I = (R) => {
    v = Y.onStop = () => {
      He(R, u, 4), v = Y.onStop = void 0;
    };
  }, U;
  if (Ct)
    if (I = be, t ? n && me(t, u, 3, [
      a(),
      y ? [] : void 0,
      I
    ]) : a(), r === "sync") {
      const R = zi();
      U = R.__watcherHandles || (R.__watcherHandles = []);
    } else
      return be;
  let M = y ? new Array(e.length).fill(St) : St;
  const q = () => {
    if (Y.active)
      if (t) {
        const R = Y.run();
        (s || g || (y ? R.some((J, Le) => Je(J, M[Le])) : Je(R, M))) && (v && v(), me(t, u, 3, [
          R,
          // pass undefined as the old value when it's changed for the first time
          M === St ? void 0 : y && M[0] === St ? [] : M,
          I
        ]), M = R);
      } else
        Y.run();
  };
  q.allowRecurse = !!t;
  let Z;
  r === "sync" ? Z = q : r === "post" ? Z = () => re(q, u && u.suspense) : (q.pre = !0, u && (q.id = u.uid), Z = () => kn(q));
  const Y = new Nn(a, Z);
  t ? n ? q() : M = Y.run() : r === "post" ? re(
    Y.run.bind(Y),
    u && u.suspense
  ) : Y.run();
  const Q = () => {
    Y.stop(), u && u.scope && Rn(u.scope.effects, Y);
  };
  return U && U.push(Q), Q;
}
function Jo(e, t, n) {
  const s = this.proxy, r = X(e) ? e.includes(".") ? pr(s, e) : () => s[e] : e.bind(s, s);
  let o;
  T(t) ? o = t : (o = t.handler, n = t);
  const i = ee;
  ot(this);
  const c = hr(r, o.bind(s), n);
  return i ? ot(i) : qe(), c;
}
function pr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
function Ge(e, t) {
  if (!$(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), z(e))
    Ge(e.value, t);
  else if (O(e))
    for (let n = 0; n < e.length; n++)
      Ge(e[n], t);
  else if (js(e) || tt(e))
    e.forEach((n) => {
      Ge(n, t);
    });
  else if (Ks(e))
    for (const n in e)
      Ge(e[n], t);
  return e;
}
function De(e, t, n, s) {
  const r = e.dirs, o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const c = r[i];
    o && (c.oldValue = o[i].value);
    let u = c.dir[s];
    u && (lt(), me(u, n, 8, [
      e.el,
      c,
      e,
      t
    ]), ct());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function $n(e, t) {
  return T(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => te({ name: e.name }, t, { setup: e }))()
  ) : e;
}
const Nt = (e) => !!e.type.__asyncLoader, gr = (e) => e.type.__isKeepAlive;
function Vo(e, t) {
  br(e, "a", t);
}
function Yo(e, t) {
  br(e, "da", t);
}
function br(e, t, n = ee) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Zt(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      gr(r.parent.vnode) && Xo(s, t, n, r), r = r.parent;
  }
}
function Xo(e, t, n, s) {
  const r = Zt(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  mr(() => {
    Rn(s[t], r);
  }, n);
}
function Zt(e, t, n = ee, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      lt(), ot(n);
      const c = me(t, n, e, i);
      return qe(), ct(), c;
    });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const Re = (e) => (t, n = ee) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Ct || e === "sp") && Zt(e, (...s) => t(...s), n)
), Zo = Re("bm"), Qo = Re("m"), Go = Re("bu"), ei = Re("u"), ti = Re("bum"), mr = Re("um"), ni = Re("sp"), si = Re(
  "rtg"
), ri = Re(
  "rtc"
);
function oi(e, t = ee) {
  Zt("ec", e, t);
}
const mn = (e) => e ? Rr(e) ? Vn(e) || e.proxy : mn(e.parent) : null, pt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ te(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => mn(e.parent),
    $root: (e) => mn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => zn(e),
    $forceUpdate: (e) => e.f || (e.f = () => kn(e.update)),
    $nextTick: (e) => e.n || (e.n = Dn.bind(e.proxy)),
    $watch: (e) => Jo.bind(e)
  })
), cn = (e, t) => e !== k && !e.__isScriptSetup && j(e, t), ii = {
  get({ _: e }, t) {
    const { ctx: n, setupState: s, data: r, props: o, accessCache: i, type: c, appContext: u } = e;
    let a;
    if (t[0] !== "$") {
      const I = i[t];
      if (I !== void 0)
        switch (I) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (cn(s, t))
          return i[t] = 1, s[t];
        if (r !== k && j(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && j(a, t)
        )
          return i[t] = 3, o[t];
        if (n !== k && j(n, t))
          return i[t] = 4, n[t];
        _n && (i[t] = 0);
      }
    }
    const g = pt[t];
    let y, v;
    if (g)
      return t === "$attrs" && oe(e, "get", t), g(e);
    if (
      // css module (injected by vue-loader)
      (y = c.__cssModules) && (y = y[t])
    )
      return y;
    if (n !== k && j(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      v = u.config.globalProperties, j(v, t)
    )
      return v[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: o } = e;
    return cn(r, t) ? (r[t] = n, !0) : s !== k && j(s, t) ? (s[t] = n, !0) : j(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o }
  }, i) {
    let c;
    return !!n[i] || e !== k && j(e, i) || cn(t, i) || (c = o[0]) && j(c, i) || j(s, i) || j(pt, i) || j(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : j(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function ds(e) {
  return O(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let _n = !0;
function li(e) {
  const t = zn(e), n = e.proxy, s = e.ctx;
  _n = !1, t.beforeCreate && hs(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: o,
    methods: i,
    watch: c,
    provide: u,
    inject: a,
    // lifecycle
    created: g,
    beforeMount: y,
    mounted: v,
    beforeUpdate: I,
    updated: U,
    activated: M,
    deactivated: q,
    beforeDestroy: Z,
    beforeUnmount: Y,
    destroyed: Q,
    unmounted: R,
    render: J,
    renderTracked: Le,
    renderTriggered: ae,
    errorCaptured: N,
    serverPrefetch: H,
    // public API
    expose: G,
    inheritAttrs: ie,
    // assets
    components: _e,
    directives: Ve,
    filters: ft
  } = t;
  if (a && ci(a, s, null), i)
    for (const W in i) {
      const B = i[W];
      T(B) && (s[W] = B.bind(n));
    }
  if (r) {
    const W = r.call(n, n);
    $(W) && (e.data = qt(W));
  }
  if (_n = !0, o)
    for (const W in o) {
      const B = o[W], Ue = T(B) ? B.bind(n, n) : T(B.get) ? B.get.bind(n, n) : be, Pt = !T(B) && T(B.set) ? B.set.bind(n) : be, Be = Sr({
        get: Ue,
        set: Pt
      });
      Object.defineProperty(s, W, {
        enumerable: !0,
        configurable: !0,
        get: () => Be.value,
        set: (we) => Be.value = we
      });
    }
  if (c)
    for (const W in c)
      _r(c[W], s, n, W);
  if (u) {
    const W = T(u) ? u.call(n) : u;
    Reflect.ownKeys(W).forEach((B) => {
      pi(B, W[B]);
    });
  }
  g && hs(g, e, "c");
  function K(W, B) {
    O(B) ? B.forEach((Ue) => W(Ue.bind(n))) : B && W(B.bind(n));
  }
  if (K(Zo, y), K(Qo, v), K(Go, I), K(ei, U), K(Vo, M), K(Yo, q), K(oi, N), K(ri, Le), K(si, ae), K(ti, Y), K(mr, R), K(ni, H), O(G))
    if (G.length) {
      const W = e.exposed || (e.exposed = {});
      G.forEach((B) => {
        Object.defineProperty(W, B, {
          get: () => n[B],
          set: (Ue) => n[B] = Ue
        });
      });
    } else
      e.exposed || (e.exposed = {});
  J && e.render === be && (e.render = J), ie != null && (e.inheritAttrs = ie), _e && (e.components = _e), Ve && (e.directives = Ve);
}
function ci(e, t, n = be) {
  O(e) && (e = wn(e));
  for (const s in e) {
    const r = e[s];
    let o;
    $(r) ? "default" in r ? o = gt(
      r.from || s,
      r.default,
      !0
      /* treat default function as factory */
    ) : o = gt(r.from || s) : o = gt(r), z(o) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[s] = o;
  }
}
function hs(e, t, n) {
  me(
    O(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function _r(e, t, n, s) {
  const r = s.includes(".") ? pr(n, s) : () => n[s];
  if (X(e)) {
    const o = t[e];
    T(o) && jt(r, o);
  } else if (T(e))
    jt(r, e.bind(n));
  else if ($(e))
    if (O(e))
      e.forEach((o) => _r(o, t, n, s));
    else {
      const o = T(e.handler) ? e.handler.bind(n) : t[e.handler];
      T(o) && jt(r, o, e);
    }
}
function zn(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = o.get(t);
  let u;
  return c ? u = c : !r.length && !n && !s ? u = t : (u = {}, r.length && r.forEach(
    (a) => Dt(u, a, i, !0)
  ), Dt(u, t, i)), $(t) && o.set(t, u), u;
}
function Dt(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && Dt(e, o, n, !0), r && r.forEach(
    (i) => Dt(e, i, n, !0)
  );
  for (const i in t)
    if (!(s && i === "expose")) {
      const c = fi[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const fi = {
  data: ps,
  props: gs,
  emits: gs,
  // objects
  methods: ht,
  computed: ht,
  // lifecycle
  beforeCreate: se,
  created: se,
  beforeMount: se,
  mounted: se,
  beforeUpdate: se,
  updated: se,
  beforeDestroy: se,
  beforeUnmount: se,
  destroyed: se,
  unmounted: se,
  activated: se,
  deactivated: se,
  errorCaptured: se,
  serverPrefetch: se,
  // assets
  components: ht,
  directives: ht,
  // watch
  watch: ai,
  // provide / inject
  provide: ps,
  inject: ui
};
function ps(e, t) {
  return t ? e ? function() {
    return te(
      T(e) ? e.call(this, this) : e,
      T(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ui(e, t) {
  return ht(wn(e), wn(t));
}
function wn(e) {
  if (O(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function se(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ht(e, t) {
  return e ? te(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function gs(e, t) {
  return e ? O(e) && O(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : te(
    /* @__PURE__ */ Object.create(null),
    ds(e),
    ds(t ?? {})
  ) : t;
}
function ai(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = te(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = se(e[s], t[s]);
  return n;
}
function wr() {
  return {
    app: null,
    config: {
      isNativeTag: Br,
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
let di = 0;
function hi(e, t) {
  return function(s, r = null) {
    T(s) || (s = te({}, s)), r != null && !$(r) && (r = null);
    const o = wr(), i = /* @__PURE__ */ new WeakSet();
    let c = !1;
    const u = o.app = {
      _uid: di++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Wi,
      get config() {
        return o.config;
      },
      set config(a) {
      },
      use(a, ...g) {
        return i.has(a) || (a && T(a.install) ? (i.add(a), a.install(u, ...g)) : T(a) && (i.add(a), a(u, ...g))), u;
      },
      mixin(a) {
        return o.mixins.includes(a) || o.mixins.push(a), u;
      },
      component(a, g) {
        return g ? (o.components[a] = g, u) : o.components[a];
      },
      directive(a, g) {
        return g ? (o.directives[a] = g, u) : o.directives[a];
      },
      mount(a, g, y) {
        if (!c) {
          const v = fe(s, r);
          return v.appContext = o, g && t ? t(v, a) : e(v, a, y), c = !0, u._container = a, a.__vue_app__ = u, Vn(v.component) || v.component.proxy;
        }
      },
      unmount() {
        c && (e(null, u._container), delete u._container.__vue_app__);
      },
      provide(a, g) {
        return o.provides[a] = g, u;
      },
      runWithContext(a) {
        xt = u;
        try {
          return a();
        } finally {
          xt = null;
        }
      }
    };
    return u;
  };
}
let xt = null;
function pi(e, t) {
  if (ee) {
    let n = ee.provides;
    const s = ee.parent && ee.parent.provides;
    s === n && (n = ee.provides = Object.create(s)), n[e] = t;
  }
}
function gt(e, t, n = !1) {
  const s = ee || ue;
  if (s || xt) {
    const r = s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : xt._context.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && T(t) ? t.call(s && s.proxy) : t;
  }
}
function gi() {
  return !!(ee || ue || xt);
}
function bi(e, t, n, s = !1) {
  const r = {}, o = {};
  Kt(o, Gt, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), yr(e, t, r, o);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  n ? e.props = s ? r : Eo(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
}
function mi(e, t, n, s) {
  const {
    props: r,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, c = F(r), [u] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const g = e.vnode.dynamicProps;
      for (let y = 0; y < g.length; y++) {
        let v = g[y];
        if (Xt(e.emitsOptions, v))
          continue;
        const I = t[v];
        if (u)
          if (j(o, v))
            I !== o[v] && (o[v] = I, a = !0);
          else {
            const U = Ie(v);
            r[U] = yn(
              u,
              c,
              U,
              I,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          I !== o[v] && (o[v] = I, a = !0);
      }
    }
  } else {
    yr(e, t, r, o) && (a = !0);
    let g;
    for (const y in c)
      (!t || // for camelCase
      !j(t, y) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((g = he(y)) === y || !j(t, g))) && (u ? n && // for camelCase
      (n[y] !== void 0 || // for kebab-case
      n[g] !== void 0) && (r[y] = yn(
        u,
        c,
        y,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete r[y]);
    if (o !== c)
      for (const y in o)
        (!t || !j(t, y)) && (delete o[y], a = !0);
  }
  a && Ae(e, "set", "$attrs");
}
function yr(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let u in t) {
      if (Ft(u))
        continue;
      const a = t[u];
      let g;
      r && j(r, g = Ie(u)) ? !o || !o.includes(g) ? n[g] = a : (c || (c = {}))[g] = a : Xt(e.emitsOptions, u) || (!(u in s) || a !== s[u]) && (s[u] = a, i = !0);
    }
  if (o) {
    const u = F(n), a = c || k;
    for (let g = 0; g < o.length; g++) {
      const y = o[g];
      n[y] = yn(
        r,
        u,
        y,
        a[y],
        e,
        !j(a, y)
      );
    }
  }
  return i;
}
function yn(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const c = j(i, "default");
    if (c && s === void 0) {
      const u = i.default;
      if (i.type !== Function && !i.skipFactory && T(u)) {
        const { propsDefaults: a } = r;
        n in a ? s = a[n] : (ot(r), s = a[n] = u.call(
          null,
          t
        ), qe());
      } else
        s = u;
    }
    i[
      0
      /* shouldCast */
    ] && (o && !c ? s = !1 : i[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === he(n)) && (s = !0));
  }
  return s;
}
function xr(e, t, n = !1) {
  const s = t.propsCache, r = s.get(e);
  if (r)
    return r;
  const o = e.props, i = {}, c = [];
  let u = !1;
  if (!T(e)) {
    const g = (y) => {
      u = !0;
      const [v, I] = xr(y, t, !0);
      te(i, v), I && c.push(...I);
    };
    !n && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g);
  }
  if (!o && !u)
    return $(e) && s.set(e, et), et;
  if (O(o))
    for (let g = 0; g < o.length; g++) {
      const y = Ie(o[g]);
      bs(y) && (i[y] = k);
    }
  else if (o)
    for (const g in o) {
      const y = Ie(g);
      if (bs(y)) {
        const v = o[g], I = i[y] = O(v) || T(v) ? { type: v } : te({}, v);
        if (I) {
          const U = ws(Boolean, I.type), M = ws(String, I.type);
          I[
            0
            /* shouldCast */
          ] = U > -1, I[
            1
            /* shouldCastTrue */
          ] = M < 0 || U < M, (U > -1 || j(I, "default")) && c.push(y);
        }
      }
    }
  const a = [i, c];
  return $(e) && s.set(e, a), a;
}
function bs(e) {
  return e[0] !== "$";
}
function ms(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function _s(e, t) {
  return ms(e) === ms(t);
}
function ws(e, t) {
  return O(t) ? t.findIndex((n) => _s(n, e)) : T(t) && _s(t, e) ? 0 : -1;
}
const vr = (e) => e[0] === "_" || e === "$stable", Wn = (e) => O(e) ? e.map(ve) : [ve(e)], _i = (e, t, n) => {
  if (t._n)
    return t;
  const s = Uo((...r) => Wn(t(...r)), n);
  return s._c = !1, s;
}, Er = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (vr(r))
      continue;
    const o = e[r];
    if (T(o))
      t[r] = _i(r, o, s);
    else if (o != null) {
      const i = Wn(o);
      t[r] = () => i;
    }
  }
}, Cr = (e, t) => {
  const n = Wn(t);
  e.slots.default = () => n;
}, wi = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = F(t), Kt(t, "_", n)) : Er(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && Cr(e, t);
  Kt(e.slots, Gt, 1);
}, yi = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let o = !0, i = k;
  if (s.shapeFlag & 32) {
    const c = t._;
    c ? n && c === 1 ? o = !1 : (te(r, t), !n && c === 1 && delete r._) : (o = !t.$stable, Er(t, r)), i = t;
  } else
    t && (Cr(e, t), i = { default: 1 });
  if (o)
    for (const c in r)
      !vr(c) && i[c] == null && delete r[c];
};
function xn(e, t, n, s, r = !1) {
  if (O(e)) {
    e.forEach(
      (v, I) => xn(
        v,
        t && (O(t) ? t[I] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (Nt(s) && !r)
    return;
  const o = s.shapeFlag & 4 ? Vn(s.component) || s.component.proxy : s.el, i = r ? null : o, { i: c, r: u } = e, a = t && t.r, g = c.refs === k ? c.refs = {} : c.refs, y = c.setupState;
  if (a != null && a !== u && (X(a) ? (g[a] = null, j(y, a) && (y[a] = null)) : z(a) && (a.value = null)), T(u))
    He(u, c, 12, [i, g]);
  else {
    const v = X(u), I = z(u);
    if (v || I) {
      const U = () => {
        if (e.f) {
          const M = v ? j(y, u) ? y[u] : g[u] : u.value;
          r ? O(M) && Rn(M, o) : O(M) ? M.includes(o) || M.push(o) : v ? (g[u] = [o], j(y, u) && (y[u] = g[u])) : (u.value = [o], e.k && (g[e.k] = u.value));
        } else
          v ? (g[u] = i, j(y, u) && (y[u] = i)) : I && (u.value = i, e.k && (g[e.k] = i));
      };
      i ? (U.id = -1, re(U, n)) : U();
    }
  }
}
const re = qo;
function xi(e) {
  return vi(e);
}
function vi(e, t) {
  const n = dn();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: o,
    createElement: i,
    createText: c,
    createComment: u,
    setText: a,
    setElementText: g,
    parentNode: y,
    nextSibling: v,
    setScopeId: I = be,
    insertStaticContent: U
  } = e, M = (l, f, d, h = null, p = null, _ = null, x = !1, m = null, w = !!f.dynamicChildren) => {
    if (l === f)
      return;
    l && !at(l, f) && (h = Ot(l), we(l, p, _, !0), l = null), f.patchFlag === -2 && (w = !1, f.dynamicChildren = null);
    const { type: b, ref: C, shapeFlag: E } = f;
    switch (b) {
      case Qt:
        q(l, f, d, h);
        break;
      case vt:
        Z(l, f, d, h);
        break;
      case fn:
        l == null && Y(f, d, h, x);
        break;
      case Oe:
        _e(
          l,
          f,
          d,
          h,
          p,
          _,
          x,
          m,
          w
        );
        break;
      default:
        E & 1 ? J(
          l,
          f,
          d,
          h,
          p,
          _,
          x,
          m,
          w
        ) : E & 6 ? Ve(
          l,
          f,
          d,
          h,
          p,
          _,
          x,
          m,
          w
        ) : (E & 64 || E & 128) && b.process(
          l,
          f,
          d,
          h,
          p,
          _,
          x,
          m,
          w,
          Ye
        );
    }
    C != null && p && xn(C, l && l.ref, _, f || l, !f);
  }, q = (l, f, d, h) => {
    if (l == null)
      s(
        f.el = c(f.children),
        d,
        h
      );
    else {
      const p = f.el = l.el;
      f.children !== l.children && a(p, f.children);
    }
  }, Z = (l, f, d, h) => {
    l == null ? s(
      f.el = u(f.children || ""),
      d,
      h
    ) : f.el = l.el;
  }, Y = (l, f, d, h) => {
    [l.el, l.anchor] = U(
      l.children,
      f,
      d,
      h,
      l.el,
      l.anchor
    );
  }, Q = ({ el: l, anchor: f }, d, h) => {
    let p;
    for (; l && l !== f; )
      p = v(l), s(l, d, h), l = p;
    s(f, d, h);
  }, R = ({ el: l, anchor: f }) => {
    let d;
    for (; l && l !== f; )
      d = v(l), r(l), l = d;
    r(f);
  }, J = (l, f, d, h, p, _, x, m, w) => {
    x = x || f.type === "svg", l == null ? Le(
      f,
      d,
      h,
      p,
      _,
      x,
      m,
      w
    ) : H(
      l,
      f,
      p,
      _,
      x,
      m,
      w
    );
  }, Le = (l, f, d, h, p, _, x, m) => {
    let w, b;
    const { type: C, props: E, shapeFlag: P, transition: A, dirs: S } = l;
    if (w = l.el = i(
      l.type,
      _,
      E && E.is,
      E
    ), P & 8 ? g(w, l.children) : P & 16 && N(
      l.children,
      w,
      null,
      h,
      p,
      _ && C !== "foreignObject",
      x,
      m
    ), S && De(l, null, h, "created"), ae(w, l, l.scopeId, x, h), E) {
      for (const L in E)
        L !== "value" && !Ft(L) && o(
          w,
          L,
          null,
          E[L],
          _,
          l.children,
          h,
          p,
          Ce
        );
      "value" in E && o(w, "value", null, E.value), (b = E.onVnodeBeforeMount) && xe(b, h, l);
    }
    S && De(l, null, h, "beforeMount");
    const D = Ei(p, A);
    D && A.beforeEnter(w), s(w, f, d), ((b = E && E.onVnodeMounted) || D || S) && re(() => {
      b && xe(b, h, l), D && A.enter(w), S && De(l, null, h, "mounted");
    }, p);
  }, ae = (l, f, d, h, p) => {
    if (d && I(l, d), h)
      for (let _ = 0; _ < h.length; _++)
        I(l, h[_]);
    if (p) {
      let _ = p.subTree;
      if (f === _) {
        const x = p.vnode;
        ae(
          l,
          x,
          x.scopeId,
          x.slotScopeIds,
          p.parent
        );
      }
    }
  }, N = (l, f, d, h, p, _, x, m, w = 0) => {
    for (let b = w; b < l.length; b++) {
      const C = l[b] = m ? je(l[b]) : ve(l[b]);
      M(
        null,
        C,
        f,
        d,
        h,
        p,
        _,
        x,
        m
      );
    }
  }, H = (l, f, d, h, p, _, x) => {
    const m = f.el = l.el;
    let { patchFlag: w, dynamicChildren: b, dirs: C } = f;
    w |= l.patchFlag & 16;
    const E = l.props || k, P = f.props || k;
    let A;
    d && ke(d, !1), (A = P.onVnodeBeforeUpdate) && xe(A, d, f, l), C && De(f, l, d, "beforeUpdate"), d && ke(d, !0);
    const S = p && f.type !== "foreignObject";
    if (b ? G(
      l.dynamicChildren,
      b,
      m,
      d,
      h,
      S,
      _
    ) : x || B(
      l,
      f,
      m,
      null,
      d,
      h,
      S,
      _,
      !1
    ), w > 0) {
      if (w & 16)
        ie(
          m,
          f,
          E,
          P,
          d,
          h,
          p
        );
      else if (w & 2 && E.class !== P.class && o(m, "class", null, P.class, p), w & 4 && o(m, "style", E.style, P.style, p), w & 8) {
        const D = f.dynamicProps;
        for (let L = 0; L < D.length; L++) {
          const V = D[L], de = E[V], Xe = P[V];
          (Xe !== de || V === "value") && o(
            m,
            V,
            de,
            Xe,
            p,
            l.children,
            d,
            h,
            Ce
          );
        }
      }
      w & 1 && l.children !== f.children && g(m, f.children);
    } else
      !x && b == null && ie(
        m,
        f,
        E,
        P,
        d,
        h,
        p
      );
    ((A = P.onVnodeUpdated) || C) && re(() => {
      A && xe(A, d, f, l), C && De(f, l, d, "updated");
    }, h);
  }, G = (l, f, d, h, p, _, x) => {
    for (let m = 0; m < f.length; m++) {
      const w = l[m], b = f[m], C = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        w.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (w.type === Oe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !at(w, b) || // - In the case of a component, it could contain anything.
        w.shapeFlag & 70) ? y(w.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          d
        )
      );
      M(
        w,
        b,
        C,
        null,
        h,
        p,
        _,
        x,
        !0
      );
    }
  }, ie = (l, f, d, h, p, _, x) => {
    if (d !== h) {
      if (d !== k)
        for (const m in d)
          !Ft(m) && !(m in h) && o(
            l,
            m,
            d[m],
            null,
            x,
            f.children,
            p,
            _,
            Ce
          );
      for (const m in h) {
        if (Ft(m))
          continue;
        const w = h[m], b = d[m];
        w !== b && m !== "value" && o(
          l,
          m,
          b,
          w,
          x,
          f.children,
          p,
          _,
          Ce
        );
      }
      "value" in h && o(l, "value", d.value, h.value);
    }
  }, _e = (l, f, d, h, p, _, x, m, w) => {
    const b = f.el = l ? l.el : c(""), C = f.anchor = l ? l.anchor : c("");
    let { patchFlag: E, dynamicChildren: P, slotScopeIds: A } = f;
    A && (m = m ? m.concat(A) : A), l == null ? (s(b, d, h), s(C, d, h), N(
      f.children,
      d,
      C,
      p,
      _,
      x,
      m,
      w
    )) : E > 0 && E & 64 && P && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (G(
      l.dynamicChildren,
      P,
      d,
      p,
      _,
      x,
      m
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || p && f === p.subTree) && Pr(
      l,
      f,
      !0
      /* shallow */
    )) : B(
      l,
      f,
      d,
      C,
      p,
      _,
      x,
      m,
      w
    );
  }, Ve = (l, f, d, h, p, _, x, m, w) => {
    f.slotScopeIds = m, l == null ? f.shapeFlag & 512 ? p.ctx.activate(
      f,
      d,
      h,
      x,
      w
    ) : ft(
      f,
      d,
      h,
      p,
      _,
      x,
      w
    ) : Me(l, f, w);
  }, ft = (l, f, d, h, p, _, x) => {
    const m = l.component = Ni(
      l,
      h,
      p
    );
    if (gr(l) && (m.ctx.renderer = Ye), Ki(m), m.asyncDep) {
      if (p && p.registerDep(m, K), !l.el) {
        const w = m.subTree = fe(vt);
        Z(null, w, f, d);
      }
      return;
    }
    K(
      m,
      l,
      f,
      d,
      p,
      _,
      x
    );
  }, Me = (l, f, d) => {
    const h = f.component = l.component;
    if (ko(l, f, d))
      if (h.asyncDep && !h.asyncResolved) {
        W(h, f, d);
        return;
      } else
        h.next = f, No(h.update), h.update();
    else
      f.el = l.el, h.vnode = f;
  }, K = (l, f, d, h, p, _, x) => {
    const m = () => {
      if (l.isMounted) {
        let { next: C, bu: E, u: P, parent: A, vnode: S } = l, D = C, L;
        ke(l, !1), C ? (C.el = S.el, W(l, C, x)) : C = S, E && rn(E), (L = C.props && C.props.onVnodeBeforeUpdate) && xe(L, A, C, S), ke(l, !0);
        const V = ln(l), de = l.subTree;
        l.subTree = V, M(
          de,
          V,
          // parent may have changed if it's in a teleport
          y(de.el),
          // anchor may have changed if it's in a fragment
          Ot(de),
          l,
          p,
          _
        ), C.el = V.el, D === null && $o(l, V.el), P && re(P, p), (L = C.props && C.props.onVnodeUpdated) && re(
          () => xe(L, A, C, S),
          p
        );
      } else {
        let C;
        const { el: E, props: P } = f, { bm: A, m: S, parent: D } = l, L = Nt(f);
        if (ke(l, !1), A && rn(A), !L && (C = P && P.onVnodeBeforeMount) && xe(C, D, f), ke(l, !0), E && nn) {
          const V = () => {
            l.subTree = ln(l), nn(
              E,
              l.subTree,
              l,
              p,
              null
            );
          };
          L ? f.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !l.isUnmounted && V()
          ) : V();
        } else {
          const V = l.subTree = ln(l);
          M(
            null,
            V,
            d,
            h,
            l,
            p,
            _
          ), f.el = V.el;
        }
        if (S && re(S, p), !L && (C = P && P.onVnodeMounted)) {
          const V = f;
          re(
            () => xe(C, D, V),
            p
          );
        }
        (f.shapeFlag & 256 || D && Nt(D.vnode) && D.vnode.shapeFlag & 256) && l.a && re(l.a, p), l.isMounted = !0, f = d = h = null;
      }
    }, w = l.effect = new Nn(
      m,
      () => kn(b),
      l.scope
      // track it in component's effect scope
    ), b = l.update = () => w.run();
    b.id = l.uid, ke(l, !0), b();
  }, W = (l, f, d) => {
    f.component = l;
    const h = l.vnode.props;
    l.vnode = f, l.next = null, mi(l, f.props, h, d), yi(l, f.children, d), lt(), us(l), ct();
  }, B = (l, f, d, h, p, _, x, m, w = !1) => {
    const b = l && l.children, C = l ? l.shapeFlag : 0, E = f.children, { patchFlag: P, shapeFlag: A } = f;
    if (P > 0) {
      if (P & 128) {
        Pt(
          b,
          E,
          d,
          h,
          p,
          _,
          x,
          m,
          w
        );
        return;
      } else if (P & 256) {
        Ue(
          b,
          E,
          d,
          h,
          p,
          _,
          x,
          m,
          w
        );
        return;
      }
    }
    A & 8 ? (C & 16 && Ce(b, p, _), E !== b && g(d, E)) : C & 16 ? A & 16 ? Pt(
      b,
      E,
      d,
      h,
      p,
      _,
      x,
      m,
      w
    ) : Ce(b, p, _, !0) : (C & 8 && g(d, ""), A & 16 && N(
      E,
      d,
      h,
      p,
      _,
      x,
      m,
      w
    ));
  }, Ue = (l, f, d, h, p, _, x, m, w) => {
    l = l || et, f = f || et;
    const b = l.length, C = f.length, E = Math.min(b, C);
    let P;
    for (P = 0; P < E; P++) {
      const A = f[P] = w ? je(f[P]) : ve(f[P]);
      M(
        l[P],
        A,
        d,
        null,
        p,
        _,
        x,
        m,
        w
      );
    }
    b > C ? Ce(
      l,
      p,
      _,
      !0,
      !1,
      E
    ) : N(
      f,
      d,
      h,
      p,
      _,
      x,
      m,
      w,
      E
    );
  }, Pt = (l, f, d, h, p, _, x, m, w) => {
    let b = 0;
    const C = f.length;
    let E = l.length - 1, P = C - 1;
    for (; b <= E && b <= P; ) {
      const A = l[b], S = f[b] = w ? je(f[b]) : ve(f[b]);
      if (at(A, S))
        M(
          A,
          S,
          d,
          null,
          p,
          _,
          x,
          m,
          w
        );
      else
        break;
      b++;
    }
    for (; b <= E && b <= P; ) {
      const A = l[E], S = f[P] = w ? je(f[P]) : ve(f[P]);
      if (at(A, S))
        M(
          A,
          S,
          d,
          null,
          p,
          _,
          x,
          m,
          w
        );
      else
        break;
      E--, P--;
    }
    if (b > E) {
      if (b <= P) {
        const A = P + 1, S = A < C ? f[A].el : h;
        for (; b <= P; )
          M(
            null,
            f[b] = w ? je(f[b]) : ve(f[b]),
            d,
            S,
            p,
            _,
            x,
            m,
            w
          ), b++;
      }
    } else if (b > P)
      for (; b <= E; )
        we(l[b], p, _, !0), b++;
    else {
      const A = b, S = b, D = /* @__PURE__ */ new Map();
      for (b = S; b <= P; b++) {
        const le = f[b] = w ? je(f[b]) : ve(f[b]);
        le.key != null && D.set(le.key, b);
      }
      let L, V = 0;
      const de = P - S + 1;
      let Xe = !1, Qn = 0;
      const ut = new Array(de);
      for (b = 0; b < de; b++)
        ut[b] = 0;
      for (b = A; b <= E; b++) {
        const le = l[b];
        if (V >= de) {
          we(le, p, _, !0);
          continue;
        }
        let ye;
        if (le.key != null)
          ye = D.get(le.key);
        else
          for (L = S; L <= P; L++)
            if (ut[L - S] === 0 && at(le, f[L])) {
              ye = L;
              break;
            }
        ye === void 0 ? we(le, p, _, !0) : (ut[ye - S] = b + 1, ye >= Qn ? Qn = ye : Xe = !0, M(
          le,
          f[ye],
          d,
          null,
          p,
          _,
          x,
          m,
          w
        ), V++);
      }
      const Gn = Xe ? Ci(ut) : et;
      for (L = Gn.length - 1, b = de - 1; b >= 0; b--) {
        const le = S + b, ye = f[le], es = le + 1 < C ? f[le + 1].el : h;
        ut[b] === 0 ? M(
          null,
          ye,
          d,
          es,
          p,
          _,
          x,
          m,
          w
        ) : Xe && (L < 0 || b !== Gn[L] ? Be(ye, d, es, 2) : L--);
      }
    }
  }, Be = (l, f, d, h, p = null) => {
    const { el: _, type: x, transition: m, children: w, shapeFlag: b } = l;
    if (b & 6) {
      Be(l.component.subTree, f, d, h);
      return;
    }
    if (b & 128) {
      l.suspense.move(f, d, h);
      return;
    }
    if (b & 64) {
      x.move(l, f, d, Ye);
      return;
    }
    if (x === Oe) {
      s(_, f, d);
      for (let E = 0; E < w.length; E++)
        Be(w[E], f, d, h);
      s(l.anchor, f, d);
      return;
    }
    if (x === fn) {
      Q(l, f, d);
      return;
    }
    if (h !== 2 && b & 1 && m)
      if (h === 0)
        m.beforeEnter(_), s(_, f, d), re(() => m.enter(_), p);
      else {
        const { leave: E, delayLeave: P, afterLeave: A } = m, S = () => s(_, f, d), D = () => {
          E(_, () => {
            S(), A && A();
          });
        };
        P ? P(_, S, D) : D();
      }
    else
      s(_, f, d);
  }, we = (l, f, d, h = !1, p = !1) => {
    const {
      type: _,
      props: x,
      ref: m,
      children: w,
      dynamicChildren: b,
      shapeFlag: C,
      patchFlag: E,
      dirs: P
    } = l;
    if (m != null && xn(m, null, d, l, !0), C & 256) {
      f.ctx.deactivate(l);
      return;
    }
    const A = C & 1 && P, S = !Nt(l);
    let D;
    if (S && (D = x && x.onVnodeBeforeUnmount) && xe(D, f, l), C & 6)
      Ur(l.component, d, h);
    else {
      if (C & 128) {
        l.suspense.unmount(d, h);
        return;
      }
      A && De(l, null, f, "beforeUnmount"), C & 64 ? l.type.remove(
        l,
        f,
        d,
        p,
        Ye,
        h
      ) : b && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== Oe || E > 0 && E & 64) ? Ce(
        b,
        f,
        d,
        !1,
        !0
      ) : (_ === Oe && E & 384 || !p && C & 16) && Ce(w, f, d), h && Xn(l);
    }
    (S && (D = x && x.onVnodeUnmounted) || A) && re(() => {
      D && xe(D, f, l), A && De(l, null, f, "unmounted");
    }, d);
  }, Xn = (l) => {
    const { type: f, el: d, anchor: h, transition: p } = l;
    if (f === Oe) {
      Lr(d, h);
      return;
    }
    if (f === fn) {
      R(l);
      return;
    }
    const _ = () => {
      r(d), p && !p.persisted && p.afterLeave && p.afterLeave();
    };
    if (l.shapeFlag & 1 && p && !p.persisted) {
      const { leave: x, delayLeave: m } = p, w = () => x(d, _);
      m ? m(l.el, _, w) : w();
    } else
      _();
  }, Lr = (l, f) => {
    let d;
    for (; l !== f; )
      d = v(l), r(l), l = d;
    r(f);
  }, Ur = (l, f, d) => {
    const { bum: h, scope: p, update: _, subTree: x, um: m } = l;
    h && rn(h), p.stop(), _ && (_.active = !1, we(x, l, f, d)), m && re(m, f), re(() => {
      l.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, Ce = (l, f, d, h = !1, p = !1, _ = 0) => {
    for (let x = _; x < l.length; x++)
      we(l[x], f, d, h, p);
  }, Ot = (l) => l.shapeFlag & 6 ? Ot(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : v(l.anchor || l.el), Zn = (l, f, d) => {
    l == null ? f._vnode && we(f._vnode, null, null, !0) : M(f._vnode || null, l, f, null, null, null, d), us(), fr(), f._vnode = l;
  }, Ye = {
    p: M,
    um: we,
    m: Be,
    r: Xn,
    mt: ft,
    mc: N,
    pc: B,
    pbc: G,
    n: Ot,
    o: e
  };
  let tn, nn;
  return t && ([tn, nn] = t(
    Ye
  )), {
    render: Zn,
    hydrate: tn,
    createApp: hi(Zn, tn)
  };
}
function ke({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Ei(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Pr(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (O(s) && O(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let c = r[o];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[o] = je(r[o]), c.el = i.el), n || Pr(i, c)), c.type === Qt && (c.el = i.el);
    }
}
function Ci(e) {
  const t = e.slice(), n = [0];
  let s, r, o, i, c;
  const u = e.length;
  for (s = 0; s < u; s++) {
    const a = e[s];
    if (a !== 0) {
      if (r = n[n.length - 1], e[r] < a) {
        t[s] = r, n.push(s);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        c = o + i >> 1, e[n[c]] < a ? o = c + 1 : i = c;
      a < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), n[o] = s);
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; )
    n[o] = i, i = t[i];
  return n;
}
const Pi = (e) => e.__isTeleport, Oe = Symbol.for("v-fgt"), Qt = Symbol.for("v-txt"), vt = Symbol.for("v-cmt"), fn = Symbol.for("v-stc"), bt = [];
let ge = null;
function Or(e = !1) {
  bt.push(ge = e ? null : []);
}
function Oi() {
  bt.pop(), ge = bt[bt.length - 1] || null;
}
let Et = 1;
function ys(e) {
  Et += e;
}
function Ir(e) {
  return e.dynamicChildren = Et > 0 ? ge || et : null, Oi(), Et > 0 && ge && ge.push(e), e;
}
function Ii(e, t, n, s, r, o) {
  return Ir(
    Tr(
      e,
      t,
      n,
      s,
      r,
      o,
      !0
      /* isBlock */
    )
  );
}
function Ai(e, t, n, s, r) {
  return Ir(
    fe(
      e,
      t,
      n,
      s,
      r,
      !0
      /* isBlock: prevent a block from tracking itself */
    )
  );
}
function vn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function at(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Gt = "__vInternal", Ar = ({ key: e }) => e ?? null, Ht = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? X(e) || z(e) || T(e) ? { i: ue, r: e, k: t, f: !!n } : e : null);
function Tr(e, t = null, n = null, s = 0, r = null, o = e === Oe ? 0 : 1, i = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ar(t),
    ref: t && Ht(t),
    scopeId: dr,
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
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ue
  };
  return c ? (qn(u, n), o & 128 && e.normalize(u)) : n && (u.shapeFlag |= X(n) ? 8 : 16), Et > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  ge && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && ge.push(u), u;
}
const fe = Ti;
function Ti(e, t = null, n = null, s = 0, r = null, o = !1) {
  if ((!e || e === zo) && (e = vt), vn(e)) {
    const c = rt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && qn(c, n), Et > 0 && !o && ge && (c.shapeFlag & 6 ? ge[ge.indexOf(e)] = c : ge.push(c)), c.patchFlag |= -2, c;
  }
  if (Di(e) && (e = e.__vccOpts), t) {
    t = Ri(t);
    let { class: c, style: u } = t;
    c && !X(c) && (t.class = Fn(c)), $(u) && (tr(u) && !O(u) && (u = te({}, u)), t.style = Sn(u));
  }
  const i = X(e) ? 1 : Wo(e) ? 128 : Pi(e) ? 64 : $(e) ? 4 : T(e) ? 2 : 0;
  return Tr(
    e,
    t,
    n,
    s,
    r,
    i,
    o,
    !0
  );
}
function Ri(e) {
  return e ? tr(e) || Gt in e ? te({}, e) : e : null;
}
function rt(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: o, children: i } = e, c = t ? Si(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Ar(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? O(r) ? r.concat(Ht(t)) : [r, Ht(t)] : Ht(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Oe ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && rt(e.ssContent),
    ssFallback: e.ssFallback && rt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Mi(e = " ", t = 0) {
  return fe(Qt, null, e, t);
}
function ve(e) {
  return e == null || typeof e == "boolean" ? fe(vt) : O(e) ? fe(
    Oe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? je(e) : fe(Qt, null, String(e));
}
function je(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : rt(e);
}
function qn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (O(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), qn(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(Gt in t) ? t._ctx = ue : r === 3 && ue && (ue.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    T(t) ? (t = { default: t, _ctx: ue }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Mi(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Si(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Fn([t.class, s.class]));
      else if (r === "style")
        t.style = Sn([t.style, s.style]);
      else if (kt(r)) {
        const o = t[r], i = s[r];
        i && o !== i && !(O(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
      } else
        r !== "" && (t[r] = s[r]);
  }
  return t;
}
function xe(e, t, n, s = null) {
  me(e, t, 7, [
    n,
    s
  ]);
}
const Fi = wr();
let ji = 0;
function Ni(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || Fi, o = {
    uid: ji++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new Ds(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: xr(s, r),
    emitsOptions: ar(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: k,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: k,
    data: k,
    props: k,
    attrs: k,
    slots: k,
    refs: k,
    setupState: k,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Lo.bind(null, o), e.ce && e.ce(o), o;
}
let ee = null;
const Hi = () => ee || ue;
let Jn, Ze, xs = "__VUE_INSTANCE_SETTERS__";
(Ze = dn()[xs]) || (Ze = dn()[xs] = []), Ze.push((e) => ee = e), Jn = (e) => {
  Ze.length > 1 ? Ze.forEach((t) => t(e)) : Ze[0](e);
};
const ot = (e) => {
  Jn(e), e.scope.on();
}, qe = () => {
  ee && ee.scope.off(), Jn(null);
};
function Rr(e) {
  return e.vnode.shapeFlag & 4;
}
let Ct = !1;
function Ki(e, t = !1) {
  Ct = t;
  const { props: n, children: s } = e.vnode, r = Rr(e);
  bi(e, n, r, t), wi(e, s);
  const o = r ? Li(e, t) : void 0;
  return Ct = !1, o;
}
function Li(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Jt(new Proxy(e.ctx, ii));
  const { setup: s } = n;
  if (s) {
    const r = e.setupContext = s.length > 1 ? Bi(e) : null;
    ot(e), lt();
    const o = He(
      s,
      e,
      0,
      [e.props, r]
    );
    if (ct(), qe(), Ns(o)) {
      if (o.then(qe, qe), t)
        return o.then((i) => {
          vs(e, i, t);
        }).catch((i) => {
          Yt(i, e, 0);
        });
      e.asyncDep = o;
    } else
      vs(e, o, t);
  } else
    Mr(e, t);
}
function vs(e, t, n) {
  T(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : $(t) && (e.setupState = or(t)), Mr(e, n);
}
let Es;
function Mr(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && Es && !s.render) {
      const r = s.template || zn(e).template;
      if (r) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config, { delimiters: c, compilerOptions: u } = s, a = te(
          te(
            {
              isCustomElement: o,
              delimiters: c
            },
            i
          ),
          u
        );
        s.render = Es(r, a);
      }
    }
    e.render = s.render || be;
  }
  {
    ot(e), lt();
    try {
      li(e);
    } finally {
      ct(), qe();
    }
  }
}
function Ui(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    {
      get(t, n) {
        return oe(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function Bi(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return Ui(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Vn(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(or(Jt(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in pt)
          return pt[n](e);
      },
      has(t, n) {
        return n in t || n in pt;
      }
    }));
}
function Di(e) {
  return T(e) && "__vccOpts" in e;
}
const Sr = (e, t) => So(e, t, Ct);
function ki(e, t, n) {
  const s = arguments.length;
  return s === 2 ? $(t) && !O(t) ? vn(t) ? fe(e, null, [t]) : fe(e, t) : fe(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && vn(n) && (n = [n]), fe(e, t, n));
}
const $i = Symbol.for("v-scx"), zi = () => gt($i), Wi = "3.3.11", qi = "http://www.w3.org/2000/svg", ze = typeof document < "u" ? document : null, Cs = ze && /* @__PURE__ */ ze.createElement("template"), Ji = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t ? ze.createElementNS(qi, e) : ze.createElement(e, n ? { is: n } : void 0);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => ze.createTextNode(e),
  createComment: (e) => ze.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ze.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, r, o) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === o || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === o || !(r = r.nextSibling)); )
        ;
    else {
      Cs.innerHTML = s ? `<svg>${e}</svg>` : e;
      const c = Cs.content;
      if (s) {
        const u = c.firstChild;
        for (; u.firstChild; )
          c.appendChild(u.firstChild);
        c.removeChild(u);
      }
      t.insertBefore(c, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Vi = Symbol("_vtc");
function Yi(e, t, n) {
  const s = e[Vi];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Xi = Symbol("_vod");
function Zi(e, t, n) {
  const s = e.style, r = X(n);
  if (n && !r) {
    if (t && !X(t))
      for (const o in t)
        n[o] == null && En(s, o, "");
    for (const o in n)
      En(s, o, n[o]);
  } else {
    const o = s.display;
    r ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"), Xi in e && (s.display = o);
  }
}
const Ps = /\s*!important$/;
function En(e, t, n) {
  if (O(n))
    n.forEach((s) => En(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Qi(e, t);
    Ps.test(n) ? e.setProperty(
      he(s),
      n.replace(Ps, ""),
      "important"
    ) : e[s] = n;
  }
}
const Os = ["Webkit", "Moz", "ms"], un = {};
function Qi(e, t) {
  const n = un[t];
  if (n)
    return n;
  let s = Ie(t);
  if (s !== "filter" && s in e)
    return un[t] = s;
  s = Ls(s);
  for (let r = 0; r < Os.length; r++) {
    const o = Os[r] + s;
    if (o in e)
      return un[t] = o;
  }
  return t;
}
const Is = "http://www.w3.org/1999/xlink";
function Gi(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Is, t.slice(6, t.length)) : e.setAttributeNS(Is, t, n);
  else {
    const o = Zr(t);
    n == null || o && !Us(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
  }
}
function el(e, t, n, s, r, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    s && i(s, r, o), e[t] = n ?? "";
    return;
  }
  const c = e.tagName;
  if (t === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    e._value = n;
    const a = c === "OPTION" ? e.getAttribute("value") : e.value, g = n ?? "";
    a !== g && (e.value = g), n == null && e.removeAttribute(t);
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = Us(n) : n == null && a === "string" ? (n = "", u = !0) : a === "number" && (n = 0, u = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  u && e.removeAttribute(t);
}
function tl(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function nl(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const As = Symbol("_vei");
function sl(e, t, n, s, r = null) {
  const o = e[As] || (e[As] = {}), i = o[t];
  if (s && i)
    i.value = s;
  else {
    const [c, u] = rl(t);
    if (s) {
      const a = o[t] = ll(s, r);
      tl(e, c, a, u);
    } else
      i && (nl(e, c, i, u), o[t] = void 0);
  }
}
const Ts = /(?:Once|Passive|Capture)$/;
function rl(e) {
  let t;
  if (Ts.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Ts); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : he(e.slice(2)), t];
}
let an = 0;
const ol = /* @__PURE__ */ Promise.resolve(), il = () => an || (ol.then(() => an = 0), an = Date.now());
function ll(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    me(
      cl(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = il(), n;
}
function cl(e, t) {
  if (O(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((s) => (r) => !r._stopped && s && s(r));
  } else
    return t;
}
const Rs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, fl = (e, t, n, s, r = !1, o, i, c, u) => {
  t === "class" ? Yi(e, s, r) : t === "style" ? Zi(e, n, s) : kt(t) ? Tn(t) || sl(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ul(e, t, s, r)) ? el(
    e,
    t,
    s,
    o,
    i,
    c,
    u
  ) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Gi(e, t, s, r));
};
function ul(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Rs(t) && T(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Rs(t) && X(n) ? !1 : t in e;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function al(e, t) {
  const n = /* @__PURE__ */ $n(e);
  class s extends Yn {
    constructor(o) {
      super(n, o, t);
    }
  }
  return s.def = n, s;
}
const dl = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Yn extends dl {
  constructor(t, n = {}, s) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && s ? s(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, this._ob && (this._ob.disconnect(), this._ob = null), Dn(() => {
      this._connected || (Ss(null, this.shadowRoot), this._instance = null);
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
      for (const r of s)
        this._setAttr(r.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (s, r = !1) => {
      const { props: o, styles: i } = s;
      let c;
      if (o && !O(o))
        for (const u in o) {
          const a = o[u];
          (a === Number || a && a.type === Number) && (u in this._props && (this._props[u] = ts(this._props[u])), (c || (c = /* @__PURE__ */ Object.create(null)))[Ie(u)] = !0);
        }
      this._numberProps = c, r && this._resolveProps(s), this._applyStyles(i), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then((s) => t(s, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: n } = t, s = O(n) ? n : Object.keys(n || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && s.includes(r) && this._setProp(r, this[r], !0, !1);
    for (const r of s.map(Ie))
      Object.defineProperty(this, r, {
        get() {
          return this._getProp(r);
        },
        set(o) {
          this._setProp(r, o);
        }
      });
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    const s = Ie(t);
    this._numberProps && this._numberProps[s] && (n = ts(n)), this._setProp(s, n, !1);
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
  _setProp(t, n, s = !0, r = !0) {
    n !== this._props[t] && (this._props[t] = n, r && this._instance && this._update(), s && (n === !0 ? this.setAttribute(he(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(he(t), n + "") : n || this.removeAttribute(he(t))));
  }
  _update() {
    Ss(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = fe(this._def, te({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0;
      const s = (o, i) => {
        this.dispatchEvent(
          new CustomEvent(o, {
            detail: i
          })
        );
      };
      n.emit = (o, ...i) => {
        s(o, i), he(o) !== o && s(he(o), i);
      };
      let r = this;
      for (; r = r && (r.parentNode || r.host); )
        if (r instanceof Yn) {
          n.parent = r._instance, n.provides = r._instance.provides;
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
const hl = ["ctrl", "shift", "alt", "meta"], pl = {
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
  exact: (e, t) => hl.some((n) => e[`${n}Key`] && !t.includes(n))
}, gl = (e, t) => e._withMods || (e._withMods = (n, ...s) => {
  for (let r = 0; r < t.length; r++) {
    const o = pl[t[r]];
    if (o && o(n, t))
      return;
  }
  return e(n, ...s);
}), bl = /* @__PURE__ */ te({ patchProp: fl }, Ji);
let Ms;
function Fr() {
  return Ms || (Ms = xi(bl));
}
const Ss = (...e) => {
  Fr().render(...e);
}, ml = (...e) => {
  const t = Fr().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = _l(s);
    if (!r)
      return;
    const o = t._component;
    !T(o) && !o.render && !o.template && (o.template = r.innerHTML), r.innerHTML = "";
    const i = n(r, !1, r instanceof SVGElement);
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
  }, t;
};
function _l(e) {
  return X(e) ? document.querySelector(e) : e;
}
const wl = /* @__PURE__ */ $n({
  __name: "Buble",
  setup(e) {
    const t = Vt(1);
    return (n, s) => (Or(), Ii("div", {
      class: "fixed bottom-4 right-4 bg-blue-500 rounded-full py-5 px-7 text-white cursor-pointer select-none",
      onClick: s[0] || (s[0] = gl((r) => t.value++, ["stop"]))
    }, Qr(rr(t)), 1));
  }
});
var yl = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let jr;
const en = (e) => jr = e, Nr = (
  /* istanbul ignore next */
  Symbol()
);
function Cn(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var mt;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(mt || (mt = {}));
function xl() {
  const e = ks(!0), t = e.run(() => Vt({}));
  let n = [], s = [];
  const r = Jt({
    install(o) {
      en(r), r._a = o, o.provide(Nr, r), o.config.globalProperties.$pinia = r, s.forEach((i) => n.push(i)), s = [];
    },
    use(o) {
      return !this._a && !yl ? s.push(o) : n.push(o), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return r;
}
const Hr = () => {
};
function Fs(e, t, n, s = Hr) {
  e.push(t);
  const r = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), s());
  };
  return !n && $s() && eo(r), r;
}
function Qe(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const vl = (e) => e();
function Pn(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, s) => e.set(s, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], r = e[n];
    Cn(r) && Cn(s) && e.hasOwnProperty(n) && !z(s) && !Te(s) ? e[n] = Pn(r, s) : e[n] = s;
  }
  return e;
}
const El = (
  /* istanbul ignore next */
  Symbol()
);
function Cl(e) {
  return !Cn(e) || !e.hasOwnProperty(El);
}
const { assign: Fe } = Object;
function Pl(e) {
  return !!(z(e) && e.effect);
}
function Ol(e, t, n, s) {
  const { state: r, actions: o, getters: i } = t, c = n.state.value[e];
  let u;
  function a() {
    c || (n.state.value[e] = r ? r() : {});
    const g = Io(n.state.value[e]);
    return Fe(g, o, Object.keys(i || {}).reduce((y, v) => (y[v] = Jt(Sr(() => {
      en(n);
      const I = n._s.get(e);
      return i[v].call(I, I);
    })), y), {}));
  }
  return u = Kr(e, a, t, n, s, !0), u;
}
function Kr(e, t, n = {}, s, r, o) {
  let i;
  const c = Fe({ actions: {} }, n), u = {
    deep: !0
    // flush: 'post',
  };
  let a, g, y = [], v = [], I;
  const U = s.state.value[e];
  !o && !U && (s.state.value[e] = {}), Vt({});
  let M;
  function q(N) {
    let H;
    a = g = !1, typeof N == "function" ? (N(s.state.value[e]), H = {
      type: mt.patchFunction,
      storeId: e,
      events: I
    }) : (Pn(s.state.value[e], N), H = {
      type: mt.patchObject,
      payload: N,
      storeId: e,
      events: I
    });
    const G = M = Symbol();
    Dn().then(() => {
      M === G && (a = !0);
    }), g = !0, Qe(y, H, s.state.value[e]);
  }
  const Z = o ? function() {
    const { state: H } = n, G = H ? H() : {};
    this.$patch((ie) => {
      Fe(ie, G);
    });
  } : (
    /* istanbul ignore next */
    Hr
  );
  function Y() {
    i.stop(), y = [], v = [], s._s.delete(e);
  }
  function Q(N, H) {
    return function() {
      en(s);
      const G = Array.from(arguments), ie = [], _e = [];
      function Ve(K) {
        ie.push(K);
      }
      function ft(K) {
        _e.push(K);
      }
      Qe(v, {
        args: G,
        name: N,
        store: J,
        after: Ve,
        onError: ft
      });
      let Me;
      try {
        Me = H.apply(this && this.$id === e ? this : J, G);
      } catch (K) {
        throw Qe(_e, K), K;
      }
      return Me instanceof Promise ? Me.then((K) => (Qe(ie, K), K)).catch((K) => (Qe(_e, K), Promise.reject(K))) : (Qe(ie, Me), Me);
    };
  }
  const R = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: Fs.bind(null, v),
    $patch: q,
    $reset: Z,
    $subscribe(N, H = {}) {
      const G = Fs(y, N, H.detached, () => ie()), ie = i.run(() => jt(() => s.state.value[e], (_e) => {
        (H.flush === "sync" ? g : a) && N({
          storeId: e,
          type: mt.direct,
          events: I
        }, _e);
      }, Fe({}, u, H)));
      return G;
    },
    $dispose: Y
  }, J = qt(R);
  s._s.set(e, J);
  const ae = (s._a && s._a.runWithContext || vl)(() => s._e.run(() => (i = ks()).run(t)));
  for (const N in ae) {
    const H = ae[N];
    if (z(H) && !Pl(H) || Te(H))
      o || (U && Cl(H) && (z(H) ? H.value = U[N] : Pn(H, U[N])), s.state.value[e][N] = H);
    else if (typeof H == "function") {
      const G = Q(N, H);
      ae[N] = G, c.actions[N] = H;
    }
  }
  return Fe(J, ae), Fe(F(J), ae), Object.defineProperty(J, "$state", {
    get: () => s.state.value[e],
    set: (N) => {
      q((H) => {
        Fe(H, N);
      });
    }
  }), s._p.forEach((N) => {
    Fe(J, i.run(() => N({
      store: J,
      app: s._a,
      pinia: s,
      options: c
    })));
  }), U && o && n.hydrate && n.hydrate(J.$state, U), a = !0, g = !0, J;
}
function Il(e, t, n) {
  let s, r;
  const o = typeof t == "function";
  typeof e == "string" ? (s = e, r = o ? n : t) : (r = e, s = e.id);
  function i(c, u) {
    const a = gi();
    return c = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    c || (a ? gt(Nr, null) : null), c && en(c), c = jr, c._s.has(s) || (o ? Kr(s, t, r, c) : Ol(s, r, c)), c._s.get(s);
  }
  return i.$id = s, i;
}
function Al(e) {
  {
    e = F(e);
    const t = {};
    for (const n in e) {
      const s = e[n];
      (z(s) || Te(s)) && (t[n] = // ---
      Ro(e, n));
    }
    return t;
  }
}
const Tl = (e) => {
  e ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "visible";
}, Rl = Il("main", {
  state: () => ({
    isError: !1,
    ModalState: !1
  }),
  getters: {},
  actions: {
    async ModalChanger(e) {
      this.ModalState = e, Tl(e);
    }
  }
}), Ml = /* @__PURE__ */ $n({
  __name: "App",
  setup(e) {
    return Al(Rl()), (t, n) => {
      const s = wl;
      return Or(), Ai(s);
    };
  }
}), Sl = `*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.visible{visibility:visible}.fixed{position:fixed}.bottom-4{bottom:1rem}.right-4{right:1rem}.block{display:block}.flex{display:flex}.hidden{display:none}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.rounded-full{border-radius:9999px}.bg-blue-500{--tw-bg-opacity: 1;background-color:rgb(59 130 246 / var(--tw-bg-opacity))}.px-7{padding-left:1.75rem;padding-right:1.75rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}
`, Fl = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, On = /* @__PURE__ */ Fl(Ml, [["styles", [Sl]]]), jl = xl(), In = ml(On);
In.use(jl);
const Nl = /* @__PURE__ */ al({
  render: () => ki(On),
  styles: On.styles,
  props: {},
  setup() {
    const e = Hi();
    Object.assign(e == null ? void 0 : e.appContext, In._context), Object.assign(e == null ? void 0 : e.provides, In._context.provides);
  }
});
customElements.define("chat-widget", Nl);
