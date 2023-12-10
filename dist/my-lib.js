import { defineComponent as Ee, ref as Z, openBlock as M, createElementBlock as q, withModifiers as Ge, toDisplayString as Je, unref as ce, pushScopeId as We, popScopeId as Qe, createElementVNode as D, createTextVNode as Ye, effectScope as Se, markRaw as $, toRaw as B, isRef as C, isReactive as K, toRef as W, hasInjectionContext as ze, inject as qe, getCurrentInstance as Xe, watch as we, reactive as Ze, nextTick as he, computed as Oe, getCurrentScope as Ke, onScopeDispose as et, toRefs as _e, createBlock as tt, createVNode as nt, createApp as ot } from "vue";
const st = /* @__PURE__ */ Ee({
  __name: "Buble",
  setup(e) {
    const o = Z(1);
    return (n, t) => (M(), q("div", {
      class: "fixed bottom-4 right-4 bg-blue-500 rounded-full py-5 px-7 text-white cursor-pointer select-none",
      onClick: t[0] || (t[0] = Ge((s) => o.value++, ["stop"]))
    }, Je(ce(o)), 1));
  }
});
const rt = (e, o) => {
  const n = e.__vccOpts || e;
  for (const [t, s] of o)
    n[t] = s;
  return n;
}, it = {}, Ne = (e) => (We("data-v-4ba220de"), e = e(), Qe(), e), ct = { class: "error" }, at = /* @__PURE__ */ Ne(() => /* @__PURE__ */ D("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100",
  height: "100",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ D("g", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ D("path", { d: "M17 11.6V15a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6v-3.4a.6.6 0 0 1 .6-.6h12.8a.6.6 0 0 1 .6.6ZM12 9c0-1 .714-2 2.143-2v0A2.857 2.857 0 0 0 17 4.143V3.5M8 9v-.5a3 3 0 0 1 3-3v0a2 2 0 0 0 2-2V3" }),
    /* @__PURE__ */ D("path", { d: "M16 11h2.5a2.5 2.5 0 0 1 0 5H17" })
  ])
], -1)), lt = /* @__PURE__ */ Ne(() => /* @__PURE__ */ D("h4", null, [
  /* @__PURE__ */ Ye("Service unavailable "),
  /* @__PURE__ */ D("span", null, "try later")
], -1)), ut = [
  at,
  lt
];
function ft(e, o) {
  return M(), q("div", ct, ut);
}
const dt = /* @__PURE__ */ rt(it, [["render", ft], ["__scopeId", "data-v-4ba220de"]]);
var Ie = !1;
function J(e, o, n) {
  return Array.isArray(e) ? (e.length = Math.max(e.length, o), e.splice(o, 1, n), n) : (e[o] = n, n);
}
function ne(e, o) {
  if (Array.isArray(e)) {
    e.splice(o, 1);
    return;
  }
  delete e[o];
}
function pt() {
  return Pe().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Pe() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const ht = typeof Proxy == "function", _t = "devtools-plugin:setup", gt = "plugin:settings:set";
let x, oe;
function mt() {
  var e;
  return x !== void 0 || (typeof window < "u" && window.performance ? (x = !0, oe = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (x = !0, oe = global.perf_hooks.performance) : x = !1), x;
}
function yt() {
  return mt() ? oe.now() : Date.now();
}
class vt {
  constructor(o, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = o, this.hook = n;
    const t = {};
    if (o.settings)
      for (const i in o.settings) {
        const r = o.settings[i];
        t[i] = r.defaultValue;
      }
    const s = `__vue-devtools-plugin-settings__${o.id}`;
    let c = Object.assign({}, t);
    try {
      const i = localStorage.getItem(s), r = JSON.parse(i);
      Object.assign(c, r);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return c;
      },
      setSettings(i) {
        try {
          localStorage.setItem(s, JSON.stringify(i));
        } catch {
        }
        c = i;
      },
      now() {
        return yt();
      }
    }, n && n.on(gt, (i, r) => {
      i === this.plugin.id && this.fallbacks.setSettings(r);
    }), this.proxiedOn = new Proxy({}, {
      get: (i, r) => this.target ? this.target.on[r] : (...u) => {
        this.onQueue.push({
          method: r,
          args: u
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (i, r) => this.target ? this.target[r] : r === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(r) ? (...u) => (this.targetQueue.push({
        method: r,
        args: u,
        resolve: () => {
        }
      }), this.fallbacks[r](...u)) : (...u) => new Promise((d) => {
        this.targetQueue.push({
          method: r,
          args: u,
          resolve: d
        });
      })
    });
  }
  async setRealTarget(o) {
    this.target = o;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function Ve(e, o) {
  const n = e, t = Pe(), s = pt(), c = ht && n.enableEarlyProxy;
  if (s && (t.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !c))
    s.emit(_t, e, o);
  else {
    const i = c ? new vt(n, s) : null;
    (t.__VUE_DEVTOOLS_PLUGINS__ = t.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: o,
      proxy: i
    }), i && o(i.proxiedTarget);
  }
}
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let R;
const H = (e) => R = e, $e = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function k(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var O;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(O || (O = {}));
const ee = typeof window < "u", F = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && ee, ge = /* @__PURE__ */ (() => typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null })();
function bt(e, { autoBom: o = !1 } = {}) {
  return o && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(65279), e], { type: e.type }) : e;
}
function ae(e, o, n) {
  const t = new XMLHttpRequest();
  t.open("GET", e), t.responseType = "blob", t.onload = function() {
    xe(t.response, o, n);
  }, t.onerror = function() {
    console.error("could not download file");
  }, t.send();
}
function ke(e) {
  const o = new XMLHttpRequest();
  o.open("HEAD", e, !1);
  try {
    o.send();
  } catch {
  }
  return o.status >= 200 && o.status <= 299;
}
function Q(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = document.createEvent("MouseEvents");
    n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
  }
}
const Y = typeof navigator == "object" ? navigator : { userAgent: "" }, Te = /* @__PURE__ */ (() => /Macintosh/.test(Y.userAgent) && /AppleWebKit/.test(Y.userAgent) && !/Safari/.test(Y.userAgent))(), xe = ee ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Te ? Et : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in Y ? St : (
      // Fallback to using FileReader and a popup
      wt
    )
  )
) : () => {
};
function Et(e, o = "download", n) {
  const t = document.createElement("a");
  t.download = o, t.rel = "noopener", typeof e == "string" ? (t.href = e, t.origin !== location.origin ? ke(t.href) ? ae(e, o, n) : (t.target = "_blank", Q(t)) : Q(t)) : (t.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(t.href);
  }, 4e4), setTimeout(function() {
    Q(t);
  }, 0));
}
function St(e, o = "download", n) {
  if (typeof e == "string")
    if (ke(e))
      ae(e, o, n);
    else {
      const t = document.createElement("a");
      t.href = e, t.target = "_blank", setTimeout(function() {
        Q(t);
      });
    }
  else
    navigator.msSaveOrOpenBlob(bt(e, n), o);
}
function wt(e, o, n, t) {
  if (t = t || open("", "_blank"), t && (t.document.title = t.document.body.innerText = "downloading..."), typeof e == "string")
    return ae(e, o, n);
  const s = e.type === "application/octet-stream", c = /constructor/i.test(String(ge.HTMLElement)) || "safari" in ge, i = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((i || s && c || Te) && typeof FileReader < "u") {
    const r = new FileReader();
    r.onloadend = function() {
      let u = r.result;
      if (typeof u != "string")
        throw t = null, new Error("Wrong reader.result type");
      u = i ? u : u.replace(/^data:[^;]*;/, "data:attachment/file;"), t ? t.location.href = u : location.assign(u), t = null;
    }, r.readAsDataURL(e);
  } else {
    const r = URL.createObjectURL(e);
    t ? t.location.assign(r) : location.href = r, t = null, setTimeout(function() {
      URL.revokeObjectURL(r);
    }, 4e4);
  }
}
function g(e, o) {
  const n = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, o) : o === "error" ? console.error(n) : o === "warn" ? console.warn(n) : console.log(n);
}
function le(e) {
  return "_a" in e && "install" in e;
}
function Ae() {
  if (!("clipboard" in navigator))
    return g("Your browser doesn't support the Clipboard API", "error"), !0;
}
function De(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (g('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function Ot(e) {
  if (!Ae())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), g("Global state copied to clipboard.");
    } catch (o) {
      if (De(o))
        return;
      g("Failed to serialize the state. Check the console for more details.", "error"), console.error(o);
    }
}
async function Nt(e) {
  if (!Ae())
    try {
      je(e, JSON.parse(await navigator.clipboard.readText())), g("Global state pasted from clipboard.");
    } catch (o) {
      if (De(o))
        return;
      g("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(o);
    }
}
async function It(e) {
  try {
    xe(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (o) {
    g("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(o);
  }
}
let N;
function Pt() {
  N || (N = document.createElement("input"), N.type = "file", N.accept = ".json");
  function e() {
    return new Promise((o, n) => {
      N.onchange = async () => {
        const t = N.files;
        if (!t)
          return o(null);
        const s = t.item(0);
        return o(s ? { text: await s.text(), file: s } : null);
      }, N.oncancel = () => o(null), N.onerror = n, N.click();
    });
  }
  return e;
}
async function Vt(e) {
  try {
    const n = await Pt()();
    if (!n)
      return;
    const { text: t, file: s } = n;
    je(e, JSON.parse(t)), g(`Global state imported from "${s.name}".`);
  } catch (o) {
    g("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(o);
  }
}
function je(e, o) {
  for (const n in o) {
    const t = e.state.value[n];
    t ? Object.assign(t, o[n]) : e.state.value[n] = o[n];
  }
}
function w(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const Ce = "🍍 Pinia (root)", se = "_root";
function $t(e) {
  return le(e) ? {
    id: se,
    label: Ce
  } : {
    id: e.$id,
    label: e.$id
  };
}
function kt(e) {
  if (le(e)) {
    const n = Array.from(e._s.keys()), t = e._s;
    return {
      state: n.map((c) => ({
        editable: !0,
        key: c,
        value: e.state.value[c]
      })),
      getters: n.filter((c) => t.get(c)._getters).map((c) => {
        const i = t.get(c);
        return {
          editable: !1,
          key: c,
          value: i._getters.reduce((r, u) => (r[u] = i[u], r), {})
        };
      })
    };
  }
  const o = {
    state: Object.keys(e.$state).map((n) => ({
      editable: !0,
      key: n,
      value: e.$state[n]
    }))
  };
  return e._getters && e._getters.length && (o.getters = e._getters.map((n) => ({
    editable: !1,
    key: n,
    value: e[n]
  }))), e._customProperties.size && (o.customProperties = Array.from(e._customProperties).map((n) => ({
    editable: !0,
    key: n,
    value: e[n]
  }))), o;
}
function Tt(e) {
  return e ? Array.isArray(e) ? e.reduce((o, n) => (o.keys.push(n.key), o.operations.push(n.type), o.oldValue[n.key] = n.oldValue, o.newValue[n.key] = n.newValue, o), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: w(e.type),
    key: w(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function xt(e) {
  switch (e) {
    case O.direct:
      return "mutation";
    case O.patchFunction:
      return "$patch";
    case O.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let j = !0;
const z = [], V = "pinia:mutations", m = "pinia", { assign: At } = Object, X = (e) => "🍍 " + e;
function Dt(e, o) {
  Ve({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: z,
    app: e
  }, (n) => {
    typeof n.now != "function" && g("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: V,
      label: "Pinia 🍍",
      color: 15064968
    }), n.addInspector({
      id: m,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            Ot(o);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await Nt(o), n.sendInspectorTree(m), n.sendInspectorState(m);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            It(o);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await Vt(o), n.sendInspectorTree(m), n.sendInspectorState(m);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: 'Reset the state (with "$reset")',
          action: (t) => {
            const s = o._s.get(t);
            s ? typeof s.$reset != "function" ? g(`Cannot reset "${t}" store because it doesn't have a "$reset" method implemented.`, "warn") : (s.$reset(), g(`Store "${t}" reset.`)) : g(`Cannot reset "${t}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), n.on.inspectComponent((t, s) => {
      const c = t.componentInstance && t.componentInstance.proxy;
      if (c && c._pStores) {
        const i = t.componentInstance.proxy._pStores;
        Object.values(i).forEach((r) => {
          t.instanceData.state.push({
            type: X(r.$id),
            key: "state",
            editable: !0,
            value: r._isOptionsAPI ? {
              _custom: {
                value: B(r.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => r.$reset()
                  }
                ]
              }
            } : (
              // NOTE: workaround to unwrap transferred refs
              Object.keys(r.$state).reduce((u, d) => (u[d] = r.$state[d], u), {})
            )
          }), r._getters && r._getters.length && t.instanceData.state.push({
            type: X(r.$id),
            key: "getters",
            editable: !1,
            value: r._getters.reduce((u, d) => {
              try {
                u[d] = r[d];
              } catch (_) {
                u[d] = _;
              }
              return u;
            }, {})
          });
        });
      }
    }), n.on.getInspectorTree((t) => {
      if (t.app === e && t.inspectorId === m) {
        let s = [o];
        s = s.concat(Array.from(o._s.values())), t.rootNodes = (t.filter ? s.filter((c) => "$id" in c ? c.$id.toLowerCase().includes(t.filter.toLowerCase()) : Ce.toLowerCase().includes(t.filter.toLowerCase())) : s).map($t);
      }
    }), n.on.getInspectorState((t) => {
      if (t.app === e && t.inspectorId === m) {
        const s = t.nodeId === se ? o : o._s.get(t.nodeId);
        if (!s)
          return;
        s && (t.state = kt(s));
      }
    }), n.on.editInspectorState((t, s) => {
      if (t.app === e && t.inspectorId === m) {
        const c = t.nodeId === se ? o : o._s.get(t.nodeId);
        if (!c)
          return g(`store "${t.nodeId}" not found`, "error");
        const { path: i } = t;
        le(c) ? i.unshift("state") : (i.length !== 1 || !c._customProperties.has(i[0]) || i[0] in c.$state) && i.unshift("$state"), j = !1, t.set(c, i, t.state.value), j = !0;
      }
    }), n.on.editComponentState((t) => {
      if (t.type.startsWith("🍍")) {
        const s = t.type.replace(/^🍍\s*/, ""), c = o._s.get(s);
        if (!c)
          return g(`store "${s}" not found`, "error");
        const { path: i } = t;
        if (i[0] !== "state")
          return g(`Invalid path for store "${s}":
${i}
Only state can be modified.`);
        i[0] = "$state", j = !1, t.set(c, i, t.state.value), j = !0;
      }
    });
  });
}
function jt(e, o) {
  z.includes(X(o.$id)) || z.push(X(o.$id)), Ve({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: z,
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
    const t = typeof n.now == "function" ? n.now.bind(n) : Date.now;
    o.$onAction(({ after: i, onError: r, name: u, args: d }) => {
      const _ = Le++;
      n.addTimelineEvent({
        layerId: V,
        event: {
          time: t(),
          title: "🛫 " + u,
          subtitle: "start",
          data: {
            store: w(o.$id),
            action: w(u),
            args: d
          },
          groupId: _
        }
      }), i((h) => {
        P = void 0, n.addTimelineEvent({
          layerId: V,
          event: {
            time: t(),
            title: "🛬 " + u,
            subtitle: "end",
            data: {
              store: w(o.$id),
              action: w(u),
              args: d,
              result: h
            },
            groupId: _
          }
        });
      }), r((h) => {
        P = void 0, n.addTimelineEvent({
          layerId: V,
          event: {
            time: t(),
            logType: "error",
            title: "💥 " + u,
            subtitle: "end",
            data: {
              store: w(o.$id),
              action: w(u),
              args: d,
              error: h
            },
            groupId: _
          }
        });
      });
    }, !0), o._customProperties.forEach((i) => {
      we(() => ce(o[i]), (r, u) => {
        n.notifyComponentUpdate(), n.sendInspectorState(m), j && n.addTimelineEvent({
          layerId: V,
          event: {
            time: t(),
            title: "Change",
            subtitle: i,
            data: {
              newValue: r,
              oldValue: u
            },
            groupId: P
          }
        });
      }, { deep: !0 });
    }), o.$subscribe(({ events: i, type: r }, u) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(m), !j)
        return;
      const d = {
        time: t(),
        title: xt(r),
        data: At({ store: w(o.$id) }, Tt(i)),
        groupId: P
      };
      r === O.patchFunction ? d.subtitle = "⤵️" : r === O.patchObject ? d.subtitle = "🧩" : i && !Array.isArray(i) && (d.subtitle = i.type), i && (d.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: i
        }
      }), n.addTimelineEvent({
        layerId: V,
        event: d
      });
    }, { detached: !0, flush: "sync" });
    const s = o._hotUpdate;
    o._hotUpdate = $((i) => {
      s(i), n.addTimelineEvent({
        layerId: V,
        event: {
          time: t(),
          title: "🔥 " + o.$id,
          subtitle: "HMR update",
          data: {
            store: w(o.$id),
            info: w("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(m), n.sendInspectorState(m);
    });
    const { $dispose: c } = o;
    o.$dispose = () => {
      c(), n.notifyComponentUpdate(), n.sendInspectorTree(m), n.sendInspectorState(m), n.getSettings().logStoreChanges && g(`Disposed "${o.$id}" store 🗑`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(m), n.sendInspectorState(m), n.getSettings().logStoreChanges && g(`"${o.$id}" store installed 🆕`);
  });
}
let Le = 0, P;
function me(e, o, n) {
  const t = o.reduce((s, c) => (s[c] = B(e)[c], s), {});
  for (const s in t)
    e[s] = function() {
      const c = Le, i = n ? new Proxy(e, {
        get(...u) {
          return P = c, Reflect.get(...u);
        },
        set(...u) {
          return P = c, Reflect.set(...u);
        }
      }) : e;
      P = c;
      const r = t[s].apply(i, arguments);
      return P = void 0, r;
    };
}
function Ct({ app: e, store: o, options: n }) {
  if (o.$id.startsWith("__hot:"))
    return;
  o._isOptionsAPI = !!n.state, me(o, Object.keys(n.actions), o._isOptionsAPI);
  const t = o._hotUpdate;
  B(o)._hotUpdate = function(s) {
    t.apply(this, arguments), me(o, Object.keys(s._hmrPayload.actions), !!o._isOptionsAPI);
  }, jt(
    e,
    // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
    o
  );
}
function Lt() {
  const e = Se(!0), o = e.run(() => Z({}));
  let n = [], t = [];
  const s = $({
    install(c) {
      H(s), s._a = c, c.provide($e, s), c.config.globalProperties.$pinia = s, F && Dt(c, s), t.forEach((i) => n.push(i)), t = [];
    },
    use(c) {
      return !this._a && !Ie ? t.push(c) : n.push(c), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: o
  });
  return F && typeof Proxy < "u" && s.use(Ct), s;
}
function Ue(e, o) {
  for (const n in o) {
    const t = o[n];
    if (!(n in e))
      continue;
    const s = e[n];
    k(s) && k(t) && !C(t) && !K(t) ? e[n] = Ue(s, t) : e[n] = t;
  }
  return e;
}
const Re = () => {
};
function ye(e, o, n, t = Re) {
  e.push(o);
  const s = () => {
    const c = e.indexOf(o);
    c > -1 && (e.splice(c, 1), t());
  };
  return !n && Ke() && et(s), s;
}
function A(e, ...o) {
  e.slice().forEach((n) => {
    n(...o);
  });
}
const Ut = (e) => e();
function re(e, o) {
  e instanceof Map && o instanceof Map && o.forEach((n, t) => e.set(t, n)), e instanceof Set && o instanceof Set && o.forEach(e.add, e);
  for (const n in o) {
    if (!o.hasOwnProperty(n))
      continue;
    const t = o[n], s = e[n];
    k(s) && k(t) && e.hasOwnProperty(n) && !C(t) && !K(t) ? e[n] = re(s, t) : e[n] = t;
  }
  return e;
}
const Rt = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function Mt(e) {
  return !k(e) || !e.hasOwnProperty(Rt);
}
const { assign: S } = Object;
function ve(e) {
  return !!(C(e) && e.effect);
}
function be(e, o, n, t) {
  const { state: s, actions: c, getters: i } = o, r = n.state.value[e];
  let u;
  function d() {
    !r && (process.env.NODE_ENV === "production" || !t) && (n.state.value[e] = s ? s() : {});
    const _ = process.env.NODE_ENV !== "production" && t ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      _e(Z(s ? s() : {}).value)
    ) : _e(n.state.value[e]);
    return S(_, c, Object.keys(i || {}).reduce((h, y) => (process.env.NODE_ENV !== "production" && y in _ && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${y}" in store "${e}".`), h[y] = $(Oe(() => {
      H(n);
      const b = n._s.get(e);
      return i[y].call(b, b);
    })), h), {}));
  }
  return u = ie(e, d, o, n, t, !0), u;
}
function ie(e, o, n = {}, t, s, c) {
  let i;
  const r = S({ actions: {} }, n);
  if (process.env.NODE_ENV !== "production" && !t._e.active)
    throw new Error("Pinia destroyed");
  const u = {
    deep: !0
    // flush: 'post',
  };
  process.env.NODE_ENV !== "production" && !Ie && (u.onTrigger = (l) => {
    d ? b = l : d == !1 && !f._hotUpdating && (Array.isArray(b) ? b.push(l) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let d, _, h = [], y = [], b;
  const T = t.state.value[e];
  !c && !T && (process.env.NODE_ENV === "production" || !s) && (t.state.value[e] = {});
  const te = Z({});
  let ue;
  function fe(l) {
    let a;
    d = _ = !1, process.env.NODE_ENV !== "production" && (b = []), typeof l == "function" ? (l(t.state.value[e]), a = {
      type: O.patchFunction,
      storeId: e,
      events: b
    }) : (re(t.state.value[e], l), a = {
      type: O.patchObject,
      payload: l,
      storeId: e,
      events: b
    });
    const p = ue = Symbol();
    he().then(() => {
      ue === p && (d = !0);
    }), _ = !0, A(h, a, t.state.value[e]);
  }
  const Me = c ? function() {
    const { state: a } = n, p = a ? a() : {};
    this.$patch((v) => {
      S(v, p);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : Re
  );
  function Fe() {
    i.stop(), h = [], y = [], t._s.delete(e);
  }
  function de(l, a) {
    return function() {
      H(t);
      const p = Array.from(arguments), v = [], L = [];
      function He(E) {
        v.push(E);
      }
      function Be(E) {
        L.push(E);
      }
      A(y, {
        args: p,
        name: l,
        store: f,
        after: He,
        onError: Be
      });
      let U;
      try {
        U = a.apply(this && this.$id === e ? this : f, p);
      } catch (E) {
        throw A(L, E), E;
      }
      return U instanceof Promise ? U.then((E) => (A(v, E), E)).catch((E) => (A(L, E), Promise.reject(E))) : (A(v, U), U);
    };
  }
  const G = /* @__PURE__ */ $({
    actions: {},
    getters: {},
    state: [],
    hotState: te
  }), pe = {
    _p: t,
    // _s: scope,
    $id: e,
    $onAction: ye.bind(null, y),
    $patch: fe,
    $reset: Me,
    $subscribe(l, a = {}) {
      const p = ye(h, l, a.detached, () => v()), v = i.run(() => we(() => t.state.value[e], (L) => {
        (a.flush === "sync" ? _ : d) && l({
          storeId: e,
          type: O.direct,
          events: b
        }, L);
      }, S({}, u, a)));
      return p;
    },
    $dispose: Fe
  }, f = Ze(process.env.NODE_ENV !== "production" || F ? S(
    {
      _hmrPayload: G,
      _customProperties: $(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    pe
    // must be added later
    // setupStore
  ) : pe);
  t._s.set(e, f);
  const I = (t._a && t._a.runWithContext || Ut)(() => t._e.run(() => (i = Se()).run(o)));
  for (const l in I) {
    const a = I[l];
    if (C(a) && !ve(a) || K(a))
      process.env.NODE_ENV !== "production" && s ? J(te.value, l, W(I, l)) : c || (T && Mt(a) && (C(a) ? a.value = T[l] : re(a, T[l])), t.state.value[e][l] = a), process.env.NODE_ENV !== "production" && G.state.push(l);
    else if (typeof a == "function") {
      const p = process.env.NODE_ENV !== "production" && s ? a : de(l, a);
      I[l] = p, process.env.NODE_ENV !== "production" && (G.actions[l] = a), r.actions[l] = a;
    } else
      process.env.NODE_ENV !== "production" && ve(a) && (G.getters[l] = c ? (
        // @ts-expect-error
        n.getters[l]
      ) : a, ee && (I._getters || // @ts-expect-error: same
      (I._getters = $([]))).push(l));
  }
  if (S(f, I), S(B(f), I), Object.defineProperty(f, "$state", {
    get: () => process.env.NODE_ENV !== "production" && s ? te.value : t.state.value[e],
    set: (l) => {
      if (process.env.NODE_ENV !== "production" && s)
        throw new Error("cannot set hotState");
      fe((a) => {
        S(a, l);
      });
    }
  }), process.env.NODE_ENV !== "production" && (f._hotUpdate = $((l) => {
    f._hotUpdating = !0, l._hmrPayload.state.forEach((a) => {
      if (a in f.$state) {
        const p = l.$state[a], v = f.$state[a];
        typeof p == "object" && k(p) && k(v) ? Ue(p, v) : l.$state[a] = v;
      }
      J(f, a, W(l.$state, a));
    }), Object.keys(f.$state).forEach((a) => {
      a in l.$state || ne(f, a);
    }), d = !1, _ = !1, t.state.value[e] = W(l._hmrPayload, "hotState"), _ = !0, he().then(() => {
      d = !0;
    });
    for (const a in l._hmrPayload.actions) {
      const p = l[a];
      J(f, a, de(a, p));
    }
    for (const a in l._hmrPayload.getters) {
      const p = l._hmrPayload.getters[a], v = c ? (
        // special handling of options api
        Oe(() => (H(t), p.call(f, f)))
      ) : p;
      J(f, a, v);
    }
    Object.keys(f._hmrPayload.getters).forEach((a) => {
      a in l._hmrPayload.getters || ne(f, a);
    }), Object.keys(f._hmrPayload.actions).forEach((a) => {
      a in l._hmrPayload.actions || ne(f, a);
    }), f._hmrPayload = l._hmrPayload, f._getters = l._getters, f._hotUpdating = !1;
  })), F) {
    const l = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((a) => {
      Object.defineProperty(f, a, S({ value: f[a] }, l));
    });
  }
  return t._p.forEach((l) => {
    if (F) {
      const a = i.run(() => l({
        store: f,
        app: t._a,
        pinia: t,
        options: r
      }));
      Object.keys(a || {}).forEach((p) => f._customProperties.add(p)), S(f, a);
    } else
      S(f, i.run(() => l({
        store: f,
        app: t._a,
        pinia: t,
        options: r
      })));
  }), process.env.NODE_ENV !== "production" && f.$state && typeof f.$state == "object" && typeof f.$state.constructor == "function" && !f.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${f.$id}".`), T && c && n.hydrate && n.hydrate(f.$state, T), d = !0, _ = !0, f;
}
function Ft(e, o, n) {
  let t, s;
  const c = typeof o == "function";
  if (typeof e == "string")
    t = e, s = c ? n : o;
  else if (s = e, t = e.id, process.env.NODE_ENV !== "production" && typeof t != "string")
    throw new Error('[🍍]: "defineStore()" must be passed a store id as its first argument.');
  function i(r, u) {
    const d = ze();
    if (r = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && R && R._testing ? null : r) || (d ? qe($e, null) : null), r && H(r), process.env.NODE_ENV !== "production" && !R)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    r = R, r._s.has(t) || (c ? ie(t, o, s, r) : be(t, s, r), process.env.NODE_ENV !== "production" && (i._pinia = r));
    const _ = r._s.get(t);
    if (process.env.NODE_ENV !== "production" && u) {
      const h = "__hot:" + t, y = c ? ie(h, o, s, r, !0) : be(h, S({}, s), r, !0);
      u._hotUpdate(y), delete r.state.value[h], r._s.delete(h);
    }
    if (process.env.NODE_ENV !== "production" && ee) {
      const h = Xe();
      if (h && h.proxy && // avoid adding stores that are just built for hot module replacement
      !u) {
        const y = h.proxy, b = "_pStores" in y ? y._pStores : y._pStores = {};
        b[t] = _;
      }
    }
    return _;
  }
  return i.$id = t, i;
}
function Ht(e) {
  {
    e = B(e);
    const o = {};
    for (const n in e) {
      const t = e[n];
      (C(t) || K(t)) && (o[n] = // ---
      W(e, n));
    }
    return o;
  }
}
const Bt = (e) => {
  e ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "visible";
}, Gt = Ft("main", {
  state: () => ({
    isError: !1,
    ModalState: !1
  }),
  getters: {},
  actions: {
    async ModalChanger(e) {
      this.ModalState = e, Bt(e);
    }
  }
}), Jt = {
  key: 1,
  class: "container"
}, Wt = /* @__PURE__ */ Ee({
  __name: "App",
  setup(e) {
    const { isError: o } = Ht(Gt());
    return (n, t) => {
      const s = dt, c = st;
      return M(), q("div", null, [
        ce(o) ? (M(), tt(s, { key: 0 })) : (M(), q("div", Jt, [
          nt(c)
        ]))
      ]);
    };
  }
}), Qt = Lt();
ot(Wt).use(Qt).mount("#app");
