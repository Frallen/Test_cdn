function rt(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const z = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Tt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], re = () => {
}, Xr = () => !1, cn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), In = (e) => e.startsWith("onUpdate:"), X = Object.assign, Fo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, wi = Object.prototype.hasOwnProperty, U = (e, t) => wi.call(e, t), T = Array.isArray, ft = (e) => Bn(e) === "[object Map]", Zr = (e) => Bn(e) === "[object Set]", A = (e) => typeof e == "function", Z = (e) => typeof e == "string", Rt = (e) => typeof e == "symbol", W = (e) => e !== null && typeof e == "object", Lo = (e) => (W(e) || A(e)) && A(e.then) && A(e.catch), es = Object.prototype.toString, Bn = (e) => es.call(e), Uo = (e) => Bn(e).slice(8, -1), ts = (e) => Bn(e) === "[object Object]", ko = (e) => Z(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, vn = /* @__PURE__ */ rt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Di = /* @__PURE__ */ rt(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Kn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, xi = /-(\w)/g, $t = Kn((e) => e.replace(xi, (t, n) => n ? n.toUpperCase() : "")), Vi = /\B([A-Z])/g, et = Kn(
  (e) => e.replace(Vi, "-$1").toLowerCase()
), Wn = Kn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ct = Kn((e) => e ? `on${Wn(e)}` : ""), _t = (e, t) => !Object.is(e, t), Ft = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Tn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Si = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let dr;
const Pn = () => dr || (dr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ho(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = Z(o) ? Pi(o) : Ho(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else if (Z(e) || W(e))
    return e;
}
const Ci = /;(?![^(]*\))/g, Ii = /:([^]+)/, Ti = /\/\*[^]*?\*\//g;
function Pi(e) {
  const t = {};
  return e.replace(Ti, "").split(Ci).forEach((n) => {
    if (n) {
      const o = n.split(Ii);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Bo(e) {
  let t = "";
  if (Z(e))
    t = e;
  else if (T(e))
    for (let n = 0; n < e.length; n++) {
      const o = Bo(e[n]);
      o && (t += o + " ");
    }
  else if (W(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const $i = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Ai = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Ri = /* @__PURE__ */ rt($i), ji = /* @__PURE__ */ rt(Ai), Mi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Fi = /* @__PURE__ */ rt(Mi);
function ns(e) {
  return !!e || e === "";
}
const Li = (e) => Z(e) ? e : e == null ? "" : T(e) || W(e) && (e.toString === es || !A(e.toString)) ? JSON.stringify(e, os, 2) : String(e), os = (e, t) => t && t.__v_isRef ? os(e, t.value) : ft(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, r], s) => (n[uo(o, s) + " =>"] = r, n),
    {}
  )
} : Zr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => uo(n))
} : Rt(t) ? uo(t) : W(t) && !T(t) && !ts(t) ? String(t) : t, uo = (e, t = "") => {
  var n;
  return Rt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
function $n(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let ge;
class rs {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = ge, !t && ge && (this.index = (ge.scopes || (ge.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = ge;
      try {
        return ge = this, t();
      } finally {
        ge = n;
      }
    } else
      process.env.NODE_ENV !== "production" && $n("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ge = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    ge = this.parent;
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
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function ss(e) {
  return new rs(e);
}
function Ui(e, t = ge) {
  t && t.active && t.effects.push(e);
}
function is() {
  return ge;
}
function ki(e) {
  ge ? ge.cleanups.push(e) : process.env.NODE_ENV !== "production" && $n(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
const Xt = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, cs = (e) => (e.w & tt) > 0, ls = (e) => (e.n & tt) > 0, Hi = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= tt;
}, Bi = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      cs(r) && !ls(r) ? r.delete(e) : t[n++] = r, r.w &= ~tt, r.n &= ~tt;
    }
    t.length = n;
  }
}, An = /* @__PURE__ */ new WeakMap();
let kt = 0, tt = 1;
const Eo = 30;
let ae;
const at = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), vo = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class Ko {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Ui(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = ae, n = Ze;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = ae, ae = this, Ze = !0, tt = 1 << ++kt, kt <= Eo ? Hi(this) : pr(this), this.fn();
    } finally {
      kt <= Eo && Bi(this), tt = 1 << --kt, ae = this.parent, Ze = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    ae === this ? this.deferStop = !0 : this.active && (pr(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function pr(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Ze = !0;
const us = [];
function vt() {
  us.push(Ze), Ze = !1;
}
function bt() {
  const e = us.pop();
  Ze = e === void 0 ? !0 : e;
}
function se(e, t, n) {
  if (Ze && ae) {
    let o = An.get(e);
    o || An.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = Xt());
    const s = process.env.NODE_ENV !== "production" ? { effect: ae, target: e, type: t, key: n } : void 0;
    bo(r, s);
  }
}
function bo(e, t) {
  let n = !1;
  kt <= Eo ? ls(e) || (e.n |= tt, n = !cs(e)) : n = !e.has(ae), n && (e.add(ae), ae.deps.push(e), process.env.NODE_ENV !== "production" && ae.onTrack && ae.onTrack(
    X(
      {
        effect: ae
      },
      t
    )
  ));
}
function Re(e, t, n, o, r, s) {
  const i = An.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (n === "length" && T(e)) {
    const a = Number(o);
    i.forEach((p, d) => {
      (d === "length" || !Rt(d) && d >= a) && c.push(p);
    });
  } else
    switch (n !== void 0 && c.push(i.get(n)), t) {
      case "add":
        T(e) ? ko(n) && c.push(i.get("length")) : (c.push(i.get(at)), ft(e) && c.push(i.get(vo)));
        break;
      case "delete":
        T(e) || (c.push(i.get(at)), ft(e) && c.push(i.get(vo)));
        break;
      case "set":
        ft(e) && c.push(i.get(at));
        break;
    }
  const u = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: s } : void 0;
  if (c.length === 1)
    c[0] && (process.env.NODE_ENV !== "production" ? St(c[0], u) : St(c[0]));
  else {
    const a = [];
    for (const p of c)
      p && a.push(...p);
    process.env.NODE_ENV !== "production" ? St(Xt(a), u) : St(Xt(a));
  }
}
function St(e, t) {
  const n = T(e) ? e : [...e];
  for (const o of n)
    o.computed && hr(o, t);
  for (const o of n)
    o.computed || hr(o, t);
}
function hr(e, t) {
  (e !== ae || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(X({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
function Ki(e, t) {
  var n;
  return (n = An.get(e)) == null ? void 0 : n.get(t);
}
const Wi = /* @__PURE__ */ rt("__proto__,__v_isRef,__isVue"), fs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Rt)
), gr = /* @__PURE__ */ Ji();
function Ji() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = R(this);
      for (let s = 0, i = this.length; s < i; s++)
        se(o, "get", s + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(R)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      vt();
      const o = R(this)[t].apply(this, n);
      return bt(), o;
    };
  }), e;
}
function zi(e) {
  const t = R(this);
  return se(t, "has", e), t.hasOwnProperty(e);
}
class as {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._shallow = n;
  }
  get(t, n, o) {
    const r = this._isReadonly, s = this._shallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return o === (r ? s ? Es : ms : s ? _s : gs).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const i = T(t);
    if (!r) {
      if (i && U(gr, n))
        return Reflect.get(gr, n, o);
      if (n === "hasOwnProperty")
        return zi;
    }
    const c = Reflect.get(t, n, o);
    return (Rt(n) ? fs.has(n) : Wi(n)) || (r || se(t, "get", n), s) ? c : q(c) ? i && ko(n) ? c : c.value : W(c) ? r ? vs(c) : qn(c) : c;
  }
}
class ds extends as {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, r) {
    let s = t[n];
    if (nt(s) && q(s) && !q(o))
      return !1;
    if (!this._shallow && (!Rn(o) && !nt(o) && (s = R(s), o = R(o)), !T(t) && q(s) && !q(o)))
      return s.value = o, !0;
    const i = T(t) && ko(n) ? Number(n) < t.length : U(t, n), c = Reflect.set(t, n, o, r);
    return t === R(r) && (i ? _t(o, s) && Re(t, "set", n, o, s) : Re(t, "add", n, o)), c;
  }
  deleteProperty(t, n) {
    const o = U(t, n), r = t[n], s = Reflect.deleteProperty(t, n);
    return s && o && Re(t, "delete", n, void 0, r), s;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Rt(n) || !fs.has(n)) && se(t, "has", n), o;
  }
  ownKeys(t) {
    return se(
      t,
      "iterate",
      T(t) ? "length" : at
    ), Reflect.ownKeys(t);
  }
}
class ps extends as {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && $n(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && $n(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const qi = /* @__PURE__ */ new ds(), Yi = /* @__PURE__ */ new ps(), Qi = /* @__PURE__ */ new ds(
  !0
), Gi = /* @__PURE__ */ new ps(!0), Wo = (e) => e, Jn = (e) => Reflect.getPrototypeOf(e);
function dn(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = R(e), s = R(t);
  n || (_t(t, s) && se(r, "get", t), se(r, "get", s));
  const { has: i } = Jn(r), c = o ? Wo : n ? Jo : Zt;
  if (i.call(r, t))
    return c(e.get(t));
  if (i.call(r, s))
    return c(e.get(s));
  e !== r && e.get(t);
}
function pn(e, t = !1) {
  const n = this.__v_raw, o = R(n), r = R(e);
  return t || (_t(e, r) && se(o, "has", e), se(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function hn(e, t = !1) {
  return e = e.__v_raw, !t && se(R(e), "iterate", at), Reflect.get(e, "size", e);
}
function _r(e) {
  e = R(e);
  const t = R(this);
  return Jn(t).has.call(t, e) || (t.add(e), Re(t, "add", e, e)), this;
}
function mr(e, t) {
  t = R(t);
  const n = R(this), { has: o, get: r } = Jn(n);
  let s = o.call(n, e);
  s ? process.env.NODE_ENV !== "production" && hs(n, o, e) : (e = R(e), s = o.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), s ? _t(t, i) && Re(n, "set", e, t, i) : Re(n, "add", e, t), this;
}
function Er(e) {
  const t = R(this), { has: n, get: o } = Jn(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && hs(t, n, e) : (e = R(e), r = n.call(t, e));
  const s = o ? o.call(t, e) : void 0, i = t.delete(e);
  return r && Re(t, "delete", e, void 0, s), i;
}
function vr() {
  const e = R(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? ft(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Re(e, "clear", void 0, void 0, n), o;
}
function gn(e, t) {
  return function(o, r) {
    const s = this, i = s.__v_raw, c = R(i), u = t ? Wo : e ? Jo : Zt;
    return !e && se(c, "iterate", at), i.forEach((a, p) => o.call(r, u(a), u(p), s));
  };
}
function _n(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = R(r), i = ft(s), c = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, a = r[e](...o), p = n ? Wo : t ? Jo : Zt;
    return !t && se(
      s,
      "iterate",
      u ? vo : at
    ), {
      // iterator protocol
      next() {
        const { value: d, done: g } = a.next();
        return g ? { value: d, done: g } : {
          value: c ? [p(d[0]), p(d[1])] : p(d),
          done: g
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function ze(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${Wn(e)} operation ${n}failed: target is readonly.`,
        R(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Xi() {
  const e = {
    get(s) {
      return dn(this, s);
    },
    get size() {
      return hn(this);
    },
    has: pn,
    add: _r,
    set: mr,
    delete: Er,
    clear: vr,
    forEach: gn(!1, !1)
  }, t = {
    get(s) {
      return dn(this, s, !1, !0);
    },
    get size() {
      return hn(this);
    },
    has: pn,
    add: _r,
    set: mr,
    delete: Er,
    clear: vr,
    forEach: gn(!1, !0)
  }, n = {
    get(s) {
      return dn(this, s, !0);
    },
    get size() {
      return hn(this, !0);
    },
    has(s) {
      return pn.call(this, s, !0);
    },
    add: ze("add"),
    set: ze("set"),
    delete: ze("delete"),
    clear: ze("clear"),
    forEach: gn(!0, !1)
  }, o = {
    get(s) {
      return dn(this, s, !0, !0);
    },
    get size() {
      return hn(this, !0);
    },
    has(s) {
      return pn.call(this, s, !0);
    },
    add: ze("add"),
    set: ze("set"),
    delete: ze("delete"),
    clear: ze("clear"),
    forEach: gn(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = _n(
      s,
      !1,
      !1
    ), n[s] = _n(
      s,
      !0,
      !1
    ), t[s] = _n(
      s,
      !1,
      !0
    ), o[s] = _n(
      s,
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
  Zi,
  ec,
  tc,
  nc
] = /* @__PURE__ */ Xi();
function zn(e, t) {
  const n = t ? e ? nc : tc : e ? ec : Zi;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(
    U(n, r) && r in o ? n : o,
    r,
    s
  );
}
const oc = {
  get: /* @__PURE__ */ zn(!1, !1)
}, rc = {
  get: /* @__PURE__ */ zn(!1, !0)
}, sc = {
  get: /* @__PURE__ */ zn(!0, !1)
}, ic = {
  get: /* @__PURE__ */ zn(!0, !0)
};
function hs(e, t, n) {
  const o = R(n);
  if (o !== n && t.call(e, o)) {
    const r = Uo(e);
    console.warn(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const gs = /* @__PURE__ */ new WeakMap(), _s = /* @__PURE__ */ new WeakMap(), ms = /* @__PURE__ */ new WeakMap(), Es = /* @__PURE__ */ new WeakMap();
function cc(e) {
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
function lc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : cc(Uo(e));
}
function qn(e) {
  return nt(e) ? e : Yn(
    e,
    !1,
    qi,
    oc,
    gs
  );
}
function uc(e) {
  return Yn(
    e,
    !1,
    Qi,
    rc,
    _s
  );
}
function vs(e) {
  return Yn(
    e,
    !0,
    Yi,
    sc,
    ms
  );
}
function Ht(e) {
  return Yn(
    e,
    !0,
    Gi,
    ic,
    Es
  );
}
function Yn(e, t, n, o, r) {
  if (!W(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const i = lc(e);
  if (i === 0)
    return e;
  const c = new Proxy(
    e,
    i === 2 ? o : n
  );
  return r.set(e, c), c;
}
function we(e) {
  return nt(e) ? we(e.__v_raw) : !!(e && e.__v_isReactive);
}
function nt(e) {
  return !!(e && e.__v_isReadonly);
}
function Rn(e) {
  return !!(e && e.__v_isShallow);
}
function jn(e) {
  return we(e) || nt(e);
}
function R(e) {
  const t = e && e.__v_raw;
  return t ? R(t) : e;
}
function ke(e) {
  return Tn(e, "__v_skip", !0), e;
}
const Zt = (e) => W(e) ? qn(e) : e, Jo = (e) => W(e) ? vs(e) : e;
function bs(e) {
  Ze && ae && (e = R(e), process.env.NODE_ENV !== "production" ? bo(e.dep || (e.dep = Xt()), {
    target: e,
    type: "get",
    key: "value"
  }) : bo(e.dep || (e.dep = Xt())));
}
function Ns(e, t) {
  e = R(e);
  const n = e.dep;
  n && (process.env.NODE_ENV !== "production" ? St(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : St(n));
}
function q(e) {
  return !!(e && e.__v_isRef === !0);
}
function ln(e) {
  return fc(e, !1);
}
function fc(e, t) {
  return q(e) ? e : new ac(e, t);
}
class ac {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : R(t), this._value = n ? t : Zt(t);
  }
  get value() {
    return bs(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Rn(t) || nt(t);
    t = n ? t : R(t), _t(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Zt(t), Ns(this, t));
  }
}
function Qn(e) {
  return q(e) ? e.value : e;
}
const dc = {
  get: (e, t, n) => Qn(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return q(r) && !q(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function ys(e) {
  return we(e) ? e : new Proxy(e, dc);
}
function br(e) {
  process.env.NODE_ENV !== "production" && !jn(e) && console.warn("toRefs() expects a reactive object but received a plain one.");
  const t = T(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Os(e, n);
  return t;
}
class pc {
  constructor(t, n, o) {
    this._object = t, this._key = n, this._defaultValue = o, this.__v_isRef = !0;
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Ki(R(this._object), this._key);
  }
}
class hc {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function bn(e, t, n) {
  return q(e) ? e : A(e) ? new hc(e) : W(e) && arguments.length > 1 ? Os(e, t, n) : ln(e);
}
function Os(e, t, n) {
  const o = e[t];
  return q(o) ? o : new pc(e, t, n);
}
class gc {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new Ko(t, () => {
      this._dirty || (this._dirty = !0, Ns(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = R(this);
    return bs(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
function _c(e, t, n = !1) {
  let o, r;
  const s = A(e);
  s ? (o = e, r = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : re) : (o = e.get, r = e.set);
  const i = new gc(o, r, s || !r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const dt = [];
function Nn(e) {
  dt.push(e);
}
function yn() {
  dt.pop();
}
function N(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  vt();
  const n = dt.length ? dt[dt.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = mc();
  if (o)
    He(
      o,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        r.map(
          ({ vnode: s }) => `at <${oo(n, s.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...Ec(r)), console.warn(...s);
  }
  bt();
}
function mc() {
  let e = dt[dt.length - 1];
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
function Ec(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...vc(n));
  }), t;
}
function vc({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${oo(
    e.component,
    e.type,
    o
  )}`, s = ">" + n;
  return e.props ? [r, ...bc(e.props), s] : [r + s];
}
function bc(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...ws(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function ws(e, t, n) {
  return Z(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : q(t) ? (t = ws(e, R(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : A(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = R(t), n ? t : [`${e}=`, t]);
}
const zo = {
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
function He(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (s) {
    Gn(s, t, n);
  }
  return r;
}
function De(e, t, n, o) {
  if (A(e)) {
    const s = He(e, t, n, o);
    return s && Lo(s) && s.catch((i) => {
      Gn(i, t, n);
    }), s;
  }
  const r = [];
  for (let s = 0; s < e.length; s++)
    r.push(De(e[s], t, n, o));
  return r;
}
function Gn(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy, c = process.env.NODE_ENV !== "production" ? zo[n] : n;
    for (; s; ) {
      const a = s.ec;
      if (a) {
        for (let p = 0; p < a.length; p++)
          if (a[p](e, i, c) === !1)
            return;
      }
      s = s.parent;
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
  Nc(e, n, r, o);
}
function Nc(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = zo[t];
    if (n && Nn(n), N(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && yn(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let en = !1, No = !1;
const le = [];
let $e = 0;
const Pt = [];
let Te = null, qe = 0;
const Ds = /* @__PURE__ */ Promise.resolve();
let qo = null;
const yc = 100;
function yo(e) {
  const t = qo || Ds;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Oc(e) {
  let t = $e + 1, n = le.length;
  for (; t < n; ) {
    const o = t + n >>> 1, r = le[o], s = tn(r);
    s < e || s === e && r.pre ? t = o + 1 : n = o;
  }
  return t;
}
function Xn(e) {
  (!le.length || !le.includes(
    e,
    en && e.allowRecurse ? $e + 1 : $e
  )) && (e.id == null ? le.push(e) : le.splice(Oc(e.id), 0, e), xs());
}
function xs() {
  !en && !No && (No = !0, qo = Ds.then(Cs));
}
function wc(e) {
  const t = le.indexOf(e);
  t > $e && le.splice(t, 1);
}
function Vs(e) {
  T(e) ? Pt.push(...e) : (!Te || !Te.includes(
    e,
    e.allowRecurse ? qe + 1 : qe
  )) && Pt.push(e), xs();
}
function Nr(e, t, n = en ? $e + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < le.length; n++) {
    const o = le[n];
    if (o && o.pre) {
      if (e && o.id !== e.uid || process.env.NODE_ENV !== "production" && Yo(t, o))
        continue;
      le.splice(n, 1), n--, o();
    }
  }
}
function Ss(e) {
  if (Pt.length) {
    const t = [...new Set(Pt)];
    if (Pt.length = 0, Te) {
      Te.push(...t);
      return;
    }
    for (Te = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Te.sort((n, o) => tn(n) - tn(o)), qe = 0; qe < Te.length; qe++)
      process.env.NODE_ENV !== "production" && Yo(e, Te[qe]) || Te[qe]();
    Te = null, qe = 0;
  }
}
const tn = (e) => e.id == null ? 1 / 0 : e.id, Dc = (e, t) => {
  const n = tn(e) - tn(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Cs(e) {
  No = !1, en = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), le.sort(Dc);
  const t = process.env.NODE_ENV !== "production" ? (n) => Yo(e, n) : re;
  try {
    for ($e = 0; $e < le.length; $e++) {
      const n = le[$e];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        He(n, null, 14);
      }
    }
  } finally {
    $e = 0, le.length = 0, Ss(e), en = !1, qo = null, (le.length || Pt.length) && Cs(e);
  }
}
function Yo(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > yc) {
      const o = t.ownerInstance, r = o && si(o.type);
      return N(
        `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let pt = !1;
const Vt = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Pn().__VUE_HMR_RUNTIME__ = {
  createRecord: fo(Is),
  rerender: fo(Sc),
  reload: fo(Cc)
});
const mt = /* @__PURE__ */ new Map();
function xc(e) {
  const t = e.type.__hmrId;
  let n = mt.get(t);
  n || (Is(t, e.type), n = mt.get(t)), n.instances.add(e);
}
function Vc(e) {
  mt.get(e.type.__hmrId).instances.delete(e);
}
function Is(e, t) {
  return mt.has(e) ? !1 : (mt.set(e, {
    initialDef: Jt(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Jt(e) {
  return ii(e) ? e.__vccOpts : e;
}
function Sc(e, t) {
  const n = mt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Jt(o.type).render = t), o.renderCache = [], pt = !0, o.update(), pt = !1;
  }));
}
function Cc(e, t) {
  const n = mt.get(e);
  if (!n)
    return;
  t = Jt(t), yr(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const s = Jt(r.type);
    Vt.has(s) || (s !== n.initialDef && yr(s, t), Vt.add(s)), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (Vt.add(s), r.ceReload(t.styles), Vt.delete(s)) : r.parent ? Xn(r.parent.update) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Vs(() => {
    for (const r of o)
      Vt.delete(
        Jt(r.type)
      );
  });
}
function yr(e, t) {
  X(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function fo(e) {
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
let Ae, Bt = [], Oo = !1;
function un(e, ...t) {
  Ae ? Ae.emit(e, ...t) : Oo || Bt.push({ event: e, args: t });
}
function Ts(e, t) {
  var n, o;
  Ae = e, Ae ? (Ae.enabled = !0, Bt.forEach(({ event: r, args: s }) => Ae.emit(r, ...s)), Bt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    Ts(s, t);
  }), setTimeout(() => {
    Ae || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Oo = !0, Bt = []);
  }, 3e3)) : (Oo = !0, Bt = []);
}
function Ic(e, t) {
  un("app:init", e, t, {
    Fragment: Pe,
    Text: fn,
    Comment: xe,
    Static: Dn
  });
}
function Tc(e) {
  un("app:unmount", e);
}
const Pc = /* @__PURE__ */ Qo(
  "component:added"
  /* COMPONENT_ADDED */
), Ps = /* @__PURE__ */ Qo(
  "component:updated"
  /* COMPONENT_UPDATED */
), $c = /* @__PURE__ */ Qo(
  "component:removed"
  /* COMPONENT_REMOVED */
), Ac = (e) => {
  Ae && typeof Ae.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Ae.cleanupBuffer(e) && $c(e);
};
function Qo(e) {
  return (t) => {
    un(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Rc = /* @__PURE__ */ $s(
  "perf:start"
  /* PERFORMANCE_START */
), jc = /* @__PURE__ */ $s(
  "perf:end"
  /* PERFORMANCE_END */
);
function $s(e) {
  return (t, n, o) => {
    un(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Mc(e, t, n) {
  un(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
function Fc(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || z;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: p,
      propsOptions: [d]
    } = e;
    if (p)
      if (!(t in p))
        (!d || !(ct(t) in d)) && N(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${ct(t)}" prop.`
        );
      else {
        const g = p[t];
        A(g) && (g(...n) || N(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), i = s && t.slice(7);
  if (i && i in o) {
    const p = `${i === "modelValue" ? "model" : i}Modifiers`, { number: d, trim: g } = o[p] || z;
    g && (r = n.map((w) => Z(w) ? w.trim() : w)), d && (r = n.map(Si));
  }
  if (process.env.NODE_ENV !== "production" && Mc(e, t, r), process.env.NODE_ENV !== "production") {
    const p = t.toLowerCase();
    p !== t && o[ct(p)] && N(
      `Event "${p}" is emitted in component ${oo(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${et(t)}" instead of "${t}".`
    );
  }
  let c, u = o[c = ct(t)] || // also try camelCase event handler (#2249)
  o[c = ct($t(t))];
  !u && s && (u = o[c = ct(et(t))]), u && De(
    u,
    e,
    6,
    r
  );
  const a = o[c + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, De(
      a,
      e,
      6,
      r
    );
  }
}
function As(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let i = {}, c = !1;
  if (!A(e)) {
    const u = (a) => {
      const p = As(a, t, !0);
      p && (c = !0, X(i, p));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !s && !c ? (W(e) && o.set(e, null), null) : (T(s) ? s.forEach((u) => i[u] = null) : X(i, s), W(e) && o.set(e, i), i);
}
function Zn(e, t) {
  return !e || !cn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), U(e, t[0].toLowerCase() + t.slice(1)) || U(e, et(t)) || U(e, t));
}
let pe = null, eo = null;
function Mn(e) {
  const t = pe;
  return pe = e, eo = e && e.type.__scopeId || null, t;
}
function Lc(e) {
  eo = e;
}
function Uc() {
  eo = null;
}
function kc(e, t = pe, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && Ar(-1);
    const s = Mn(t);
    let i;
    try {
      i = e(...r);
    } finally {
      Mn(s), o._d && Ar(1);
    }
    return process.env.NODE_ENV !== "production" && Ps(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let wo = !1;
function Fn() {
  wo = !0;
}
function ao(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: r,
    props: s,
    propsOptions: [i],
    slots: c,
    attrs: u,
    emit: a,
    render: p,
    renderCache: d,
    data: g,
    setupState: w,
    ctx: M,
    inheritAttrs: L
  } = e;
  let Y, Q;
  const _e = Mn(e);
  process.env.NODE_ENV !== "production" && (wo = !1);
  try {
    if (n.shapeFlag & 4) {
      const P = r || o, me = process.env.NODE_ENV !== "production" && w.__isScriptSetup ? new Proxy(P, {
        get(I, Ee, G) {
          return N(
            `Property '${String(
              Ee
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(I, Ee, G);
        }
      }) : P;
      Y = ye(
        p.call(
          me,
          P,
          d,
          s,
          w,
          g,
          M
        )
      ), Q = u;
    } else {
      const P = t;
      process.env.NODE_ENV !== "production" && u === s && Fn(), Y = ye(
        P.length > 1 ? P(
          s,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return Fn(), u;
            },
            slots: c,
            emit: a
          } : { attrs: u, slots: c, emit: a }
        ) : P(
          s,
          null
          /* we know it doesn't need it */
        )
      ), Q = t.props ? u : Bc(u);
    }
  } catch (P) {
    Yt.length = 0, Gn(P, e, 1), Y = Be(xe);
  }
  let H = Y, he;
  if (process.env.NODE_ENV !== "production" && Y.patchFlag > 0 && Y.patchFlag & 2048 && ([H, he] = Hc(Y)), Q && L !== !1) {
    const P = Object.keys(Q), { shapeFlag: me } = H;
    if (P.length) {
      if (me & 7)
        i && P.some(In) && (Q = Kc(
          Q,
          i
        )), H = ot(H, Q);
      else if (process.env.NODE_ENV !== "production" && !wo && H.type !== xe) {
        const I = Object.keys(u), Ee = [], G = [];
        for (let V = 0, D = I.length; V < D; V++) {
          const B = I[V];
          cn(B) ? In(B) || Ee.push(B[2].toLowerCase() + B.slice(3)) : G.push(B);
        }
        G.length && N(
          `Extraneous non-props attributes (${G.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), Ee.length && N(
          `Extraneous non-emits event listeners (${Ee.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Or(H) && N(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), H = ot(H), H.dirs = H.dirs ? H.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Or(H) && N(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), H.transition = n.transition), process.env.NODE_ENV !== "production" && he ? he(H) : Y = H, Mn(_e), Y;
}
const Hc = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Rs(t);
  if (!o)
    return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, i = (c) => {
    t[r] = c, n && (s > -1 ? n[s] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [ye(o), i];
};
function Rs(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (tr(o)) {
      if (o.type !== xe || o.children === "v-if") {
        if (t)
          return;
        t = o;
      }
    } else
      return;
  }
  return t;
}
const Bc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || cn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Kc = (e, t) => {
  const n = {};
  for (const o in e)
    (!In(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Or = (e) => e.shapeFlag & 7 || e.type === xe;
function Wc(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: i, children: c, patchFlag: u } = t, a = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (r || c) && pt || t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return o ? wr(o, i, a) : !!i;
    if (u & 8) {
      const p = t.dynamicProps;
      for (let d = 0; d < p.length; d++) {
        const g = p[d];
        if (i[g] !== o[g] && !Zn(a, g))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : o === i ? !1 : o ? i ? wr(o, i, a) : !0 : !!i;
  return !1;
}
function wr(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const s = o[r];
    if (t[s] !== e[s] && !Zn(n, s))
      return !0;
  }
  return !1;
}
function Jc({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const zc = Symbol.for("v-ndc"), qc = (e) => e.__isSuspense;
function Yc(e, t) {
  t && t.pendingBranch ? T(e) ? t.effects.push(...e) : t.effects.push(e) : Vs(e);
}
const mn = {};
function zt(e, t, n) {
  return process.env.NODE_ENV !== "production" && !A(t) && N(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), js(e, t, n);
}
function js(e, t, { immediate: n, deep: o, flush: r, onTrack: s, onTrigger: i } = z) {
  var c;
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && N(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && N(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const u = (P) => {
    N(
      "Invalid watch source: ",
      P,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, a = is() === ((c = te) == null ? void 0 : c.scope) ? te : null;
  let p, d = !1, g = !1;
  if (q(e) ? (p = () => e.value, d = Rn(e)) : we(e) ? (p = () => e, o = !0) : T(e) ? (g = !0, d = e.some((P) => we(P) || Rn(P)), p = () => e.map((P) => {
    if (q(P))
      return P.value;
    if (we(P))
      return Ct(P);
    if (A(P))
      return He(P, a, 2);
    process.env.NODE_ENV !== "production" && u(P);
  })) : A(e) ? t ? p = () => He(e, a, 2) : p = () => {
    if (!(a && a.isUnmounted))
      return w && w(), De(
        e,
        a,
        3,
        [M]
      );
  } : (p = re, process.env.NODE_ENV !== "production" && u(e)), t && o) {
    const P = p;
    p = () => Ct(P());
  }
  let w, M = (P) => {
    w = H.onStop = () => {
      He(P, a, 4), w = H.onStop = void 0;
    };
  }, L;
  if (rn)
    if (M = re, t ? n && De(t, a, 3, [
      p(),
      g ? [] : void 0,
      M
    ]) : p(), r === "sync") {
      const P = nu();
      L = P.__watcherHandles || (P.__watcherHandles = []);
    } else
      return re;
  let Y = g ? new Array(e.length).fill(mn) : mn;
  const Q = () => {
    if (H.active)
      if (t) {
        const P = H.run();
        (o || d || (g ? P.some((me, I) => _t(me, Y[I])) : _t(P, Y))) && (w && w(), De(t, a, 3, [
          P,
          // pass undefined as the old value when it's changed for the first time
          Y === mn ? void 0 : g && Y[0] === mn ? [] : Y,
          M
        ]), Y = P);
      } else
        H.run();
  };
  Q.allowRecurse = !!t;
  let _e;
  r === "sync" ? _e = Q : r === "post" ? _e = () => de(Q, a && a.suspense) : (Q.pre = !0, a && (Q.id = a.uid), _e = () => Xn(Q));
  const H = new Ko(p, _e);
  process.env.NODE_ENV !== "production" && (H.onTrack = s, H.onTrigger = i), t ? n ? Q() : Y = H.run() : r === "post" ? de(
    H.run.bind(H),
    a && a.suspense
  ) : H.run();
  const he = () => {
    H.stop(), a && a.scope && Fo(a.scope.effects, H);
  };
  return L && L.push(he), he;
}
function Qc(e, t, n) {
  const o = this.proxy, r = Z(e) ? e.includes(".") ? Ms(o, e) : () => o[e] : e.bind(o, o);
  let s;
  A(t) ? s = t : (s = t.handler, n = t);
  const i = te;
  At(this);
  const c = js(r, s.bind(o), n);
  return i ? At(i) : gt(), c;
}
function Ms(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function Ct(e, t) {
  if (!W(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), q(e))
    Ct(e.value, t);
  else if (T(e))
    for (let n = 0; n < e.length; n++)
      Ct(e[n], t);
  else if (Zr(e) || ft(e))
    e.forEach((n) => {
      Ct(n, t);
    });
  else if (ts(e))
    for (const n in e)
      Ct(e[n], t);
  return e;
}
function Fs(e) {
  Di(e) && N("Do not use built-in directive ids as custom directive id: " + e);
}
function st(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const c = r[i];
    s && (c.oldValue = s[i].value);
    let u = c.dir[o];
    u && (vt(), De(u, n, 8, [
      e.el,
      c,
      e,
      t
    ]), bt());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ls(e, t) {
  return A(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => X({ name: e.name }, t, { setup: e }))()
  ) : e;
}
const On = (e) => !!e.type.__asyncLoader, Go = (e) => e.type.__isKeepAlive;
function Gc(e, t) {
  Us(e, "a", t);
}
function Xc(e, t) {
  Us(e, "da", t);
}
function Us(e, t, n = te) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (to(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Go(r.parent.vnode) && Zc(o, t, n, r), r = r.parent;
  }
}
function Zc(e, t, n, o) {
  const r = to(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  ks(() => {
    Fo(o[t], r);
  }, n);
}
function to(e, t, n = te, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      vt(), At(n);
      const c = De(t, n, e, i);
      return gt(), bt(), c;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const r = ct(zo[e].replace(/ hook$/, ""));
    N(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Ke = (e) => (t, n = te) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!rn || e === "sp") && to(e, (...o) => t(...o), n)
), el = Ke("bm"), tl = Ke("m"), nl = Ke("bu"), ol = Ke("u"), rl = Ke("bum"), ks = Ke("um"), sl = Ke("sp"), il = Ke(
  "rtg"
), cl = Ke(
  "rtc"
);
function ll(e, t = te) {
  to("ec", e, t);
}
const Do = (e) => e ? ni(e) ? rr(e) || e.proxy : Do(e.parent) : null, ht = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ X(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Ht(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Ht(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Ht(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Ht(e.refs) : e.refs,
    $parent: (e) => Do(e.parent),
    $root: (e) => Do(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Zo(e),
    $forceUpdate: (e) => e.f || (e.f = () => Xn(e.update)),
    $nextTick: (e) => e.n || (e.n = yo.bind(e.proxy)),
    $watch: (e) => Qc.bind(e)
  })
), Xo = (e) => e === "_" || e === "$", po = (e, t) => e !== z && !e.__isScriptSetup && U(e, t), Hs = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: s, accessCache: i, type: c, appContext: u } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let a;
    if (t[0] !== "$") {
      const w = i[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (po(o, t))
          return i[t] = 1, o[t];
        if (r !== z && U(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && U(a, t)
        )
          return i[t] = 3, s[t];
        if (n !== z && U(n, t))
          return i[t] = 4, n[t];
        xo && (i[t] = 0);
      }
    }
    const p = ht[t];
    let d, g;
    if (p)
      return t === "$attrs" ? (se(e, "get", t), process.env.NODE_ENV !== "production" && Fn()) : process.env.NODE_ENV !== "production" && t === "$slots" && se(e, "get", t), p(e);
    if (
      // css module (injected by vue-loader)
      (d = c.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== z && U(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      g = u.config.globalProperties, U(g, t)
    )
      return g[t];
    process.env.NODE_ENV !== "production" && pe && (!Z(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== z && Xo(t[0]) && U(r, t) ? N(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === pe && N(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return po(r, t) ? (r[t] = n, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && U(r, t) ? (N(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== z && U(o, t) ? (o[t] = n, !0) : U(e.props, t) ? (process.env.NODE_ENV !== "production" && N(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && N(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s }
  }, i) {
    let c;
    return !!n[i] || e !== z && U(e, i) || po(t, i) || (c = s[0]) && U(c, i) || U(o, i) || U(ht, i) || U(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : U(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Hs.ownKeys = (e) => (N(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function ul(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(ht).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => ht[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: re
    });
  }), t;
}
function fl(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: re
    });
  });
}
function al(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(R(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Xo(o[0])) {
        N(
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
        set: re
      });
    }
  });
}
function Dr(e) {
  return T(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function dl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? N(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let xo = !0;
function pl(e) {
  const t = Zo(e), n = e.proxy, o = e.ctx;
  xo = !1, t.beforeCreate && xr(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: s,
    methods: i,
    watch: c,
    provide: u,
    inject: a,
    // lifecycle
    created: p,
    beforeMount: d,
    mounted: g,
    beforeUpdate: w,
    updated: M,
    activated: L,
    deactivated: Y,
    beforeDestroy: Q,
    beforeUnmount: _e,
    destroyed: H,
    unmounted: he,
    render: P,
    renderTracked: me,
    renderTriggered: I,
    errorCaptured: Ee,
    serverPrefetch: G,
    // public API
    expose: V,
    inheritAttrs: D,
    // assets
    components: B,
    directives: ne,
    filters: We
  } = t, Ve = process.env.NODE_ENV !== "production" ? dl() : null;
  if (process.env.NODE_ENV !== "production") {
    const [F] = e.propsOptions;
    if (F)
      for (const $ in F)
        Ve("Props", $);
  }
  if (a && hl(a, o, Ve), i)
    for (const F in i) {
      const $ = i[F];
      A($) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, F, {
        value: $.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[F] = $.bind(n), process.env.NODE_ENV !== "production" && Ve("Methods", F)) : process.env.NODE_ENV !== "production" && N(
        `Method "${F}" has type "${typeof $}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    process.env.NODE_ENV !== "production" && !A(r) && N(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const F = r.call(n, n);
    if (process.env.NODE_ENV !== "production" && Lo(F) && N(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !W(F))
      process.env.NODE_ENV !== "production" && N("data() should return an object.");
    else if (e.data = qn(F), process.env.NODE_ENV !== "production")
      for (const $ in F)
        Ve("Data", $), Xo($[0]) || Object.defineProperty(o, $, {
          configurable: !0,
          enumerable: !0,
          get: () => F[$],
          set: re
        });
  }
  if (xo = !0, s)
    for (const F in s) {
      const $ = s[F], Se = A($) ? $.bind(n, n) : A($.get) ? $.get.bind(n, n) : re;
      process.env.NODE_ENV !== "production" && Se === re && N(`Computed property "${F}" has no getter.`);
      const so = !A($) && A($.set) ? $.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        N(
          `Write operation failed: computed property "${F}" is readonly.`
        );
      } : re, jt = sr({
        get: Se,
        set: so
      });
      Object.defineProperty(o, F, {
        enumerable: !0,
        configurable: !0,
        get: () => jt.value,
        set: (Nt) => jt.value = Nt
      }), process.env.NODE_ENV !== "production" && Ve("Computed", F);
    }
  if (c)
    for (const F in c)
      Bs(c[F], o, n, F);
  if (u) {
    const F = A(u) ? u.call(n) : u;
    Reflect.ownKeys(F).forEach(($) => {
      bl($, F[$]);
    });
  }
  p && xr(p, e, "c");
  function ie(F, $) {
    T($) ? $.forEach((Se) => F(Se.bind(n))) : $ && F($.bind(n));
  }
  if (ie(el, d), ie(tl, g), ie(nl, w), ie(ol, M), ie(Gc, L), ie(Xc, Y), ie(ll, Ee), ie(cl, me), ie(il, I), ie(rl, _e), ie(ks, he), ie(sl, G), T(V))
    if (V.length) {
      const F = e.exposed || (e.exposed = {});
      V.forEach(($) => {
        Object.defineProperty(F, $, {
          get: () => n[$],
          set: (Se) => n[$] = Se
        });
      });
    } else
      e.exposed || (e.exposed = {});
  P && e.render === re && (e.render = P), D != null && (e.inheritAttrs = D), B && (e.components = B), ne && (e.directives = ne);
}
function hl(e, t, n = re) {
  T(e) && (e = Vo(e));
  for (const o in e) {
    const r = e[o];
    let s;
    W(r) ? "default" in r ? s = qt(
      r.from || o,
      r.default,
      !0
      /* treat default function as factory */
    ) : s = qt(r.from || o) : s = qt(r), q(s) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (i) => s.value = i
    }) : t[o] = s, process.env.NODE_ENV !== "production" && n("Inject", o);
  }
}
function xr(e, t, n) {
  De(
    T(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Bs(e, t, n, o) {
  const r = o.includes(".") ? Ms(n, o) : () => n[o];
  if (Z(e)) {
    const s = t[e];
    A(s) ? zt(r, s) : process.env.NODE_ENV !== "production" && N(`Invalid watch handler specified by key "${e}"`, s);
  } else if (A(e))
    zt(r, e.bind(n));
  else if (W(e))
    if (T(e))
      e.forEach((s) => Bs(s, t, n, o));
    else {
      const s = A(e.handler) ? e.handler.bind(n) : t[e.handler];
      A(s) ? zt(r, s, e) : process.env.NODE_ENV !== "production" && N(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && N(`Invalid watch option: "${o}"`, e);
}
function Zo(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: r,
    optionsCache: s,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = s.get(t);
  let u;
  return c ? u = c : !r.length && !n && !o ? u = t : (u = {}, r.length && r.forEach(
    (a) => Ln(u, a, i, !0)
  ), Ln(u, t, i)), W(t) && s.set(t, u), u;
}
function Ln(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && Ln(e, s, n, !0), r && r.forEach(
    (i) => Ln(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && N(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = gl[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const gl = {
  data: Vr,
  props: Sr,
  emits: Sr,
  // objects
  methods: Kt,
  computed: Kt,
  // lifecycle
  beforeCreate: fe,
  created: fe,
  beforeMount: fe,
  mounted: fe,
  beforeUpdate: fe,
  updated: fe,
  beforeDestroy: fe,
  beforeUnmount: fe,
  destroyed: fe,
  unmounted: fe,
  activated: fe,
  deactivated: fe,
  errorCaptured: fe,
  serverPrefetch: fe,
  // assets
  components: Kt,
  directives: Kt,
  // watch
  watch: ml,
  // provide / inject
  provide: Vr,
  inject: _l
};
function Vr(e, t) {
  return t ? e ? function() {
    return X(
      A(e) ? e.call(this, this) : e,
      A(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function _l(e, t) {
  return Kt(Vo(e), Vo(t));
}
function Vo(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function fe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Kt(e, t) {
  return e ? X(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Sr(e, t) {
  return e ? T(e) && T(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : X(
    /* @__PURE__ */ Object.create(null),
    Dr(e),
    Dr(t ?? {})
  ) : t;
}
function ml(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = X(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = fe(e[o], t[o]);
  return n;
}
function Ks() {
  return {
    app: null,
    config: {
      isNativeTag: Xr,
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
let El = 0;
function vl(e, t) {
  return function(o, r = null) {
    A(o) || (o = X({}, o)), r != null && !W(r) && (process.env.NODE_ENV !== "production" && N("root props passed to app.mount() must be an object."), r = null);
    const s = Ks();
    process.env.NODE_ENV !== "production" && Object.defineProperty(s.config, "unwrapInjectedRef", {
      get() {
        return !0;
      },
      set() {
        N(
          "app.config.unwrapInjectedRef has been deprecated. 3.3 now always unwraps injected refs in Options API."
        );
      }
    });
    const i = /* @__PURE__ */ new WeakSet();
    let c = !1;
    const u = s.app = {
      _uid: El++,
      _component: o,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: Fr,
      get config() {
        return s.config;
      },
      set config(a) {
        process.env.NODE_ENV !== "production" && N(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(a, ...p) {
        return i.has(a) ? process.env.NODE_ENV !== "production" && N("Plugin has already been applied to target app.") : a && A(a.install) ? (i.add(a), a.install(u, ...p)) : A(a) ? (i.add(a), a(u, ...p)) : process.env.NODE_ENV !== "production" && N(
          'A plugin must either be a function or an object with an "install" function.'
        ), u;
      },
      mixin(a) {
        return s.mixins.includes(a) ? process.env.NODE_ENV !== "production" && N(
          "Mixin has already been applied to target app" + (a.name ? `: ${a.name}` : "")
        ) : s.mixins.push(a), u;
      },
      component(a, p) {
        return process.env.NODE_ENV !== "production" && To(a, s.config), p ? (process.env.NODE_ENV !== "production" && s.components[a] && N(`Component "${a}" has already been registered in target app.`), s.components[a] = p, u) : s.components[a];
      },
      directive(a, p) {
        return process.env.NODE_ENV !== "production" && Fs(a), p ? (process.env.NODE_ENV !== "production" && s.directives[a] && N(`Directive "${a}" has already been registered in target app.`), s.directives[a] = p, u) : s.directives[a];
      },
      mount(a, p, d) {
        if (c)
          process.env.NODE_ENV !== "production" && N(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && a.__vue_app__ && N(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const g = Be(o, r);
          return g.appContext = s, process.env.NODE_ENV !== "production" && (s.reload = () => {
            e(ot(g), a, d);
          }), p && t ? t(g, a) : e(g, a, d), c = !0, u._container = a, a.__vue_app__ = u, process.env.NODE_ENV !== "production" && (u._instance = g.component, Ic(u, Fr)), rr(g.component) || g.component.proxy;
        }
      },
      unmount() {
        c ? (e(null, u._container), process.env.NODE_ENV !== "production" && (u._instance = null, Tc(u)), delete u._container.__vue_app__) : process.env.NODE_ENV !== "production" && N("Cannot unmount an app that is not mounted.");
      },
      provide(a, p) {
        return process.env.NODE_ENV !== "production" && a in s.provides && N(
          `App already provides property with key "${String(a)}". It will be overwritten with the new value.`
        ), s.provides[a] = p, u;
      },
      runWithContext(a) {
        nn = u;
        try {
          return a();
        } finally {
          nn = null;
        }
      }
    };
    return u;
  };
}
let nn = null;
function bl(e, t) {
  if (!te)
    process.env.NODE_ENV !== "production" && N("provide() can only be used inside setup().");
  else {
    let n = te.provides;
    const o = te.parent && te.parent.provides;
    o === n && (n = te.provides = Object.create(o)), n[e] = t;
  }
}
function qt(e, t, n = !1) {
  const o = te || pe;
  if (o || nn) {
    const r = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : nn._context.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && A(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && N(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && N("inject() can only be used inside setup() or functional components.");
}
function Nl() {
  return !!(te || pe || nn);
}
function yl(e, t, n, o = !1) {
  const r = {}, s = {};
  Tn(s, no, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Ws(e, t, r, s);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  process.env.NODE_ENV !== "production" && zs(t || {}, r, e), n ? e.props = o ? r : uc(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function Ol(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function wl(e, t, n, o) {
  const {
    props: r,
    attrs: s,
    vnode: { patchFlag: i }
  } = e, c = R(r), [u] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && Ol(e)) && (o || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const p = e.vnode.dynamicProps;
      for (let d = 0; d < p.length; d++) {
        let g = p[d];
        if (Zn(e.emitsOptions, g))
          continue;
        const w = t[g];
        if (u)
          if (U(s, g))
            w !== s[g] && (s[g] = w, a = !0);
          else {
            const M = $t(g);
            r[M] = So(
              u,
              c,
              M,
              w,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          w !== s[g] && (s[g] = w, a = !0);
      }
    }
  } else {
    Ws(e, t, r, s) && (a = !0);
    let p;
    for (const d in c)
      (!t || // for camelCase
      !U(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = et(d)) === d || !U(t, p))) && (u ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[p] !== void 0) && (r[d] = So(
        u,
        c,
        d,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete r[d]);
    if (s !== c)
      for (const d in s)
        (!t || !U(t, d)) && (delete s[d], a = !0);
  }
  a && Re(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && zs(t || {}, r, e);
}
function Ws(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let u in t) {
      if (vn(u))
        continue;
      const a = t[u];
      let p;
      r && U(r, p = $t(u)) ? !s || !s.includes(p) ? n[p] = a : (c || (c = {}))[p] = a : Zn(e.emitsOptions, u) || (!(u in o) || a !== o[u]) && (o[u] = a, i = !0);
    }
  if (s) {
    const u = R(n), a = c || z;
    for (let p = 0; p < s.length; p++) {
      const d = s[p];
      n[d] = So(
        r,
        u,
        d,
        a[d],
        e,
        !U(a, d)
      );
    }
  }
  return i;
}
function So(e, t, n, o, r, s) {
  const i = e[n];
  if (i != null) {
    const c = U(i, "default");
    if (c && o === void 0) {
      const u = i.default;
      if (i.type !== Function && !i.skipFactory && A(u)) {
        const { propsDefaults: a } = r;
        n in a ? o = a[n] : (At(r), o = a[n] = u.call(
          null,
          t
        ), gt());
      } else
        o = u;
    }
    i[
      0
      /* shouldCast */
    ] && (s && !c ? o = !1 : i[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === et(n)) && (o = !0));
  }
  return o;
}
function Js(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, i = {}, c = [];
  let u = !1;
  if (!A(e)) {
    const p = (d) => {
      u = !0;
      const [g, w] = Js(d, t, !0);
      X(i, g), w && c.push(...w);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!s && !u)
    return W(e) && o.set(e, Tt), Tt;
  if (T(s))
    for (let p = 0; p < s.length; p++) {
      process.env.NODE_ENV !== "production" && !Z(s[p]) && N("props must be strings when using array syntax.", s[p]);
      const d = $t(s[p]);
      Cr(d) && (i[d] = z);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !W(s) && N("invalid props options", s);
    for (const p in s) {
      const d = $t(p);
      if (Cr(d)) {
        const g = s[p], w = i[d] = T(g) || A(g) ? { type: g } : X({}, g);
        if (w) {
          const M = Tr(Boolean, w.type), L = Tr(String, w.type);
          w[
            0
            /* shouldCast */
          ] = M > -1, w[
            1
            /* shouldCastTrue */
          ] = L < 0 || M < L, (M > -1 || U(w, "default")) && c.push(d);
        }
      }
    }
  }
  const a = [i, c];
  return W(e) && o.set(e, a), a;
}
function Cr(e) {
  return e[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && N(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Co(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Ir(e, t) {
  return Co(e) === Co(t);
}
function Tr(e, t) {
  return T(t) ? t.findIndex((n) => Ir(n, e)) : A(t) && Ir(t, e) ? 0 : -1;
}
function zs(e, t, n) {
  const o = R(t), r = n.propsOptions[0];
  for (const s in r) {
    let i = r[s];
    i != null && Dl(
      s,
      o[s],
      i,
      !U(e, s) && !U(e, et(s))
    );
  }
}
function Dl(e, t, n, o) {
  const { type: r, required: s, validator: i, skipCheck: c } = n;
  if (s && o) {
    N('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (r != null && r !== !0 && !c) {
      let u = !1;
      const a = T(r) ? r : [r], p = [];
      for (let d = 0; d < a.length && !u; d++) {
        const { valid: g, expectedType: w } = Vl(t, a[d]);
        p.push(w || ""), u = g;
      }
      if (!u) {
        N(Sl(e, t, p));
        return;
      }
    }
    i && !i(t) && N('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const xl = /* @__PURE__ */ rt(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Vl(e, t) {
  let n;
  const o = Co(t);
  if (xl(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = W(e) : o === "Array" ? n = T(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Sl(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Wn).join(" | ")}`;
  const r = n[0], s = Uo(t), i = Pr(t, r), c = Pr(t, s);
  return n.length === 1 && $r(r) && !Cl(r, s) && (o += ` with value ${i}`), o += `, got ${s} `, $r(s) && (o += `with value ${c}.`), o;
}
function Pr(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function $r(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Cl(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const qs = (e) => e[0] === "_" || e === "$stable", er = (e) => T(e) ? e.map(ye) : [ye(e)], Il = (e, t, n) => {
  if (t._n)
    return t;
  const o = kc((...r) => (process.env.NODE_ENV !== "production" && te && N(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), er(t(...r))), n);
  return o._c = !1, o;
}, Ys = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (qs(r))
      continue;
    const s = e[r];
    if (A(s))
      t[r] = Il(r, s, o);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && N(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const i = er(s);
      t[r] = () => i;
    }
  }
}, Qs = (e, t) => {
  process.env.NODE_ENV !== "production" && !Go(e.vnode) && N(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = er(t);
  e.slots.default = () => n;
}, Tl = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = R(t), Tn(t, "_", n)) : Ys(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && Qs(e, t);
  Tn(e.slots, no, 1);
}, Pl = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, i = z;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? process.env.NODE_ENV !== "production" && pt ? (X(r, t), Re(e, "set", "$slots")) : n && c === 1 ? s = !1 : (X(r, t), !n && c === 1 && delete r._) : (s = !t.$stable, Ys(t, r)), i = t;
  } else
    t && (Qs(e, t), i = { default: 1 });
  if (s)
    for (const c in r)
      !qs(c) && i[c] == null && delete r[c];
};
function Io(e, t, n, o, r = !1) {
  if (T(e)) {
    e.forEach(
      (g, w) => Io(
        g,
        t && (T(t) ? t[w] : t),
        n,
        o,
        r
      )
    );
    return;
  }
  if (On(o) && !r)
    return;
  const s = o.shapeFlag & 4 ? rr(o.component) || o.component.proxy : o.el, i = r ? null : s, { i: c, r: u } = e;
  if (process.env.NODE_ENV !== "production" && !c) {
    N(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const a = t && t.r, p = c.refs === z ? c.refs = {} : c.refs, d = c.setupState;
  if (a != null && a !== u && (Z(a) ? (p[a] = null, U(d, a) && (d[a] = null)) : q(a) && (a.value = null)), A(u))
    He(u, c, 12, [i, p]);
  else {
    const g = Z(u), w = q(u);
    if (g || w) {
      const M = () => {
        if (e.f) {
          const L = g ? U(d, u) ? d[u] : p[u] : u.value;
          r ? T(L) && Fo(L, s) : T(L) ? L.includes(s) || L.push(s) : g ? (p[u] = [s], U(d, u) && (d[u] = p[u])) : (u.value = [s], e.k && (p[e.k] = u.value));
        } else
          g ? (p[u] = i, U(d, u) && (d[u] = i)) : w ? (u.value = i, e.k && (p[e.k] = i)) : process.env.NODE_ENV !== "production" && N("Invalid template ref type:", u, `(${typeof u})`);
      };
      i ? (M.id = -1, de(M, n)) : M();
    } else
      process.env.NODE_ENV !== "production" && N("Invalid template ref type:", u, `(${typeof u})`);
  }
}
let Lt, Qe;
function Le(e, t) {
  e.appContext.config.performance && Un() && Qe.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Rc(e, t, Un() ? Qe.now() : Date.now());
}
function Ue(e, t) {
  if (e.appContext.config.performance && Un()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Qe.mark(o), Qe.measure(
      `<${oo(e, e.type)}> ${t}`,
      n,
      o
    ), Qe.clearMarks(n), Qe.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && jc(e, t, Un() ? Qe.now() : Date.now());
}
function Un() {
  return Lt !== void 0 || (typeof window < "u" && window.performance ? (Lt = !0, Qe = window.performance) : Lt = !1), Lt;
}
function $l() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const de = Yc;
function Al(e) {
  return Rl(e);
}
function Rl(e, t) {
  $l();
  const n = Pn();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Ts(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: r,
    patchProp: s,
    createElement: i,
    createText: c,
    createComment: u,
    setText: a,
    setElementText: p,
    parentNode: d,
    nextSibling: g,
    setScopeId: w = re,
    insertStaticContent: M
  } = e, L = (l, f, h, _ = null, m = null, b = null, O = !1, v = null, y = process.env.NODE_ENV !== "production" && pt ? !1 : !!f.dynamicChildren) => {
    if (l === f)
      return;
    l && !Ut(l, f) && (_ = an(l), Je(l, m, b, !0), l = null), f.patchFlag === -2 && (y = !1, f.dynamicChildren = null);
    const { type: E, ref: S, shapeFlag: x } = f;
    switch (E) {
      case fn:
        Y(l, f, h, _);
        break;
      case xe:
        Q(l, f, h, _);
        break;
      case Dn:
        l == null ? _e(f, h, _, O) : process.env.NODE_ENV !== "production" && H(l, f, h, O);
        break;
      case Pe:
        ne(
          l,
          f,
          h,
          _,
          m,
          b,
          O,
          v,
          y
        );
        break;
      default:
        x & 1 ? me(
          l,
          f,
          h,
          _,
          m,
          b,
          O,
          v,
          y
        ) : x & 6 ? We(
          l,
          f,
          h,
          _,
          m,
          b,
          O,
          v,
          y
        ) : x & 64 || x & 128 ? E.process(
          l,
          f,
          h,
          _,
          m,
          b,
          O,
          v,
          y,
          yt
        ) : process.env.NODE_ENV !== "production" && N("Invalid VNode type:", E, `(${typeof E})`);
    }
    S != null && m && Io(S, l && l.ref, b, f || l, !f);
  }, Y = (l, f, h, _) => {
    if (l == null)
      o(
        f.el = c(f.children),
        h,
        _
      );
    else {
      const m = f.el = l.el;
      f.children !== l.children && a(m, f.children);
    }
  }, Q = (l, f, h, _) => {
    l == null ? o(
      f.el = u(f.children || ""),
      h,
      _
    ) : f.el = l.el;
  }, _e = (l, f, h, _) => {
    [l.el, l.anchor] = M(
      l.children,
      f,
      h,
      _,
      l.el,
      l.anchor
    );
  }, H = (l, f, h, _) => {
    if (f.children !== l.children) {
      const m = g(l.anchor);
      P(l), [f.el, f.anchor] = M(
        f.children,
        h,
        m,
        _
      );
    } else
      f.el = l.el, f.anchor = l.anchor;
  }, he = ({ el: l, anchor: f }, h, _) => {
    let m;
    for (; l && l !== f; )
      m = g(l), o(l, h, _), l = m;
    o(f, h, _);
  }, P = ({ el: l, anchor: f }) => {
    let h;
    for (; l && l !== f; )
      h = g(l), r(l), l = h;
    r(f);
  }, me = (l, f, h, _, m, b, O, v, y) => {
    O = O || f.type === "svg", l == null ? I(
      f,
      h,
      _,
      m,
      b,
      O,
      v,
      y
    ) : V(
      l,
      f,
      m,
      b,
      O,
      v,
      y
    );
  }, I = (l, f, h, _, m, b, O, v) => {
    let y, E;
    const { type: S, props: x, shapeFlag: C, transition: j, dirs: k } = l;
    if (y = l.el = i(
      l.type,
      b,
      x && x.is,
      x
    ), C & 8 ? p(y, l.children) : C & 16 && G(
      l.children,
      y,
      null,
      _,
      m,
      b && S !== "foreignObject",
      O,
      v
    ), k && st(l, null, _, "created"), Ee(y, l, l.scopeId, O, _), x) {
      for (const K in x)
        K !== "value" && !vn(K) && s(
          y,
          K,
          null,
          x[K],
          b,
          l.children,
          _,
          m,
          Me
        );
      "value" in x && s(y, "value", null, x.value), (E = x.onVnodeBeforeMount) && Ie(E, _, l);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty(y, "__vnode", {
      value: l,
      enumerable: !1
    }), Object.defineProperty(y, "__vueParentComponent", {
      value: _,
      enumerable: !1
    })), k && st(l, null, _, "beforeMount");
    const J = jl(m, j);
    J && j.beforeEnter(y), o(y, f, h), ((E = x && x.onVnodeMounted) || J || k) && de(() => {
      E && Ie(E, _, l), J && j.enter(y), k && st(l, null, _, "mounted");
    }, m);
  }, Ee = (l, f, h, _, m) => {
    if (h && w(l, h), _)
      for (let b = 0; b < _.length; b++)
        w(l, _[b]);
    if (m) {
      let b = m.subTree;
      if (process.env.NODE_ENV !== "production" && b.patchFlag > 0 && b.patchFlag & 2048 && (b = Rs(b.children) || b), f === b) {
        const O = m.vnode;
        Ee(
          l,
          O,
          O.scopeId,
          O.slotScopeIds,
          m.parent
        );
      }
    }
  }, G = (l, f, h, _, m, b, O, v, y = 0) => {
    for (let E = y; E < l.length; E++) {
      const S = l[E] = v ? Ye(l[E]) : ye(l[E]);
      L(
        null,
        S,
        f,
        h,
        _,
        m,
        b,
        O,
        v
      );
    }
  }, V = (l, f, h, _, m, b, O) => {
    const v = f.el = l.el;
    let { patchFlag: y, dynamicChildren: E, dirs: S } = f;
    y |= l.patchFlag & 16;
    const x = l.props || z, C = f.props || z;
    let j;
    h && it(h, !1), (j = C.onVnodeBeforeUpdate) && Ie(j, h, f, l), S && st(f, l, h, "beforeUpdate"), h && it(h, !0), process.env.NODE_ENV !== "production" && pt && (y = 0, O = !1, E = null);
    const k = m && f.type !== "foreignObject";
    if (E ? (D(
      l.dynamicChildren,
      E,
      v,
      h,
      _,
      k,
      b
    ), process.env.NODE_ENV !== "production" && wn(l, f)) : O || Se(
      l,
      f,
      v,
      null,
      h,
      _,
      k,
      b,
      !1
    ), y > 0) {
      if (y & 16)
        B(
          v,
          f,
          x,
          C,
          h,
          _,
          m
        );
      else if (y & 2 && x.class !== C.class && s(v, "class", null, C.class, m), y & 4 && s(v, "style", x.style, C.style, m), y & 8) {
        const J = f.dynamicProps;
        for (let K = 0; K < J.length; K++) {
          const ee = J[K], be = x[ee], Ot = C[ee];
          (Ot !== be || ee === "value") && s(
            v,
            ee,
            be,
            Ot,
            m,
            l.children,
            h,
            _,
            Me
          );
        }
      }
      y & 1 && l.children !== f.children && p(v, f.children);
    } else
      !O && E == null && B(
        v,
        f,
        x,
        C,
        h,
        _,
        m
      );
    ((j = C.onVnodeUpdated) || S) && de(() => {
      j && Ie(j, h, f, l), S && st(f, l, h, "updated");
    }, _);
  }, D = (l, f, h, _, m, b, O) => {
    for (let v = 0; v < f.length; v++) {
      const y = l[v], E = f[v], S = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (y.type === Pe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ut(y, E) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 70) ? d(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      L(
        y,
        E,
        S,
        null,
        _,
        m,
        b,
        O,
        !0
      );
    }
  }, B = (l, f, h, _, m, b, O) => {
    if (h !== _) {
      if (h !== z)
        for (const v in h)
          !vn(v) && !(v in _) && s(
            l,
            v,
            h[v],
            null,
            O,
            f.children,
            m,
            b,
            Me
          );
      for (const v in _) {
        if (vn(v))
          continue;
        const y = _[v], E = h[v];
        y !== E && v !== "value" && s(
          l,
          v,
          E,
          y,
          O,
          f.children,
          m,
          b,
          Me
        );
      }
      "value" in _ && s(l, "value", h.value, _.value);
    }
  }, ne = (l, f, h, _, m, b, O, v, y) => {
    const E = f.el = l ? l.el : c(""), S = f.anchor = l ? l.anchor : c("");
    let { patchFlag: x, dynamicChildren: C, slotScopeIds: j } = f;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (pt || x & 2048) && (x = 0, y = !1, C = null), j && (v = v ? v.concat(j) : j), l == null ? (o(E, h, _), o(S, h, _), G(
      f.children,
      h,
      S,
      m,
      b,
      O,
      v,
      y
    )) : x > 0 && x & 64 && C && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (D(
      l.dynamicChildren,
      C,
      h,
      m,
      b,
      O,
      v
    ), process.env.NODE_ENV !== "production" ? wn(l, f) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (f.key != null || m && f === m.subTree) && wn(
        l,
        f,
        !0
        /* shallow */
      )
    )) : Se(
      l,
      f,
      h,
      S,
      m,
      b,
      O,
      v,
      y
    );
  }, We = (l, f, h, _, m, b, O, v, y) => {
    f.slotScopeIds = v, l == null ? f.shapeFlag & 512 ? m.ctx.activate(
      f,
      h,
      _,
      O,
      y
    ) : Ve(
      f,
      h,
      _,
      m,
      b,
      O,
      y
    ) : ie(l, f, y);
  }, Ve = (l, f, h, _, m, b, O) => {
    const v = l.component = Jl(
      l,
      _,
      m
    );
    if (process.env.NODE_ENV !== "production" && v.type.__hmrId && xc(v), process.env.NODE_ENV !== "production" && (Nn(l), Le(v, "mount")), Go(l) && (v.ctx.renderer = yt), process.env.NODE_ENV !== "production" && Le(v, "init"), Yl(v), process.env.NODE_ENV !== "production" && Ue(v, "init"), v.asyncDep) {
      if (m && m.registerDep(v, F), !l.el) {
        const y = v.subTree = Be(xe);
        Q(null, y, f, h);
      }
      return;
    }
    F(
      v,
      l,
      f,
      h,
      m,
      b,
      O
    ), process.env.NODE_ENV !== "production" && (yn(), Ue(v, "mount"));
  }, ie = (l, f, h) => {
    const _ = f.component = l.component;
    if (Wc(l, f, h))
      if (_.asyncDep && !_.asyncResolved) {
        process.env.NODE_ENV !== "production" && Nn(f), $(_, f, h), process.env.NODE_ENV !== "production" && yn();
        return;
      } else
        _.next = f, wc(_.update), _.update();
    else
      f.el = l.el, _.vnode = f;
  }, F = (l, f, h, _, m, b, O) => {
    const v = () => {
      if (l.isMounted) {
        let { next: S, bu: x, u: C, parent: j, vnode: k } = l, J = S, K;
        process.env.NODE_ENV !== "production" && Nn(S || l.vnode), it(l, !1), S ? (S.el = k.el, $(l, S, O)) : S = k, x && Ft(x), (K = S.props && S.props.onVnodeBeforeUpdate) && Ie(K, j, S, k), it(l, !0), process.env.NODE_ENV !== "production" && Le(l, "render");
        const ee = ao(l);
        process.env.NODE_ENV !== "production" && Ue(l, "render");
        const be = l.subTree;
        l.subTree = ee, process.env.NODE_ENV !== "production" && Le(l, "patch"), L(
          be,
          ee,
          // parent may have changed if it's in a teleport
          d(be.el),
          // anchor may have changed if it's in a fragment
          an(be),
          l,
          m,
          b
        ), process.env.NODE_ENV !== "production" && Ue(l, "patch"), S.el = ee.el, J === null && Jc(l, ee.el), C && de(C, m), (K = S.props && S.props.onVnodeUpdated) && de(
          () => Ie(K, j, S, k),
          m
        ), process.env.NODE_ENV !== "production" && Ps(l), process.env.NODE_ENV !== "production" && yn();
      } else {
        let S;
        const { el: x, props: C } = f, { bm: j, m: k, parent: J } = l, K = On(f);
        if (it(l, !1), j && Ft(j), !K && (S = C && C.onVnodeBeforeMount) && Ie(S, J, f), it(l, !0), x && lo) {
          const ee = () => {
            process.env.NODE_ENV !== "production" && Le(l, "render"), l.subTree = ao(l), process.env.NODE_ENV !== "production" && Ue(l, "render"), process.env.NODE_ENV !== "production" && Le(l, "hydrate"), lo(
              x,
              l.subTree,
              l,
              m,
              null
            ), process.env.NODE_ENV !== "production" && Ue(l, "hydrate");
          };
          K ? f.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !l.isUnmounted && ee()
          ) : ee();
        } else {
          process.env.NODE_ENV !== "production" && Le(l, "render");
          const ee = l.subTree = ao(l);
          process.env.NODE_ENV !== "production" && Ue(l, "render"), process.env.NODE_ENV !== "production" && Le(l, "patch"), L(
            null,
            ee,
            h,
            _,
            l,
            m,
            b
          ), process.env.NODE_ENV !== "production" && Ue(l, "patch"), f.el = ee.el;
        }
        if (k && de(k, m), !K && (S = C && C.onVnodeMounted)) {
          const ee = f;
          de(
            () => Ie(S, J, ee),
            m
          );
        }
        (f.shapeFlag & 256 || J && On(J.vnode) && J.vnode.shapeFlag & 256) && l.a && de(l.a, m), l.isMounted = !0, process.env.NODE_ENV !== "production" && Pc(l), f = h = _ = null;
      }
    }, y = l.effect = new Ko(
      v,
      () => Xn(E),
      l.scope
      // track it in component's effect scope
    ), E = l.update = () => y.run();
    E.id = l.uid, it(l, !0), process.env.NODE_ENV !== "production" && (y.onTrack = l.rtc ? (S) => Ft(l.rtc, S) : void 0, y.onTrigger = l.rtg ? (S) => Ft(l.rtg, S) : void 0, E.ownerInstance = l), E();
  }, $ = (l, f, h) => {
    f.component = l;
    const _ = l.vnode.props;
    l.vnode = f, l.next = null, wl(l, f.props, _, h), Pl(l, f.children, h), vt(), Nr(l), bt();
  }, Se = (l, f, h, _, m, b, O, v, y = !1) => {
    const E = l && l.children, S = l ? l.shapeFlag : 0, x = f.children, { patchFlag: C, shapeFlag: j } = f;
    if (C > 0) {
      if (C & 128) {
        jt(
          E,
          x,
          h,
          _,
          m,
          b,
          O,
          v,
          y
        );
        return;
      } else if (C & 256) {
        so(
          E,
          x,
          h,
          _,
          m,
          b,
          O,
          v,
          y
        );
        return;
      }
    }
    j & 8 ? (S & 16 && Me(E, m, b), x !== E && p(h, x)) : S & 16 ? j & 16 ? jt(
      E,
      x,
      h,
      _,
      m,
      b,
      O,
      v,
      y
    ) : Me(E, m, b, !0) : (S & 8 && p(h, ""), j & 16 && G(
      x,
      h,
      _,
      m,
      b,
      O,
      v,
      y
    ));
  }, so = (l, f, h, _, m, b, O, v, y) => {
    l = l || Tt, f = f || Tt;
    const E = l.length, S = f.length, x = Math.min(E, S);
    let C;
    for (C = 0; C < x; C++) {
      const j = f[C] = y ? Ye(f[C]) : ye(f[C]);
      L(
        l[C],
        j,
        h,
        null,
        m,
        b,
        O,
        v,
        y
      );
    }
    E > S ? Me(
      l,
      m,
      b,
      !0,
      !1,
      x
    ) : G(
      f,
      h,
      _,
      m,
      b,
      O,
      v,
      y,
      x
    );
  }, jt = (l, f, h, _, m, b, O, v, y) => {
    let E = 0;
    const S = f.length;
    let x = l.length - 1, C = S - 1;
    for (; E <= x && E <= C; ) {
      const j = l[E], k = f[E] = y ? Ye(f[E]) : ye(f[E]);
      if (Ut(j, k))
        L(
          j,
          k,
          h,
          null,
          m,
          b,
          O,
          v,
          y
        );
      else
        break;
      E++;
    }
    for (; E <= x && E <= C; ) {
      const j = l[x], k = f[C] = y ? Ye(f[C]) : ye(f[C]);
      if (Ut(j, k))
        L(
          j,
          k,
          h,
          null,
          m,
          b,
          O,
          v,
          y
        );
      else
        break;
      x--, C--;
    }
    if (E > x) {
      if (E <= C) {
        const j = C + 1, k = j < S ? f[j].el : _;
        for (; E <= C; )
          L(
            null,
            f[E] = y ? Ye(f[E]) : ye(f[E]),
            h,
            k,
            m,
            b,
            O,
            v,
            y
          ), E++;
      }
    } else if (E > C)
      for (; E <= x; )
        Je(l[E], m, b, !0), E++;
    else {
      const j = E, k = E, J = /* @__PURE__ */ new Map();
      for (E = k; E <= C; E++) {
        const ue = f[E] = y ? Ye(f[E]) : ye(f[E]);
        ue.key != null && (process.env.NODE_ENV !== "production" && J.has(ue.key) && N(
          "Duplicate keys found during update:",
          JSON.stringify(ue.key),
          "Make sure keys are unique."
        ), J.set(ue.key, E));
      }
      let K, ee = 0;
      const be = C - k + 1;
      let Ot = !1, ur = 0;
      const Mt = new Array(be);
      for (E = 0; E < be; E++)
        Mt[E] = 0;
      for (E = j; E <= x; E++) {
        const ue = l[E];
        if (ee >= be) {
          Je(ue, m, b, !0);
          continue;
        }
        let Ce;
        if (ue.key != null)
          Ce = J.get(ue.key);
        else
          for (K = k; K <= C; K++)
            if (Mt[K - k] === 0 && Ut(ue, f[K])) {
              Ce = K;
              break;
            }
        Ce === void 0 ? Je(ue, m, b, !0) : (Mt[Ce - k] = E + 1, Ce >= ur ? ur = Ce : Ot = !0, L(
          ue,
          f[Ce],
          h,
          null,
          m,
          b,
          O,
          v,
          y
        ), ee++);
      }
      const fr = Ot ? Ml(Mt) : Tt;
      for (K = fr.length - 1, E = be - 1; E >= 0; E--) {
        const ue = k + E, Ce = f[ue], ar = ue + 1 < S ? f[ue + 1].el : _;
        Mt[E] === 0 ? L(
          null,
          Ce,
          h,
          ar,
          m,
          b,
          O,
          v,
          y
        ) : Ot && (K < 0 || E !== fr[K] ? Nt(Ce, h, ar, 2) : K--);
      }
    }
  }, Nt = (l, f, h, _, m = null) => {
    const { el: b, type: O, transition: v, children: y, shapeFlag: E } = l;
    if (E & 6) {
      Nt(l.component.subTree, f, h, _);
      return;
    }
    if (E & 128) {
      l.suspense.move(f, h, _);
      return;
    }
    if (E & 64) {
      O.move(l, f, h, yt);
      return;
    }
    if (O === Pe) {
      o(b, f, h);
      for (let x = 0; x < y.length; x++)
        Nt(y[x], f, h, _);
      o(l.anchor, f, h);
      return;
    }
    if (O === Dn) {
      he(l, f, h);
      return;
    }
    if (_ !== 2 && E & 1 && v)
      if (_ === 0)
        v.beforeEnter(b), o(b, f, h), de(() => v.enter(b), m);
      else {
        const { leave: x, delayLeave: C, afterLeave: j } = v, k = () => o(b, f, h), J = () => {
          x(b, () => {
            k(), j && j();
          });
        };
        C ? C(b, k, J) : J();
      }
    else
      o(b, f, h);
  }, Je = (l, f, h, _ = !1, m = !1) => {
    const {
      type: b,
      props: O,
      ref: v,
      children: y,
      dynamicChildren: E,
      shapeFlag: S,
      patchFlag: x,
      dirs: C
    } = l;
    if (v != null && Io(v, null, h, l, !0), S & 256) {
      f.ctx.deactivate(l);
      return;
    }
    const j = S & 1 && C, k = !On(l);
    let J;
    if (k && (J = O && O.onVnodeBeforeUnmount) && Ie(J, f, l), S & 6)
      Oi(l.component, h, _);
    else {
      if (S & 128) {
        l.suspense.unmount(h, _);
        return;
      }
      j && st(l, null, f, "beforeUnmount"), S & 64 ? l.type.remove(
        l,
        f,
        h,
        m,
        yt,
        _
      ) : E && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== Pe || x > 0 && x & 64) ? Me(
        E,
        f,
        h,
        !1,
        !0
      ) : (b === Pe && x & 384 || !m && S & 16) && Me(y, f, h), _ && io(l);
    }
    (k && (J = O && O.onVnodeUnmounted) || j) && de(() => {
      J && Ie(J, f, l), j && st(l, null, f, "unmounted");
    }, h);
  }, io = (l) => {
    const { type: f, el: h, anchor: _, transition: m } = l;
    if (f === Pe) {
      process.env.NODE_ENV !== "production" && l.patchFlag > 0 && l.patchFlag & 2048 && m && !m.persisted ? l.children.forEach((O) => {
        O.type === xe ? r(O.el) : io(O);
      }) : yi(h, _);
      return;
    }
    if (f === Dn) {
      P(l);
      return;
    }
    const b = () => {
      r(h), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (l.shapeFlag & 1 && m && !m.persisted) {
      const { leave: O, delayLeave: v } = m, y = () => O(h, b);
      v ? v(l.el, b, y) : y();
    } else
      b();
  }, yi = (l, f) => {
    let h;
    for (; l !== f; )
      h = g(l), r(l), l = h;
    r(f);
  }, Oi = (l, f, h) => {
    process.env.NODE_ENV !== "production" && l.type.__hmrId && Vc(l);
    const { bum: _, scope: m, update: b, subTree: O, um: v } = l;
    _ && Ft(_), m.stop(), b && (b.active = !1, Je(O, l, f, h)), v && de(v, f), de(() => {
      l.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve()), process.env.NODE_ENV !== "production" && Ac(l);
  }, Me = (l, f, h, _ = !1, m = !1, b = 0) => {
    for (let O = b; O < l.length; O++)
      Je(l[O], f, h, _, m);
  }, an = (l) => l.shapeFlag & 6 ? an(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : g(l.anchor || l.el), lr = (l, f, h) => {
    l == null ? f._vnode && Je(f._vnode, null, null, !0) : L(f._vnode || null, l, f, null, null, null, h), Nr(), Ss(), f._vnode = l;
  }, yt = {
    p: L,
    um: Je,
    m: Nt,
    r: io,
    mt: Ve,
    mc: G,
    pc: Se,
    pbc: D,
    n: an,
    o: e
  };
  let co, lo;
  return t && ([co, lo] = t(
    yt
  )), {
    render: lr,
    hydrate: co,
    createApp: vl(lr, co)
  };
}
function it({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function jl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function wn(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (T(o) && T(r))
    for (let s = 0; s < o.length; s++) {
      const i = o[s];
      let c = r[s];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[s] = Ye(r[s]), c.el = i.el), n || wn(i, c)), c.type === fn && (c.el = i.el), process.env.NODE_ENV !== "production" && c.type === xe && !c.el && (c.el = i.el);
    }
}
function Ml(e) {
  const t = e.slice(), n = [0];
  let o, r, s, i, c;
  const u = e.length;
  for (o = 0; o < u; o++) {
    const a = e[o];
    if (a !== 0) {
      if (r = n[n.length - 1], e[r] < a) {
        t[o] = r, n.push(o);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        c = s + i >> 1, e[n[c]] < a ? s = c + 1 : i = c;
      a < e[n[s]] && (s > 0 && (t[o] = n[s - 1]), n[s] = o);
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; )
    n[s] = i, i = t[i];
  return n;
}
const Fl = (e) => e.__isTeleport, Pe = Symbol.for("v-fgt"), fn = Symbol.for("v-txt"), xe = Symbol.for("v-cmt"), Dn = Symbol.for("v-stc"), Yt = [];
let Oe = null;
function Qt(e = !1) {
  Yt.push(Oe = e ? null : []);
}
function Ll() {
  Yt.pop(), Oe = Yt[Yt.length - 1] || null;
}
let on = 1;
function Ar(e) {
  on += e;
}
function Gs(e) {
  return e.dynamicChildren = on > 0 ? Oe || Tt : null, Ll(), on > 0 && Oe && Oe.push(e), e;
}
function kn(e, t, n, o, r, s) {
  return Gs(
    Ge(
      e,
      t,
      n,
      o,
      r,
      s,
      !0
      /* isBlock */
    )
  );
}
function Ul(e, t, n, o, r) {
  return Gs(
    Be(
      e,
      t,
      n,
      o,
      r,
      !0
      /* isBlock: prevent a block from tracking itself */
    )
  );
}
function tr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ut(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && Vt.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const kl = (...e) => Zs(
  ...e
), no = "__vInternal", Xs = ({ key: e }) => e ?? null, xn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Z(e) || q(e) || A(e) ? { i: pe, r: e, k: t, f: !!n } : e : null);
function Ge(e, t = null, n = null, o = 0, r = null, s = e === Pe ? 0 : 1, i = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Xs(t),
    ref: t && xn(t),
    scopeId: eo,
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
    shapeFlag: s,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: pe
  };
  return c ? (nr(u, n), s & 128 && e.normalize(u)) : n && (u.shapeFlag |= Z(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && N("VNode created with invalid key (NaN). VNode type:", u.type), on > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Oe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && Oe.push(u), u;
}
const Be = process.env.NODE_ENV !== "production" ? kl : Zs;
function Zs(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === zc) && (process.env.NODE_ENV !== "production" && !e && N(`Invalid vnode type when creating vnode: ${e}.`), e = xe), tr(e)) {
    const c = ot(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && nr(c, n), on > 0 && !s && Oe && (c.shapeFlag & 6 ? Oe[Oe.indexOf(e)] = c : Oe.push(c)), c.patchFlag |= -2, c;
  }
  if (ii(e) && (e = e.__vccOpts), t) {
    t = Hl(t);
    let { class: c, style: u } = t;
    c && !Z(c) && (t.class = Bo(c)), W(u) && (jn(u) && !T(u) && (u = X({}, u)), t.style = Ho(u));
  }
  const i = Z(e) ? 1 : qc(e) ? 128 : Fl(e) ? 64 : W(e) ? 4 : A(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && jn(e) && (e = R(e), N(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Ge(
    e,
    t,
    n,
    o,
    r,
    i,
    s,
    !0
  );
}
function Hl(e) {
  return e ? jn(e) || no in e ? X({}, e) : e : null;
}
function ot(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: i } = e, c = t ? Bl(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Xs(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? T(r) ? r.concat(xn(t)) : [r, xn(t)] : xn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && T(i) ? i.map(ei) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Pe ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && ot(e.ssContent),
    ssFallback: e.ssFallback && ot(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function ei(e) {
  const t = ot(e);
  return T(e.children) && (t.children = e.children.map(ei)), t;
}
function ti(e = " ", t = 0) {
  return Be(fn, null, e, t);
}
function ye(e) {
  return e == null || typeof e == "boolean" ? Be(xe) : T(e) ? Be(
    Pe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Ye(e) : Be(fn, null, String(e));
}
function Ye(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ot(e);
}
function nr(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (T(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), nr(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(no in t) ? t._ctx = pe : r === 3 && pe && (pe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    A(t) ? (t = { default: t, _ctx: pe }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [ti(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Bl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = Bo([t.class, o.class]));
      else if (r === "style")
        t.style = Ho([t.style, o.style]);
      else if (cn(r)) {
        const s = t[r], i = o[r];
        i && s !== i && !(T(s) && s.includes(i)) && (t[r] = s ? [].concat(s, i) : i);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
function Ie(e, t, n, o = null) {
  De(e, t, 7, [
    n,
    o
  ]);
}
const Kl = Ks();
let Wl = 0;
function Jl(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || Kl, s = {
    uid: Wl++,
    vnode: e,
    type: o,
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
    scope: new rs(
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
    propsOptions: Js(o, r),
    emitsOptions: As(o, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: z,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
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
  return process.env.NODE_ENV !== "production" ? s.ctx = ul(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Fc.bind(null, s), e.ce && e.ce(s), s;
}
let te = null;
const zl = () => te || pe;
let or, wt, Rr = "__VUE_INSTANCE_SETTERS__";
(wt = Pn()[Rr]) || (wt = Pn()[Rr] = []), wt.push((e) => te = e), or = (e) => {
  wt.length > 1 ? wt.forEach((t) => t(e)) : wt[0](e);
};
const At = (e) => {
  or(e), e.scope.on();
}, gt = () => {
  te && te.scope.off(), or(null);
}, ql = /* @__PURE__ */ rt("slot,component");
function To(e, t) {
  const n = t.isNativeTag || Xr;
  (ql(e) || n(e)) && N(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function ni(e) {
  return e.vnode.shapeFlag & 4;
}
let rn = !1;
function Yl(e, t = !1) {
  rn = t;
  const { props: n, children: o } = e.vnode, r = ni(e);
  yl(e, n, r, t), Tl(e, o);
  const s = r ? Ql(e, t) : void 0;
  return rn = !1, s;
}
function Ql(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && To(o.name, e.appContext.config), o.components) {
      const s = Object.keys(o.components);
      for (let i = 0; i < s.length; i++)
        To(s[i], e.appContext.config);
    }
    if (o.directives) {
      const s = Object.keys(o.directives);
      for (let i = 0; i < s.length; i++)
        Fs(s[i]);
    }
    o.compilerOptions && oi() && N(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = ke(new Proxy(e.ctx, Hs)), process.env.NODE_ENV !== "production" && fl(e);
  const { setup: r } = o;
  if (r) {
    const s = e.setupContext = r.length > 1 ? Xl(e) : null;
    At(e), vt();
    const i = He(
      r,
      e,
      0,
      [process.env.NODE_ENV !== "production" ? Ht(e.props) : e.props, s]
    );
    if (bt(), gt(), Lo(i)) {
      if (i.then(gt, gt), t)
        return i.then((c) => {
          jr(e, c, t);
        }).catch((c) => {
          Gn(c, e, 0);
        });
      if (e.asyncDep = i, process.env.NODE_ENV !== "production" && !e.suspense) {
        const c = (n = o.name) != null ? n : "Anonymous";
        N(
          `Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      jr(e, i, t);
  } else
    ri(e, t);
}
function jr(e, t, n) {
  A(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : W(t) ? (process.env.NODE_ENV !== "production" && tr(t) && N(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = ys(t), process.env.NODE_ENV !== "production" && al(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && N(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), ri(e, n);
}
let Po;
const oi = () => !Po;
function ri(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && Po && !o.render) {
      const r = o.template || Zo(e).template;
      if (r) {
        process.env.NODE_ENV !== "production" && Le(e, "compile");
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config, { delimiters: c, compilerOptions: u } = o, a = X(
          X(
            {
              isCustomElement: s,
              delimiters: c
            },
            i
          ),
          u
        );
        o.render = Po(r, a), process.env.NODE_ENV !== "production" && Ue(e, "compile");
      }
    }
    e.render = o.render || re;
  }
  {
    At(e), vt();
    try {
      pl(e);
    } finally {
      bt(), gt();
    }
  }
  process.env.NODE_ENV !== "production" && !o.render && e.render === re && !t && (o.template ? N(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : N("Component is missing template or render function."));
}
function Mr(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    process.env.NODE_ENV !== "production" ? {
      get(t, n) {
        return Fn(), se(e, "get", "$attrs"), t[n];
      },
      set() {
        return N("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return N("setupContext.attrs is readonly."), !1;
      }
    } : {
      get(t, n) {
        return se(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function Gl(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return se(e, "get", "$slots"), t[n];
    }
  }));
}
function Xl(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && N("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (T(n) ? o = "array" : q(n) && (o = "ref")), o !== "object" && N(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return Mr(e);
    },
    get slots() {
      return Gl(e);
    },
    get emit() {
      return (n, ...o) => e.emit(n, ...o);
    },
    expose: t
  }) : {
    get attrs() {
      return Mr(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function rr(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(ys(ke(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in ht)
          return ht[n](e);
      },
      has(t, n) {
        return n in t || n in ht;
      }
    }));
}
const Zl = /(?:^|[-_])(\w)/g, eu = (e) => e.replace(Zl, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function si(e, t = !0) {
  return A(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function oo(e, t, n = !1) {
  let o = si(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (s) => {
      for (const i in s)
        if (s[i] === t)
          return i;
    };
    o = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return o ? eu(o) : n ? "App" : "Anonymous";
}
function ii(e) {
  return A(e) && "__vccOpts" in e;
}
const sr = (e, t) => _c(e, t, rn), tu = Symbol.for("v-scx"), nu = () => {
  {
    const e = qt(tu);
    return e || process.env.NODE_ENV !== "production" && N(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function ho(e) {
  return !!(e && e.__v_isShallow);
}
function ou() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, r = {
    header(d) {
      return W(d) ? d.__isVue ? ["div", e, "VueInstance"] : q(d) ? [
        "div",
        {},
        ["span", e, p(d)],
        "<",
        c(d.value),
        ">"
      ] : we(d) ? [
        "div",
        {},
        ["span", e, ho(d) ? "ShallowReactive" : "Reactive"],
        "<",
        c(d),
        `>${nt(d) ? " (readonly)" : ""}`
      ] : nt(d) ? [
        "div",
        {},
        ["span", e, ho(d) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(d),
        ">"
      ] : null : null;
    },
    hasBody(d) {
      return d && d.__isVue;
    },
    body(d) {
      if (d && d.__isVue)
        return [
          "div",
          {},
          ...s(d.$)
        ];
    }
  };
  function s(d) {
    const g = [];
    d.type.props && d.props && g.push(i("props", R(d.props))), d.setupState !== z && g.push(i("setup", d.setupState)), d.data !== z && g.push(i("data", R(d.data)));
    const w = u(d, "computed");
    w && g.push(i("computed", w));
    const M = u(d, "inject");
    return M && g.push(i("injected", M)), g.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: d }]
    ]), g;
  }
  function i(d, g) {
    return g = X({}, g), Object.keys(g).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        d
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(g).map((w) => [
          "div",
          {},
          ["span", o, w + ": "],
          c(g[w], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(d, g = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", o, d] : W(d) ? ["object", { object: g ? R(d) : d }] : ["span", n, String(d)];
  }
  function u(d, g) {
    const w = d.type;
    if (A(w))
      return;
    const M = {};
    for (const L in d.ctx)
      a(w, L, g) && (M[L] = d.ctx[L]);
    return M;
  }
  function a(d, g, w) {
    const M = d[w];
    if (T(M) && M.includes(g) || W(M) && g in M || d.extends && a(d.extends, g, w) || d.mixins && d.mixins.some((L) => a(L, g, w)))
      return !0;
  }
  function p(d) {
    return ho(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const Fr = "3.3.11", ru = "http://www.w3.org/2000/svg", ut = typeof document < "u" ? document : null, Lr = ut && /* @__PURE__ */ ut.createElement("template"), su = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t ? ut.createElementNS(ru, e) : ut.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => ut.createTextNode(e),
  createComment: (e) => ut.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ut.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, r, s) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === s || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === s || !(r = r.nextSibling)); )
        ;
    else {
      Lr.innerHTML = o ? `<svg>${e}</svg>` : e;
      const c = Lr.content;
      if (o) {
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
}, iu = Symbol("_vtc");
function cu(e, t, n) {
  const o = e[iu];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const lu = Symbol("_vod");
function uu(e, t, n) {
  const o = e.style, r = Z(n);
  if (n && !r) {
    if (t && !Z(t))
      for (const s in t)
        n[s] == null && $o(o, s, "");
    for (const s in n)
      $o(o, s, n[s]);
  } else {
    const s = o.display;
    r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), lu in e && (o.display = s);
  }
}
const fu = /[^\\];\s*$/, Ur = /\s*!important$/;
function $o(e, t, n) {
  if (T(n))
    n.forEach((o) => $o(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && fu.test(n) && N(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = au(e, t);
    Ur.test(n) ? e.setProperty(
      et(o),
      n.replace(Ur, ""),
      "important"
    ) : e[o] = n;
  }
}
const kr = ["Webkit", "Moz", "ms"], go = {};
function au(e, t) {
  const n = go[t];
  if (n)
    return n;
  let o = $t(t);
  if (o !== "filter" && o in e)
    return go[t] = o;
  o = Wn(o);
  for (let r = 0; r < kr.length; r++) {
    const s = kr[r] + o;
    if (s in e)
      return go[t] = s;
  }
  return t;
}
const Hr = "http://www.w3.org/1999/xlink";
function du(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Hr, t.slice(6, t.length)) : e.setAttributeNS(Hr, t, n);
  else {
    const s = Fi(t);
    n == null || s && !ns(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n);
  }
}
function pu(e, t, n, o, r, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    o && i(o, r, s), e[t] = n ?? "";
    return;
  }
  const c = e.tagName;
  if (t === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    e._value = n;
    const a = c === "OPTION" ? e.getAttribute("value") : e.value, p = n ?? "";
    a !== p && (e.value = p), n == null && e.removeAttribute(t);
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = ns(n) : n == null && a === "string" ? (n = "", u = !0) : a === "number" && (n = 0, u = !0);
  }
  try {
    e[t] = n;
  } catch (a) {
    process.env.NODE_ENV !== "production" && !u && N(
      `Failed setting prop "${t}" on <${c.toLowerCase()}>: value ${n} is invalid.`,
      a
    );
  }
  u && e.removeAttribute(t);
}
function hu(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function gu(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const Br = Symbol("_vei");
function _u(e, t, n, o, r = null) {
  const s = e[Br] || (e[Br] = {}), i = s[t];
  if (o && i)
    i.value = o;
  else {
    const [c, u] = mu(t);
    if (o) {
      const a = s[t] = bu(o, r);
      hu(e, c, a, u);
    } else
      i && (gu(e, c, i, u), s[t] = void 0);
  }
}
const Kr = /(?:Once|Passive|Capture)$/;
function mu(e) {
  let t;
  if (Kr.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Kr); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : et(e.slice(2)), t];
}
let _o = 0;
const Eu = /* @__PURE__ */ Promise.resolve(), vu = () => _o || (Eu.then(() => _o = 0), _o = Date.now());
function bu(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    De(
      Nu(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = vu(), n;
}
function Nu(e, t) {
  if (T(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (r) => !r._stopped && o && o(r));
  } else
    return t;
}
const Wr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, yu = (e, t, n, o, r = !1, s, i, c, u) => {
  t === "class" ? cu(e, o, r) : t === "style" ? uu(e, n, o) : cn(t) ? In(t) || _u(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ou(e, t, o, r)) ? pu(
    e,
    t,
    o,
    s,
    i,
    c,
    u
  ) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), du(e, t, o, r));
};
function Ou(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Wr(t) && A(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Wr(t) && Z(n) ? !1 : t in e;
}
const wu = ["ctrl", "shift", "alt", "meta"], Du = {
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
  exact: (e, t) => wu.some((n) => e[`${n}Key`] && !t.includes(n))
}, xu = (e, t) => e._withMods || (e._withMods = (n, ...o) => {
  for (let r = 0; r < t.length; r++) {
    const s = Du[t[r]];
    if (s && s(n, t))
      return;
  }
  return e(n, ...o);
}), Vu = /* @__PURE__ */ X({ patchProp: yu }, su);
let Jr;
function Su() {
  return Jr || (Jr = Al(Vu));
}
const Cu = (...e) => {
  const t = Su().createApp(...e);
  process.env.NODE_ENV !== "production" && (Iu(t), Tu(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = Pu(o);
    if (!r)
      return;
    const s = t._component;
    !A(s) && !s.render && !s.template && (s.template = r.innerHTML), r.innerHTML = "";
    const i = n(r, !1, r instanceof SVGElement);
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
  }, t;
};
function Iu(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Ri(t) || ji(t),
    writable: !1
  });
}
function Tu(e) {
  if (oi()) {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        N(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return N(o), n;
      },
      set() {
        N(o);
      }
    });
  }
}
function Pu(e) {
  if (Z(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && N(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && N(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
function $u() {
  ou();
}
process.env.NODE_ENV !== "production" && $u();
const Au = /* @__PURE__ */ Ls({
  __name: "Buble",
  setup(e) {
    const t = ln(1);
    return (n, o) => (Qt(), kn("div", {
      class: "fixed bottom-4 right-4 bg-blue-500 rounded-full py-5 px-7 text-white cursor-pointer select-none",
      onClick: o[0] || (o[0] = xu((r) => t.value++, ["stop"]))
    }, Li(Qn(t)), 1));
  }
});
const Ru = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, ju = {}, ci = (e) => (Lc("data-v-4ba220de"), e = e(), Uc(), e), Mu = { class: "error" }, Fu = /* @__PURE__ */ ci(() => /* @__PURE__ */ Ge("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100",
  height: "100",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ Ge("g", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ Ge("path", { d: "M17 11.6V15a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6v-3.4a.6.6 0 0 1 .6-.6h12.8a.6.6 0 0 1 .6.6ZM12 9c0-1 .714-2 2.143-2v0A2.857 2.857 0 0 0 17 4.143V3.5M8 9v-.5a3 3 0 0 1 3-3v0a2 2 0 0 0 2-2V3" }),
    /* @__PURE__ */ Ge("path", { d: "M16 11h2.5a2.5 2.5 0 0 1 0 5H17" })
  ])
], -1)), Lu = /* @__PURE__ */ ci(() => /* @__PURE__ */ Ge("h4", null, [
  /* @__PURE__ */ ti("Service unavailable "),
  /* @__PURE__ */ Ge("span", null, "try later")
], -1)), Uu = [
  Fu,
  Lu
];
function ku(e, t) {
  return Qt(), kn("div", Mu, Uu);
}
const Hu = /* @__PURE__ */ Ru(ju, [["render", ku], ["__scopeId", "data-v-4ba220de"]]);
var li = !1;
function En(e, t, n) {
  return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
}
function mo(e, t) {
  if (Array.isArray(e)) {
    e.splice(t, 1);
    return;
  }
  delete e[t];
}
function Bu() {
  return ui().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function ui() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Ku = typeof Proxy == "function", Wu = "devtools-plugin:setup", Ju = "plugin:settings:set";
let Dt, Ao;
function zu() {
  var e;
  return Dt !== void 0 || (typeof window < "u" && window.performance ? (Dt = !0, Ao = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Dt = !0, Ao = global.perf_hooks.performance) : Dt = !1), Dt;
}
function qu() {
  return zu() ? Ao.now() : Date.now();
}
class Yu {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const o = {};
    if (t.settings)
      for (const i in t.settings) {
        const c = t.settings[i];
        o[i] = c.defaultValue;
      }
    const r = `__vue-devtools-plugin-settings__${t.id}`;
    let s = Object.assign({}, o);
    try {
      const i = localStorage.getItem(r), c = JSON.parse(i);
      Object.assign(s, c);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return s;
      },
      setSettings(i) {
        try {
          localStorage.setItem(r, JSON.stringify(i));
        } catch {
        }
        s = i;
      },
      now() {
        return qu();
      }
    }, n && n.on(Ju, (i, c) => {
      i === this.plugin.id && this.fallbacks.setSettings(c);
    }), this.proxiedOn = new Proxy({}, {
      get: (i, c) => this.target ? this.target.on[c] : (...u) => {
        this.onQueue.push({
          method: c,
          args: u
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (i, c) => this.target ? this.target[c] : c === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(c) ? (...u) => (this.targetQueue.push({
        method: c,
        args: u,
        resolve: () => {
        }
      }), this.fallbacks[c](...u)) : (...u) => new Promise((a) => {
        this.targetQueue.push({
          method: c,
          args: u,
          resolve: a
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function fi(e, t) {
  const n = e, o = ui(), r = Bu(), s = Ku && n.enableEarlyProxy;
  if (r && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    r.emit(Wu, e, t);
  else {
    const i = s ? new Yu(n, r) : null;
    (o.__VUE_DEVTOOLS_PLUGINS__ = o.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: i
    }), i && t(i.proxiedTarget);
  }
}
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let Wt;
const sn = (e) => Wt = e, ai = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function Et(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var je;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(je || (je = {}));
const ro = typeof window < "u", Gt = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && ro, zr = /* @__PURE__ */ (() => typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null })();
function Qu(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(65279), e], { type: e.type }) : e;
}
function ir(e, t, n) {
  const o = new XMLHttpRequest();
  o.open("GET", e), o.responseType = "blob", o.onload = function() {
    hi(o.response, t, n);
  }, o.onerror = function() {
    console.error("could not download file");
  }, o.send();
}
function di(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function Vn(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = document.createEvent("MouseEvents");
    n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
  }
}
const Sn = typeof navigator == "object" ? navigator : { userAgent: "" }, pi = /* @__PURE__ */ (() => /Macintosh/.test(Sn.userAgent) && /AppleWebKit/.test(Sn.userAgent) && !/Safari/.test(Sn.userAgent))(), hi = ro ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !pi ? Gu : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in Sn ? Xu : (
      // Fallback to using FileReader and a popup
      Zu
    )
  )
) : () => {
};
function Gu(e, t = "download", n) {
  const o = document.createElement("a");
  o.download = t, o.rel = "noopener", typeof e == "string" ? (o.href = e, o.origin !== location.origin ? di(o.href) ? ir(e, t, n) : (o.target = "_blank", Vn(o)) : Vn(o)) : (o.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(o.href);
  }, 4e4), setTimeout(function() {
    Vn(o);
  }, 0));
}
function Xu(e, t = "download", n) {
  if (typeof e == "string")
    if (di(e))
      ir(e, t, n);
    else {
      const o = document.createElement("a");
      o.href = e, o.target = "_blank", setTimeout(function() {
        Vn(o);
      });
    }
  else
    navigator.msSaveOrOpenBlob(Qu(e, n), t);
}
function Zu(e, t, n, o) {
  if (o = o || open("", "_blank"), o && (o.document.title = o.document.body.innerText = "downloading..."), typeof e == "string")
    return ir(e, t, n);
  const r = e.type === "application/octet-stream", s = /constructor/i.test(String(zr.HTMLElement)) || "safari" in zr, i = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((i || r && s || pi) && typeof FileReader < "u") {
    const c = new FileReader();
    c.onloadend = function() {
      let u = c.result;
      if (typeof u != "string")
        throw o = null, new Error("Wrong reader.result type");
      u = i ? u : u.replace(/^data:[^;]*;/, "data:attachment/file;"), o ? o.location.href = u : location.assign(u), o = null;
    }, c.readAsDataURL(e);
  } else {
    const c = URL.createObjectURL(e);
    o ? o.location.assign(c) : location.href = c, o = null, setTimeout(function() {
      URL.revokeObjectURL(c);
    }, 4e4);
  }
}
function oe(e, t) {
  const n = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, t) : t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
function cr(e) {
  return "_a" in e && "install" in e;
}
function gi() {
  if (!("clipboard" in navigator))
    return oe("Your browser doesn't support the Clipboard API", "error"), !0;
}
function _i(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (oe('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function ef(e) {
  if (!gi())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), oe("Global state copied to clipboard.");
    } catch (t) {
      if (_i(t))
        return;
      oe("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function tf(e) {
  if (!gi())
    try {
      mi(e, JSON.parse(await navigator.clipboard.readText())), oe("Global state pasted from clipboard.");
    } catch (t) {
      if (_i(t))
        return;
      oe("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function nf(e) {
  try {
    hi(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    oe("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let Fe;
function of() {
  Fe || (Fe = document.createElement("input"), Fe.type = "file", Fe.accept = ".json");
  function e() {
    return new Promise((t, n) => {
      Fe.onchange = async () => {
        const o = Fe.files;
        if (!o)
          return t(null);
        const r = o.item(0);
        return t(r ? { text: await r.text(), file: r } : null);
      }, Fe.oncancel = () => t(null), Fe.onerror = n, Fe.click();
    });
  }
  return e;
}
async function rf(e) {
  try {
    const n = await of()();
    if (!n)
      return;
    const { text: o, file: r } = n;
    mi(e, JSON.parse(o)), oe(`Global state imported from "${r.name}".`);
  } catch (t) {
    oe("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function mi(e, t) {
  for (const n in t) {
    const o = e.state.value[n];
    o ? Object.assign(o, t[n]) : e.state.value[n] = t[n];
  }
}
function Ne(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const Ei = "🍍 Pinia (root)", Ro = "_root";
function sf(e) {
  return cr(e) ? {
    id: Ro,
    label: Ei
  } : {
    id: e.$id,
    label: e.$id
  };
}
function cf(e) {
  if (cr(e)) {
    const n = Array.from(e._s.keys()), o = e._s;
    return {
      state: n.map((s) => ({
        editable: !0,
        key: s,
        value: e.state.value[s]
      })),
      getters: n.filter((s) => o.get(s)._getters).map((s) => {
        const i = o.get(s);
        return {
          editable: !1,
          key: s,
          value: i._getters.reduce((c, u) => (c[u] = i[u], c), {})
        };
      })
    };
  }
  const t = {
    state: Object.keys(e.$state).map((n) => ({
      editable: !0,
      key: n,
      value: e.$state[n]
    }))
  };
  return e._getters && e._getters.length && (t.getters = e._getters.map((n) => ({
    editable: !1,
    key: n,
    value: e[n]
  }))), e._customProperties.size && (t.customProperties = Array.from(e._customProperties).map((n) => ({
    editable: !0,
    key: n,
    value: e[n]
  }))), t;
}
function lf(e) {
  return e ? Array.isArray(e) ? e.reduce((t, n) => (t.keys.push(n.key), t.operations.push(n.type), t.oldValue[n.key] = n.oldValue, t.newValue[n.key] = n.newValue, t), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: Ne(e.type),
    key: Ne(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function uf(e) {
  switch (e) {
    case je.direct:
      return "mutation";
    case je.patchFunction:
      return "$patch";
    case je.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let It = !0;
const Cn = [], lt = "pinia:mutations", ce = "pinia", { assign: ff } = Object, Hn = (e) => "🍍 " + e;
function af(e, t) {
  fi({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Cn,
    app: e
  }, (n) => {
    typeof n.now != "function" && oe("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: lt,
      label: "Pinia 🍍",
      color: 15064968
    }), n.addInspector({
      id: ce,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            ef(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await tf(t), n.sendInspectorTree(ce), n.sendInspectorState(ce);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            nf(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await rf(t), n.sendInspectorTree(ce), n.sendInspectorState(ce);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: 'Reset the state (with "$reset")',
          action: (o) => {
            const r = t._s.get(o);
            r ? typeof r.$reset != "function" ? oe(`Cannot reset "${o}" store because it doesn't have a "$reset" method implemented.`, "warn") : (r.$reset(), oe(`Store "${o}" reset.`)) : oe(`Cannot reset "${o}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), n.on.inspectComponent((o, r) => {
      const s = o.componentInstance && o.componentInstance.proxy;
      if (s && s._pStores) {
        const i = o.componentInstance.proxy._pStores;
        Object.values(i).forEach((c) => {
          o.instanceData.state.push({
            type: Hn(c.$id),
            key: "state",
            editable: !0,
            value: c._isOptionsAPI ? {
              _custom: {
                value: R(c.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => c.$reset()
                  }
                ]
              }
            } : (
              // NOTE: workaround to unwrap transferred refs
              Object.keys(c.$state).reduce((u, a) => (u[a] = c.$state[a], u), {})
            )
          }), c._getters && c._getters.length && o.instanceData.state.push({
            type: Hn(c.$id),
            key: "getters",
            editable: !1,
            value: c._getters.reduce((u, a) => {
              try {
                u[a] = c[a];
              } catch (p) {
                u[a] = p;
              }
              return u;
            }, {})
          });
        });
      }
    }), n.on.getInspectorTree((o) => {
      if (o.app === e && o.inspectorId === ce) {
        let r = [t];
        r = r.concat(Array.from(t._s.values())), o.rootNodes = (o.filter ? r.filter((s) => "$id" in s ? s.$id.toLowerCase().includes(o.filter.toLowerCase()) : Ei.toLowerCase().includes(o.filter.toLowerCase())) : r).map(sf);
      }
    }), n.on.getInspectorState((o) => {
      if (o.app === e && o.inspectorId === ce) {
        const r = o.nodeId === Ro ? t : t._s.get(o.nodeId);
        if (!r)
          return;
        r && (o.state = cf(r));
      }
    }), n.on.editInspectorState((o, r) => {
      if (o.app === e && o.inspectorId === ce) {
        const s = o.nodeId === Ro ? t : t._s.get(o.nodeId);
        if (!s)
          return oe(`store "${o.nodeId}" not found`, "error");
        const { path: i } = o;
        cr(s) ? i.unshift("state") : (i.length !== 1 || !s._customProperties.has(i[0]) || i[0] in s.$state) && i.unshift("$state"), It = !1, o.set(s, i, o.state.value), It = !0;
      }
    }), n.on.editComponentState((o) => {
      if (o.type.startsWith("🍍")) {
        const r = o.type.replace(/^🍍\s*/, ""), s = t._s.get(r);
        if (!s)
          return oe(`store "${r}" not found`, "error");
        const { path: i } = o;
        if (i[0] !== "state")
          return oe(`Invalid path for store "${r}":
${i}
Only state can be modified.`);
        i[0] = "$state", It = !1, o.set(s, i, o.state.value), It = !0;
      }
    });
  });
}
function df(e, t) {
  Cn.includes(Hn(t.$id)) || Cn.push(Hn(t.$id)), fi({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Cn,
    app: e,
    settings: {
      logStoreChanges: {
        label: "Notify about new/deleted stores",
        type: "boolean",
        defaultValue: !0
      }
      // useEmojis: {
      //   label: 'Use emojis in messages ⚡️',
      //   type: 'boolean',
      //   defaultValue: true,
      // },
    }
  }, (n) => {
    const o = typeof n.now == "function" ? n.now.bind(n) : Date.now;
    t.$onAction(({ after: i, onError: c, name: u, args: a }) => {
      const p = vi++;
      n.addTimelineEvent({
        layerId: lt,
        event: {
          time: o(),
          title: "🛫 " + u,
          subtitle: "start",
          data: {
            store: Ne(t.$id),
            action: Ne(u),
            args: a
          },
          groupId: p
        }
      }), i((d) => {
        Xe = void 0, n.addTimelineEvent({
          layerId: lt,
          event: {
            time: o(),
            title: "🛬 " + u,
            subtitle: "end",
            data: {
              store: Ne(t.$id),
              action: Ne(u),
              args: a,
              result: d
            },
            groupId: p
          }
        });
      }), c((d) => {
        Xe = void 0, n.addTimelineEvent({
          layerId: lt,
          event: {
            time: o(),
            logType: "error",
            title: "💥 " + u,
            subtitle: "end",
            data: {
              store: Ne(t.$id),
              action: Ne(u),
              args: a,
              error: d
            },
            groupId: p
          }
        });
      });
    }, !0), t._customProperties.forEach((i) => {
      zt(() => Qn(t[i]), (c, u) => {
        n.notifyComponentUpdate(), n.sendInspectorState(ce), It && n.addTimelineEvent({
          layerId: lt,
          event: {
            time: o(),
            title: "Change",
            subtitle: i,
            data: {
              newValue: c,
              oldValue: u
            },
            groupId: Xe
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: i, type: c }, u) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(ce), !It)
        return;
      const a = {
        time: o(),
        title: uf(c),
        data: ff({ store: Ne(t.$id) }, lf(i)),
        groupId: Xe
      };
      c === je.patchFunction ? a.subtitle = "⤵️" : c === je.patchObject ? a.subtitle = "🧩" : i && !Array.isArray(i) && (a.subtitle = i.type), i && (a.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: i
        }
      }), n.addTimelineEvent({
        layerId: lt,
        event: a
      });
    }, { detached: !0, flush: "sync" });
    const r = t._hotUpdate;
    t._hotUpdate = ke((i) => {
      r(i), n.addTimelineEvent({
        layerId: lt,
        event: {
          time: o(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: Ne(t.$id),
            info: Ne("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(ce), n.sendInspectorState(ce);
    });
    const { $dispose: s } = t;
    t.$dispose = () => {
      s(), n.notifyComponentUpdate(), n.sendInspectorTree(ce), n.sendInspectorState(ce), n.getSettings().logStoreChanges && oe(`Disposed "${t.$id}" store 🗑`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(ce), n.sendInspectorState(ce), n.getSettings().logStoreChanges && oe(`"${t.$id}" store installed 🆕`);
  });
}
let vi = 0, Xe;
function qr(e, t, n) {
  const o = t.reduce((r, s) => (r[s] = R(e)[s], r), {});
  for (const r in o)
    e[r] = function() {
      const s = vi, i = n ? new Proxy(e, {
        get(...u) {
          return Xe = s, Reflect.get(...u);
        },
        set(...u) {
          return Xe = s, Reflect.set(...u);
        }
      }) : e;
      Xe = s;
      const c = o[r].apply(i, arguments);
      return Xe = void 0, c;
    };
}
function pf({ app: e, store: t, options: n }) {
  if (t.$id.startsWith("__hot:"))
    return;
  t._isOptionsAPI = !!n.state, qr(t, Object.keys(n.actions), t._isOptionsAPI);
  const o = t._hotUpdate;
  R(t)._hotUpdate = function(r) {
    o.apply(this, arguments), qr(t, Object.keys(r._hmrPayload.actions), !!t._isOptionsAPI);
  }, df(
    e,
    // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
    t
  );
}
function hf() {
  const e = ss(!0), t = e.run(() => ln({}));
  let n = [], o = [];
  const r = ke({
    install(s) {
      sn(r), r._a = s, s.provide(ai, r), s.config.globalProperties.$pinia = r, Gt && af(s, r), o.forEach((i) => n.push(i)), o = [];
    },
    use(s) {
      return !this._a && !li ? o.push(s) : n.push(s), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return Gt && typeof Proxy < "u" && r.use(pf), r;
}
function bi(e, t) {
  for (const n in t) {
    const o = t[n];
    if (!(n in e))
      continue;
    const r = e[n];
    Et(r) && Et(o) && !q(o) && !we(o) ? e[n] = bi(r, o) : e[n] = o;
  }
  return e;
}
const Ni = () => {
};
function Yr(e, t, n, o = Ni) {
  e.push(t);
  const r = () => {
    const s = e.indexOf(t);
    s > -1 && (e.splice(s, 1), o());
  };
  return !n && is() && ki(r), r;
}
function xt(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const gf = (e) => e();
function jo(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, o) => e.set(o, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const o = t[n], r = e[n];
    Et(r) && Et(o) && e.hasOwnProperty(n) && !q(o) && !we(o) ? e[n] = jo(r, o) : e[n] = o;
  }
  return e;
}
const _f = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function mf(e) {
  return !Et(e) || !e.hasOwnProperty(_f);
}
const { assign: ve } = Object;
function Qr(e) {
  return !!(q(e) && e.effect);
}
function Gr(e, t, n, o) {
  const { state: r, actions: s, getters: i } = t, c = n.state.value[e];
  let u;
  function a() {
    !c && (process.env.NODE_ENV === "production" || !o) && (n.state.value[e] = r ? r() : {});
    const p = process.env.NODE_ENV !== "production" && o ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      br(ln(r ? r() : {}).value)
    ) : br(n.state.value[e]);
    return ve(p, s, Object.keys(i || {}).reduce((d, g) => (process.env.NODE_ENV !== "production" && g in p && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${g}" in store "${e}".`), d[g] = ke(sr(() => {
      sn(n);
      const w = n._s.get(e);
      return i[g].call(w, w);
    })), d), {}));
  }
  return u = Mo(e, a, t, n, o, !0), u;
}
function Mo(e, t, n = {}, o, r, s) {
  let i;
  const c = ve({ actions: {} }, n);
  if (process.env.NODE_ENV !== "production" && !o._e.active)
    throw new Error("Pinia destroyed");
  const u = {
    deep: !0
    // flush: 'post',
  };
  process.env.NODE_ENV !== "production" && !li && (u.onTrigger = (V) => {
    a ? w = V : a == !1 && !I._hotUpdating && (Array.isArray(w) ? w.push(V) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let a, p, d = [], g = [], w;
  const M = o.state.value[e];
  !s && !M && (process.env.NODE_ENV === "production" || !r) && (o.state.value[e] = {});
  const L = ln({});
  let Y;
  function Q(V) {
    let D;
    a = p = !1, process.env.NODE_ENV !== "production" && (w = []), typeof V == "function" ? (V(o.state.value[e]), D = {
      type: je.patchFunction,
      storeId: e,
      events: w
    }) : (jo(o.state.value[e], V), D = {
      type: je.patchObject,
      payload: V,
      storeId: e,
      events: w
    });
    const B = Y = Symbol();
    yo().then(() => {
      Y === B && (a = !0);
    }), p = !0, xt(d, D, o.state.value[e]);
  }
  const _e = s ? function() {
    const { state: D } = n, B = D ? D() : {};
    this.$patch((ne) => {
      ve(ne, B);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : Ni
  );
  function H() {
    i.stop(), d = [], g = [], o._s.delete(e);
  }
  function he(V, D) {
    return function() {
      sn(o);
      const B = Array.from(arguments), ne = [], We = [];
      function Ve($) {
        ne.push($);
      }
      function ie($) {
        We.push($);
      }
      xt(g, {
        args: B,
        name: V,
        store: I,
        after: Ve,
        onError: ie
      });
      let F;
      try {
        F = D.apply(this && this.$id === e ? this : I, B);
      } catch ($) {
        throw xt(We, $), $;
      }
      return F instanceof Promise ? F.then(($) => (xt(ne, $), $)).catch(($) => (xt(We, $), Promise.reject($))) : (xt(ne, F), F);
    };
  }
  const P = /* @__PURE__ */ ke({
    actions: {},
    getters: {},
    state: [],
    hotState: L
  }), me = {
    _p: o,
    // _s: scope,
    $id: e,
    $onAction: Yr.bind(null, g),
    $patch: Q,
    $reset: _e,
    $subscribe(V, D = {}) {
      const B = Yr(d, V, D.detached, () => ne()), ne = i.run(() => zt(() => o.state.value[e], (We) => {
        (D.flush === "sync" ? p : a) && V({
          storeId: e,
          type: je.direct,
          events: w
        }, We);
      }, ve({}, u, D)));
      return B;
    },
    $dispose: H
  }, I = qn(process.env.NODE_ENV !== "production" || Gt ? ve(
    {
      _hmrPayload: P,
      _customProperties: ke(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    me
    // must be added later
    // setupStore
  ) : me);
  o._s.set(e, I);
  const G = (o._a && o._a.runWithContext || gf)(() => o._e.run(() => (i = ss()).run(t)));
  for (const V in G) {
    const D = G[V];
    if (q(D) && !Qr(D) || we(D))
      process.env.NODE_ENV !== "production" && r ? En(L.value, V, bn(G, V)) : s || (M && mf(D) && (q(D) ? D.value = M[V] : jo(D, M[V])), o.state.value[e][V] = D), process.env.NODE_ENV !== "production" && P.state.push(V);
    else if (typeof D == "function") {
      const B = process.env.NODE_ENV !== "production" && r ? D : he(V, D);
      G[V] = B, process.env.NODE_ENV !== "production" && (P.actions[V] = D), c.actions[V] = D;
    } else
      process.env.NODE_ENV !== "production" && Qr(D) && (P.getters[V] = s ? (
        // @ts-expect-error
        n.getters[V]
      ) : D, ro && (G._getters || // @ts-expect-error: same
      (G._getters = ke([]))).push(V));
  }
  if (ve(I, G), ve(R(I), G), Object.defineProperty(I, "$state", {
    get: () => process.env.NODE_ENV !== "production" && r ? L.value : o.state.value[e],
    set: (V) => {
      if (process.env.NODE_ENV !== "production" && r)
        throw new Error("cannot set hotState");
      Q((D) => {
        ve(D, V);
      });
    }
  }), process.env.NODE_ENV !== "production" && (I._hotUpdate = ke((V) => {
    I._hotUpdating = !0, V._hmrPayload.state.forEach((D) => {
      if (D in I.$state) {
        const B = V.$state[D], ne = I.$state[D];
        typeof B == "object" && Et(B) && Et(ne) ? bi(B, ne) : V.$state[D] = ne;
      }
      En(I, D, bn(V.$state, D));
    }), Object.keys(I.$state).forEach((D) => {
      D in V.$state || mo(I, D);
    }), a = !1, p = !1, o.state.value[e] = bn(V._hmrPayload, "hotState"), p = !0, yo().then(() => {
      a = !0;
    });
    for (const D in V._hmrPayload.actions) {
      const B = V[D];
      En(I, D, he(D, B));
    }
    for (const D in V._hmrPayload.getters) {
      const B = V._hmrPayload.getters[D], ne = s ? (
        // special handling of options api
        sr(() => (sn(o), B.call(I, I)))
      ) : B;
      En(I, D, ne);
    }
    Object.keys(I._hmrPayload.getters).forEach((D) => {
      D in V._hmrPayload.getters || mo(I, D);
    }), Object.keys(I._hmrPayload.actions).forEach((D) => {
      D in V._hmrPayload.actions || mo(I, D);
    }), I._hmrPayload = V._hmrPayload, I._getters = V._getters, I._hotUpdating = !1;
  })), Gt) {
    const V = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((D) => {
      Object.defineProperty(I, D, ve({ value: I[D] }, V));
    });
  }
  return o._p.forEach((V) => {
    if (Gt) {
      const D = i.run(() => V({
        store: I,
        app: o._a,
        pinia: o,
        options: c
      }));
      Object.keys(D || {}).forEach((B) => I._customProperties.add(B)), ve(I, D);
    } else
      ve(I, i.run(() => V({
        store: I,
        app: o._a,
        pinia: o,
        options: c
      })));
  }), process.env.NODE_ENV !== "production" && I.$state && typeof I.$state == "object" && typeof I.$state.constructor == "function" && !I.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${I.$id}".`), M && s && n.hydrate && n.hydrate(I.$state, M), a = !0, p = !0, I;
}
function Ef(e, t, n) {
  let o, r;
  const s = typeof t == "function";
  if (typeof e == "string")
    o = e, r = s ? n : t;
  else if (r = e, o = e.id, process.env.NODE_ENV !== "production" && typeof o != "string")
    throw new Error('[🍍]: "defineStore()" must be passed a store id as its first argument.');
  function i(c, u) {
    const a = Nl();
    if (c = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && Wt && Wt._testing ? null : c) || (a ? qt(ai, null) : null), c && sn(c), process.env.NODE_ENV !== "production" && !Wt)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    c = Wt, c._s.has(o) || (s ? Mo(o, t, r, c) : Gr(o, r, c), process.env.NODE_ENV !== "production" && (i._pinia = c));
    const p = c._s.get(o);
    if (process.env.NODE_ENV !== "production" && u) {
      const d = "__hot:" + o, g = s ? Mo(d, t, r, c, !0) : Gr(d, ve({}, r), c, !0);
      u._hotUpdate(g), delete c.state.value[d], c._s.delete(d);
    }
    if (process.env.NODE_ENV !== "production" && ro) {
      const d = zl();
      if (d && d.proxy && // avoid adding stores that are just built for hot module replacement
      !u) {
        const g = d.proxy, w = "_pStores" in g ? g._pStores : g._pStores = {};
        w[o] = p;
      }
    }
    return p;
  }
  return i.$id = o, i;
}
function vf(e) {
  {
    e = R(e);
    const t = {};
    for (const n in e) {
      const o = e[n];
      (q(o) || we(o)) && (t[n] = // ---
      bn(e, n));
    }
    return t;
  }
}
const bf = (e) => {
  e ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "visible";
}, Nf = Ef("main", {
  state: () => ({
    isError: !1,
    ModalState: !1
  }),
  getters: {},
  actions: {
    async ModalChanger(e) {
      this.ModalState = e, bf(e);
    }
  }
}), yf = {
  key: 1,
  class: "container"
}, Of = /* @__PURE__ */ Ls({
  __name: "App",
  setup(e) {
    const { isError: t } = vf(Nf());
    return (n, o) => {
      const r = Hu, s = Au;
      return Qt(), kn("div", null, [
        Qn(t) ? (Qt(), Ul(r, { key: 0 })) : (Qt(), kn("div", yf, [
          Be(s)
        ]))
      ]);
    };
  }
}), wf = hf();
Cu(Of).use(wf).mount("#app");
