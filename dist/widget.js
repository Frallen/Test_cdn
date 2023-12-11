function In(t, e) {
  const n = /* @__PURE__ */ Object.create(null), s = t.split(",");
  for (let r = 0; r < s.length; r++)
    n[s[r]] = !0;
  return e ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const k = {}, te = [], bt = () => {
}, Br = () => !1, ke = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), An = (t) => t.startsWith("onUpdate:"), et = Object.assign, Tn = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, Dr = Object.prototype.hasOwnProperty, j = (t, e) => Dr.call(t, e), O = Array.isArray, ee = (t) => $e(t) === "[object Map]", js = (t) => $e(t) === "[object Set]", T = (t) => typeof t == "function", X = (t) => typeof t == "string", ie = (t) => typeof t == "symbol", $ = (t) => t !== null && typeof t == "object", Ns = (t) => ($(t) || T(t)) && T(t.then) && T(t.catch), Hs = Object.prototype.toString, $e = (t) => Hs.call(t), kr = (t) => $e(t).slice(8, -1), Ks = (t) => $e(t) === "[object Object]", Rn = (t) => X(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Fe = /* @__PURE__ */ In(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ze = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, $r = /-(\w)/g, It = ze((t) => t.replace($r, (e, n) => n ? n.toUpperCase() : "")), zr = /\B([A-Z])/g, ht = ze(
  (t) => t.replace(zr, "-$1").toLowerCase()
), Ls = ze((t) => t.charAt(0).toUpperCase() + t.slice(1)), nn = ze((t) => t ? `on${Ls(t)}` : ""), Jt = (t, e) => !Object.is(t, e), sn = (t, e) => {
  for (let n = 0; n < t.length; n++)
    t[n](e);
}, Ke = (t, e, n) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Wr = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
}, es = (t) => {
  const e = X(t) ? Number(t) : NaN;
  return isNaN(e) ? t : e;
};
let ns;
const an = () => ns || (ns = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Mn(t) {
  if (O(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const s = t[n], r = X(s) ? Yr(s) : Mn(s);
      if (r)
        for (const o in r)
          e[o] = r[o];
    }
    return e;
  } else if (X(t) || $(t))
    return t;
}
const qr = /;(?![^(]*\))/g, Jr = /:([^]+)/, Vr = /\/\*[^]*?\*\//g;
function Yr(t) {
  const e = {};
  return t.replace(Vr, "").split(qr).forEach((n) => {
    if (n) {
      const s = n.split(Jr);
      s.length > 1 && (e[s[0].trim()] = s[1].trim());
    }
  }), e;
}
function Sn(t) {
  let e = "";
  if (X(t))
    e = t;
  else if (O(t))
    for (let n = 0; n < t.length; n++) {
      const s = Sn(t[n]);
      s && (e += s + " ");
    }
  else if ($(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const Xr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Zr = /* @__PURE__ */ In(Xr);
function Us(t) {
  return !!t || t === "";
}
const Qr = (t) => X(t) ? t : t == null ? "" : O(t) || $(t) && (t.toString === Hs || !T(t.toString)) ? JSON.stringify(t, Bs, 2) : String(t), Bs = (t, e) => e && e.__v_isRef ? Bs(t, e.value) : ee(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (n, [s, r], o) => (n[rn(s, o) + " =>"] = r, n),
    {}
  )
} : js(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((n) => rn(n))
} : ie(e) ? rn(e) : $(e) && !O(e) && !Ks(e) ? String(e) : e, rn = (t, e = "") => {
  var n;
  return ie(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t;
};
let ct;
class Ds {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this.effects = [], this.cleanups = [], this.parent = ct, !e && ct && (this.index = (ct.scopes || (ct.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(e) {
    if (this._active) {
      const n = ct;
      try {
        return ct = this, e();
      } finally {
        ct = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ct = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    ct = this.parent;
  }
  stop(e) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !e) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function ks(t) {
  return new Ds(t);
}
function Gr(t, e = ct) {
  e && e.active && e.effects.push(t);
}
function $s() {
  return ct;
}
function to(t) {
  ct && ct.cleanups.push(t);
}
const Fn = (t) => {
  const e = new Set(t);
  return e.w = 0, e.n = 0, e;
}, zs = (t) => (t.w & Kt) > 0, Ws = (t) => (t.n & Kt) > 0, eo = ({ deps: t }) => {
  if (t.length)
    for (let e = 0; e < t.length; e++)
      t[e].w |= Kt;
}, no = (t) => {
  const { deps: e } = t;
  if (e.length) {
    let n = 0;
    for (let s = 0; s < e.length; s++) {
      const r = e[s];
      zs(r) && !Ws(r) ? r.delete(t) : e[n++] = r, r.w &= ~Kt, r.n &= ~Kt;
    }
    e.length = n;
  }
}, Le = /* @__PURE__ */ new WeakMap();
let de = 0, Kt = 1;
const dn = 30;
let pt;
const Wt = Symbol(""), hn = Symbol("");
class jn {
  constructor(e, n = null, s) {
    this.fn = e, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Gr(this, s);
  }
  run() {
    if (!this.active)
      return this.fn();
    let e = pt, n = Nt;
    for (; e; ) {
      if (e === this)
        return;
      e = e.parent;
    }
    try {
      return this.parent = pt, pt = this, Nt = !0, Kt = 1 << ++de, de <= dn ? eo(this) : ss(this), this.fn();
    } finally {
      de <= dn && no(this), Kt = 1 << --de, pt = this.parent, Nt = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    pt === this ? this.deferStop = !0 : this.active && (ss(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function ss(t) {
  const { deps: e } = t;
  if (e.length) {
    for (let n = 0; n < e.length; n++)
      e[n].delete(t);
    e.length = 0;
  }
}
let Nt = !0;
const qs = [];
function le() {
  qs.push(Nt), Nt = !1;
}
function ce() {
  const t = qs.pop();
  Nt = t === void 0 ? !0 : t;
}
function ot(t, e, n) {
  if (Nt && pt) {
    let s = Le.get(t);
    s || Le.set(t, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || s.set(n, r = Fn()), Js(r);
  }
}
function Js(t, e) {
  let n = !1;
  de <= dn ? Ws(t) || (t.n |= Kt, n = !zs(t)) : n = !t.has(pt), n && (t.add(pt), pt.deps.push(t));
}
function At(t, e, n, s, r, o) {
  const i = Le.get(t);
  if (!i)
    return;
  let c = [];
  if (e === "clear")
    c = [...i.values()];
  else if (n === "length" && O(t)) {
    const u = Number(s);
    i.forEach((a, g) => {
      (g === "length" || !ie(g) && g >= u) && c.push(a);
    });
  } else
    switch (n !== void 0 && c.push(i.get(n)), e) {
      case "add":
        O(t) ? Rn(n) && c.push(i.get("length")) : (c.push(i.get(Wt)), ee(t) && c.push(i.get(hn)));
        break;
      case "delete":
        O(t) || (c.push(i.get(Wt)), ee(t) && c.push(i.get(hn)));
        break;
      case "set":
        ee(t) && c.push(i.get(Wt));
        break;
    }
  if (c.length === 1)
    c[0] && pn(c[0]);
  else {
    const u = [];
    for (const a of c)
      a && u.push(...a);
    pn(Fn(u));
  }
}
function pn(t, e) {
  const n = O(t) ? t : [...t];
  for (const s of n)
    s.computed && rs(s);
  for (const s of n)
    s.computed || rs(s);
}
function rs(t, e) {
  (t !== pt || t.allowRecurse) && (t.scheduler ? t.scheduler() : t.run());
}
function so(t, e) {
  var n;
  return (n = Le.get(t)) == null ? void 0 : n.get(e);
}
const ro = /* @__PURE__ */ In("__proto__,__v_isRef,__isVue"), Vs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(ie)
), os = /* @__PURE__ */ oo();
function oo() {
  const t = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    t[e] = function(...n) {
      const s = F(this);
      for (let o = 0, i = this.length; o < i; o++)
        ot(s, "get", o + "");
      const r = s[e](...n);
      return r === -1 || r === !1 ? s[e](...n.map(F)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    t[e] = function(...n) {
      le();
      const s = F(this)[e].apply(this, n);
      return ce(), s;
    };
  }), t;
}
function io(t) {
  const e = F(this);
  return ot(e, "has", t), e.hasOwnProperty(t);
}
class Ys {
  constructor(e = !1, n = !1) {
    this._isReadonly = e, this._shallow = n;
  }
  get(e, n, s) {
    const r = this._isReadonly, o = this._shallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return s === (r ? o ? yo : Gs : o ? Qs : Zs).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(s) ? e : void 0;
    const i = O(e);
    if (!r) {
      if (i && j(os, n))
        return Reflect.get(os, n, s);
      if (n === "hasOwnProperty")
        return io;
    }
    const c = Reflect.get(e, n, s);
    return (ie(n) ? Vs.has(n) : ro(n)) || (r || ot(e, "get", n), o) ? c : z(c) ? i && Rn(n) ? c : c.value : $(c) ? r ? tr(c) : qe(c) : c;
  }
}
class Xs extends Ys {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, s, r) {
    let o = e[n];
    if (se(o) && z(o) && !z(s))
      return !1;
    if (!this._shallow && (!Ue(s) && !se(s) && (o = F(o), s = F(s)), !O(e) && z(o) && !z(s)))
      return o.value = s, !0;
    const i = O(e) && Rn(n) ? Number(n) < e.length : j(e, n), c = Reflect.set(e, n, s, r);
    return e === F(r) && (i ? Jt(s, o) && At(e, "set", n, s) : At(e, "add", n, s)), c;
  }
  deleteProperty(e, n) {
    const s = j(e, n);
    e[n];
    const r = Reflect.deleteProperty(e, n);
    return r && s && At(e, "delete", n, void 0), r;
  }
  has(e, n) {
    const s = Reflect.has(e, n);
    return (!ie(n) || !Vs.has(n)) && ot(e, "has", n), s;
  }
  ownKeys(e) {
    return ot(
      e,
      "iterate",
      O(e) ? "length" : Wt
    ), Reflect.ownKeys(e);
  }
}
class lo extends Ys {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, n) {
    return !0;
  }
  deleteProperty(e, n) {
    return !0;
  }
}
const co = /* @__PURE__ */ new Xs(), fo = /* @__PURE__ */ new lo(), uo = /* @__PURE__ */ new Xs(
  !0
), Nn = (t) => t, We = (t) => Reflect.getPrototypeOf(t);
function Ie(t, e, n = !1, s = !1) {
  t = t.__v_raw;
  const r = F(t), o = F(e);
  n || (Jt(e, o) && ot(r, "get", e), ot(r, "get", o));
  const { has: i } = We(r), c = s ? Nn : n ? Ln : _e;
  if (i.call(r, e))
    return c(t.get(e));
  if (i.call(r, o))
    return c(t.get(o));
  t !== r && t.get(e);
}
function Ae(t, e = !1) {
  const n = this.__v_raw, s = F(n), r = F(t);
  return e || (Jt(t, r) && ot(s, "has", t), ot(s, "has", r)), t === r ? n.has(t) : n.has(t) || n.has(r);
}
function Te(t, e = !1) {
  return t = t.__v_raw, !e && ot(F(t), "iterate", Wt), Reflect.get(t, "size", t);
}
function is(t) {
  t = F(t);
  const e = F(this);
  return We(e).has.call(e, t) || (e.add(t), At(e, "add", t, t)), this;
}
function ls(t, e) {
  e = F(e);
  const n = F(this), { has: s, get: r } = We(n);
  let o = s.call(n, t);
  o || (t = F(t), o = s.call(n, t));
  const i = r.call(n, t);
  return n.set(t, e), o ? Jt(e, i) && At(n, "set", t, e) : At(n, "add", t, e), this;
}
function cs(t) {
  const e = F(this), { has: n, get: s } = We(e);
  let r = n.call(e, t);
  r || (t = F(t), r = n.call(e, t)), s && s.call(e, t);
  const o = e.delete(t);
  return r && At(e, "delete", t, void 0), o;
}
function fs() {
  const t = F(this), e = t.size !== 0, n = t.clear();
  return e && At(t, "clear", void 0, void 0), n;
}
function Re(t, e) {
  return function(s, r) {
    const o = this, i = o.__v_raw, c = F(i), u = e ? Nn : t ? Ln : _e;
    return !t && ot(c, "iterate", Wt), i.forEach((a, g) => s.call(r, u(a), u(g), o));
  };
}
function Me(t, e, n) {
  return function(...s) {
    const r = this.__v_raw, o = F(r), i = ee(o), c = t === "entries" || t === Symbol.iterator && i, u = t === "keys" && i, a = r[t](...s), g = n ? Nn : e ? Ln : _e;
    return !e && ot(
      o,
      "iterate",
      u ? hn : Wt
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
function St(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function ao() {
  const t = {
    get(o) {
      return Ie(this, o);
    },
    get size() {
      return Te(this);
    },
    has: Ae,
    add: is,
    set: ls,
    delete: cs,
    clear: fs,
    forEach: Re(!1, !1)
  }, e = {
    get(o) {
      return Ie(this, o, !1, !0);
    },
    get size() {
      return Te(this);
    },
    has: Ae,
    add: is,
    set: ls,
    delete: cs,
    clear: fs,
    forEach: Re(!1, !0)
  }, n = {
    get(o) {
      return Ie(this, o, !0);
    },
    get size() {
      return Te(this, !0);
    },
    has(o) {
      return Ae.call(this, o, !0);
    },
    add: St("add"),
    set: St("set"),
    delete: St("delete"),
    clear: St("clear"),
    forEach: Re(!0, !1)
  }, s = {
    get(o) {
      return Ie(this, o, !0, !0);
    },
    get size() {
      return Te(this, !0);
    },
    has(o) {
      return Ae.call(this, o, !0);
    },
    add: St("add"),
    set: St("set"),
    delete: St("delete"),
    clear: St("clear"),
    forEach: Re(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    t[o] = Me(
      o,
      !1,
      !1
    ), n[o] = Me(
      o,
      !0,
      !1
    ), e[o] = Me(
      o,
      !1,
      !0
    ), s[o] = Me(
      o,
      !0,
      !0
    );
  }), [
    t,
    n,
    e,
    s
  ];
}
const [
  ho,
  po,
  go,
  bo
] = /* @__PURE__ */ ao();
function Hn(t, e) {
  const n = e ? t ? bo : go : t ? po : ho;
  return (s, r, o) => r === "__v_isReactive" ? !t : r === "__v_isReadonly" ? t : r === "__v_raw" ? s : Reflect.get(
    j(n, r) && r in s ? n : s,
    r,
    o
  );
}
const mo = {
  get: /* @__PURE__ */ Hn(!1, !1)
}, _o = {
  get: /* @__PURE__ */ Hn(!1, !0)
}, wo = {
  get: /* @__PURE__ */ Hn(!0, !1)
}, Zs = /* @__PURE__ */ new WeakMap(), Qs = /* @__PURE__ */ new WeakMap(), Gs = /* @__PURE__ */ new WeakMap(), yo = /* @__PURE__ */ new WeakMap();
function xo(t) {
  switch (t) {
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
function vo(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : xo(kr(t));
}
function qe(t) {
  return se(t) ? t : Kn(
    t,
    !1,
    co,
    mo,
    Zs
  );
}
function Eo(t) {
  return Kn(
    t,
    !1,
    uo,
    _o,
    Qs
  );
}
function tr(t) {
  return Kn(
    t,
    !0,
    fo,
    wo,
    Gs
  );
}
function Kn(t, e, n, s, r) {
  if (!$(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const o = r.get(t);
  if (o)
    return o;
  const i = vo(t);
  if (i === 0)
    return t;
  const c = new Proxy(
    t,
    i === 2 ? s : n
  );
  return r.set(t, c), c;
}
function Tt(t) {
  return se(t) ? Tt(t.__v_raw) : !!(t && t.__v_isReactive);
}
function se(t) {
  return !!(t && t.__v_isReadonly);
}
function Ue(t) {
  return !!(t && t.__v_isShallow);
}
function er(t) {
  return Tt(t) || se(t);
}
function F(t) {
  const e = t && t.__v_raw;
  return e ? F(e) : t;
}
function Je(t) {
  return Ke(t, "__v_skip", !0), t;
}
const _e = (t) => $(t) ? qe(t) : t, Ln = (t) => $(t) ? tr(t) : t;
function nr(t) {
  Nt && pt && (t = F(t), Js(t.dep || (t.dep = Fn())));
}
function sr(t, e) {
  t = F(t);
  const n = t.dep;
  n && pn(n);
}
function z(t) {
  return !!(t && t.__v_isRef === !0);
}
function Un(t) {
  return Co(t, !1);
}
function Co(t, e) {
  return z(t) ? t : new Po(t, e);
}
class Po {
  constructor(e, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? e : F(e), this._value = n ? e : _e(e);
  }
  get value() {
    return nr(this), this._value;
  }
  set value(e) {
    const n = this.__v_isShallow || Ue(e) || se(e);
    e = n ? e : F(e), Jt(e, this._rawValue) && (this._rawValue = e, this._value = n ? e : _e(e), sr(this));
  }
}
function rr(t) {
  return z(t) ? t.value : t;
}
const Oo = {
  get: (t, e, n) => rr(Reflect.get(t, e, n)),
  set: (t, e, n, s) => {
    const r = t[e];
    return z(r) && !z(n) ? (r.value = n, !0) : Reflect.set(t, e, n, s);
  }
};
function or(t) {
  return Tt(t) ? t : new Proxy(t, Oo);
}
function Io(t) {
  const e = O(t) ? new Array(t.length) : {};
  for (const n in t)
    e[n] = ir(t, n);
  return e;
}
class Ao {
  constructor(e, n, s) {
    this._object = e, this._key = n, this._defaultValue = s, this.__v_isRef = !0;
  }
  get value() {
    const e = this._object[this._key];
    return e === void 0 ? this._defaultValue : e;
  }
  set value(e) {
    this._object[this._key] = e;
  }
  get dep() {
    return so(F(this._object), this._key);
  }
}
class To {
  constructor(e) {
    this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function Ro(t, e, n) {
  return z(t) ? t : T(t) ? new To(t) : $(t) && arguments.length > 1 ? ir(t, e, n) : Un(t);
}
function ir(t, e, n) {
  const s = t[e];
  return z(s) ? s : new Ao(t, e, n);
}
class Mo {
  constructor(e, n, s, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new jn(e, () => {
      this._dirty || (this._dirty = !0, sr(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = s;
  }
  get value() {
    const e = F(this);
    return nr(e), (e._dirty || !e._cacheable) && (e._dirty = !1, e._value = e.effect.run()), e._value;
  }
  set value(e) {
    this._setter(e);
  }
}
function So(t, e, n = !1) {
  let s, r;
  const o = T(t);
  return o ? (s = t, r = bt) : (s = t.get, r = t.set), new Mo(s, r, o || !r, n);
}
function Ht(t, e, n, s) {
  let r;
  try {
    r = s ? t(...s) : t();
  } catch (o) {
    Ve(o, e, n);
  }
  return r;
}
function mt(t, e, n, s) {
  if (T(t)) {
    const o = Ht(t, e, n, s);
    return o && Ns(o) && o.catch((i) => {
      Ve(i, e, n);
    }), o;
  }
  const r = [];
  for (let o = 0; o < t.length; o++)
    r.push(mt(t[o], e, n, s));
  return r;
}
function Ve(t, e, n, s = !0) {
  const r = e ? e.vnode : null;
  if (e) {
    let o = e.parent;
    const i = e.proxy, c = n;
    for (; o; ) {
      const a = o.ec;
      if (a) {
        for (let g = 0; g < a.length; g++)
          if (a[g](t, i, c) === !1)
            return;
      }
      o = o.parent;
    }
    const u = e.appContext.config.errorHandler;
    if (u) {
      Ht(
        u,
        null,
        10,
        [t, i, c]
      );
      return;
    }
  }
  Fo(t, n, r, s);
}
function Fo(t, e, n, s = !0) {
  console.error(t);
}
let we = !1, gn = !1;
const nt = [];
let Et = 0;
const ne = [];
let Pt = null, $t = 0;
const lr = /* @__PURE__ */ Promise.resolve();
let Bn = null;
function Dn(t) {
  const e = Bn || lr;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function jo(t) {
  let e = Et + 1, n = nt.length;
  for (; e < n; ) {
    const s = e + n >>> 1, r = nt[s], o = ye(r);
    o < t || o === t && r.pre ? e = s + 1 : n = s;
  }
  return e;
}
function kn(t) {
  (!nt.length || !nt.includes(
    t,
    we && t.allowRecurse ? Et + 1 : Et
  )) && (t.id == null ? nt.push(t) : nt.splice(jo(t.id), 0, t), cr());
}
function cr() {
  !we && !gn && (gn = !0, Bn = lr.then(ur));
}
function No(t) {
  const e = nt.indexOf(t);
  e > Et && nt.splice(e, 1);
}
function Ho(t) {
  O(t) ? ne.push(...t) : (!Pt || !Pt.includes(
    t,
    t.allowRecurse ? $t + 1 : $t
  )) && ne.push(t), cr();
}
function us(t, e, n = we ? Et + 1 : 0) {
  for (; n < nt.length; n++) {
    const s = nt[n];
    if (s && s.pre) {
      if (t && s.id !== t.uid)
        continue;
      nt.splice(n, 1), n--, s();
    }
  }
}
function fr(t) {
  if (ne.length) {
    const e = [...new Set(ne)];
    if (ne.length = 0, Pt) {
      Pt.push(...e);
      return;
    }
    for (Pt = e, Pt.sort((n, s) => ye(n) - ye(s)), $t = 0; $t < Pt.length; $t++)
      Pt[$t]();
    Pt = null, $t = 0;
  }
}
const ye = (t) => t.id == null ? 1 / 0 : t.id, Ko = (t, e) => {
  const n = ye(t) - ye(e);
  if (n === 0) {
    if (t.pre && !e.pre)
      return -1;
    if (e.pre && !t.pre)
      return 1;
  }
  return n;
};
function ur(t) {
  gn = !1, we = !0, nt.sort(Ko);
  const e = bt;
  try {
    for (Et = 0; Et < nt.length; Et++) {
      const n = nt[Et];
      n && n.active !== !1 && Ht(n, null, 14);
    }
  } finally {
    Et = 0, nt.length = 0, fr(), we = !1, Bn = null, (nt.length || ne.length) && ur();
  }
}
function Lo(t, e, ...n) {
  if (t.isUnmounted)
    return;
  const s = t.vnode.props || k;
  let r = n;
  const o = e.startsWith("update:"), i = o && e.slice(7);
  if (i && i in s) {
    const g = `${i === "modelValue" ? "model" : i}Modifiers`, { number: y, trim: v } = s[g] || k;
    v && (r = n.map((I) => X(I) ? I.trim() : I)), y && (r = n.map(Wr));
  }
  let c, u = s[c = nn(e)] || // also try camelCase event handler (#2249)
  s[c = nn(It(e))];
  !u && o && (u = s[c = nn(ht(e))]), u && mt(
    u,
    t,
    6,
    r
  );
  const a = s[c + "Once"];
  if (a) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[c])
      return;
    t.emitted[c] = !0, mt(
      a,
      t,
      6,
      r
    );
  }
}
function ar(t, e, n = !1) {
  const s = e.emitsCache, r = s.get(t);
  if (r !== void 0)
    return r;
  const o = t.emits;
  let i = {}, c = !1;
  if (!T(t)) {
    const u = (a) => {
      const g = ar(a, e, !0);
      g && (c = !0, et(i, g));
    };
    !n && e.mixins.length && e.mixins.forEach(u), t.extends && u(t.extends), t.mixins && t.mixins.forEach(u);
  }
  return !o && !c ? ($(t) && s.set(t, null), null) : (O(o) ? o.forEach((u) => i[u] = null) : et(i, o), $(t) && s.set(t, i), i);
}
function Ye(t, e) {
  return !t || !ke(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), j(t, e[0].toLowerCase() + e.slice(1)) || j(t, ht(e)) || j(t, e));
}
let ut = null, dr = null;
function Be(t) {
  const e = ut;
  return ut = t, dr = t && t.type.__scopeId || null, e;
}
function Uo(t, e = ut, n) {
  if (!e || t._n)
    return t;
  const s = (...r) => {
    s._d && ys(-1);
    const o = Be(e);
    let i;
    try {
      i = t(...r);
    } finally {
      Be(o), s._d && ys(1);
    }
    return i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function on(t) {
  const {
    type: e,
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
  } = t;
  let q, Z;
  const Y = Be(t);
  try {
    if (n.shapeFlag & 4) {
      const R = r || s, J = R;
      q = vt(
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
      const R = e;
      q = vt(
        R.length > 1 ? R(
          o,
          { attrs: u, slots: c, emit: a }
        ) : R(
          o,
          null
          /* we know it doesn't need it */
        )
      ), Z = e.props ? u : Bo(u);
    }
  } catch (R) {
    be.length = 0, Ve(R, t, 1), q = ft(ve);
  }
  let Q = q;
  if (Z && M !== !1) {
    const R = Object.keys(Z), { shapeFlag: J } = Q;
    R.length && J & 7 && (i && R.some(An) && (Z = Do(
      Z,
      i
    )), Q = re(Q, Z));
  }
  return n.dirs && (Q = re(Q), Q.dirs = Q.dirs ? Q.dirs.concat(n.dirs) : n.dirs), n.transition && (Q.transition = n.transition), q = Q, Be(Y), q;
}
const Bo = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || ke(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, Do = (t, e) => {
  const n = {};
  for (const s in t)
    (!An(s) || !(s.slice(9) in e)) && (n[s] = t[s]);
  return n;
};
function ko(t, e, n) {
  const { props: s, children: r, component: o } = t, { props: i, children: c, patchFlag: u } = e, a = o.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return s ? as(s, i, a) : !!i;
    if (u & 8) {
      const g = e.dynamicProps;
      for (let y = 0; y < g.length; y++) {
        const v = g[y];
        if (i[v] !== s[v] && !Ye(a, v))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : s === i ? !1 : s ? i ? as(s, i, a) : !0 : !!i;
  return !1;
}
function as(t, e, n) {
  const s = Object.keys(e);
  if (s.length !== Object.keys(t).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (e[o] !== t[o] && !Ye(n, o))
      return !0;
  }
  return !1;
}
function $o({ vnode: t, parent: e }, n) {
  for (; e && e.subTree === t; )
    (t = e.vnode).el = n, e = e.parent;
}
const zo = Symbol.for("v-ndc"), Wo = (t) => t.__isSuspense;
function qo(t, e) {
  e && e.pendingBranch ? O(t) ? e.effects.push(...t) : e.effects.push(t) : Ho(t);
}
const Se = {};
function je(t, e, n) {
  return hr(t, e, n);
}
function hr(t, e, { immediate: n, deep: s, flush: r, onTrack: o, onTrigger: i } = k) {
  var c;
  const u = $s() === ((c = tt) == null ? void 0 : c.scope) ? tt : null;
  let a, g = !1, y = !1;
  if (z(t) ? (a = () => t.value, g = Ue(t)) : Tt(t) ? (a = () => t, s = !0) : O(t) ? (y = !0, g = t.some((R) => Tt(R) || Ue(R)), a = () => t.map((R) => {
    if (z(R))
      return R.value;
    if (Tt(R))
      return Gt(R);
    if (T(R))
      return Ht(R, u, 2);
  })) : T(t) ? e ? a = () => Ht(t, u, 2) : a = () => {
    if (!(u && u.isUnmounted))
      return v && v(), mt(
        t,
        u,
        3,
        [I]
      );
  } : a = bt, e && s) {
    const R = a;
    a = () => Gt(R());
  }
  let v, I = (R) => {
    v = Y.onStop = () => {
      Ht(R, u, 4), v = Y.onStop = void 0;
    };
  }, U;
  if (Ce)
    if (I = bt, e ? n && mt(e, u, 3, [
      a(),
      y ? [] : void 0,
      I
    ]) : a(), r === "sync") {
      const R = zi();
      U = R.__watcherHandles || (R.__watcherHandles = []);
    } else
      return bt;
  let M = y ? new Array(t.length).fill(Se) : Se;
  const q = () => {
    if (Y.active)
      if (e) {
        const R = Y.run();
        (s || g || (y ? R.some((J, Lt) => Jt(J, M[Lt])) : Jt(R, M))) && (v && v(), mt(e, u, 3, [
          R,
          // pass undefined as the old value when it's changed for the first time
          M === Se ? void 0 : y && M[0] === Se ? [] : M,
          I
        ]), M = R);
      } else
        Y.run();
  };
  q.allowRecurse = !!e;
  let Z;
  r === "sync" ? Z = q : r === "post" ? Z = () => rt(q, u && u.suspense) : (q.pre = !0, u && (q.id = u.uid), Z = () => kn(q));
  const Y = new jn(a, Z);
  e ? n ? q() : M = Y.run() : r === "post" ? rt(
    Y.run.bind(Y),
    u && u.suspense
  ) : Y.run();
  const Q = () => {
    Y.stop(), u && u.scope && Tn(u.scope.effects, Y);
  };
  return U && U.push(Q), Q;
}
function Jo(t, e, n) {
  const s = this.proxy, r = X(t) ? t.includes(".") ? pr(s, t) : () => s[t] : t.bind(s, s);
  let o;
  T(e) ? o = e : (o = e.handler, n = e);
  const i = tt;
  oe(this);
  const c = hr(r, o.bind(s), n);
  return i ? oe(i) : qt(), c;
}
function pr(t, e) {
  const n = e.split(".");
  return () => {
    let s = t;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
function Gt(t, e) {
  if (!$(t) || t.__v_skip || (e = e || /* @__PURE__ */ new Set(), e.has(t)))
    return t;
  if (e.add(t), z(t))
    Gt(t.value, e);
  else if (O(t))
    for (let n = 0; n < t.length; n++)
      Gt(t[n], e);
  else if (js(t) || ee(t))
    t.forEach((n) => {
      Gt(n, e);
    });
  else if (Ks(t))
    for (const n in t)
      Gt(t[n], e);
  return t;
}
function Dt(t, e, n, s) {
  const r = t.dirs, o = e && e.dirs;
  for (let i = 0; i < r.length; i++) {
    const c = r[i];
    o && (c.oldValue = o[i].value);
    let u = c.dir[s];
    u && (le(), mt(u, n, 8, [
      t.el,
      c,
      t,
      e
    ]), ce());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function $n(t, e) {
  return T(t) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => et({ name: t.name }, e, { setup: t }))()
  ) : t;
}
const Ne = (t) => !!t.type.__asyncLoader, gr = (t) => t.type.__isKeepAlive;
function Vo(t, e) {
  br(t, "a", e);
}
function Yo(t, e) {
  br(t, "da", e);
}
function br(t, e, n = tt) {
  const s = t.__wdc || (t.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return t();
  });
  if (Xe(e, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      gr(r.parent.vnode) && Xo(s, e, n, r), r = r.parent;
  }
}
function Xo(t, e, n, s) {
  const r = Xe(
    e,
    t,
    s,
    !0
    /* prepend */
  );
  mr(() => {
    Tn(s[e], r);
  }, n);
}
function Xe(t, e, n = tt, s = !1) {
  if (n) {
    const r = n[t] || (n[t] = []), o = e.__weh || (e.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      le(), oe(n);
      const c = mt(e, n, t, i);
      return qt(), ce(), c;
    });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const Rt = (t) => (e, n = tt) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Ce || t === "sp") && Xe(t, (...s) => e(...s), n)
), Zo = Rt("bm"), Qo = Rt("m"), Go = Rt("bu"), ti = Rt("u"), ei = Rt("bum"), mr = Rt("um"), ni = Rt("sp"), si = Rt(
  "rtg"
), ri = Rt(
  "rtc"
);
function oi(t, e = tt) {
  Xe("ec", t, e);
}
const bn = (t) => t ? Rr(t) ? Vn(t) || t.proxy : bn(t.parent) : null, pe = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ et(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => bn(t.parent),
    $root: (t) => bn(t.root),
    $emit: (t) => t.emit,
    $options: (t) => zn(t),
    $forceUpdate: (t) => t.f || (t.f = () => kn(t.update)),
    $nextTick: (t) => t.n || (t.n = Dn.bind(t.proxy)),
    $watch: (t) => Jo.bind(t)
  })
), ln = (t, e) => t !== k && !t.__isScriptSetup && j(t, e), ii = {
  get({ _: t }, e) {
    const { ctx: n, setupState: s, data: r, props: o, accessCache: i, type: c, appContext: u } = t;
    let a;
    if (e[0] !== "$") {
      const I = i[e];
      if (I !== void 0)
        switch (I) {
          case 1:
            return s[e];
          case 2:
            return r[e];
          case 4:
            return n[e];
          case 3:
            return o[e];
        }
      else {
        if (ln(s, e))
          return i[e] = 1, s[e];
        if (r !== k && j(r, e))
          return i[e] = 2, r[e];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = t.propsOptions[0]) && j(a, e)
        )
          return i[e] = 3, o[e];
        if (n !== k && j(n, e))
          return i[e] = 4, n[e];
        mn && (i[e] = 0);
      }
    }
    const g = pe[e];
    let y, v;
    if (g)
      return e === "$attrs" && ot(t, "get", e), g(t);
    if (
      // css module (injected by vue-loader)
      (y = c.__cssModules) && (y = y[e])
    )
      return y;
    if (n !== k && j(n, e))
      return i[e] = 4, n[e];
    if (
      // global properties
      v = u.config.globalProperties, j(v, e)
    )
      return v[e];
  },
  set({ _: t }, e, n) {
    const { data: s, setupState: r, ctx: o } = t;
    return ln(r, e) ? (r[e] = n, !0) : s !== k && j(s, e) ? (s[e] = n, !0) : j(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (o[e] = n, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: n, ctx: s, appContext: r, propsOptions: o }
  }, i) {
    let c;
    return !!n[i] || t !== k && j(t, i) || ln(e, i) || (c = o[0]) && j(c, i) || j(s, i) || j(pe, i) || j(r.config.globalProperties, i);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : j(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
function ds(t) {
  return O(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
let mn = !0;
function li(t) {
  const e = zn(t), n = t.proxy, s = t.ctx;
  mn = !1, e.beforeCreate && hs(e.beforeCreate, t, "bc");
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
    renderTracked: Lt,
    renderTriggered: at,
    errorCaptured: N,
    serverPrefetch: H,
    // public API
    expose: G,
    inheritAttrs: it,
    // assets
    components: _t,
    directives: Vt,
    filters: fe
  } = e;
  if (a && ci(a, s, null), i)
    for (const W in i) {
      const B = i[W];
      T(B) && (s[W] = B.bind(n));
    }
  if (r) {
    const W = r.call(n, n);
    $(W) && (t.data = qe(W));
  }
  if (mn = !0, o)
    for (const W in o) {
      const B = o[W], Ut = T(B) ? B.bind(n, n) : T(B.get) ? B.get.bind(n, n) : bt, Pe = !T(B) && T(B.set) ? B.set.bind(n) : bt, Bt = Sr({
        get: Ut,
        set: Pe
      });
      Object.defineProperty(s, W, {
        enumerable: !0,
        configurable: !0,
        get: () => Bt.value,
        set: (wt) => Bt.value = wt
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
  g && hs(g, t, "c");
  function K(W, B) {
    O(B) ? B.forEach((Ut) => W(Ut.bind(n))) : B && W(B.bind(n));
  }
  if (K(Zo, y), K(Qo, v), K(Go, I), K(ti, U), K(Vo, M), K(Yo, q), K(oi, N), K(ri, Lt), K(si, at), K(ei, Y), K(mr, R), K(ni, H), O(G))
    if (G.length) {
      const W = t.exposed || (t.exposed = {});
      G.forEach((B) => {
        Object.defineProperty(W, B, {
          get: () => n[B],
          set: (Ut) => n[B] = Ut
        });
      });
    } else
      t.exposed || (t.exposed = {});
  J && t.render === bt && (t.render = J), it != null && (t.inheritAttrs = it), _t && (t.components = _t), Vt && (t.directives = Vt);
}
function ci(t, e, n = bt) {
  O(t) && (t = _n(t));
  for (const s in t) {
    const r = t[s];
    let o;
    $(r) ? "default" in r ? o = ge(
      r.from || s,
      r.default,
      !0
      /* treat default function as factory */
    ) : o = ge(r.from || s) : o = ge(r), z(o) ? Object.defineProperty(e, s, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : e[s] = o;
  }
}
function hs(t, e, n) {
  mt(
    O(t) ? t.map((s) => s.bind(e.proxy)) : t.bind(e.proxy),
    e,
    n
  );
}
function _r(t, e, n, s) {
  const r = s.includes(".") ? pr(n, s) : () => n[s];
  if (X(t)) {
    const o = e[t];
    T(o) && je(r, o);
  } else if (T(t))
    je(r, t.bind(n));
  else if ($(t))
    if (O(t))
      t.forEach((o) => _r(o, e, n, s));
    else {
      const o = T(t.handler) ? t.handler.bind(n) : e[t.handler];
      T(o) && je(r, o, t);
    }
}
function zn(t) {
  const e = t.type, { mixins: n, extends: s } = e, {
    mixins: r,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = t.appContext, c = o.get(e);
  let u;
  return c ? u = c : !r.length && !n && !s ? u = e : (u = {}, r.length && r.forEach(
    (a) => De(u, a, i, !0)
  ), De(u, e, i)), $(e) && o.set(e, u), u;
}
function De(t, e, n, s = !1) {
  const { mixins: r, extends: o } = e;
  o && De(t, o, n, !0), r && r.forEach(
    (i) => De(t, i, n, !0)
  );
  for (const i in e)
    if (!(s && i === "expose")) {
      const c = fi[i] || n && n[i];
      t[i] = c ? c(t[i], e[i]) : e[i];
    }
  return t;
}
const fi = {
  data: ps,
  props: gs,
  emits: gs,
  // objects
  methods: he,
  computed: he,
  // lifecycle
  beforeCreate: st,
  created: st,
  beforeMount: st,
  mounted: st,
  beforeUpdate: st,
  updated: st,
  beforeDestroy: st,
  beforeUnmount: st,
  destroyed: st,
  unmounted: st,
  activated: st,
  deactivated: st,
  errorCaptured: st,
  serverPrefetch: st,
  // assets
  components: he,
  directives: he,
  // watch
  watch: ai,
  // provide / inject
  provide: ps,
  inject: ui
};
function ps(t, e) {
  return e ? t ? function() {
    return et(
      T(t) ? t.call(this, this) : t,
      T(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function ui(t, e) {
  return he(_n(t), _n(e));
}
function _n(t) {
  if (O(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e;
  }
  return t;
}
function st(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function he(t, e) {
  return t ? et(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function gs(t, e) {
  return t ? O(t) && O(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : et(
    /* @__PURE__ */ Object.create(null),
    ds(t),
    ds(e ?? {})
  ) : e;
}
function ai(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  const n = et(/* @__PURE__ */ Object.create(null), t);
  for (const s in e)
    n[s] = st(t[s], e[s]);
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
function hi(t, e) {
  return function(s, r = null) {
    T(s) || (s = et({}, s)), r != null && !$(r) && (r = null);
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
          const v = ft(s, r);
          return v.appContext = o, g && e ? e(v, a) : t(v, a, y), c = !0, u._container = a, a.__vue_app__ = u, Vn(v.component) || v.component.proxy;
        }
      },
      unmount() {
        c && (t(null, u._container), delete u._container.__vue_app__);
      },
      provide(a, g) {
        return o.provides[a] = g, u;
      },
      runWithContext(a) {
        xe = u;
        try {
          return a();
        } finally {
          xe = null;
        }
      }
    };
    return u;
  };
}
let xe = null;
function pi(t, e) {
  if (tt) {
    let n = tt.provides;
    const s = tt.parent && tt.parent.provides;
    s === n && (n = tt.provides = Object.create(s)), n[t] = e;
  }
}
function ge(t, e, n = !1) {
  const s = tt || ut;
  if (s || xe) {
    const r = s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : xe._context.provides;
    if (r && t in r)
      return r[t];
    if (arguments.length > 1)
      return n && T(e) ? e.call(s && s.proxy) : e;
  }
}
function gi() {
  return !!(tt || ut || xe);
}
function bi(t, e, n, s = !1) {
  const r = {}, o = {};
  Ke(o, Qe, 1), t.propsDefaults = /* @__PURE__ */ Object.create(null), yr(t, e, r, o);
  for (const i in t.propsOptions[0])
    i in r || (r[i] = void 0);
  n ? t.props = s ? r : Eo(r) : t.type.props ? t.props = r : t.props = o, t.attrs = o;
}
function mi(t, e, n, s) {
  const {
    props: r,
    attrs: o,
    vnode: { patchFlag: i }
  } = t, c = F(r), [u] = t.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const g = t.vnode.dynamicProps;
      for (let y = 0; y < g.length; y++) {
        let v = g[y];
        if (Ye(t.emitsOptions, v))
          continue;
        const I = e[v];
        if (u)
          if (j(o, v))
            I !== o[v] && (o[v] = I, a = !0);
          else {
            const U = It(v);
            r[U] = wn(
              u,
              c,
              U,
              I,
              t,
              !1
              /* isAbsent */
            );
          }
        else
          I !== o[v] && (o[v] = I, a = !0);
      }
    }
  } else {
    yr(t, e, r, o) && (a = !0);
    let g;
    for (const y in c)
      (!e || // for camelCase
      !j(e, y) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((g = ht(y)) === y || !j(e, g))) && (u ? n && // for camelCase
      (n[y] !== void 0 || // for kebab-case
      n[g] !== void 0) && (r[y] = wn(
        u,
        c,
        y,
        void 0,
        t,
        !0
        /* isAbsent */
      )) : delete r[y]);
    if (o !== c)
      for (const y in o)
        (!e || !j(e, y)) && (delete o[y], a = !0);
  }
  a && At(t, "set", "$attrs");
}
function yr(t, e, n, s) {
  const [r, o] = t.propsOptions;
  let i = !1, c;
  if (e)
    for (let u in e) {
      if (Fe(u))
        continue;
      const a = e[u];
      let g;
      r && j(r, g = It(u)) ? !o || !o.includes(g) ? n[g] = a : (c || (c = {}))[g] = a : Ye(t.emitsOptions, u) || (!(u in s) || a !== s[u]) && (s[u] = a, i = !0);
    }
  if (o) {
    const u = F(n), a = c || k;
    for (let g = 0; g < o.length; g++) {
      const y = o[g];
      n[y] = wn(
        r,
        u,
        y,
        a[y],
        t,
        !j(a, y)
      );
    }
  }
  return i;
}
function wn(t, e, n, s, r, o) {
  const i = t[n];
  if (i != null) {
    const c = j(i, "default");
    if (c && s === void 0) {
      const u = i.default;
      if (i.type !== Function && !i.skipFactory && T(u)) {
        const { propsDefaults: a } = r;
        n in a ? s = a[n] : (oe(r), s = a[n] = u.call(
          null,
          e
        ), qt());
      } else
        s = u;
    }
    i[
      0
      /* shouldCast */
    ] && (o && !c ? s = !1 : i[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === ht(n)) && (s = !0));
  }
  return s;
}
function xr(t, e, n = !1) {
  const s = e.propsCache, r = s.get(t);
  if (r)
    return r;
  const o = t.props, i = {}, c = [];
  let u = !1;
  if (!T(t)) {
    const g = (y) => {
      u = !0;
      const [v, I] = xr(y, e, !0);
      et(i, v), I && c.push(...I);
    };
    !n && e.mixins.length && e.mixins.forEach(g), t.extends && g(t.extends), t.mixins && t.mixins.forEach(g);
  }
  if (!o && !u)
    return $(t) && s.set(t, te), te;
  if (O(o))
    for (let g = 0; g < o.length; g++) {
      const y = It(o[g]);
      bs(y) && (i[y] = k);
    }
  else if (o)
    for (const g in o) {
      const y = It(g);
      if (bs(y)) {
        const v = o[g], I = i[y] = O(v) || T(v) ? { type: v } : et({}, v);
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
  return $(t) && s.set(t, a), a;
}
function bs(t) {
  return t[0] !== "$";
}
function ms(t) {
  const e = t && t.toString().match(/^\s*(function|class) (\w+)/);
  return e ? e[2] : t === null ? "null" : "";
}
function _s(t, e) {
  return ms(t) === ms(e);
}
function ws(t, e) {
  return O(e) ? e.findIndex((n) => _s(n, t)) : T(e) && _s(e, t) ? 0 : -1;
}
const vr = (t) => t[0] === "_" || t === "$stable", Wn = (t) => O(t) ? t.map(vt) : [vt(t)], _i = (t, e, n) => {
  if (e._n)
    return e;
  const s = Uo((...r) => Wn(e(...r)), n);
  return s._c = !1, s;
}, Er = (t, e, n) => {
  const s = t._ctx;
  for (const r in t) {
    if (vr(r))
      continue;
    const o = t[r];
    if (T(o))
      e[r] = _i(r, o, s);
    else if (o != null) {
      const i = Wn(o);
      e[r] = () => i;
    }
  }
}, Cr = (t, e) => {
  const n = Wn(e);
  t.slots.default = () => n;
}, wi = (t, e) => {
  if (t.vnode.shapeFlag & 32) {
    const n = e._;
    n ? (t.slots = F(e), Ke(e, "_", n)) : Er(
      e,
      t.slots = {}
    );
  } else
    t.slots = {}, e && Cr(t, e);
  Ke(t.slots, Qe, 1);
}, yi = (t, e, n) => {
  const { vnode: s, slots: r } = t;
  let o = !0, i = k;
  if (s.shapeFlag & 32) {
    const c = e._;
    c ? n && c === 1 ? o = !1 : (et(r, e), !n && c === 1 && delete r._) : (o = !e.$stable, Er(e, r)), i = e;
  } else
    e && (Cr(t, e), i = { default: 1 });
  if (o)
    for (const c in r)
      !vr(c) && i[c] == null && delete r[c];
};
function yn(t, e, n, s, r = !1) {
  if (O(t)) {
    t.forEach(
      (v, I) => yn(
        v,
        e && (O(e) ? e[I] : e),
        n,
        s,
        r
      )
    );
    return;
  }
  if (Ne(s) && !r)
    return;
  const o = s.shapeFlag & 4 ? Vn(s.component) || s.component.proxy : s.el, i = r ? null : o, { i: c, r: u } = t, a = e && e.r, g = c.refs === k ? c.refs = {} : c.refs, y = c.setupState;
  if (a != null && a !== u && (X(a) ? (g[a] = null, j(y, a) && (y[a] = null)) : z(a) && (a.value = null)), T(u))
    Ht(u, c, 12, [i, g]);
  else {
    const v = X(u), I = z(u);
    if (v || I) {
      const U = () => {
        if (t.f) {
          const M = v ? j(y, u) ? y[u] : g[u] : u.value;
          r ? O(M) && Tn(M, o) : O(M) ? M.includes(o) || M.push(o) : v ? (g[u] = [o], j(y, u) && (y[u] = g[u])) : (u.value = [o], t.k && (g[t.k] = u.value));
        } else
          v ? (g[u] = i, j(y, u) && (y[u] = i)) : I && (u.value = i, t.k && (g[t.k] = i));
      };
      i ? (U.id = -1, rt(U, n)) : U();
    }
  }
}
const rt = qo;
function xi(t) {
  return vi(t);
}
function vi(t, e) {
  const n = an();
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
    setScopeId: I = bt,
    insertStaticContent: U
  } = t, M = (l, f, d, h = null, p = null, _ = null, x = !1, m = null, w = !!f.dynamicChildren) => {
    if (l === f)
      return;
    l && !ae(l, f) && (h = Oe(l), wt(l, p, _, !0), l = null), f.patchFlag === -2 && (w = !1, f.dynamicChildren = null);
    const { type: b, ref: C, shapeFlag: E } = f;
    switch (b) {
      case Ze:
        q(l, f, d, h);
        break;
      case ve:
        Z(l, f, d, h);
        break;
      case cn:
        l == null && Y(f, d, h, x);
        break;
      case Ot:
        _t(
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
        ) : E & 6 ? Vt(
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
          Yt
        );
    }
    C != null && p && yn(C, l && l.ref, _, f || l, !f);
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
    x = x || f.type === "svg", l == null ? Lt(
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
  }, Lt = (l, f, d, h, p, _, x, m) => {
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
    ), S && Dt(l, null, h, "created"), at(w, l, l.scopeId, x, h), E) {
      for (const L in E)
        L !== "value" && !Fe(L) && o(
          w,
          L,
          null,
          E[L],
          _,
          l.children,
          h,
          p,
          Ct
        );
      "value" in E && o(w, "value", null, E.value), (b = E.onVnodeBeforeMount) && xt(b, h, l);
    }
    S && Dt(l, null, h, "beforeMount");
    const D = Ei(p, A);
    D && A.beforeEnter(w), s(w, f, d), ((b = E && E.onVnodeMounted) || D || S) && rt(() => {
      b && xt(b, h, l), D && A.enter(w), S && Dt(l, null, h, "mounted");
    }, p);
  }, at = (l, f, d, h, p) => {
    if (d && I(l, d), h)
      for (let _ = 0; _ < h.length; _++)
        I(l, h[_]);
    if (p) {
      let _ = p.subTree;
      if (f === _) {
        const x = p.vnode;
        at(
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
      const C = l[b] = m ? jt(l[b]) : vt(l[b]);
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
    d && kt(d, !1), (A = P.onVnodeBeforeUpdate) && xt(A, d, f, l), C && Dt(f, l, d, "beforeUpdate"), d && kt(d, !0);
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
        it(
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
          const V = D[L], dt = E[V], Xt = P[V];
          (Xt !== dt || V === "value") && o(
            m,
            V,
            dt,
            Xt,
            p,
            l.children,
            d,
            h,
            Ct
          );
        }
      }
      w & 1 && l.children !== f.children && g(m, f.children);
    } else
      !x && b == null && it(
        m,
        f,
        E,
        P,
        d,
        h,
        p
      );
    ((A = P.onVnodeUpdated) || C) && rt(() => {
      A && xt(A, d, f, l), C && Dt(f, l, d, "updated");
    }, h);
  }, G = (l, f, d, h, p, _, x) => {
    for (let m = 0; m < f.length; m++) {
      const w = l[m], b = f[m], C = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        w.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (w.type === Ot || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ae(w, b) || // - In the case of a component, it could contain anything.
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
  }, it = (l, f, d, h, p, _, x) => {
    if (d !== h) {
      if (d !== k)
        for (const m in d)
          !Fe(m) && !(m in h) && o(
            l,
            m,
            d[m],
            null,
            x,
            f.children,
            p,
            _,
            Ct
          );
      for (const m in h) {
        if (Fe(m))
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
          Ct
        );
      }
      "value" in h && o(l, "value", d.value, h.value);
    }
  }, _t = (l, f, d, h, p, _, x, m, w) => {
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
  }, Vt = (l, f, d, h, p, _, x, m, w) => {
    f.slotScopeIds = m, l == null ? f.shapeFlag & 512 ? p.ctx.activate(
      f,
      d,
      h,
      x,
      w
    ) : fe(
      f,
      d,
      h,
      p,
      _,
      x,
      w
    ) : Mt(l, f, w);
  }, fe = (l, f, d, h, p, _, x) => {
    const m = l.component = Ni(
      l,
      h,
      p
    );
    if (gr(l) && (m.ctx.renderer = Yt), Ki(m), m.asyncDep) {
      if (p && p.registerDep(m, K), !l.el) {
        const w = m.subTree = ft(ve);
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
  }, Mt = (l, f, d) => {
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
        kt(l, !1), C ? (C.el = S.el, W(l, C, x)) : C = S, E && sn(E), (L = C.props && C.props.onVnodeBeforeUpdate) && xt(L, A, C, S), kt(l, !0);
        const V = on(l), dt = l.subTree;
        l.subTree = V, M(
          dt,
          V,
          // parent may have changed if it's in a teleport
          y(dt.el),
          // anchor may have changed if it's in a fragment
          Oe(dt),
          l,
          p,
          _
        ), C.el = V.el, D === null && $o(l, V.el), P && rt(P, p), (L = C.props && C.props.onVnodeUpdated) && rt(
          () => xt(L, A, C, S),
          p
        );
      } else {
        let C;
        const { el: E, props: P } = f, { bm: A, m: S, parent: D } = l, L = Ne(f);
        if (kt(l, !1), A && sn(A), !L && (C = P && P.onVnodeBeforeMount) && xt(C, D, f), kt(l, !0), E && en) {
          const V = () => {
            l.subTree = on(l), en(
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
          const V = l.subTree = on(l);
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
        if (S && rt(S, p), !L && (C = P && P.onVnodeMounted)) {
          const V = f;
          rt(
            () => xt(C, D, V),
            p
          );
        }
        (f.shapeFlag & 256 || D && Ne(D.vnode) && D.vnode.shapeFlag & 256) && l.a && rt(l.a, p), l.isMounted = !0, f = d = h = null;
      }
    }, w = l.effect = new jn(
      m,
      () => kn(b),
      l.scope
      // track it in component's effect scope
    ), b = l.update = () => w.run();
    b.id = l.uid, kt(l, !0), b();
  }, W = (l, f, d) => {
    f.component = l;
    const h = l.vnode.props;
    l.vnode = f, l.next = null, mi(l, f.props, h, d), yi(l, f.children, d), le(), us(l), ce();
  }, B = (l, f, d, h, p, _, x, m, w = !1) => {
    const b = l && l.children, C = l ? l.shapeFlag : 0, E = f.children, { patchFlag: P, shapeFlag: A } = f;
    if (P > 0) {
      if (P & 128) {
        Pe(
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
        Ut(
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
    A & 8 ? (C & 16 && Ct(b, p, _), E !== b && g(d, E)) : C & 16 ? A & 16 ? Pe(
      b,
      E,
      d,
      h,
      p,
      _,
      x,
      m,
      w
    ) : Ct(b, p, _, !0) : (C & 8 && g(d, ""), A & 16 && N(
      E,
      d,
      h,
      p,
      _,
      x,
      m,
      w
    ));
  }, Ut = (l, f, d, h, p, _, x, m, w) => {
    l = l || te, f = f || te;
    const b = l.length, C = f.length, E = Math.min(b, C);
    let P;
    for (P = 0; P < E; P++) {
      const A = f[P] = w ? jt(f[P]) : vt(f[P]);
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
    b > C ? Ct(
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
  }, Pe = (l, f, d, h, p, _, x, m, w) => {
    let b = 0;
    const C = f.length;
    let E = l.length - 1, P = C - 1;
    for (; b <= E && b <= P; ) {
      const A = l[b], S = f[b] = w ? jt(f[b]) : vt(f[b]);
      if (ae(A, S))
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
      const A = l[E], S = f[P] = w ? jt(f[P]) : vt(f[P]);
      if (ae(A, S))
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
            f[b] = w ? jt(f[b]) : vt(f[b]),
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
        wt(l[b], p, _, !0), b++;
    else {
      const A = b, S = b, D = /* @__PURE__ */ new Map();
      for (b = S; b <= P; b++) {
        const lt = f[b] = w ? jt(f[b]) : vt(f[b]);
        lt.key != null && D.set(lt.key, b);
      }
      let L, V = 0;
      const dt = P - S + 1;
      let Xt = !1, Qn = 0;
      const ue = new Array(dt);
      for (b = 0; b < dt; b++)
        ue[b] = 0;
      for (b = A; b <= E; b++) {
        const lt = l[b];
        if (V >= dt) {
          wt(lt, p, _, !0);
          continue;
        }
        let yt;
        if (lt.key != null)
          yt = D.get(lt.key);
        else
          for (L = S; L <= P; L++)
            if (ue[L - S] === 0 && ae(lt, f[L])) {
              yt = L;
              break;
            }
        yt === void 0 ? wt(lt, p, _, !0) : (ue[yt - S] = b + 1, yt >= Qn ? Qn = yt : Xt = !0, M(
          lt,
          f[yt],
          d,
          null,
          p,
          _,
          x,
          m,
          w
        ), V++);
      }
      const Gn = Xt ? Ci(ue) : te;
      for (L = Gn.length - 1, b = dt - 1; b >= 0; b--) {
        const lt = S + b, yt = f[lt], ts = lt + 1 < C ? f[lt + 1].el : h;
        ue[b] === 0 ? M(
          null,
          yt,
          d,
          ts,
          p,
          _,
          x,
          m,
          w
        ) : Xt && (L < 0 || b !== Gn[L] ? Bt(yt, d, ts, 2) : L--);
      }
    }
  }, Bt = (l, f, d, h, p = null) => {
    const { el: _, type: x, transition: m, children: w, shapeFlag: b } = l;
    if (b & 6) {
      Bt(l.component.subTree, f, d, h);
      return;
    }
    if (b & 128) {
      l.suspense.move(f, d, h);
      return;
    }
    if (b & 64) {
      x.move(l, f, d, Yt);
      return;
    }
    if (x === Ot) {
      s(_, f, d);
      for (let E = 0; E < w.length; E++)
        Bt(w[E], f, d, h);
      s(l.anchor, f, d);
      return;
    }
    if (x === cn) {
      Q(l, f, d);
      return;
    }
    if (h !== 2 && b & 1 && m)
      if (h === 0)
        m.beforeEnter(_), s(_, f, d), rt(() => m.enter(_), p);
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
  }, wt = (l, f, d, h = !1, p = !1) => {
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
    if (m != null && yn(m, null, d, l, !0), C & 256) {
      f.ctx.deactivate(l);
      return;
    }
    const A = C & 1 && P, S = !Ne(l);
    let D;
    if (S && (D = x && x.onVnodeBeforeUnmount) && xt(D, f, l), C & 6)
      Ur(l.component, d, h);
    else {
      if (C & 128) {
        l.suspense.unmount(d, h);
        return;
      }
      A && Dt(l, null, f, "beforeUnmount"), C & 64 ? l.type.remove(
        l,
        f,
        d,
        p,
        Yt,
        h
      ) : b && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== Ot || E > 0 && E & 64) ? Ct(
        b,
        f,
        d,
        !1,
        !0
      ) : (_ === Ot && E & 384 || !p && C & 16) && Ct(w, f, d), h && Xn(l);
    }
    (S && (D = x && x.onVnodeUnmounted) || A) && rt(() => {
      D && xt(D, f, l), A && Dt(l, null, f, "unmounted");
    }, d);
  }, Xn = (l) => {
    const { type: f, el: d, anchor: h, transition: p } = l;
    if (f === Ot) {
      Lr(d, h);
      return;
    }
    if (f === cn) {
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
    h && sn(h), p.stop(), _ && (_.active = !1, wt(x, l, f, d)), m && rt(m, f), rt(() => {
      l.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, Ct = (l, f, d, h = !1, p = !1, _ = 0) => {
    for (let x = _; x < l.length; x++)
      wt(l[x], f, d, h, p);
  }, Oe = (l) => l.shapeFlag & 6 ? Oe(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : v(l.anchor || l.el), Zn = (l, f, d) => {
    l == null ? f._vnode && wt(f._vnode, null, null, !0) : M(f._vnode || null, l, f, null, null, null, d), us(), fr(), f._vnode = l;
  }, Yt = {
    p: M,
    um: wt,
    m: Bt,
    r: Xn,
    mt: fe,
    mc: N,
    pc: B,
    pbc: G,
    n: Oe,
    o: t
  };
  let tn, en;
  return e && ([tn, en] = e(
    Yt
  )), {
    render: Zn,
    hydrate: tn,
    createApp: hi(Zn, tn)
  };
}
function kt({ effect: t, update: e }, n) {
  t.allowRecurse = e.allowRecurse = n;
}
function Ei(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function Pr(t, e, n = !1) {
  const s = t.children, r = e.children;
  if (O(s) && O(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let c = r[o];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[o] = jt(r[o]), c.el = i.el), n || Pr(i, c)), c.type === Ze && (c.el = i.el);
    }
}
function Ci(t) {
  const e = t.slice(), n = [0];
  let s, r, o, i, c;
  const u = t.length;
  for (s = 0; s < u; s++) {
    const a = t[s];
    if (a !== 0) {
      if (r = n[n.length - 1], t[r] < a) {
        e[s] = r, n.push(s);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        c = o + i >> 1, t[n[c]] < a ? o = c + 1 : i = c;
      a < t[n[o]] && (o > 0 && (e[s] = n[o - 1]), n[o] = s);
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; )
    n[o] = i, i = e[i];
  return n;
}
const Pi = (t) => t.__isTeleport, Ot = Symbol.for("v-fgt"), Ze = Symbol.for("v-txt"), ve = Symbol.for("v-cmt"), cn = Symbol.for("v-stc"), be = [];
let gt = null;
function Or(t = !1) {
  be.push(gt = t ? null : []);
}
function Oi() {
  be.pop(), gt = be[be.length - 1] || null;
}
let Ee = 1;
function ys(t) {
  Ee += t;
}
function Ir(t) {
  return t.dynamicChildren = Ee > 0 ? gt || te : null, Oi(), Ee > 0 && gt && gt.push(t), t;
}
function Ii(t, e, n, s, r, o) {
  return Ir(
    Tr(
      t,
      e,
      n,
      s,
      r,
      o,
      !0
      /* isBlock */
    )
  );
}
function Ai(t, e, n, s, r) {
  return Ir(
    ft(
      t,
      e,
      n,
      s,
      r,
      !0
      /* isBlock: prevent a block from tracking itself */
    )
  );
}
function xn(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function ae(t, e) {
  return t.type === e.type && t.key === e.key;
}
const Qe = "__vInternal", Ar = ({ key: t }) => t ?? null, He = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? X(t) || z(t) || T(t) ? { i: ut, r: t, k: e, f: !!n } : t : null);
function Tr(t, e = null, n = null, s = 0, r = null, o = t === Ot ? 0 : 1, i = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && Ar(e),
    ref: e && He(e),
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
    ctx: ut
  };
  return c ? (qn(u, n), o & 128 && t.normalize(u)) : n && (u.shapeFlag |= X(n) ? 8 : 16), Ee > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  gt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && gt.push(u), u;
}
const ft = Ti;
function Ti(t, e = null, n = null, s = 0, r = null, o = !1) {
  if ((!t || t === zo) && (t = ve), xn(t)) {
    const c = re(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && qn(c, n), Ee > 0 && !o && gt && (c.shapeFlag & 6 ? gt[gt.indexOf(t)] = c : gt.push(c)), c.patchFlag |= -2, c;
  }
  if (Di(t) && (t = t.__vccOpts), e) {
    e = Ri(e);
    let { class: c, style: u } = e;
    c && !X(c) && (e.class = Sn(c)), $(u) && (er(u) && !O(u) && (u = et({}, u)), e.style = Mn(u));
  }
  const i = X(t) ? 1 : Wo(t) ? 128 : Pi(t) ? 64 : $(t) ? 4 : T(t) ? 2 : 0;
  return Tr(
    t,
    e,
    n,
    s,
    r,
    i,
    o,
    !0
  );
}
function Ri(t) {
  return t ? er(t) || Qe in t ? et({}, t) : t : null;
}
function re(t, e, n = !1) {
  const { props: s, ref: r, patchFlag: o, children: i } = t, c = e ? Si(s || {}, e) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: c,
    key: c && Ar(c),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? O(r) ? r.concat(He(e)) : [r, He(e)] : He(e)
    ) : r,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: i,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== Ot ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && re(t.ssContent),
    ssFallback: t.ssFallback && re(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
}
function Mi(t = " ", e = 0) {
  return ft(Ze, null, t, e);
}
function vt(t) {
  return t == null || typeof t == "boolean" ? ft(ve) : O(t) ? ft(
    Ot,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : typeof t == "object" ? jt(t) : ft(Ze, null, String(t));
}
function jt(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : re(t);
}
function qn(t, e) {
  let n = 0;
  const { shapeFlag: s } = t;
  if (e == null)
    e = null;
  else if (O(e))
    n = 16;
  else if (typeof e == "object")
    if (s & 65) {
      const r = e.default;
      r && (r._c && (r._d = !1), qn(t, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = e._;
      !r && !(Qe in e) ? e._ctx = ut : r === 3 && ut && (ut.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else
    T(e) ? (e = { default: e, _ctx: ut }, n = 32) : (e = String(e), s & 64 ? (n = 16, e = [Mi(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function Si(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    for (const r in s)
      if (r === "class")
        e.class !== s.class && (e.class = Sn([e.class, s.class]));
      else if (r === "style")
        e.style = Mn([e.style, s.style]);
      else if (ke(r)) {
        const o = e[r], i = s[r];
        i && o !== i && !(O(o) && o.includes(i)) && (e[r] = o ? [].concat(o, i) : i);
      } else
        r !== "" && (e[r] = s[r]);
  }
  return e;
}
function xt(t, e, n, s = null) {
  mt(t, e, 7, [
    n,
    s
  ]);
}
const Fi = wr();
let ji = 0;
function Ni(t, e, n) {
  const s = t.type, r = (e ? e.appContext : t.appContext) || Fi, o = {
    uid: ji++,
    vnode: t,
    type: s,
    parent: e,
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
    provides: e ? e.provides : Object.create(r.provides),
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
  return o.ctx = { _: o }, o.root = e ? e.root : o, o.emit = Lo.bind(null, o), t.ce && t.ce(o), o;
}
let tt = null;
const Hi = () => tt || ut;
let Jn, Zt, xs = "__VUE_INSTANCE_SETTERS__";
(Zt = an()[xs]) || (Zt = an()[xs] = []), Zt.push((t) => tt = t), Jn = (t) => {
  Zt.length > 1 ? Zt.forEach((e) => e(t)) : Zt[0](t);
};
const oe = (t) => {
  Jn(t), t.scope.on();
}, qt = () => {
  tt && tt.scope.off(), Jn(null);
};
function Rr(t) {
  return t.vnode.shapeFlag & 4;
}
let Ce = !1;
function Ki(t, e = !1) {
  Ce = e;
  const { props: n, children: s } = t.vnode, r = Rr(t);
  bi(t, n, r, e), wi(t, s);
  const o = r ? Li(t, e) : void 0;
  return Ce = !1, o;
}
function Li(t, e) {
  const n = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = Je(new Proxy(t.ctx, ii));
  const { setup: s } = n;
  if (s) {
    const r = t.setupContext = s.length > 1 ? Bi(t) : null;
    oe(t), le();
    const o = Ht(
      s,
      t,
      0,
      [t.props, r]
    );
    if (ce(), qt(), Ns(o)) {
      if (o.then(qt, qt), e)
        return o.then((i) => {
          vs(t, i, e);
        }).catch((i) => {
          Ve(i, t, 0);
        });
      t.asyncDep = o;
    } else
      vs(t, o, e);
  } else
    Mr(t, e);
}
function vs(t, e, n) {
  T(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : $(e) && (t.setupState = or(e)), Mr(t, n);
}
let Es;
function Mr(t, e, n) {
  const s = t.type;
  if (!t.render) {
    if (!e && Es && !s.render) {
      const r = s.template || zn(t).template;
      if (r) {
        const { isCustomElement: o, compilerOptions: i } = t.appContext.config, { delimiters: c, compilerOptions: u } = s, a = et(
          et(
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
    t.render = s.render || bt;
  }
  {
    oe(t), le();
    try {
      li(t);
    } finally {
      ce(), qt();
    }
  }
}
function Ui(t) {
  return t.attrsProxy || (t.attrsProxy = new Proxy(
    t.attrs,
    {
      get(e, n) {
        return ot(t, "get", "$attrs"), e[n];
      }
    }
  ));
}
function Bi(t) {
  const e = (n) => {
    t.exposed = n || {};
  };
  return {
    get attrs() {
      return Ui(t);
    },
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function Vn(t) {
  if (t.exposed)
    return t.exposeProxy || (t.exposeProxy = new Proxy(or(Je(t.exposed)), {
      get(e, n) {
        if (n in e)
          return e[n];
        if (n in pe)
          return pe[n](t);
      },
      has(e, n) {
        return n in e || n in pe;
      }
    }));
}
function Di(t) {
  return T(t) && "__vccOpts" in t;
}
const Sr = (t, e) => So(t, e, Ce);
function ki(t, e, n) {
  const s = arguments.length;
  return s === 2 ? $(e) && !O(e) ? xn(e) ? ft(t, null, [e]) : ft(t, e) : ft(t, null, e) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && xn(n) && (n = [n]), ft(t, e, n));
}
const $i = Symbol.for("v-scx"), zi = () => ge($i), Wi = "3.3.11", qi = "http://www.w3.org/2000/svg", zt = typeof document < "u" ? document : null, Cs = zt && /* @__PURE__ */ zt.createElement("template"), Ji = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, s) => {
    const r = e ? zt.createElementNS(qi, t) : zt.createElement(t, n ? { is: n } : void 0);
    return t === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (t) => zt.createTextNode(t),
  createComment: (t) => zt.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => zt.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(t, e, n, s, r, o) {
    const i = n ? n.previousSibling : e.lastChild;
    if (r && (r === o || r.nextSibling))
      for (; e.insertBefore(r.cloneNode(!0), n), !(r === o || !(r = r.nextSibling)); )
        ;
    else {
      Cs.innerHTML = s ? `<svg>${t}</svg>` : t;
      const c = Cs.content;
      if (s) {
        const u = c.firstChild;
        for (; u.firstChild; )
          c.appendChild(u.firstChild);
        c.removeChild(u);
      }
      e.insertBefore(c, n);
    }
    return [
      // first
      i ? i.nextSibling : e.firstChild,
      // last
      n ? n.previousSibling : e.lastChild
    ];
  }
}, Vi = Symbol("_vtc");
function Yi(t, e, n) {
  const s = t[Vi];
  s && (e = (e ? [e, ...s] : [...s]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
const Xi = Symbol("_vod");
function Zi(t, e, n) {
  const s = t.style, r = X(n);
  if (n && !r) {
    if (e && !X(e))
      for (const o in e)
        n[o] == null && vn(s, o, "");
    for (const o in n)
      vn(s, o, n[o]);
  } else {
    const o = s.display;
    r ? e !== n && (s.cssText = n) : e && t.removeAttribute("style"), Xi in t && (s.display = o);
  }
}
const Ps = /\s*!important$/;
function vn(t, e, n) {
  if (O(n))
    n.forEach((s) => vn(t, e, s));
  else if (n == null && (n = ""), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const s = Qi(t, e);
    Ps.test(n) ? t.setProperty(
      ht(s),
      n.replace(Ps, ""),
      "important"
    ) : t[s] = n;
  }
}
const Os = ["Webkit", "Moz", "ms"], fn = {};
function Qi(t, e) {
  const n = fn[e];
  if (n)
    return n;
  let s = It(e);
  if (s !== "filter" && s in t)
    return fn[e] = s;
  s = Ls(s);
  for (let r = 0; r < Os.length; r++) {
    const o = Os[r] + s;
    if (o in t)
      return fn[e] = o;
  }
  return e;
}
const Is = "http://www.w3.org/1999/xlink";
function Gi(t, e, n, s, r) {
  if (s && e.startsWith("xlink:"))
    n == null ? t.removeAttributeNS(Is, e.slice(6, e.length)) : t.setAttributeNS(Is, e, n);
  else {
    const o = Zr(e);
    n == null || o && !Us(n) ? t.removeAttribute(e) : t.setAttribute(e, o ? "" : n);
  }
}
function tl(t, e, n, s, r, o, i) {
  if (e === "innerHTML" || e === "textContent") {
    s && i(s, r, o), t[e] = n ?? "";
    return;
  }
  const c = t.tagName;
  if (e === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    t._value = n;
    const a = c === "OPTION" ? t.getAttribute("value") : t.value, g = n ?? "";
    a !== g && (t.value = g), n == null && t.removeAttribute(e);
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const a = typeof t[e];
    a === "boolean" ? n = Us(n) : n == null && a === "string" ? (n = "", u = !0) : a === "number" && (n = 0, u = !0);
  }
  try {
    t[e] = n;
  } catch {
  }
  u && t.removeAttribute(e);
}
function el(t, e, n, s) {
  t.addEventListener(e, n, s);
}
function nl(t, e, n, s) {
  t.removeEventListener(e, n, s);
}
const As = Symbol("_vei");
function sl(t, e, n, s, r = null) {
  const o = t[As] || (t[As] = {}), i = o[e];
  if (s && i)
    i.value = s;
  else {
    const [c, u] = rl(e);
    if (s) {
      const a = o[e] = ll(s, r);
      el(t, c, a, u);
    } else
      i && (nl(t, c, i, u), o[e] = void 0);
  }
}
const Ts = /(?:Once|Passive|Capture)$/;
function rl(t) {
  let e;
  if (Ts.test(t)) {
    e = {};
    let s;
    for (; s = t.match(Ts); )
      t = t.slice(0, t.length - s[0].length), e[s[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : ht(t.slice(2)), e];
}
let un = 0;
const ol = /* @__PURE__ */ Promise.resolve(), il = () => un || (ol.then(() => un = 0), un = Date.now());
function ll(t, e) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    mt(
      cl(s, n.value),
      e,
      5,
      [s]
    );
  };
  return n.value = t, n.attached = il(), n;
}
function cl(t, e) {
  if (O(e)) {
    const n = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      n.call(t), t._stopped = !0;
    }, e.map((s) => (r) => !r._stopped && s && s(r));
  } else
    return e;
}
const Rs = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, fl = (t, e, n, s, r = !1, o, i, c, u) => {
  e === "class" ? Yi(t, s, r) : e === "style" ? Zi(t, n, s) : ke(e) ? An(e) || sl(t, e, n, s, i) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : ul(t, e, s, r)) ? tl(
    t,
    e,
    s,
    o,
    i,
    c,
    u
  ) : (e === "true-value" ? t._trueValue = s : e === "false-value" && (t._falseValue = s), Gi(t, e, s, r));
};
function ul(t, e, n, s) {
  if (s)
    return !!(e === "innerHTML" || e === "textContent" || e in t && Rs(e) && T(n));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const r = t.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Rs(e) && X(n) ? !1 : e in t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function al(t, e) {
  const n = /* @__PURE__ */ $n(t);
  class s extends Yn {
    constructor(o) {
      super(n, o, e);
    }
  }
  return s.def = n, s;
}
const dl = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Yn extends dl {
  constructor(e, n = {}, s) {
    super(), this._def = e, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && s ? s(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
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
    const e = (s, r = !1) => {
      const { props: o, styles: i } = s;
      let c;
      if (o && !O(o))
        for (const u in o) {
          const a = o[u];
          (a === Number || a && a.type === Number) && (u in this._props && (this._props[u] = es(this._props[u])), (c || (c = /* @__PURE__ */ Object.create(null)))[It(u)] = !0);
        }
      this._numberProps = c, r && this._resolveProps(s), this._applyStyles(i), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then((s) => e(s, !0)) : e(this._def);
  }
  _resolveProps(e) {
    const { props: n } = e, s = O(n) ? n : Object.keys(n || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && s.includes(r) && this._setProp(r, this[r], !0, !1);
    for (const r of s.map(It))
      Object.defineProperty(this, r, {
        get() {
          return this._getProp(r);
        },
        set(o) {
          this._setProp(r, o);
        }
      });
  }
  _setAttr(e) {
    let n = this.getAttribute(e);
    const s = It(e);
    this._numberProps && this._numberProps[s] && (n = es(n)), this._setProp(s, n, !1);
  }
  /**
   * @internal
   */
  _getProp(e) {
    return this._props[e];
  }
  /**
   * @internal
   */
  _setProp(e, n, s = !0, r = !0) {
    n !== this._props[e] && (this._props[e] = n, r && this._instance && this._update(), s && (n === !0 ? this.setAttribute(ht(e), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(ht(e), n + "") : n || this.removeAttribute(ht(e))));
  }
  _update() {
    Ss(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const e = ft(this._def, et({}, this._props));
    return this._instance || (e.ce = (n) => {
      this._instance = n, n.isCE = !0;
      const s = (o, i) => {
        this.dispatchEvent(
          new CustomEvent(o, {
            detail: i
          })
        );
      };
      n.emit = (o, ...i) => {
        s(o, i), ht(o) !== o && s(ht(o), i);
      };
      let r = this;
      for (; r = r && (r.parentNode || r.host); )
        if (r instanceof Yn) {
          n.parent = r._instance, n.provides = r._instance.provides;
          break;
        }
    }), e;
  }
  _applyStyles(e) {
    e && e.forEach((n) => {
      const s = document.createElement("style");
      s.textContent = n, this.shadowRoot.appendChild(s);
    });
  }
}
const hl = ["ctrl", "shift", "alt", "meta"], pl = {
  stop: (t) => t.stopPropagation(),
  prevent: (t) => t.preventDefault(),
  self: (t) => t.target !== t.currentTarget,
  ctrl: (t) => !t.ctrlKey,
  shift: (t) => !t.shiftKey,
  alt: (t) => !t.altKey,
  meta: (t) => !t.metaKey,
  left: (t) => "button" in t && t.button !== 0,
  middle: (t) => "button" in t && t.button !== 1,
  right: (t) => "button" in t && t.button !== 2,
  exact: (t, e) => hl.some((n) => t[`${n}Key`] && !e.includes(n))
}, gl = (t, e) => t._withMods || (t._withMods = (n, ...s) => {
  for (let r = 0; r < e.length; r++) {
    const o = pl[e[r]];
    if (o && o(n, e))
      return;
  }
  return t(n, ...s);
}), bl = /* @__PURE__ */ et({ patchProp: fl }, Ji);
let Ms;
function Fr() {
  return Ms || (Ms = xi(bl));
}
const Ss = (...t) => {
  Fr().render(...t);
}, ml = (...t) => {
  const e = Fr().createApp(...t), { mount: n } = e;
  return e.mount = (s) => {
    const r = _l(s);
    if (!r)
      return;
    const o = e._component;
    !T(o) && !o.render && !o.template && (o.template = r.innerHTML), r.innerHTML = "";
    const i = n(r, !1, r instanceof SVGElement);
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
  }, e;
};
function _l(t) {
  return X(t) ? document.querySelector(t) : t;
}
var wl = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let jr;
const Ge = (t) => jr = t, Nr = (
  /* istanbul ignore next */
  Symbol()
);
function En(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var me;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(me || (me = {}));
function yl() {
  const t = ks(!0), e = t.run(() => Un({}));
  let n = [], s = [];
  const r = Je({
    install(o) {
      Ge(r), r._a = o, o.provide(Nr, r), o.config.globalProperties.$pinia = r, s.forEach((i) => n.push(i)), s = [];
    },
    use(o) {
      return !this._a && !wl ? s.push(o) : n.push(o), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: t,
    _s: /* @__PURE__ */ new Map(),
    state: e
  });
  return r;
}
const Hr = () => {
};
function Fs(t, e, n, s = Hr) {
  t.push(e);
  const r = () => {
    const o = t.indexOf(e);
    o > -1 && (t.splice(o, 1), s());
  };
  return !n && $s() && to(r), r;
}
function Qt(t, ...e) {
  t.slice().forEach((n) => {
    n(...e);
  });
}
const xl = (t) => t();
function Cn(t, e) {
  t instanceof Map && e instanceof Map && e.forEach((n, s) => t.set(s, n)), t instanceof Set && e instanceof Set && e.forEach(t.add, t);
  for (const n in e) {
    if (!e.hasOwnProperty(n))
      continue;
    const s = e[n], r = t[n];
    En(r) && En(s) && t.hasOwnProperty(n) && !z(s) && !Tt(s) ? t[n] = Cn(r, s) : t[n] = s;
  }
  return t;
}
const vl = (
  /* istanbul ignore next */
  Symbol()
);
function El(t) {
  return !En(t) || !t.hasOwnProperty(vl);
}
const { assign: Ft } = Object;
function Cl(t) {
  return !!(z(t) && t.effect);
}
function Pl(t, e, n, s) {
  const { state: r, actions: o, getters: i } = e, c = n.state.value[t];
  let u;
  function a() {
    c || (n.state.value[t] = r ? r() : {});
    const g = Io(n.state.value[t]);
    return Ft(g, o, Object.keys(i || {}).reduce((y, v) => (y[v] = Je(Sr(() => {
      Ge(n);
      const I = n._s.get(t);
      return i[v].call(I, I);
    })), y), {}));
  }
  return u = Kr(t, a, e, n, s, !0), u;
}
function Kr(t, e, n = {}, s, r, o) {
  let i;
  const c = Ft({ actions: {} }, n), u = {
    deep: !0
    // flush: 'post',
  };
  let a, g, y = [], v = [], I;
  const U = s.state.value[t];
  !o && !U && (s.state.value[t] = {}), Un({});
  let M;
  function q(N) {
    let H;
    a = g = !1, typeof N == "function" ? (N(s.state.value[t]), H = {
      type: me.patchFunction,
      storeId: t,
      events: I
    }) : (Cn(s.state.value[t], N), H = {
      type: me.patchObject,
      payload: N,
      storeId: t,
      events: I
    });
    const G = M = Symbol();
    Dn().then(() => {
      M === G && (a = !0);
    }), g = !0, Qt(y, H, s.state.value[t]);
  }
  const Z = o ? function() {
    const { state: H } = n, G = H ? H() : {};
    this.$patch((it) => {
      Ft(it, G);
    });
  } : (
    /* istanbul ignore next */
    Hr
  );
  function Y() {
    i.stop(), y = [], v = [], s._s.delete(t);
  }
  function Q(N, H) {
    return function() {
      Ge(s);
      const G = Array.from(arguments), it = [], _t = [];
      function Vt(K) {
        it.push(K);
      }
      function fe(K) {
        _t.push(K);
      }
      Qt(v, {
        args: G,
        name: N,
        store: J,
        after: Vt,
        onError: fe
      });
      let Mt;
      try {
        Mt = H.apply(this && this.$id === t ? this : J, G);
      } catch (K) {
        throw Qt(_t, K), K;
      }
      return Mt instanceof Promise ? Mt.then((K) => (Qt(it, K), K)).catch((K) => (Qt(_t, K), Promise.reject(K))) : (Qt(it, Mt), Mt);
    };
  }
  const R = {
    _p: s,
    // _s: scope,
    $id: t,
    $onAction: Fs.bind(null, v),
    $patch: q,
    $reset: Z,
    $subscribe(N, H = {}) {
      const G = Fs(y, N, H.detached, () => it()), it = i.run(() => je(() => s.state.value[t], (_t) => {
        (H.flush === "sync" ? g : a) && N({
          storeId: t,
          type: me.direct,
          events: I
        }, _t);
      }, Ft({}, u, H)));
      return G;
    },
    $dispose: Y
  }, J = qe(R);
  s._s.set(t, J);
  const at = (s._a && s._a.runWithContext || xl)(() => s._e.run(() => (i = ks()).run(e)));
  for (const N in at) {
    const H = at[N];
    if (z(H) && !Cl(H) || Tt(H))
      o || (U && El(H) && (z(H) ? H.value = U[N] : Cn(H, U[N])), s.state.value[t][N] = H);
    else if (typeof H == "function") {
      const G = Q(N, H);
      at[N] = G, c.actions[N] = H;
    }
  }
  return Ft(J, at), Ft(F(J), at), Object.defineProperty(J, "$state", {
    get: () => s.state.value[t],
    set: (N) => {
      q((H) => {
        Ft(H, N);
      });
    }
  }), s._p.forEach((N) => {
    Ft(J, i.run(() => N({
      store: J,
      app: s._a,
      pinia: s,
      options: c
    })));
  }), U && o && n.hydrate && n.hydrate(J.$state, U), a = !0, g = !0, J;
}
function Ol(t, e, n) {
  let s, r;
  const o = typeof e == "function";
  typeof t == "string" ? (s = t, r = o ? n : e) : (r = t, s = t.id);
  function i(c, u) {
    const a = gi();
    return c = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    c || (a ? ge(Nr, null) : null), c && Ge(c), c = jr, c._s.has(s) || (o ? Kr(s, e, r, c) : Pl(s, r, c)), c._s.get(s);
  }
  return i.$id = s, i;
}
function Il(t) {
  {
    t = F(t);
    const e = {};
    for (const n in t) {
      const s = t[n];
      (z(s) || Tt(s)) && (e[n] = // ---
      Ro(t, n));
    }
    return e;
  }
}
const Al = Ol("global", {
  state: () => ({
    counter: 1
  })
}), Tl = /* @__PURE__ */ $n({
  __name: "Buble",
  setup(t) {
    const { counter: e } = Il(Al());
    return (n, s) => (Or(), Ii("div", {
      class: "fixed bottom-4 right-4 bg-blue-500 rounded-full py-5 px-7 text-white cursor-pointer select-none",
      onClick: s[0] || (s[0] = gl((r) => e.value++, ["stop"]))
    }, Qr(rr(e)), 1));
  }
}), Rl = /* @__PURE__ */ $n({
  __name: "App",
  setup(t) {
    return (e, n) => {
      const s = Tl;
      return Or(), Ai(s);
    };
  }
}), Ml = `*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.visible{visibility:visible}.fixed{position:fixed}.bottom-4{bottom:1rem}.right-4{right:1rem}.block{display:block}.flex{display:flex}.hidden{display:none}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.rounded-full{border-radius:9999px}.bg-blue-500{--tw-bg-opacity: 1;background-color:rgb(59 130 246 / var(--tw-bg-opacity))}.px-7{padding-left:1.75rem;padding-right:1.75rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}
`, Sl = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [s, r] of e)
    n[s] = r;
  return n;
}, Pn = /* @__PURE__ */ Sl(Rl, [["styles", [Ml]]]), Fl = yl(), On = ml(Pn);
document.body.insertAdjacentHTML("beforeend", "<chat-widget/>");
On.use(Fl);
const jl = /* @__PURE__ */ al({
  render: () => ki(Pn),
  styles: Pn.styles,
  props: {},
  setup() {
    const t = Hi();
    Object.assign(t == null ? void 0 : t.appContext, On._context), Object.assign(t == null ? void 0 : t.provides, On._context.provides);
  }
});
customElements.define("chat-widget", jl);
