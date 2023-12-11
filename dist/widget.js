function ps(e, t) {
  const s = /* @__PURE__ */ Object.create(null), n = e.split(",");
  for (let r = 0; r < n.length; r++)
    s[n[r]] = !0;
  return t ? (r) => !!s[r.toLowerCase()] : (r) => !!s[r];
}
const K = {}, rt = [], fe = () => {
}, gr = () => !1, Rt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), gs = (e) => e.startsWith("onUpdate:"), W = Object.assign, ms = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, mr = Object.prototype.hasOwnProperty, N = (e, t) => mr.call(e, t), O = Array.isArray, ot = (e) => Nt(e) === "[object Map]", br = (e) => Nt(e) === "[object Set]", I = (e) => typeof e == "function", k = (e) => typeof e == "string", Ft = (e) => typeof e == "symbol", D = (e) => e !== null && typeof e == "object", En = (e) => (D(e) || I(e)) && I(e.then) && I(e.catch), _r = Object.prototype.toString, Nt = (e) => _r.call(e), wr = (e) => Nt(e).slice(8, -1), xr = (e) => Nt(e) === "[object Object]", bs = (e) => k(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, vt = /* @__PURE__ */ ps(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), jt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, yr = /-(\w)/g, xe = jt((e) => e.replace(yr, (t, s) => s ? s.toUpperCase() : "")), vr = /\B([A-Z])/g, ie = jt(
  (e) => e.replace(vr, "-$1").toLowerCase()
), Cn = jt((e) => e.charAt(0).toUpperCase() + e.slice(1)), kt = jt((e) => e ? `on${Cn(e)}` : ""), Ke = (e, t) => !Object.is(e, t), qt = (e, t) => {
  for (let s = 0; s < e.length; s++)
    e[s](t);
}, Ot = (e, t, s) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: s
  });
}, Er = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, zs = (e) => {
  const t = k(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Ws;
const Gt = () => Ws || (Ws = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function _s(e) {
  if (O(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], r = k(n) ? Tr(n) : _s(n);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else if (k(e) || D(e))
    return e;
}
const Cr = /;(?![^(]*\))/g, Pr = /:([^]+)/, Or = /\/\*[^]*?\*\//g;
function Tr(e) {
  const t = {};
  return e.replace(Or, "").split(Cr).forEach((s) => {
    if (s) {
      const n = s.split(Pr);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function ws(e) {
  let t = "";
  if (k(e))
    t = e;
  else if (O(e))
    for (let s = 0; s < e.length; s++) {
      const n = ws(e[s]);
      n && (t += n + " ");
    }
  else if (D(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const Ar = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ir = /* @__PURE__ */ ps(Ar);
function Pn(e) {
  return !!e || e === "";
}
let oe;
class On {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = oe, !t && oe && (this.index = (oe.scopes || (oe.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const s = oe;
      try {
        return oe = this, t();
      } finally {
        oe = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    oe = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    oe = this.parent;
  }
  stop(t) {
    if (this._active) {
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++)
        this.effects[s].stop();
      for (s = 0, n = this.cleanups.length; s < n; s++)
        this.cleanups[s]();
      if (this.scopes)
        for (s = 0, n = this.scopes.length; s < n; s++)
          this.scopes[s].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Mr(e) {
  return new On(e);
}
function Rr(e, t = oe) {
  t && t.active && t.effects.push(e);
}
function Fr() {
  return oe;
}
const xs = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Tn = (e) => (e.w & Ae) > 0, An = (e) => (e.n & Ae) > 0, Nr = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Ae;
}, jr = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let s = 0;
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      Tn(r) && !An(r) ? r.delete(e) : t[s++] = r, r.w &= ~Ae, r.n &= ~Ae;
    }
    t.length = s;
  }
}, es = /* @__PURE__ */ new WeakMap();
let st = 0, Ae = 1;
const ts = 30;
let le;
const He = Symbol(""), ss = Symbol("");
class ys {
  constructor(t, s = null, n) {
    this.fn = t, this.scheduler = s, this.active = !0, this.deps = [], this.parent = void 0, Rr(this, n);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = le, s = Oe;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = le, le = this, Oe = !0, Ae = 1 << ++st, st <= ts ? Nr(this) : ks(this), this.fn();
    } finally {
      st <= ts && jr(this), Ae = 1 << --st, le = this.parent, Oe = s, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    le === this ? this.deferStop = !0 : this.active && (ks(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function ks(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let s = 0; s < t.length; s++)
      t[s].delete(e);
    t.length = 0;
  }
}
let Oe = !0;
const In = [];
function Xe() {
  In.push(Oe), Oe = !1;
}
function Ze() {
  const e = In.pop();
  Oe = e === void 0 ? !0 : e;
}
function te(e, t, s) {
  if (Oe && le) {
    let n = es.get(e);
    n || es.set(e, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || n.set(s, r = xs()), Mn(r);
  }
}
function Mn(e, t) {
  let s = !1;
  st <= ts ? An(e) || (e.n |= Ae, s = !Tn(e)) : s = !e.has(le), s && (e.add(le), le.deps.push(e));
}
function ye(e, t, s, n, r, o) {
  const l = es.get(e);
  if (!l)
    return;
  let f = [];
  if (t === "clear")
    f = [...l.values()];
  else if (s === "length" && O(e)) {
    const u = Number(n);
    l.forEach((a, m) => {
      (m === "length" || !Ft(m) && m >= u) && f.push(a);
    });
  } else
    switch (s !== void 0 && f.push(l.get(s)), t) {
      case "add":
        O(e) ? bs(s) && f.push(l.get("length")) : (f.push(l.get(He)), ot(e) && f.push(l.get(ss)));
        break;
      case "delete":
        O(e) || (f.push(l.get(He)), ot(e) && f.push(l.get(ss)));
        break;
      case "set":
        ot(e) && f.push(l.get(He));
        break;
    }
  if (f.length === 1)
    f[0] && ns(f[0]);
  else {
    const u = [];
    for (const a of f)
      a && u.push(...a);
    ns(xs(u));
  }
}
function ns(e, t) {
  const s = O(e) ? e : [...e];
  for (const n of s)
    n.computed && qs(n);
  for (const n of s)
    n.computed || qs(n);
}
function qs(e, t) {
  (e !== le || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const Sr = /* @__PURE__ */ ps("__proto__,__v_isRef,__isVue"), Rn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ft)
), Js = /* @__PURE__ */ Hr();
function Hr() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...s) {
      const n = j(this);
      for (let o = 0, l = this.length; o < l; o++)
        te(n, "get", o + "");
      const r = n[t](...s);
      return r === -1 || r === !1 ? n[t](...s.map(j)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...s) {
      Xe();
      const n = j(this)[t].apply(this, s);
      return Ze(), n;
    };
  }), e;
}
function Ur(e) {
  const t = j(this);
  return te(t, "has", e), t.hasOwnProperty(e);
}
class Fn {
  constructor(t = !1, s = !1) {
    this._isReadonly = t, this._shallow = s;
  }
  get(t, s, n) {
    const r = this._isReadonly, o = this._shallow;
    if (s === "__v_isReactive")
      return !r;
    if (s === "__v_isReadonly")
      return r;
    if (s === "__v_isShallow")
      return o;
    if (s === "__v_raw")
      return n === (r ? o ? Xr : Hn : o ? Sn : jn).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const l = O(t);
    if (!r) {
      if (l && N(Js, s))
        return Reflect.get(Js, s, n);
      if (s === "hasOwnProperty")
        return Ur;
    }
    const f = Reflect.get(t, s, n);
    return (Ft(s) ? Rn.has(s) : Sr(s)) || (r || te(t, "get", s), o) ? f : Z(f) ? l && bs(s) ? f : f.value : D(f) ? r ? Un(f) : Cs(f) : f;
  }
}
class Nn extends Fn {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let o = t[s];
    if (Je(o) && Z(o) && !Z(n))
      return !1;
    if (!this._shallow && (!Tt(n) && !Je(n) && (o = j(o), n = j(n)), !O(t) && Z(o) && !Z(n)))
      return o.value = n, !0;
    const l = O(t) && bs(s) ? Number(s) < t.length : N(t, s), f = Reflect.set(t, s, n, r);
    return t === j(r) && (l ? Ke(n, o) && ye(t, "set", s, n) : ye(t, "add", s, n)), f;
  }
  deleteProperty(t, s) {
    const n = N(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return r && n && ye(t, "delete", s, void 0), r;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Ft(s) || !Rn.has(s)) && te(t, "has", s), n;
  }
  ownKeys(t) {
    return te(
      t,
      "iterate",
      O(t) ? "length" : He
    ), Reflect.ownKeys(t);
  }
}
class Kr extends Fn {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, s) {
    return !0;
  }
  deleteProperty(t, s) {
    return !0;
  }
}
const Lr = /* @__PURE__ */ new Nn(), Dr = /* @__PURE__ */ new Kr(), Br = /* @__PURE__ */ new Nn(
  !0
), vs = (e) => e, St = (e) => Reflect.getPrototypeOf(e);
function mt(e, t, s = !1, n = !1) {
  e = e.__v_raw;
  const r = j(e), o = j(t);
  s || (Ke(t, o) && te(r, "get", t), te(r, "get", o));
  const { has: l } = St(r), f = n ? vs : s ? Ts : lt;
  if (l.call(r, t))
    return f(e.get(t));
  if (l.call(r, o))
    return f(e.get(o));
  e !== r && e.get(t);
}
function bt(e, t = !1) {
  const s = this.__v_raw, n = j(s), r = j(e);
  return t || (Ke(e, r) && te(n, "has", e), te(n, "has", r)), e === r ? s.has(e) : s.has(e) || s.has(r);
}
function _t(e, t = !1) {
  return e = e.__v_raw, !t && te(j(e), "iterate", He), Reflect.get(e, "size", e);
}
function Ys(e) {
  e = j(e);
  const t = j(this);
  return St(t).has.call(t, e) || (t.add(e), ye(t, "add", e, e)), this;
}
function Vs(e, t) {
  t = j(t);
  const s = j(this), { has: n, get: r } = St(s);
  let o = n.call(s, e);
  o || (e = j(e), o = n.call(s, e));
  const l = r.call(s, e);
  return s.set(e, t), o ? Ke(t, l) && ye(s, "set", e, t) : ye(s, "add", e, t), this;
}
function Xs(e) {
  const t = j(this), { has: s, get: n } = St(t);
  let r = s.call(t, e);
  r || (e = j(e), r = s.call(t, e)), n && n.call(t, e);
  const o = t.delete(e);
  return r && ye(t, "delete", e, void 0), o;
}
function Zs() {
  const e = j(this), t = e.size !== 0, s = e.clear();
  return t && ye(e, "clear", void 0, void 0), s;
}
function wt(e, t) {
  return function(n, r) {
    const o = this, l = o.__v_raw, f = j(l), u = t ? vs : e ? Ts : lt;
    return !e && te(f, "iterate", He), l.forEach((a, m) => n.call(r, u(a), u(m), o));
  };
}
function xt(e, t, s) {
  return function(...n) {
    const r = this.__v_raw, o = j(r), l = ot(o), f = e === "entries" || e === Symbol.iterator && l, u = e === "keys" && l, a = r[e](...n), m = s ? vs : t ? Ts : lt;
    return !t && te(
      o,
      "iterate",
      u ? ss : He
    ), {
      // iterator protocol
      next() {
        const { value: y, done: E } = a.next();
        return E ? { value: y, done: E } : {
          value: f ? [m(y[0]), m(y[1])] : m(y),
          done: E
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Ce(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function $r() {
  const e = {
    get(o) {
      return mt(this, o);
    },
    get size() {
      return _t(this);
    },
    has: bt,
    add: Ys,
    set: Vs,
    delete: Xs,
    clear: Zs,
    forEach: wt(!1, !1)
  }, t = {
    get(o) {
      return mt(this, o, !1, !0);
    },
    get size() {
      return _t(this);
    },
    has: bt,
    add: Ys,
    set: Vs,
    delete: Xs,
    clear: Zs,
    forEach: wt(!1, !0)
  }, s = {
    get(o) {
      return mt(this, o, !0);
    },
    get size() {
      return _t(this, !0);
    },
    has(o) {
      return bt.call(this, o, !0);
    },
    add: Ce("add"),
    set: Ce("set"),
    delete: Ce("delete"),
    clear: Ce("clear"),
    forEach: wt(!0, !1)
  }, n = {
    get(o) {
      return mt(this, o, !0, !0);
    },
    get size() {
      return _t(this, !0);
    },
    has(o) {
      return bt.call(this, o, !0);
    },
    add: Ce("add"),
    set: Ce("set"),
    delete: Ce("delete"),
    clear: Ce("clear"),
    forEach: wt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = xt(
      o,
      !1,
      !1
    ), s[o] = xt(
      o,
      !0,
      !1
    ), t[o] = xt(
      o,
      !1,
      !0
    ), n[o] = xt(
      o,
      !0,
      !0
    );
  }), [
    e,
    s,
    t,
    n
  ];
}
const [
  zr,
  Wr,
  kr,
  qr
] = /* @__PURE__ */ $r();
function Es(e, t) {
  const s = t ? e ? qr : kr : e ? Wr : zr;
  return (n, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(
    N(s, r) && r in n ? s : n,
    r,
    o
  );
}
const Jr = {
  get: /* @__PURE__ */ Es(!1, !1)
}, Yr = {
  get: /* @__PURE__ */ Es(!1, !0)
}, Vr = {
  get: /* @__PURE__ */ Es(!0, !1)
}, jn = /* @__PURE__ */ new WeakMap(), Sn = /* @__PURE__ */ new WeakMap(), Hn = /* @__PURE__ */ new WeakMap(), Xr = /* @__PURE__ */ new WeakMap();
function Zr(e) {
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
function Qr(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Zr(wr(e));
}
function Cs(e) {
  return Je(e) ? e : Ps(
    e,
    !1,
    Lr,
    Jr,
    jn
  );
}
function Gr(e) {
  return Ps(
    e,
    !1,
    Br,
    Yr,
    Sn
  );
}
function Un(e) {
  return Ps(
    e,
    !0,
    Dr,
    Vr,
    Hn
  );
}
function Ps(e, t, s, n, r) {
  if (!D(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const l = Qr(e);
  if (l === 0)
    return e;
  const f = new Proxy(
    e,
    l === 2 ? n : s
  );
  return r.set(e, f), f;
}
function ke(e) {
  return Je(e) ? ke(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Je(e) {
  return !!(e && e.__v_isReadonly);
}
function Tt(e) {
  return !!(e && e.__v_isShallow);
}
function Kn(e) {
  return ke(e) || Je(e);
}
function j(e) {
  const t = e && e.__v_raw;
  return t ? j(t) : e;
}
function Os(e) {
  return Ot(e, "__v_skip", !0), e;
}
const lt = (e) => D(e) ? Cs(e) : e, Ts = (e) => D(e) ? Un(e) : e;
function Ln(e) {
  Oe && le && (e = j(e), Mn(e.dep || (e.dep = xs())));
}
function Dn(e, t) {
  e = j(e);
  const s = e.dep;
  s && ns(s);
}
function Z(e) {
  return !!(e && e.__v_isRef === !0);
}
function eo(e) {
  return to(e, !1);
}
function to(e, t) {
  return Z(e) ? e : new so(e, t);
}
class so {
  constructor(t, s) {
    this.__v_isShallow = s, this.dep = void 0, this.__v_isRef = !0, this._rawValue = s ? t : j(t), this._value = s ? t : lt(t);
  }
  get value() {
    return Ln(this), this._value;
  }
  set value(t) {
    const s = this.__v_isShallow || Tt(t) || Je(t);
    t = s ? t : j(t), Ke(t, this._rawValue) && (this._rawValue = t, this._value = s ? t : lt(t), Dn(this));
  }
}
function no(e) {
  return Z(e) ? e.value : e;
}
const ro = {
  get: (e, t, s) => no(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const r = e[t];
    return Z(r) && !Z(s) ? (r.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function Bn(e) {
  return ke(e) ? e : new Proxy(e, ro);
}
class oo {
  constructor(t, s, n, r) {
    this._setter = s, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new ys(t, () => {
      this._dirty || (this._dirty = !0, Dn(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = n;
  }
  get value() {
    const t = j(this);
    return Ln(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
function io(e, t, s = !1) {
  let n, r;
  const o = I(e);
  return o ? (n = e, r = fe) : (n = e.get, r = e.set), new oo(n, r, o || !r, s);
}
function Te(e, t, s, n) {
  let r;
  try {
    r = n ? e(...n) : e();
  } catch (o) {
    Ht(o, t, s);
  }
  return r;
}
function ue(e, t, s, n) {
  if (I(e)) {
    const o = Te(e, t, s, n);
    return o && En(o) && o.catch((l) => {
      Ht(l, t, s);
    }), o;
  }
  const r = [];
  for (let o = 0; o < e.length; o++)
    r.push(ue(e[o], t, s, n));
  return r;
}
function Ht(e, t, s, n = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const l = t.proxy, f = s;
    for (; o; ) {
      const a = o.ec;
      if (a) {
        for (let m = 0; m < a.length; m++)
          if (a[m](e, l, f) === !1)
            return;
      }
      o = o.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Te(
        u,
        null,
        10,
        [e, l, f]
      );
      return;
    }
  }
  lo(e, s, r, n);
}
function lo(e, t, s, n = !0) {
  console.error(e);
}
let ct = !1, rs = !1;
const X = [];
let me = 0;
const qe = [];
let _e = null, je = 0;
const $n = /* @__PURE__ */ Promise.resolve();
let As = null;
function zn(e) {
  const t = As || $n;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function co(e) {
  let t = me + 1, s = X.length;
  for (; t < s; ) {
    const n = t + s >>> 1, r = X[n], o = ft(r);
    o < e || o === e && r.pre ? t = n + 1 : s = n;
  }
  return t;
}
function Is(e) {
  (!X.length || !X.includes(
    e,
    ct && e.allowRecurse ? me + 1 : me
  )) && (e.id == null ? X.push(e) : X.splice(co(e.id), 0, e), Wn());
}
function Wn() {
  !ct && !rs && (rs = !0, As = $n.then(qn));
}
function fo(e) {
  const t = X.indexOf(e);
  t > me && X.splice(t, 1);
}
function uo(e) {
  O(e) ? qe.push(...e) : (!_e || !_e.includes(
    e,
    e.allowRecurse ? je + 1 : je
  )) && qe.push(e), Wn();
}
function Qs(e, t, s = ct ? me + 1 : 0) {
  for (; s < X.length; s++) {
    const n = X[s];
    if (n && n.pre) {
      if (e && n.id !== e.uid)
        continue;
      X.splice(s, 1), s--, n();
    }
  }
}
function kn(e) {
  if (qe.length) {
    const t = [...new Set(qe)];
    if (qe.length = 0, _e) {
      _e.push(...t);
      return;
    }
    for (_e = t, _e.sort((s, n) => ft(s) - ft(n)), je = 0; je < _e.length; je++)
      _e[je]();
    _e = null, je = 0;
  }
}
const ft = (e) => e.id == null ? 1 / 0 : e.id, ao = (e, t) => {
  const s = ft(e) - ft(t);
  if (s === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return s;
};
function qn(e) {
  rs = !1, ct = !0, X.sort(ao);
  const t = fe;
  try {
    for (me = 0; me < X.length; me++) {
      const s = X[me];
      s && s.active !== !1 && Te(s, null, 14);
    }
  } finally {
    me = 0, X.length = 0, kn(), ct = !1, As = null, (X.length || qe.length) && qn();
  }
}
function ho(e, t, ...s) {
  if (e.isUnmounted)
    return;
  const n = e.vnode.props || K;
  let r = s;
  const o = t.startsWith("update:"), l = o && t.slice(7);
  if (l && l in n) {
    const m = `${l === "modelValue" ? "model" : l}Modifiers`, { number: y, trim: E } = n[m] || K;
    E && (r = s.map((A) => k(A) ? A.trim() : A)), y && (r = s.map(Er));
  }
  let f, u = n[f = kt(t)] || // also try camelCase event handler (#2249)
  n[f = kt(xe(t))];
  !u && o && (u = n[f = kt(ie(t))]), u && ue(
    u,
    e,
    6,
    r
  );
  const a = n[f + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[f])
      return;
    e.emitted[f] = !0, ue(
      a,
      e,
      6,
      r
    );
  }
}
function Jn(e, t, s = !1) {
  const n = t.emitsCache, r = n.get(e);
  if (r !== void 0)
    return r;
  const o = e.emits;
  let l = {}, f = !1;
  if (!I(e)) {
    const u = (a) => {
      const m = Jn(a, t, !0);
      m && (f = !0, W(l, m));
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !o && !f ? (D(e) && n.set(e, null), null) : (O(o) ? o.forEach((u) => l[u] = null) : W(l, o), D(e) && n.set(e, l), l);
}
function Ut(e, t) {
  return !e || !Rt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), N(e, t[0].toLowerCase() + t.slice(1)) || N(e, ie(t)) || N(e, t));
}
let ce = null, Yn = null;
function At(e) {
  const t = ce;
  return ce = e, Yn = e && e.type.__scopeId || null, t;
}
function po(e, t = ce, s) {
  if (!t || e._n)
    return e;
  const n = (...r) => {
    n._d && fn(-1);
    const o = At(t);
    let l;
    try {
      l = e(...r);
    } finally {
      At(o), n._d && fn(1);
    }
    return l;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Jt(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: r,
    props: o,
    propsOptions: [l],
    slots: f,
    attrs: u,
    emit: a,
    render: m,
    renderCache: y,
    data: E,
    setupState: A,
    ctx: B,
    inheritAttrs: F
  } = e;
  let z, Y;
  const q = At(e);
  try {
    if (s.shapeFlag & 4) {
      const M = r || n, ae = M;
      z = ge(
        m.call(
          ae,
          M,
          y,
          o,
          A,
          E,
          B
        )
      ), Y = u;
    } else {
      const M = t;
      z = ge(
        M.length > 1 ? M(
          o,
          { attrs: u, slots: f, emit: a }
        ) : M(
          o,
          null
          /* we know it doesn't need it */
        )
      ), Y = t.props ? u : go(u);
    }
  } catch (M) {
    Ht(M, e, 1), z = ne(ut);
  }
  let V = z;
  if (Y && F !== !1) {
    const M = Object.keys(Y), { shapeFlag: ae } = V;
    M.length && ae & 7 && (l && M.some(gs) && (Y = mo(
      Y,
      l
    )), V = Ye(V, Y));
  }
  return s.dirs && (V = Ye(V), V.dirs = V.dirs ? V.dirs.concat(s.dirs) : s.dirs), s.transition && (V.transition = s.transition), z = V, At(q), z;
}
const go = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Rt(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, mo = (e, t) => {
  const s = {};
  for (const n in e)
    (!gs(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function bo(e, t, s) {
  const { props: n, children: r, component: o } = e, { props: l, children: f, patchFlag: u } = t, a = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return n ? Gs(n, l, a) : !!l;
    if (u & 8) {
      const m = t.dynamicProps;
      for (let y = 0; y < m.length; y++) {
        const E = m[y];
        if (l[E] !== n[E] && !Ut(a, E))
          return !0;
      }
    }
  } else
    return (r || f) && (!f || !f.$stable) ? !0 : n === l ? !1 : n ? l ? Gs(n, l, a) : !0 : !!l;
  return !1;
}
function Gs(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const o = n[r];
    if (t[o] !== e[o] && !Ut(s, o))
      return !0;
  }
  return !1;
}
function _o({ vnode: e, parent: t }, s) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = s, t = t.parent;
}
const wo = Symbol.for("v-ndc"), xo = (e) => e.__isSuspense;
function yo(e, t) {
  t && t.pendingBranch ? O(e) ? t.effects.push(...e) : t.effects.push(e) : uo(e);
}
const yt = {};
function Yt(e, t, s) {
  return Vn(e, t, s);
}
function Vn(e, t, { immediate: s, deep: n, flush: r, onTrack: o, onTrigger: l } = K) {
  var f;
  const u = Fr() === ((f = J) == null ? void 0 : f.scope) ? J : null;
  let a, m = !1, y = !1;
  if (Z(e) ? (a = () => e.value, m = Tt(e)) : ke(e) ? (a = () => e, n = !0) : O(e) ? (y = !0, m = e.some((M) => ke(M) || Tt(M)), a = () => e.map((M) => {
    if (Z(M))
      return M.value;
    if (ke(M))
      return ze(M);
    if (I(M))
      return Te(M, u, 2);
  })) : I(e) ? t ? a = () => Te(e, u, 2) : a = () => {
    if (!(u && u.isUnmounted))
      return E && E(), ue(
        e,
        u,
        3,
        [A]
      );
  } : a = fe, t && n) {
    const M = a;
    a = () => ze(M());
  }
  let E, A = (M) => {
    E = q.onStop = () => {
      Te(M, u, 4), E = q.onStop = void 0;
    };
  }, B;
  if (at)
    if (A = fe, t ? s && ue(t, u, 3, [
      a(),
      y ? [] : void 0,
      A
    ]) : a(), r === "sync") {
      const M = bi();
      B = M.__watcherHandles || (M.__watcherHandles = []);
    } else
      return fe;
  let F = y ? new Array(e.length).fill(yt) : yt;
  const z = () => {
    if (q.active)
      if (t) {
        const M = q.run();
        (n || m || (y ? M.some((ae, Le) => Ke(ae, F[Le])) : Ke(M, F))) && (E && E(), ue(t, u, 3, [
          M,
          // pass undefined as the old value when it's changed for the first time
          F === yt ? void 0 : y && F[0] === yt ? [] : F,
          A
        ]), F = M);
      } else
        q.run();
  };
  z.allowRecurse = !!t;
  let Y;
  r === "sync" ? Y = z : r === "post" ? Y = () => ee(z, u && u.suspense) : (z.pre = !0, u && (z.id = u.uid), Y = () => Is(z));
  const q = new ys(a, Y);
  t ? s ? z() : F = q.run() : r === "post" ? ee(
    q.run.bind(q),
    u && u.suspense
  ) : q.run();
  const V = () => {
    q.stop(), u && u.scope && ms(u.scope.effects, q);
  };
  return B && B.push(V), V;
}
function vo(e, t, s) {
  const n = this.proxy, r = k(e) ? e.includes(".") ? Xn(n, e) : () => n[e] : e.bind(n, n);
  let o;
  I(t) ? o = t : (o = t.handler, s = t);
  const l = J;
  Ve(this);
  const f = Vn(r, o.bind(n), s);
  return l ? Ve(l) : Ue(), f;
}
function Xn(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++)
      n = n[s[r]];
    return n;
  };
}
function ze(e, t) {
  if (!D(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), Z(e))
    ze(e.value, t);
  else if (O(e))
    for (let s = 0; s < e.length; s++)
      ze(e[s], t);
  else if (br(e) || ot(e))
    e.forEach((s) => {
      ze(s, t);
    });
  else if (xr(e))
    for (const s in e)
      ze(e[s], t);
  return e;
}
function Fe(e, t, s, n) {
  const r = e.dirs, o = t && t.dirs;
  for (let l = 0; l < r.length; l++) {
    const f = r[l];
    o && (f.oldValue = o[l].value);
    let u = f.dir[n];
    u && (Xe(), ue(u, s, 8, [
      e.el,
      f,
      e,
      t
    ]), Ze());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Zn(e, t) {
  return I(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => W({ name: e.name }, t, { setup: e }))()
  ) : e;
}
const Et = (e) => !!e.type.__asyncLoader, Qn = (e) => e.type.__isKeepAlive;
function Eo(e, t) {
  Gn(e, "a", t);
}
function Co(e, t) {
  Gn(e, "da", t);
}
function Gn(e, t, s = J) {
  const n = e.__wdc || (e.__wdc = () => {
    let r = s;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Kt(t, n, s), s) {
    let r = s.parent;
    for (; r && r.parent; )
      Qn(r.parent.vnode) && Po(n, t, s, r), r = r.parent;
  }
}
function Po(e, t, s, n) {
  const r = Kt(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  er(() => {
    ms(n[t], r);
  }, s);
}
function Kt(e, t, s = J, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []), o = t.__weh || (t.__weh = (...l) => {
      if (s.isUnmounted)
        return;
      Xe(), Ve(s);
      const f = ue(t, s, e, l);
      return Ue(), Ze(), f;
    });
    return n ? r.unshift(o) : r.push(o), o;
  }
}
const ve = (e) => (t, s = J) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!at || e === "sp") && Kt(e, (...n) => t(...n), s)
), Oo = ve("bm"), To = ve("m"), Ao = ve("bu"), Io = ve("u"), Mo = ve("bum"), er = ve("um"), Ro = ve("sp"), Fo = ve(
  "rtg"
), No = ve(
  "rtc"
);
function jo(e, t = J) {
  Kt("ec", e, t);
}
const os = (e) => e ? ur(e) ? Ss(e) || e.proxy : os(e.parent) : null, it = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ W(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => os(e.parent),
    $root: (e) => os(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Ms(e),
    $forceUpdate: (e) => e.f || (e.f = () => Is(e.update)),
    $nextTick: (e) => e.n || (e.n = zn.bind(e.proxy)),
    $watch: (e) => vo.bind(e)
  })
), Vt = (e, t) => e !== K && !e.__isScriptSetup && N(e, t), So = {
  get({ _: e }, t) {
    const { ctx: s, setupState: n, data: r, props: o, accessCache: l, type: f, appContext: u } = e;
    let a;
    if (t[0] !== "$") {
      const A = l[t];
      if (A !== void 0)
        switch (A) {
          case 1:
            return n[t];
          case 2:
            return r[t];
          case 4:
            return s[t];
          case 3:
            return o[t];
        }
      else {
        if (Vt(n, t))
          return l[t] = 1, n[t];
        if (r !== K && N(r, t))
          return l[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && N(a, t)
        )
          return l[t] = 3, o[t];
        if (s !== K && N(s, t))
          return l[t] = 4, s[t];
        is && (l[t] = 0);
      }
    }
    const m = it[t];
    let y, E;
    if (m)
      return t === "$attrs" && te(e, "get", t), m(e);
    if (
      // css module (injected by vue-loader)
      (y = f.__cssModules) && (y = y[t])
    )
      return y;
    if (s !== K && N(s, t))
      return l[t] = 4, s[t];
    if (
      // global properties
      E = u.config.globalProperties, N(E, t)
    )
      return E[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: r, ctx: o } = e;
    return Vt(r, t) ? (r[t] = s, !0) : n !== K && N(n, t) ? (n[t] = s, !0) : N(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: r, propsOptions: o }
  }, l) {
    let f;
    return !!s[l] || e !== K && N(e, l) || Vt(t, l) || (f = o[0]) && N(f, l) || N(n, l) || N(it, l) || N(r.config.globalProperties, l);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : N(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function en(e) {
  return O(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let is = !0;
function Ho(e) {
  const t = Ms(e), s = e.proxy, n = e.ctx;
  is = !1, t.beforeCreate && tn(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: o,
    methods: l,
    watch: f,
    provide: u,
    inject: a,
    // lifecycle
    created: m,
    beforeMount: y,
    mounted: E,
    beforeUpdate: A,
    updated: B,
    activated: F,
    deactivated: z,
    beforeDestroy: Y,
    beforeUnmount: q,
    destroyed: V,
    unmounted: M,
    render: ae,
    renderTracked: Le,
    renderTriggered: Qe,
    errorCaptured: Ee,
    serverPrefetch: Bt,
    // public API
    expose: Ie,
    inheritAttrs: Ge,
    // assets
    components: dt,
    directives: ht,
    filters: $t
  } = t;
  if (a && Uo(a, n, null), l)
    for (const L in l) {
      const H = l[L];
      I(H) && (n[L] = H.bind(s));
    }
  if (r) {
    const L = r.call(s, s);
    D(L) && (e.data = Cs(L));
  }
  if (is = !0, o)
    for (const L in o) {
      const H = o[L], Me = I(H) ? H.bind(s, s) : I(H.get) ? H.get.bind(s, s) : fe, pt = !I(H) && I(H.set) ? H.set.bind(s) : fe, Re = pi({
        get: Me,
        set: pt
      });
      Object.defineProperty(n, L, {
        enumerable: !0,
        configurable: !0,
        get: () => Re.value,
        set: (de) => Re.value = de
      });
    }
  if (f)
    for (const L in f)
      tr(f[L], n, s, L);
  if (u) {
    const L = I(u) ? u.call(s) : u;
    Reflect.ownKeys(L).forEach((H) => {
      zo(H, L[H]);
    });
  }
  m && tn(m, e, "c");
  function Q(L, H) {
    O(H) ? H.forEach((Me) => L(Me.bind(s))) : H && L(H.bind(s));
  }
  if (Q(Oo, y), Q(To, E), Q(Ao, A), Q(Io, B), Q(Eo, F), Q(Co, z), Q(jo, Ee), Q(No, Le), Q(Fo, Qe), Q(Mo, q), Q(er, M), Q(Ro, Bt), O(Ie))
    if (Ie.length) {
      const L = e.exposed || (e.exposed = {});
      Ie.forEach((H) => {
        Object.defineProperty(L, H, {
          get: () => s[H],
          set: (Me) => s[H] = Me
        });
      });
    } else
      e.exposed || (e.exposed = {});
  ae && e.render === fe && (e.render = ae), Ge != null && (e.inheritAttrs = Ge), dt && (e.components = dt), ht && (e.directives = ht);
}
function Uo(e, t, s = fe) {
  O(e) && (e = ls(e));
  for (const n in e) {
    const r = e[n];
    let o;
    D(r) ? "default" in r ? o = Ct(
      r.from || n,
      r.default,
      !0
      /* treat default function as factory */
    ) : o = Ct(r.from || n) : o = Ct(r), Z(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (l) => o.value = l
    }) : t[n] = o;
  }
}
function tn(e, t, s) {
  ue(
    O(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function tr(e, t, s, n) {
  const r = n.includes(".") ? Xn(s, n) : () => s[n];
  if (k(e)) {
    const o = t[e];
    I(o) && Yt(r, o);
  } else if (I(e))
    Yt(r, e.bind(s));
  else if (D(e))
    if (O(e))
      e.forEach((o) => tr(o, t, s, n));
    else {
      const o = I(e.handler) ? e.handler.bind(s) : t[e.handler];
      I(o) && Yt(r, o, e);
    }
}
function Ms(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: r,
    optionsCache: o,
    config: { optionMergeStrategies: l }
  } = e.appContext, f = o.get(t);
  let u;
  return f ? u = f : !r.length && !s && !n ? u = t : (u = {}, r.length && r.forEach(
    (a) => It(u, a, l, !0)
  ), It(u, t, l)), D(t) && o.set(t, u), u;
}
function It(e, t, s, n = !1) {
  const { mixins: r, extends: o } = t;
  o && It(e, o, s, !0), r && r.forEach(
    (l) => It(e, l, s, !0)
  );
  for (const l in t)
    if (!(n && l === "expose")) {
      const f = Ko[l] || s && s[l];
      e[l] = f ? f(e[l], t[l]) : t[l];
    }
  return e;
}
const Ko = {
  data: sn,
  props: nn,
  emits: nn,
  // objects
  methods: nt,
  computed: nt,
  // lifecycle
  beforeCreate: G,
  created: G,
  beforeMount: G,
  mounted: G,
  beforeUpdate: G,
  updated: G,
  beforeDestroy: G,
  beforeUnmount: G,
  destroyed: G,
  unmounted: G,
  activated: G,
  deactivated: G,
  errorCaptured: G,
  serverPrefetch: G,
  // assets
  components: nt,
  directives: nt,
  // watch
  watch: Do,
  // provide / inject
  provide: sn,
  inject: Lo
};
function sn(e, t) {
  return t ? e ? function() {
    return W(
      I(e) ? e.call(this, this) : e,
      I(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Lo(e, t) {
  return nt(ls(e), ls(t));
}
function ls(e) {
  if (O(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function G(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function nt(e, t) {
  return e ? W(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function nn(e, t) {
  return e ? O(e) && O(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : W(
    /* @__PURE__ */ Object.create(null),
    en(e),
    en(t ?? {})
  ) : t;
}
function Do(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const s = W(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = G(e[n], t[n]);
  return s;
}
function sr() {
  return {
    app: null,
    config: {
      isNativeTag: gr,
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
let Bo = 0;
function $o(e, t) {
  return function(n, r = null) {
    I(n) || (n = W({}, n)), r != null && !D(r) && (r = null);
    const o = sr(), l = /* @__PURE__ */ new WeakSet();
    let f = !1;
    const u = o.app = {
      _uid: Bo++,
      _component: n,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: _i,
      get config() {
        return o.config;
      },
      set config(a) {
      },
      use(a, ...m) {
        return l.has(a) || (a && I(a.install) ? (l.add(a), a.install(u, ...m)) : I(a) && (l.add(a), a(u, ...m))), u;
      },
      mixin(a) {
        return o.mixins.includes(a) || o.mixins.push(a), u;
      },
      component(a, m) {
        return m ? (o.components[a] = m, u) : o.components[a];
      },
      directive(a, m) {
        return m ? (o.directives[a] = m, u) : o.directives[a];
      },
      mount(a, m, y) {
        if (!f) {
          const E = ne(n, r);
          return E.appContext = o, m && t ? t(E, a) : e(E, a, y), f = !0, u._container = a, a.__vue_app__ = u, Ss(E.component) || E.component.proxy;
        }
      },
      unmount() {
        f && (e(null, u._container), delete u._container.__vue_app__);
      },
      provide(a, m) {
        return o.provides[a] = m, u;
      },
      runWithContext(a) {
        Mt = u;
        try {
          return a();
        } finally {
          Mt = null;
        }
      }
    };
    return u;
  };
}
let Mt = null;
function zo(e, t) {
  if (J) {
    let s = J.provides;
    const n = J.parent && J.parent.provides;
    n === s && (s = J.provides = Object.create(n)), s[e] = t;
  }
}
function Ct(e, t, s = !1) {
  const n = J || ce;
  if (n || Mt) {
    const r = n ? n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : Mt._context.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return s && I(t) ? t.call(n && n.proxy) : t;
  }
}
function Wo(e, t, s, n = !1) {
  const r = {}, o = {};
  Ot(o, Dt, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), nr(e, t, r, o);
  for (const l in e.propsOptions[0])
    l in r || (r[l] = void 0);
  s ? e.props = n ? r : Gr(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
}
function ko(e, t, s, n) {
  const {
    props: r,
    attrs: o,
    vnode: { patchFlag: l }
  } = e, f = j(r), [u] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const m = e.vnode.dynamicProps;
      for (let y = 0; y < m.length; y++) {
        let E = m[y];
        if (Ut(e.emitsOptions, E))
          continue;
        const A = t[E];
        if (u)
          if (N(o, E))
            A !== o[E] && (o[E] = A, a = !0);
          else {
            const B = xe(E);
            r[B] = cs(
              u,
              f,
              B,
              A,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          A !== o[E] && (o[E] = A, a = !0);
      }
    }
  } else {
    nr(e, t, r, o) && (a = !0);
    let m;
    for (const y in f)
      (!t || // for camelCase
      !N(t, y) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((m = ie(y)) === y || !N(t, m))) && (u ? s && // for camelCase
      (s[y] !== void 0 || // for kebab-case
      s[m] !== void 0) && (r[y] = cs(
        u,
        f,
        y,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete r[y]);
    if (o !== f)
      for (const y in o)
        (!t || !N(t, y)) && (delete o[y], a = !0);
  }
  a && ye(e, "set", "$attrs");
}
function nr(e, t, s, n) {
  const [r, o] = e.propsOptions;
  let l = !1, f;
  if (t)
    for (let u in t) {
      if (vt(u))
        continue;
      const a = t[u];
      let m;
      r && N(r, m = xe(u)) ? !o || !o.includes(m) ? s[m] = a : (f || (f = {}))[m] = a : Ut(e.emitsOptions, u) || (!(u in n) || a !== n[u]) && (n[u] = a, l = !0);
    }
  if (o) {
    const u = j(s), a = f || K;
    for (let m = 0; m < o.length; m++) {
      const y = o[m];
      s[y] = cs(
        r,
        u,
        y,
        a[y],
        e,
        !N(a, y)
      );
    }
  }
  return l;
}
function cs(e, t, s, n, r, o) {
  const l = e[s];
  if (l != null) {
    const f = N(l, "default");
    if (f && n === void 0) {
      const u = l.default;
      if (l.type !== Function && !l.skipFactory && I(u)) {
        const { propsDefaults: a } = r;
        s in a ? n = a[s] : (Ve(r), n = a[s] = u.call(
          null,
          t
        ), Ue());
      } else
        n = u;
    }
    l[
      0
      /* shouldCast */
    ] && (o && !f ? n = !1 : l[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === ie(s)) && (n = !0));
  }
  return n;
}
function rr(e, t, s = !1) {
  const n = t.propsCache, r = n.get(e);
  if (r)
    return r;
  const o = e.props, l = {}, f = [];
  let u = !1;
  if (!I(e)) {
    const m = (y) => {
      u = !0;
      const [E, A] = rr(y, t, !0);
      W(l, E), A && f.push(...A);
    };
    !s && t.mixins.length && t.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  if (!o && !u)
    return D(e) && n.set(e, rt), rt;
  if (O(o))
    for (let m = 0; m < o.length; m++) {
      const y = xe(o[m]);
      rn(y) && (l[y] = K);
    }
  else if (o)
    for (const m in o) {
      const y = xe(m);
      if (rn(y)) {
        const E = o[m], A = l[y] = O(E) || I(E) ? { type: E } : W({}, E);
        if (A) {
          const B = cn(Boolean, A.type), F = cn(String, A.type);
          A[
            0
            /* shouldCast */
          ] = B > -1, A[
            1
            /* shouldCastTrue */
          ] = F < 0 || B < F, (B > -1 || N(A, "default")) && f.push(y);
        }
      }
    }
  const a = [l, f];
  return D(e) && n.set(e, a), a;
}
function rn(e) {
  return e[0] !== "$";
}
function on(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function ln(e, t) {
  return on(e) === on(t);
}
function cn(e, t) {
  return O(t) ? t.findIndex((s) => ln(s, e)) : I(t) && ln(t, e) ? 0 : -1;
}
const or = (e) => e[0] === "_" || e === "$stable", Rs = (e) => O(e) ? e.map(ge) : [ge(e)], qo = (e, t, s) => {
  if (t._n)
    return t;
  const n = po((...r) => Rs(t(...r)), s);
  return n._c = !1, n;
}, ir = (e, t, s) => {
  const n = e._ctx;
  for (const r in e) {
    if (or(r))
      continue;
    const o = e[r];
    if (I(o))
      t[r] = qo(r, o, n);
    else if (o != null) {
      const l = Rs(o);
      t[r] = () => l;
    }
  }
}, lr = (e, t) => {
  const s = Rs(t);
  e.slots.default = () => s;
}, Jo = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (e.slots = j(t), Ot(t, "_", s)) : ir(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && lr(e, t);
  Ot(e.slots, Dt, 1);
}, Yo = (e, t, s) => {
  const { vnode: n, slots: r } = e;
  let o = !0, l = K;
  if (n.shapeFlag & 32) {
    const f = t._;
    f ? s && f === 1 ? o = !1 : (W(r, t), !s && f === 1 && delete r._) : (o = !t.$stable, ir(t, r)), l = t;
  } else
    t && (lr(e, t), l = { default: 1 });
  if (o)
    for (const f in r)
      !or(f) && l[f] == null && delete r[f];
};
function fs(e, t, s, n, r = !1) {
  if (O(e)) {
    e.forEach(
      (E, A) => fs(
        E,
        t && (O(t) ? t[A] : t),
        s,
        n,
        r
      )
    );
    return;
  }
  if (Et(n) && !r)
    return;
  const o = n.shapeFlag & 4 ? Ss(n.component) || n.component.proxy : n.el, l = r ? null : o, { i: f, r: u } = e, a = t && t.r, m = f.refs === K ? f.refs = {} : f.refs, y = f.setupState;
  if (a != null && a !== u && (k(a) ? (m[a] = null, N(y, a) && (y[a] = null)) : Z(a) && (a.value = null)), I(u))
    Te(u, f, 12, [l, m]);
  else {
    const E = k(u), A = Z(u);
    if (E || A) {
      const B = () => {
        if (e.f) {
          const F = E ? N(y, u) ? y[u] : m[u] : u.value;
          r ? O(F) && ms(F, o) : O(F) ? F.includes(o) || F.push(o) : E ? (m[u] = [o], N(y, u) && (y[u] = m[u])) : (u.value = [o], e.k && (m[e.k] = u.value));
        } else
          E ? (m[u] = l, N(y, u) && (y[u] = l)) : A && (u.value = l, e.k && (m[e.k] = l));
      };
      l ? (B.id = -1, ee(B, s)) : B();
    }
  }
}
const ee = yo;
function Vo(e) {
  return Xo(e);
}
function Xo(e, t) {
  const s = Gt();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: r,
    patchProp: o,
    createElement: l,
    createText: f,
    createComment: u,
    setText: a,
    setElementText: m,
    parentNode: y,
    nextSibling: E,
    setScopeId: A = fe,
    insertStaticContent: B
  } = e, F = (i, c, d, h = null, p = null, _ = null, x = !1, b = null, w = !!c.dynamicChildren) => {
    if (i === c)
      return;
    i && !tt(i, c) && (h = gt(i), de(i, p, _, !0), i = null), c.patchFlag === -2 && (w = !1, c.dynamicChildren = null);
    const { type: g, ref: C, shapeFlag: v } = c;
    switch (g) {
      case Lt:
        z(i, c, d, h);
        break;
      case ut:
        Y(i, c, d, h);
        break;
      case Xt:
        i == null && q(c, d, h, x);
        break;
      case we:
        dt(
          i,
          c,
          d,
          h,
          p,
          _,
          x,
          b,
          w
        );
        break;
      default:
        v & 1 ? ae(
          i,
          c,
          d,
          h,
          p,
          _,
          x,
          b,
          w
        ) : v & 6 ? ht(
          i,
          c,
          d,
          h,
          p,
          _,
          x,
          b,
          w
        ) : (v & 64 || v & 128) && g.process(
          i,
          c,
          d,
          h,
          p,
          _,
          x,
          b,
          w,
          De
        );
    }
    C != null && p && fs(C, i && i.ref, _, c || i, !c);
  }, z = (i, c, d, h) => {
    if (i == null)
      n(
        c.el = f(c.children),
        d,
        h
      );
    else {
      const p = c.el = i.el;
      c.children !== i.children && a(p, c.children);
    }
  }, Y = (i, c, d, h) => {
    i == null ? n(
      c.el = u(c.children || ""),
      d,
      h
    ) : c.el = i.el;
  }, q = (i, c, d, h) => {
    [i.el, i.anchor] = B(
      i.children,
      c,
      d,
      h,
      i.el,
      i.anchor
    );
  }, V = ({ el: i, anchor: c }, d, h) => {
    let p;
    for (; i && i !== c; )
      p = E(i), n(i, d, h), i = p;
    n(c, d, h);
  }, M = ({ el: i, anchor: c }) => {
    let d;
    for (; i && i !== c; )
      d = E(i), r(i), i = d;
    r(c);
  }, ae = (i, c, d, h, p, _, x, b, w) => {
    x = x || c.type === "svg", i == null ? Le(
      c,
      d,
      h,
      p,
      _,
      x,
      b,
      w
    ) : Bt(
      i,
      c,
      p,
      _,
      x,
      b,
      w
    );
  }, Le = (i, c, d, h, p, _, x, b) => {
    let w, g;
    const { type: C, props: v, shapeFlag: P, transition: T, dirs: R } = i;
    if (w = i.el = l(
      i.type,
      _,
      v && v.is,
      v
    ), P & 8 ? m(w, i.children) : P & 16 && Ee(
      i.children,
      w,
      null,
      h,
      p,
      _ && C !== "foreignObject",
      x,
      b
    ), R && Fe(i, null, h, "created"), Qe(w, i, i.scopeId, x, h), v) {
      for (const S in v)
        S !== "value" && !vt(S) && o(
          w,
          S,
          null,
          v[S],
          _,
          i.children,
          h,
          p,
          be
        );
      "value" in v && o(w, "value", null, v.value), (g = v.onVnodeBeforeMount) && pe(g, h, i);
    }
    R && Fe(i, null, h, "beforeMount");
    const U = Zo(p, T);
    U && T.beforeEnter(w), n(w, c, d), ((g = v && v.onVnodeMounted) || U || R) && ee(() => {
      g && pe(g, h, i), U && T.enter(w), R && Fe(i, null, h, "mounted");
    }, p);
  }, Qe = (i, c, d, h, p) => {
    if (d && A(i, d), h)
      for (let _ = 0; _ < h.length; _++)
        A(i, h[_]);
    if (p) {
      let _ = p.subTree;
      if (c === _) {
        const x = p.vnode;
        Qe(
          i,
          x,
          x.scopeId,
          x.slotScopeIds,
          p.parent
        );
      }
    }
  }, Ee = (i, c, d, h, p, _, x, b, w = 0) => {
    for (let g = w; g < i.length; g++) {
      const C = i[g] = b ? Pe(i[g]) : ge(i[g]);
      F(
        null,
        C,
        c,
        d,
        h,
        p,
        _,
        x,
        b
      );
    }
  }, Bt = (i, c, d, h, p, _, x) => {
    const b = c.el = i.el;
    let { patchFlag: w, dynamicChildren: g, dirs: C } = c;
    w |= i.patchFlag & 16;
    const v = i.props || K, P = c.props || K;
    let T;
    d && Ne(d, !1), (T = P.onVnodeBeforeUpdate) && pe(T, d, c, i), C && Fe(c, i, d, "beforeUpdate"), d && Ne(d, !0);
    const R = p && c.type !== "foreignObject";
    if (g ? Ie(
      i.dynamicChildren,
      g,
      b,
      d,
      h,
      R,
      _
    ) : x || H(
      i,
      c,
      b,
      null,
      d,
      h,
      R,
      _,
      !1
    ), w > 0) {
      if (w & 16)
        Ge(
          b,
          c,
          v,
          P,
          d,
          h,
          p
        );
      else if (w & 2 && v.class !== P.class && o(b, "class", null, P.class, p), w & 4 && o(b, "style", v.style, P.style, p), w & 8) {
        const U = c.dynamicProps;
        for (let S = 0; S < U.length; S++) {
          const $ = U[S], re = v[$], Be = P[$];
          (Be !== re || $ === "value") && o(
            b,
            $,
            re,
            Be,
            p,
            i.children,
            d,
            h,
            be
          );
        }
      }
      w & 1 && i.children !== c.children && m(b, c.children);
    } else
      !x && g == null && Ge(
        b,
        c,
        v,
        P,
        d,
        h,
        p
      );
    ((T = P.onVnodeUpdated) || C) && ee(() => {
      T && pe(T, d, c, i), C && Fe(c, i, d, "updated");
    }, h);
  }, Ie = (i, c, d, h, p, _, x) => {
    for (let b = 0; b < c.length; b++) {
      const w = i[b], g = c[b], C = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        w.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (w.type === we || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !tt(w, g) || // - In the case of a component, it could contain anything.
        w.shapeFlag & 70) ? y(w.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          d
        )
      );
      F(
        w,
        g,
        C,
        null,
        h,
        p,
        _,
        x,
        !0
      );
    }
  }, Ge = (i, c, d, h, p, _, x) => {
    if (d !== h) {
      if (d !== K)
        for (const b in d)
          !vt(b) && !(b in h) && o(
            i,
            b,
            d[b],
            null,
            x,
            c.children,
            p,
            _,
            be
          );
      for (const b in h) {
        if (vt(b))
          continue;
        const w = h[b], g = d[b];
        w !== g && b !== "value" && o(
          i,
          b,
          g,
          w,
          x,
          c.children,
          p,
          _,
          be
        );
      }
      "value" in h && o(i, "value", d.value, h.value);
    }
  }, dt = (i, c, d, h, p, _, x, b, w) => {
    const g = c.el = i ? i.el : f(""), C = c.anchor = i ? i.anchor : f("");
    let { patchFlag: v, dynamicChildren: P, slotScopeIds: T } = c;
    T && (b = b ? b.concat(T) : T), i == null ? (n(g, d, h), n(C, d, h), Ee(
      c.children,
      d,
      C,
      p,
      _,
      x,
      b,
      w
    )) : v > 0 && v & 64 && P && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    i.dynamicChildren ? (Ie(
      i.dynamicChildren,
      P,
      d,
      p,
      _,
      x,
      b
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (c.key != null || p && c === p.subTree) && cr(
      i,
      c,
      !0
      /* shallow */
    )) : H(
      i,
      c,
      d,
      C,
      p,
      _,
      x,
      b,
      w
    );
  }, ht = (i, c, d, h, p, _, x, b, w) => {
    c.slotScopeIds = b, i == null ? c.shapeFlag & 512 ? p.ctx.activate(
      c,
      d,
      h,
      x,
      w
    ) : $t(
      c,
      d,
      h,
      p,
      _,
      x,
      w
    ) : Us(i, c, w);
  }, $t = (i, c, d, h, p, _, x) => {
    const b = i.component = li(
      i,
      h,
      p
    );
    if (Qn(i) && (b.ctx.renderer = De), fi(b), b.asyncDep) {
      if (p && p.registerDep(b, Q), !i.el) {
        const w = b.subTree = ne(ut);
        Y(null, w, c, d);
      }
      return;
    }
    Q(
      b,
      i,
      c,
      d,
      p,
      _,
      x
    );
  }, Us = (i, c, d) => {
    const h = c.component = i.component;
    if (bo(i, c, d))
      if (h.asyncDep && !h.asyncResolved) {
        L(h, c, d);
        return;
      } else
        h.next = c, fo(h.update), h.update();
    else
      c.el = i.el, h.vnode = c;
  }, Q = (i, c, d, h, p, _, x) => {
    const b = () => {
      if (i.isMounted) {
        let { next: C, bu: v, u: P, parent: T, vnode: R } = i, U = C, S;
        Ne(i, !1), C ? (C.el = R.el, L(i, C, x)) : C = R, v && qt(v), (S = C.props && C.props.onVnodeBeforeUpdate) && pe(S, T, C, R), Ne(i, !0);
        const $ = Jt(i), re = i.subTree;
        i.subTree = $, F(
          re,
          $,
          // parent may have changed if it's in a teleport
          y(re.el),
          // anchor may have changed if it's in a fragment
          gt(re),
          i,
          p,
          _
        ), C.el = $.el, U === null && _o(i, $.el), P && ee(P, p), (S = C.props && C.props.onVnodeUpdated) && ee(
          () => pe(S, T, C, R),
          p
        );
      } else {
        let C;
        const { el: v, props: P } = c, { bm: T, m: R, parent: U } = i, S = Et(c);
        if (Ne(i, !1), T && qt(T), !S && (C = P && P.onVnodeBeforeMount) && pe(C, U, c), Ne(i, !0), v && Wt) {
          const $ = () => {
            i.subTree = Jt(i), Wt(
              v,
              i.subTree,
              i,
              p,
              null
            );
          };
          S ? c.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !i.isUnmounted && $()
          ) : $();
        } else {
          const $ = i.subTree = Jt(i);
          F(
            null,
            $,
            d,
            h,
            i,
            p,
            _
          ), c.el = $.el;
        }
        if (R && ee(R, p), !S && (C = P && P.onVnodeMounted)) {
          const $ = c;
          ee(
            () => pe(C, U, $),
            p
          );
        }
        (c.shapeFlag & 256 || U && Et(U.vnode) && U.vnode.shapeFlag & 256) && i.a && ee(i.a, p), i.isMounted = !0, c = d = h = null;
      }
    }, w = i.effect = new ys(
      b,
      () => Is(g),
      i.scope
      // track it in component's effect scope
    ), g = i.update = () => w.run();
    g.id = i.uid, Ne(i, !0), g();
  }, L = (i, c, d) => {
    c.component = i;
    const h = i.vnode.props;
    i.vnode = c, i.next = null, ko(i, c.props, h, d), Yo(i, c.children, d), Xe(), Qs(i), Ze();
  }, H = (i, c, d, h, p, _, x, b, w = !1) => {
    const g = i && i.children, C = i ? i.shapeFlag : 0, v = c.children, { patchFlag: P, shapeFlag: T } = c;
    if (P > 0) {
      if (P & 128) {
        pt(
          g,
          v,
          d,
          h,
          p,
          _,
          x,
          b,
          w
        );
        return;
      } else if (P & 256) {
        Me(
          g,
          v,
          d,
          h,
          p,
          _,
          x,
          b,
          w
        );
        return;
      }
    }
    T & 8 ? (C & 16 && be(g, p, _), v !== g && m(d, v)) : C & 16 ? T & 16 ? pt(
      g,
      v,
      d,
      h,
      p,
      _,
      x,
      b,
      w
    ) : be(g, p, _, !0) : (C & 8 && m(d, ""), T & 16 && Ee(
      v,
      d,
      h,
      p,
      _,
      x,
      b,
      w
    ));
  }, Me = (i, c, d, h, p, _, x, b, w) => {
    i = i || rt, c = c || rt;
    const g = i.length, C = c.length, v = Math.min(g, C);
    let P;
    for (P = 0; P < v; P++) {
      const T = c[P] = w ? Pe(c[P]) : ge(c[P]);
      F(
        i[P],
        T,
        d,
        null,
        p,
        _,
        x,
        b,
        w
      );
    }
    g > C ? be(
      i,
      p,
      _,
      !0,
      !1,
      v
    ) : Ee(
      c,
      d,
      h,
      p,
      _,
      x,
      b,
      w,
      v
    );
  }, pt = (i, c, d, h, p, _, x, b, w) => {
    let g = 0;
    const C = c.length;
    let v = i.length - 1, P = C - 1;
    for (; g <= v && g <= P; ) {
      const T = i[g], R = c[g] = w ? Pe(c[g]) : ge(c[g]);
      if (tt(T, R))
        F(
          T,
          R,
          d,
          null,
          p,
          _,
          x,
          b,
          w
        );
      else
        break;
      g++;
    }
    for (; g <= v && g <= P; ) {
      const T = i[v], R = c[P] = w ? Pe(c[P]) : ge(c[P]);
      if (tt(T, R))
        F(
          T,
          R,
          d,
          null,
          p,
          _,
          x,
          b,
          w
        );
      else
        break;
      v--, P--;
    }
    if (g > v) {
      if (g <= P) {
        const T = P + 1, R = T < C ? c[T].el : h;
        for (; g <= P; )
          F(
            null,
            c[g] = w ? Pe(c[g]) : ge(c[g]),
            d,
            R,
            p,
            _,
            x,
            b,
            w
          ), g++;
      }
    } else if (g > P)
      for (; g <= v; )
        de(i[g], p, _, !0), g++;
    else {
      const T = g, R = g, U = /* @__PURE__ */ new Map();
      for (g = R; g <= P; g++) {
        const se = c[g] = w ? Pe(c[g]) : ge(c[g]);
        se.key != null && U.set(se.key, g);
      }
      let S, $ = 0;
      const re = P - R + 1;
      let Be = !1, Ds = 0;
      const et = new Array(re);
      for (g = 0; g < re; g++)
        et[g] = 0;
      for (g = T; g <= v; g++) {
        const se = i[g];
        if ($ >= re) {
          de(se, p, _, !0);
          continue;
        }
        let he;
        if (se.key != null)
          he = U.get(se.key);
        else
          for (S = R; S <= P; S++)
            if (et[S - R] === 0 && tt(se, c[S])) {
              he = S;
              break;
            }
        he === void 0 ? de(se, p, _, !0) : (et[he - R] = g + 1, he >= Ds ? Ds = he : Be = !0, F(
          se,
          c[he],
          d,
          null,
          p,
          _,
          x,
          b,
          w
        ), $++);
      }
      const Bs = Be ? Qo(et) : rt;
      for (S = Bs.length - 1, g = re - 1; g >= 0; g--) {
        const se = R + g, he = c[se], $s = se + 1 < C ? c[se + 1].el : h;
        et[g] === 0 ? F(
          null,
          he,
          d,
          $s,
          p,
          _,
          x,
          b,
          w
        ) : Be && (S < 0 || g !== Bs[S] ? Re(he, d, $s, 2) : S--);
      }
    }
  }, Re = (i, c, d, h, p = null) => {
    const { el: _, type: x, transition: b, children: w, shapeFlag: g } = i;
    if (g & 6) {
      Re(i.component.subTree, c, d, h);
      return;
    }
    if (g & 128) {
      i.suspense.move(c, d, h);
      return;
    }
    if (g & 64) {
      x.move(i, c, d, De);
      return;
    }
    if (x === we) {
      n(_, c, d);
      for (let v = 0; v < w.length; v++)
        Re(w[v], c, d, h);
      n(i.anchor, c, d);
      return;
    }
    if (x === Xt) {
      V(i, c, d);
      return;
    }
    if (h !== 2 && g & 1 && b)
      if (h === 0)
        b.beforeEnter(_), n(_, c, d), ee(() => b.enter(_), p);
      else {
        const { leave: v, delayLeave: P, afterLeave: T } = b, R = () => n(_, c, d), U = () => {
          v(_, () => {
            R(), T && T();
          });
        };
        P ? P(_, R, U) : U();
      }
    else
      n(_, c, d);
  }, de = (i, c, d, h = !1, p = !1) => {
    const {
      type: _,
      props: x,
      ref: b,
      children: w,
      dynamicChildren: g,
      shapeFlag: C,
      patchFlag: v,
      dirs: P
    } = i;
    if (b != null && fs(b, null, d, i, !0), C & 256) {
      c.ctx.deactivate(i);
      return;
    }
    const T = C & 1 && P, R = !Et(i);
    let U;
    if (R && (U = x && x.onVnodeBeforeUnmount) && pe(U, c, i), C & 6)
      pr(i.component, d, h);
    else {
      if (C & 128) {
        i.suspense.unmount(d, h);
        return;
      }
      T && Fe(i, null, c, "beforeUnmount"), C & 64 ? i.type.remove(
        i,
        c,
        d,
        p,
        De,
        h
      ) : g && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== we || v > 0 && v & 64) ? be(
        g,
        c,
        d,
        !1,
        !0
      ) : (_ === we && v & 384 || !p && C & 16) && be(w, c, d), h && Ks(i);
    }
    (R && (U = x && x.onVnodeUnmounted) || T) && ee(() => {
      U && pe(U, c, i), T && Fe(i, null, c, "unmounted");
    }, d);
  }, Ks = (i) => {
    const { type: c, el: d, anchor: h, transition: p } = i;
    if (c === we) {
      hr(d, h);
      return;
    }
    if (c === Xt) {
      M(i);
      return;
    }
    const _ = () => {
      r(d), p && !p.persisted && p.afterLeave && p.afterLeave();
    };
    if (i.shapeFlag & 1 && p && !p.persisted) {
      const { leave: x, delayLeave: b } = p, w = () => x(d, _);
      b ? b(i.el, _, w) : w();
    } else
      _();
  }, hr = (i, c) => {
    let d;
    for (; i !== c; )
      d = E(i), r(i), i = d;
    r(c);
  }, pr = (i, c, d) => {
    const { bum: h, scope: p, update: _, subTree: x, um: b } = i;
    h && qt(h), p.stop(), _ && (_.active = !1, de(x, i, c, d)), b && ee(b, c), ee(() => {
      i.isUnmounted = !0;
    }, c), c && c.pendingBranch && !c.isUnmounted && i.asyncDep && !i.asyncResolved && i.suspenseId === c.pendingId && (c.deps--, c.deps === 0 && c.resolve());
  }, be = (i, c, d, h = !1, p = !1, _ = 0) => {
    for (let x = _; x < i.length; x++)
      de(i[x], c, d, h, p);
  }, gt = (i) => i.shapeFlag & 6 ? gt(i.component.subTree) : i.shapeFlag & 128 ? i.suspense.next() : E(i.anchor || i.el), Ls = (i, c, d) => {
    i == null ? c._vnode && de(c._vnode, null, null, !0) : F(c._vnode || null, i, c, null, null, null, d), Qs(), kn(), c._vnode = i;
  }, De = {
    p: F,
    um: de,
    m: Re,
    r: Ks,
    mt: $t,
    mc: Ee,
    pc: H,
    pbc: Ie,
    n: gt,
    o: e
  };
  let zt, Wt;
  return t && ([zt, Wt] = t(
    De
  )), {
    render: Ls,
    hydrate: zt,
    createApp: $o(Ls, zt)
  };
}
function Ne({ effect: e, update: t }, s) {
  e.allowRecurse = t.allowRecurse = s;
}
function Zo(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function cr(e, t, s = !1) {
  const n = e.children, r = t.children;
  if (O(n) && O(r))
    for (let o = 0; o < n.length; o++) {
      const l = n[o];
      let f = r[o];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = r[o] = Pe(r[o]), f.el = l.el), s || cr(l, f)), f.type === Lt && (f.el = l.el);
    }
}
function Qo(e) {
  const t = e.slice(), s = [0];
  let n, r, o, l, f;
  const u = e.length;
  for (n = 0; n < u; n++) {
    const a = e[n];
    if (a !== 0) {
      if (r = s[s.length - 1], e[r] < a) {
        t[n] = r, s.push(n);
        continue;
      }
      for (o = 0, l = s.length - 1; o < l; )
        f = o + l >> 1, e[s[f]] < a ? o = f + 1 : l = f;
      a < e[s[o]] && (o > 0 && (t[n] = s[o - 1]), s[o] = n);
    }
  }
  for (o = s.length, l = s[o - 1]; o-- > 0; )
    s[o] = l, l = t[l];
  return s;
}
const Go = (e) => e.__isTeleport, we = Symbol.for("v-fgt"), Lt = Symbol.for("v-txt"), ut = Symbol.for("v-cmt"), Xt = Symbol.for("v-stc");
let We = null, Fs = 1;
function fn(e) {
  Fs += e;
}
function us(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function tt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Dt = "__vInternal", fr = ({ key: e }) => e ?? null, Pt = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? k(e) || Z(e) || I(e) ? { i: ce, r: e, k: t, f: !!s } : e : null);
function ei(e, t = null, s = null, n = 0, r = null, o = e === we ? 0 : 1, l = !1, f = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && fr(t),
    ref: t && Pt(t),
    scopeId: Yn,
    slotScopeIds: null,
    children: s,
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
    patchFlag: n,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ce
  };
  return f ? (Ns(u, s), o & 128 && e.normalize(u)) : s && (u.shapeFlag |= k(s) ? 8 : 16), Fs > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  We && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && We.push(u), u;
}
const ne = ti;
function ti(e, t = null, s = null, n = 0, r = null, o = !1) {
  if ((!e || e === wo) && (e = ut), us(e)) {
    const f = Ye(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Ns(f, s), Fs > 0 && !o && We && (f.shapeFlag & 6 ? We[We.indexOf(e)] = f : We.push(f)), f.patchFlag |= -2, f;
  }
  if (hi(e) && (e = e.__vccOpts), t) {
    t = si(t);
    let { class: f, style: u } = t;
    f && !k(f) && (t.class = ws(f)), D(u) && (Kn(u) && !O(u) && (u = W({}, u)), t.style = _s(u));
  }
  const l = k(e) ? 1 : xo(e) ? 128 : Go(e) ? 64 : D(e) ? 4 : I(e) ? 2 : 0;
  return ei(
    e,
    t,
    s,
    n,
    r,
    l,
    o,
    !0
  );
}
function si(e) {
  return e ? Kn(e) || Dt in e ? W({}, e) : e : null;
}
function Ye(e, t, s = !1) {
  const { props: n, ref: r, patchFlag: o, children: l } = e, f = t ? ri(n || {}, t) : n;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && fr(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && r ? O(r) ? r.concat(Pt(t)) : [r, Pt(t)] : Pt(t)
    ) : r,
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
    patchFlag: t && e.type !== we ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && Ye(e.ssContent),
    ssFallback: e.ssFallback && Ye(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function ni(e = " ", t = 0) {
  return ne(Lt, null, e, t);
}
function ge(e) {
  return e == null || typeof e == "boolean" ? ne(ut) : O(e) ? ne(
    we,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Pe(e) : ne(Lt, null, String(e));
}
function Pe(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ye(e);
}
function Ns(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (O(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ns(e, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !(Dt in t) ? t._ctx = ce : r === 3 && ce && (ce.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    I(t) ? (t = { default: t, _ctx: ce }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [ni(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function ri(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = ws([t.class, n.class]));
      else if (r === "style")
        t.style = _s([t.style, n.style]);
      else if (Rt(r)) {
        const o = t[r], l = n[r];
        l && o !== l && !(O(o) && o.includes(l)) && (t[r] = o ? [].concat(o, l) : l);
      } else
        r !== "" && (t[r] = n[r]);
  }
  return t;
}
function pe(e, t, s, n = null) {
  ue(e, t, 7, [
    s,
    n
  ]);
}
const oi = sr();
let ii = 0;
function li(e, t, s) {
  const n = e.type, r = (t ? t.appContext : e.appContext) || oi, o = {
    uid: ii++,
    vnode: e,
    type: n,
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
    scope: new On(
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
    propsOptions: rr(n, r),
    emitsOptions: Jn(n, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: K,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: K,
    data: K,
    props: K,
    attrs: K,
    slots: K,
    refs: K,
    setupState: K,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: s,
    suspenseId: s ? s.pendingId : 0,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = ho.bind(null, o), e.ce && e.ce(o), o;
}
let J = null;
const ci = () => J || ce;
let js, $e, un = "__VUE_INSTANCE_SETTERS__";
($e = Gt()[un]) || ($e = Gt()[un] = []), $e.push((e) => J = e), js = (e) => {
  $e.length > 1 ? $e.forEach((t) => t(e)) : $e[0](e);
};
const Ve = (e) => {
  js(e), e.scope.on();
}, Ue = () => {
  J && J.scope.off(), js(null);
};
function ur(e) {
  return e.vnode.shapeFlag & 4;
}
let at = !1;
function fi(e, t = !1) {
  at = t;
  const { props: s, children: n } = e.vnode, r = ur(e);
  Wo(e, s, r, t), Jo(e, n);
  const o = r ? ui(e, t) : void 0;
  return at = !1, o;
}
function ui(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Os(new Proxy(e.ctx, So));
  const { setup: n } = s;
  if (n) {
    const r = e.setupContext = n.length > 1 ? di(e) : null;
    Ve(e), Xe();
    const o = Te(
      n,
      e,
      0,
      [e.props, r]
    );
    if (Ze(), Ue(), En(o)) {
      if (o.then(Ue, Ue), t)
        return o.then((l) => {
          an(e, l, t);
        }).catch((l) => {
          Ht(l, e, 0);
        });
      e.asyncDep = o;
    } else
      an(e, o, t);
  } else
    ar(e, t);
}
function an(e, t, s) {
  I(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : D(t) && (e.setupState = Bn(t)), ar(e, s);
}
let dn;
function ar(e, t, s) {
  const n = e.type;
  if (!e.render) {
    if (!t && dn && !n.render) {
      const r = n.template || Ms(e).template;
      if (r) {
        const { isCustomElement: o, compilerOptions: l } = e.appContext.config, { delimiters: f, compilerOptions: u } = n, a = W(
          W(
            {
              isCustomElement: o,
              delimiters: f
            },
            l
          ),
          u
        );
        n.render = dn(r, a);
      }
    }
    e.render = n.render || fe;
  }
  {
    Ve(e), Xe();
    try {
      Ho(e);
    } finally {
      Ze(), Ue();
    }
  }
}
function ai(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    {
      get(t, s) {
        return te(e, "get", "$attrs"), t[s];
      }
    }
  ));
}
function di(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    get attrs() {
      return ai(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ss(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Bn(Os(e.exposed)), {
      get(t, s) {
        if (s in t)
          return t[s];
        if (s in it)
          return it[s](e);
      },
      has(t, s) {
        return s in t || s in it;
      }
    }));
}
function hi(e) {
  return I(e) && "__vccOpts" in e;
}
const pi = (e, t) => io(e, t, at);
function gi(e, t, s) {
  const n = arguments.length;
  return n === 2 ? D(t) && !O(t) ? us(t) ? ne(e, null, [t]) : ne(e, t) : ne(e, null, t) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && us(s) && (s = [s]), ne(e, t, s));
}
const mi = Symbol.for("v-scx"), bi = () => Ct(mi), _i = "3.3.11", wi = "http://www.w3.org/2000/svg", Se = typeof document < "u" ? document : null, hn = Se && /* @__PURE__ */ Se.createElement("template"), xi = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const r = t ? Se.createElementNS(wi, e) : Se.createElement(e, s ? { is: s } : void 0);
    return e === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
  },
  createText: (e) => Se.createTextNode(e),
  createComment: (e) => Se.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Se.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, s, n, r, o) {
    const l = s ? s.previousSibling : t.lastChild;
    if (r && (r === o || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), s), !(r === o || !(r = r.nextSibling)); )
        ;
    else {
      hn.innerHTML = n ? `<svg>${e}</svg>` : e;
      const f = hn.content;
      if (n) {
        const u = f.firstChild;
        for (; u.firstChild; )
          f.appendChild(u.firstChild);
        f.removeChild(u);
      }
      t.insertBefore(f, s);
    }
    return [
      // first
      l ? l.nextSibling : t.firstChild,
      // last
      s ? s.previousSibling : t.lastChild
    ];
  }
}, yi = Symbol("_vtc");
function vi(e, t, s) {
  const n = e[yi];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const Ei = Symbol("_vod");
function Ci(e, t, s) {
  const n = e.style, r = k(s);
  if (s && !r) {
    if (t && !k(t))
      for (const o in t)
        s[o] == null && as(n, o, "");
    for (const o in s)
      as(n, o, s[o]);
  } else {
    const o = n.display;
    r ? t !== s && (n.cssText = s) : t && e.removeAttribute("style"), Ei in e && (n.display = o);
  }
}
const pn = /\s*!important$/;
function as(e, t, s) {
  if (O(s))
    s.forEach((n) => as(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = Pi(e, t);
    pn.test(s) ? e.setProperty(
      ie(n),
      s.replace(pn, ""),
      "important"
    ) : e[n] = s;
  }
}
const gn = ["Webkit", "Moz", "ms"], Zt = {};
function Pi(e, t) {
  const s = Zt[t];
  if (s)
    return s;
  let n = xe(t);
  if (n !== "filter" && n in e)
    return Zt[t] = n;
  n = Cn(n);
  for (let r = 0; r < gn.length; r++) {
    const o = gn[r] + n;
    if (o in e)
      return Zt[t] = o;
  }
  return t;
}
const mn = "http://www.w3.org/1999/xlink";
function Oi(e, t, s, n, r) {
  if (n && t.startsWith("xlink:"))
    s == null ? e.removeAttributeNS(mn, t.slice(6, t.length)) : e.setAttributeNS(mn, t, s);
  else {
    const o = Ir(t);
    s == null || o && !Pn(s) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : s);
  }
}
function Ti(e, t, s, n, r, o, l) {
  if (t === "innerHTML" || t === "textContent") {
    n && l(n, r, o), e[t] = s ?? "";
    return;
  }
  const f = e.tagName;
  if (t === "value" && f !== "PROGRESS" && // custom elements may use _value internally
  !f.includes("-")) {
    e._value = s;
    const a = f === "OPTION" ? e.getAttribute("value") : e.value, m = s ?? "";
    a !== m && (e.value = m), s == null && e.removeAttribute(t);
    return;
  }
  let u = !1;
  if (s === "" || s == null) {
    const a = typeof e[t];
    a === "boolean" ? s = Pn(s) : s == null && a === "string" ? (s = "", u = !0) : a === "number" && (s = 0, u = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  u && e.removeAttribute(t);
}
function Ai(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function Ii(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const bn = Symbol("_vei");
function Mi(e, t, s, n, r = null) {
  const o = e[bn] || (e[bn] = {}), l = o[t];
  if (n && l)
    l.value = n;
  else {
    const [f, u] = Ri(t);
    if (n) {
      const a = o[t] = ji(n, r);
      Ai(e, f, a, u);
    } else
      l && (Ii(e, f, l, u), o[t] = void 0);
  }
}
const _n = /(?:Once|Passive|Capture)$/;
function Ri(e) {
  let t;
  if (_n.test(e)) {
    t = {};
    let n;
    for (; n = e.match(_n); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ie(e.slice(2)), t];
}
let Qt = 0;
const Fi = /* @__PURE__ */ Promise.resolve(), Ni = () => Qt || (Fi.then(() => Qt = 0), Qt = Date.now());
function ji(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    ue(
      Si(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = Ni(), s;
}
function Si(e, t) {
  if (O(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map((n) => (r) => !r._stopped && n && n(r));
  } else
    return t;
}
const wn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Hi = (e, t, s, n, r = !1, o, l, f, u) => {
  t === "class" ? vi(e, n, r) : t === "style" ? Ci(e, s, n) : Rt(t) ? gs(t) || Mi(e, t, s, n, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ui(e, t, n, r)) ? Ti(
    e,
    t,
    n,
    o,
    l,
    f,
    u
  ) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Oi(e, t, n, r));
};
function Ui(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && wn(t) && I(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return wn(t) && k(s) ? !1 : t in e;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ki(e, t) {
  const s = /* @__PURE__ */ Zn(e);
  class n extends Hs {
    constructor(o) {
      super(s, o, t);
    }
  }
  return n.def = s, n;
}
const Li = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Hs extends Li {
  constructor(t, s = {}, n) {
    super(), this._def = t, this._props = s, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && n ? n(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, this._ob && (this._ob.disconnect(), this._ob = null), zn(() => {
      this._connected || (yn(null, this.shadowRoot), this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let n = 0; n < this.attributes.length; n++)
      this._setAttr(this.attributes[n].name);
    this._ob = new MutationObserver((n) => {
      for (const r of n)
        this._setAttr(r.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (n, r = !1) => {
      const { props: o, styles: l } = n;
      let f;
      if (o && !O(o))
        for (const u in o) {
          const a = o[u];
          (a === Number || a && a.type === Number) && (u in this._props && (this._props[u] = zs(this._props[u])), (f || (f = /* @__PURE__ */ Object.create(null)))[xe(u)] = !0);
        }
      this._numberProps = f, r && this._resolveProps(n), this._applyStyles(l), this._update();
    }, s = this._def.__asyncLoader;
    s ? s().then((n) => t(n, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: s } = t, n = O(s) ? s : Object.keys(s || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && n.includes(r) && this._setProp(r, this[r], !0, !1);
    for (const r of n.map(xe))
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
    let s = this.getAttribute(t);
    const n = xe(t);
    this._numberProps && this._numberProps[n] && (s = zs(s)), this._setProp(n, s, !1);
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
  _setProp(t, s, n = !0, r = !0) {
    s !== this._props[t] && (this._props[t] = s, r && this._instance && this._update(), n && (s === !0 ? this.setAttribute(ie(t), "") : typeof s == "string" || typeof s == "number" ? this.setAttribute(ie(t), s + "") : s || this.removeAttribute(ie(t))));
  }
  _update() {
    yn(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = ne(this._def, W({}, this._props));
    return this._instance || (t.ce = (s) => {
      this._instance = s, s.isCE = !0;
      const n = (o, l) => {
        this.dispatchEvent(
          new CustomEvent(o, {
            detail: l
          })
        );
      };
      s.emit = (o, ...l) => {
        n(o, l), ie(o) !== o && n(ie(o), l);
      };
      let r = this;
      for (; r = r && (r.parentNode || r.host); )
        if (r instanceof Hs) {
          s.parent = r._instance, s.provides = r._instance.provides;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((s) => {
      const n = document.createElement("style");
      n.textContent = s, this.shadowRoot.appendChild(n);
    });
  }
}
const Di = /* @__PURE__ */ W({ patchProp: Hi }, xi);
let xn;
function dr() {
  return xn || (xn = Vo(Di));
}
const yn = (...e) => {
  dr().render(...e);
}, Bi = (...e) => {
  const t = dr().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = $i(n);
    if (!r)
      return;
    const o = t._component;
    !I(o) && !o.render && !o.template && (o.template = r.innerHTML), r.innerHTML = "";
    const l = s(r, !1, r instanceof SVGElement);
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), l;
  }, t;
};
function $i(e) {
  return k(e) ? document.querySelector(e) : e;
}
const zi = /* @__PURE__ */ Zn({
  __name: "App",
  setup(e) {
    return (t, s) => null;
  }
}), Wi = `*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.visible{visibility:visible}.fixed{position:fixed}.bottom-4{bottom:1rem}.right-4{right:1rem}.block{display:block}.flex{display:flex}.hidden{display:none}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.rounded-full{border-radius:9999px}.bg-blue-500{--tw-bg-opacity: 1;background-color:rgb(59 130 246 / var(--tw-bg-opacity))}.px-7{padding-left:1.75rem;padding-right:1.75rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}
`, ki = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, r] of t)
    s[n] = r;
  return s;
}, ds = /* @__PURE__ */ ki(zi, [["styles", [Wi]]]);
var qi = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
const Ji = (
  /* istanbul ignore next */
  Symbol()
);
var vn;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(vn || (vn = {}));
function Yi() {
  const e = Mr(!0), t = e.run(() => eo({}));
  let s = [], n = [];
  const r = Os({
    install(o) {
      r._a = o, o.provide(Ji, r), o.config.globalProperties.$pinia = r, n.forEach((l) => s.push(l)), n = [];
    },
    use(o) {
      return !this._a && !qi ? n.push(o) : s.push(o), this;
    },
    _p: s,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return r;
}
const Vi = Yi(), hs = Bi(ds);
document.body.insertAdjacentHTML("beforeend", '<div id="Wiki_diget"><chat-widget/></div>');
hs.use(Vi).mount("#Wiki_diget");
const Xi = /* @__PURE__ */ Ki({
  render: () => gi(ds),
  styles: ds.styles,
  props: {},
  setup() {
    const e = ci();
    Object.assign(e == null ? void 0 : e.appContext, hs._context), Object.assign(e == null ? void 0 : e.provides, hs._context.provides);
  }
});
customElements.define("chat-widget", Xi);
