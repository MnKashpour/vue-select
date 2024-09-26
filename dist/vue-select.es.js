var E = Object.defineProperty, M = Object.defineProperties;
var x = Object.getOwnPropertyDescriptors;
var C = Object.getOwnPropertySymbols;
var I = Object.prototype.hasOwnProperty, N = Object.prototype.propertyIsEnumerable;
var A = (e, t, s) => t in e ? E(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s, f = (e, t) => {
  for (var s in t || (t = {}))
    I.call(t, s) && A(e, s, t[s]);
  if (C)
    for (var s of C(t))
      N.call(t, s) && A(e, s, t[s]);
  return e;
}, b = (e, t) => M(e, x(t));
import { openBlock as a, createElementBlock as r, createElementVNode as u, resolveDirective as K, normalizeClass as L, renderSlot as d, normalizeProps as h, guardReactiveProps as c, Fragment as B, renderList as D, createTextVNode as _, toDisplayString as O, createBlock as w, resolveDynamicComponent as v, createCommentVNode as y, mergeProps as k, toHandlers as j, withDirectives as S, vShow as P, createVNode as R, Transition as z, withCtx as $, withModifiers as F } from "vue";
const U = {
  props: {
    autoscroll: {
      type: Boolean,
      default: !0
    }
  },
  watch: {
    typeAheadPointer() {
      this.autoscroll && this.maybeAdjustScroll();
    },
    open(e) {
      this.autoscroll && e && this.$nextTick(() => this.maybeAdjustScroll());
    }
  },
  methods: {
    maybeAdjustScroll() {
      var t;
      const e = ((t = this.$refs.dropdownMenu) == null ? void 0 : t.children[this.typeAheadPointer]) || !1;
      if (e) {
        const s = this.getDropdownViewport(), { top: l, bottom: n, height: i } = e.getBoundingClientRect();
        if (l < s.top)
          return this.$refs.dropdownMenu.scrollTop = e.offsetTop;
        if (n > s.bottom)
          return this.$refs.dropdownMenu.scrollTop = e.offsetTop - (s.height - i);
      }
    },
    getDropdownViewport() {
      return this.$refs.dropdownMenu ? this.$refs.dropdownMenu.getBoundingClientRect() : {
        height: 0,
        top: 0,
        bottom: 0
      };
    }
  }
}, q = {
  data() {
    return {
      typeAheadPointer: -1
    };
  },
  watch: {
    filteredOptions() {
      for (let e = 0; e < this.filteredOptions.length; e++)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    open(e) {
      e && this.typeAheadToLastSelected();
    },
    selectedValue() {
      this.open && this.typeAheadToLastSelected();
    }
  },
  methods: {
    typeAheadUp() {
      for (let e = this.typeAheadPointer - 1; e >= 0; e--)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    typeAheadDown() {
      for (let e = this.typeAheadPointer + 1; e < this.filteredOptions.length; e++)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    typeAheadSelect() {
      const e = this.filteredOptions[this.typeAheadPointer];
      e && this.selectable(e) && this.select(e);
    },
    typeAheadToLastSelected() {
      this.typeAheadPointer = this.selectedValue.length !== 0 ? this.filteredOptions.indexOf(
        this.selectedValue[this.selectedValue.length - 1]
      ) : -1;
    }
  }
}, J = {
  props: {
    loading: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      mutableLoading: !1
    };
  },
  watch: {
    search() {
      this.$emit("search", this.search, this.toggleLoading);
    },
    loading(e) {
      this.mutableLoading = e;
    }
  },
  methods: {
    toggleLoading(e = null) {
      return e == null ? this.mutableLoading = !this.mutableLoading : this.mutableLoading = e;
    }
  }
}, V = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [l, n] of t)
    s[l] = n;
  return s;
}, H = {}, X = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}, Y = /* @__PURE__ */ u("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1), Q = [
  Y
];
function G(e, t) {
  return a(), r("svg", X, Q);
}
const W = /* @__PURE__ */ V(H, [["render", G]]), Z = {}, ee = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}, te = /* @__PURE__ */ u("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1), se = [
  te
];
function ie(e, t) {
  return a(), r("svg", ee, se);
}
const oe = /* @__PURE__ */ V(Z, [["render", ie]]), T = {
  Deselect: W,
  OpenIndicator: oe
}, le = {
  mounted(e, { instance: t }) {
    if (t.appendToBody) {
      const {
        height: s,
        top: l,
        left: n,
        width: i
      } = t.$refs.toggle.getBoundingClientRect();
      let m = window.scrollX || window.pageXOffset, o = window.scrollY || window.pageYOffset;
      e.unbindPosition = t.calculatePosition(e, t, {
        width: i + "px",
        left: m + n + "px",
        top: o + l + s + "px"
      }), document.body.appendChild(e);
    }
  },
  unmounted(e, { instance: t }) {
    t.appendToBody && (e.unbindPosition && typeof e.unbindPosition == "function" && e.unbindPosition(), e.parentNode && e.parentNode.removeChild(e));
  }
};
function ne(e) {
  const t = {};
  return Object.keys(e).sort().forEach((s) => {
    t[s] = e[s];
  }), JSON.stringify(t);
}
let ae = 0;
function re() {
  return ++ae;
}
const de = {
  components: f({}, T),
  directives: { appendToBody: le },
  mixins: [U, q, J],
  compatConfig: {
    MODE: 3
  },
  emits: [
    "open",
    "close",
    "update:modelValue",
    "search",
    "search:compositionstart",
    "search:compositionend",
    "search:keydown",
    "search:blur",
    "search:focus",
    "search:input",
    "option:created",
    "option:selecting",
    "option:selected",
    "option:deselecting",
    "option:deselected"
  ],
  props: {
    modelValue: {},
    components: {
      type: Object,
      default: () => ({})
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    clearable: {
      type: Boolean,
      default: !0
    },
    deselectFromDropdown: {
      type: Boolean,
      default: !1
    },
    searchable: {
      type: Boolean,
      default: !0
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: ""
    },
    transition: {
      type: String,
      default: "vs__fade"
    },
    clearSearchOnSelect: {
      type: Boolean,
      default: !0
    },
    closeOnSelect: {
      type: Boolean,
      default: !0
    },
    label: {
      type: String,
      default: "label"
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    reduce: {
      type: Function,
      default: (e) => e
    },
    selectable: {
      type: Function,
      default: (e) => !0
    },
    getOptionLabel: {
      type: Function,
      default(e) {
        return typeof e == "object" ? e.hasOwnProperty(this.label) ? e[this.label] : console.warn(
          `[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(e)}.
https://vue-select.org/api/props.html#getoptionlabel`
        ) : e;
      }
    },
    getOptionKey: {
      type: Function,
      default(e) {
        if (typeof e != "object")
          return e;
        try {
          return e.hasOwnProperty("id") ? e.id : ne(e);
        } catch (t) {
          return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`, e, t);
        }
      }
    },
    onTab: {
      type: Function,
      default: function() {
        this.selectOnTab && !this.isComposing && this.typeAheadSelect();
      }
    },
    taggable: {
      type: Boolean,
      default: !1
    },
    tabindex: {
      type: Number,
      default: null
    },
    pushTags: {
      type: Boolean,
      default: !1
    },
    filterable: {
      type: Boolean,
      default: !0
    },
    filterBy: {
      type: Function,
      default(e, t, s) {
        return (t || "").toLocaleLowerCase().indexOf(s.toLocaleLowerCase()) > -1;
      }
    },
    filter: {
      type: Function,
      default(e, t) {
        return e.filter((s) => {
          let l = this.getOptionLabel(s);
          return typeof l == "number" && (l = l.toString()), this.filterBy(s, l, t);
        });
      }
    },
    createOption: {
      type: Function,
      default(e) {
        return typeof this.optionList[0] == "object" ? { [this.label]: e } : e;
      }
    },
    resetOnOptionsChange: {
      default: !1,
      validator: (e) => ["function", "boolean"].includes(typeof e)
    },
    clearSearchOnBlur: {
      type: Function,
      default: function({ clearSearchOnSelect: e, multiple: t }) {
        return e && !t;
      }
    },
    noDrop: {
      type: Boolean,
      default: !1
    },
    inputId: {
      type: String
    },
    dir: {
      type: String,
      default: "auto"
    },
    selectOnTab: {
      type: Boolean,
      default: !1
    },
    selectOnKeyCodes: {
      type: Array,
      default: () => [13]
    },
    searchInputQuerySelector: {
      type: String,
      default: "[type=search]"
    },
    mapKeydown: {
      type: Function,
      default: (e, t) => e
    },
    appendToBody: {
      type: Boolean,
      default: !1
    },
    calculatePosition: {
      type: Function,
      default(e, t, { width: s, top: l, left: n }) {
        e.style.top = l, e.style.left = n, e.style.width = s;
      }
    },
    dropdownShouldOpen: {
      type: Function,
      default({ noDrop: e, open: t, mutableLoading: s }) {
        return e ? !1 : t && !s;
      }
    },
    uid: {
      type: [String, Number],
      default: () => re()
    },
    newOptionLabel: {
      type: String,
      default: "New"
    }
  },
  data() {
    return {
      search: "",
      open: !1,
      isComposing: !1,
      pushedTags: [],
      _value: [],
      deselectButtons: []
    };
  },
  computed: {
    isReducingValues() {
      return this.$props.reduce !== this.$options.props.reduce.default;
    },
    isTrackingValues() {
      return typeof this.modelValue == "undefined" || this.isReducingValues;
    },
    selectedValue() {
      let e = this.modelValue;
      return this.isTrackingValues && (e = this.$data._value), e != null && e !== "" ? [].concat(e) : [];
    },
    optionList() {
      return this.options.concat(this.pushTags ? this.pushedTags : []);
    },
    searchEl() {
      return this.$slots.search ? this.$refs.selectedOptions.querySelector(
        this.searchInputQuerySelector
      ) : this.$refs.search;
    },
    scope() {
      const e = {
        search: this.search,
        loading: this.loading,
        searching: this.searching,
        filteredOptions: this.filteredOptions
      };
      return {
        search: {
          attributes: f({
            disabled: this.disabled,
            placeholder: this.searchPlaceholder,
            tabindex: this.tabindex,
            readonly: !this.searchable,
            id: this.inputId,
            "aria-autocomplete": "list",
            "aria-labelledby": `vs${this.uid}__combobox`,
            "aria-controls": `vs${this.uid}__listbox`,
            ref: "search",
            type: "search",
            autocomplete: this.autocomplete,
            value: this.search
          }, this.dropdownOpen && this.filteredOptions[this.typeAheadPointer] ? {
            "aria-activedescendant": `vs${this.uid}__option-${this.typeAheadPointer}`
          } : {}),
          events: {
            compositionstart: () => this.isComposing = !0,
            compositionend: () => this.isComposing = !1,
            keydown: this.onSearchKeyDown,
            blur: this.onSearchBlur,
            focus: this.onSearchFocus,
            input: (t) => this.search = t.target.value
          }
        },
        spinner: {
          loading: this.mutableLoading
        },
        noOptions: {
          search: this.search,
          loading: this.mutableLoading,
          searching: this.searching
        },
        openIndicator: {
          attributes: {
            ref: "openIndicator",
            role: "presentation",
            class: "vs__open-indicator"
          }
        },
        listHeader: e,
        listFooter: e,
        header: b(f({}, e), { deselect: this.deselect }),
        footer: b(f({}, e), { deselect: this.deselect })
      };
    },
    childComponents() {
      return f(f({}, T), this.components);
    },
    stateClasses() {
      return {
        "vs--open": this.dropdownOpen,
        "vs--single": !this.multiple,
        "vs--multiple": this.multiple,
        "vs--searching": this.searching && !this.noDrop,
        "vs--searchable": this.searchable && !this.noDrop,
        "vs--unsearchable": !this.searchable,
        "vs--loading": this.mutableLoading,
        "vs--disabled": this.disabled
      };
    },
    searching() {
      return !!this.search;
    },
    dropdownOpen() {
      return this.dropdownShouldOpen(this);
    },
    searchPlaceholder() {
      return this.isValueEmpty && this.placeholder ? this.placeholder : void 0;
    },
    filteredOptions() {
      const e = [].concat(this.optionList);
      if (!this.filterable && !this.taggable)
        return e;
      const t = this.search.length ? this.filter(e, this.search, this) : e;
      if (this.taggable && this.search.length) {
        const s = this.createOption(this.search);
        this.optionExists(s) || t.push(s);
      }
      return t;
    },
    isValueEmpty() {
      return this.selectedValue.length === 0;
    },
    showClearButton() {
      return !this.multiple && this.clearable && !this.open && !this.isValueEmpty;
    }
  },
  watch: {
    options(e, t) {
      const s = () => typeof this.resetOnOptionsChange == "function" ? this.resetOnOptionsChange(
        e,
        t,
        this.selectedValue
      ) : this.resetOnOptionsChange;
      !this.taggable && s() && this.clearSelection(), this.modelValue && this.isTrackingValues && this.setInternalValueFromOptions(this.modelValue);
    },
    modelValue: {
      immediate: !0,
      handler(e) {
        this.isTrackingValues && this.setInternalValueFromOptions(e);
      }
    },
    multiple() {
      this.clearSelection();
    },
    open(e) {
      this.$emit(e ? "open" : "close");
    }
  },
  created() {
    this.mutableLoading = this.loading;
  },
  methods: {
    setInternalValueFromOptions(e) {
      Array.isArray(e) ? this.$data._value = e.map(
        (t) => this.findOptionFromReducedValue(t)
      ) : this.$data._value = this.findOptionFromReducedValue(e);
    },
    select(e) {
      this.$emit("option:selecting", e), this.isOptionSelected(e) ? this.deselectFromDropdown && (this.clearable || this.multiple && this.selectedValue.length > 1) && this.deselect(e) : (this.taggable && !this.optionExists(e) && (this.$emit("option:created", e), this.pushTag(e)), this.multiple && (e = this.selectedValue.concat(e)), this.updateValue(e), this.$emit("option:selected", e)), this.onAfterSelect(e);
    },
    deselect(e) {
      this.$emit("option:deselecting", e), this.updateValue(
        this.selectedValue.filter((t) => !this.optionComparator(t, e))
      ), this.$emit("option:deselected", e);
    },
    clearSelection() {
      this.updateValue(this.multiple ? [] : null);
    },
    onAfterSelect(e) {
      this.closeOnSelect && (this.open = !this.open, this.searchEl.blur()), this.clearSearchOnSelect && (this.search = "");
    },
    updateValue(e) {
      typeof this.modelValue == "undefined" && (this.$data._value = e), e !== null && (Array.isArray(e) ? e = e.map((t) => this.reduce(t)) : e = this.reduce(e)), this.$emit("update:modelValue", e);
    },
    toggleDropdown(e) {
      const t = e.target !== this.searchEl;
      t && e.preventDefault();
      const s = [
        ...this.deselectButtons || [],
        this.$refs.clearButton
      ];
      if (this.searchEl === void 0 || s.filter(Boolean).some((l) => l.contains(e.target) || l === e.target)) {
        e.preventDefault();
        return;
      }
      this.open && t ? this.searchEl.blur() : this.disabled || (this.open = !0, this.searchEl.focus());
    },
    isOptionSelected(e) {
      return this.selectedValue.some(
        (t) => this.optionComparator(t, e)
      );
    },
    isOptionDeselectable(e) {
      return this.isOptionSelected(e) && this.deselectFromDropdown;
    },
    optionComparator(e, t) {
      return this.getOptionKey(e) === this.getOptionKey(t);
    },
    findOptionFromReducedValue(e) {
      const t = (l) => JSON.stringify(this.reduce(l)) === JSON.stringify(e), s = [...this.options, ...this.pushedTags].filter(t);
      return s.length === 1 ? s[0] : s.find(
        (l) => this.optionComparator(l, this.$data._value)
      ) || e;
    },
    closeSearchOptions() {
      this.open = !1, this.$emit("search:blur");
    },
    maybeDeleteValue() {
      if (!this.searchEl.value.length && this.selectedValue && this.selectedValue.length && this.clearable) {
        let e = null;
        this.multiple && (e = [
          ...this.selectedValue.slice(0, this.selectedValue.length - 1)
        ]), this.updateValue(e);
      }
    },
    optionExists(e) {
      return this.optionList.some(
        (t) => this.optionComparator(t, e)
      );
    },
    normalizeOptionForSlot(e) {
      return typeof e == "object" ? e : { [this.label]: e };
    },
    pushTag(e) {
      this.pushedTags.push(e);
    },
    onEscape() {
      this.search.length ? this.search = "" : this.searchEl.blur();
    },
    onSearchBlur() {
      if (this.mousedown && !this.searching)
        this.mousedown = !1;
      else {
        const { clearSearchOnSelect: e, multiple: t } = this;
        this.clearSearchOnBlur({ clearSearchOnSelect: e, multiple: t }) && (this.search = ""), this.closeSearchOptions();
        return;
      }
      if (this.search.length === 0 && this.options.length === 0) {
        this.closeSearchOptions();
        return;
      }
    },
    onSearchFocus() {
      this.open = !0, this.$emit("search:focus");
    },
    onMousedown() {
      this.mousedown = !0;
    },
    onMouseUp() {
      this.mousedown = !1;
    },
    onSearchKeyDown(e) {
      const t = (n) => (n.preventDefault(), !this.isComposing && this.typeAheadSelect()), s = {
        8: (n) => this.maybeDeleteValue(),
        9: (n) => this.onTab(),
        27: (n) => this.onEscape(),
        38: (n) => (n.preventDefault(), this.typeAheadUp()),
        40: (n) => (n.preventDefault(), this.typeAheadDown())
      };
      this.selectOnKeyCodes.forEach(
        (n) => s[n] = t
      );
      const l = this.mapKeydown(s, this);
      if (typeof l[e.keyCode] == "function")
        return l[e.keyCode](e);
    }
  }
}, he = ["dir"], ce = ["id", "aria-expanded", "aria-owns"], ue = {
  ref: "selectedOptions",
  class: "vs__selected-options"
}, pe = ["disabled", "title", "aria-label", "onClick"], fe = {
  ref: "actions",
  class: "vs__actions"
}, ge = ["disabled"], ye = { class: "vs__spinner" }, me = ["id"], be = ["id", "aria-selected", "onMouseover", "onClick"], _e = {
  key: 0,
  class: "vs__new-option-label"
}, Oe = {
  key: 0,
  class: "vs__no-options"
}, we = ["id"];
function ve(e, t, s, l, n, i) {
  const m = K("append-to-body");
  return a(), r("div", {
    dir: s.dir,
    class: L(["v-select", i.stateClasses])
  }, [
    d(e.$slots, "header", h(c(i.scope.header))),
    u("div", {
      id: `vs${s.uid}__combobox`,
      ref: "toggle",
      class: "vs__dropdown-toggle",
      role: "combobox",
      "aria-expanded": i.dropdownOpen.toString(),
      "aria-owns": `vs${s.uid}__listbox`,
      "aria-label": "Search for option",
      onMousedown: t[1] || (t[1] = (o) => i.toggleDropdown(o))
    }, [
      u("div", ue, [
        (a(!0), r(B, null, D(i.selectedValue, (o, p) => d(e.$slots, "selected-option-container", {
          option: i.normalizeOptionForSlot(o),
          deselect: i.deselect,
          multiple: s.multiple,
          disabled: s.disabled
        }, () => [
          (a(), r("span", {
            key: s.getOptionKey(o),
            class: "vs__selected"
          }, [
            d(e.$slots, "selected-option", h(c(i.normalizeOptionForSlot(o))), () => [
              _(O(s.getOptionLabel(o)), 1)
            ]),
            s.multiple ? (a(), r("button", {
              key: 0,
              ref_for: !0,
              ref: (g) => n.deselectButtons[p] = g,
              disabled: s.disabled,
              type: "button",
              class: "vs__deselect",
              title: `Deselect ${s.getOptionLabel(o)}`,
              "aria-label": `Deselect ${s.getOptionLabel(o)}`,
              onClick: (g) => i.deselect(o)
            }, [
              (a(), w(v(i.childComponents.Deselect)))
            ], 8, pe)) : y("", !0)
          ]))
        ])), 256)),
        d(e.$slots, "search", h(c(i.scope.search)), () => [
          u("input", k({ class: "vs__search" }, i.scope.search.attributes, j(i.scope.search.events, !0)), null, 16)
        ])
      ], 512),
      u("div", fe, [
        S(u("button", {
          ref: "clearButton",
          disabled: s.disabled,
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          onClick: t[0] || (t[0] = (...o) => i.clearSelection && i.clearSelection(...o))
        }, [
          (a(), w(v(i.childComponents.Deselect)))
        ], 8, ge), [
          [P, i.showClearButton]
        ]),
        d(e.$slots, "open-indicator", h(c(i.scope.openIndicator)), () => [
          s.noDrop ? y("", !0) : (a(), w(v(i.childComponents.OpenIndicator), h(k({ key: 0 }, i.scope.openIndicator.attributes)), null, 16))
        ]),
        d(e.$slots, "spinner", h(c(i.scope.spinner)), () => [
          S(u("div", ye, "Loading...", 512), [
            [P, e.mutableLoading]
          ])
        ])
      ], 512)
    ], 40, ce),
    R(z, { name: s.transition }, {
      default: $(() => [
        i.dropdownOpen ? S((a(), r("ul", {
          id: `vs${s.uid}__listbox`,
          ref: "dropdownMenu",
          key: `vs${s.uid}__listbox`,
          class: "vs__dropdown-menu",
          role: "listbox",
          tabindex: "-1",
          onMousedown: t[2] || (t[2] = F((...o) => i.onMousedown && i.onMousedown(...o), ["prevent"])),
          onMouseup: t[3] || (t[3] = (...o) => i.onMouseUp && i.onMouseUp(...o))
        }, [
          d(e.$slots, "list-header", h(c(i.scope.listHeader))),
          (a(!0), r(B, null, D(i.filteredOptions, (o, p) => (a(), r("li", {
            id: `vs${s.uid}__option-${p}`,
            key: s.getOptionKey(o),
            role: "option",
            class: L(["vs__dropdown-option", {
              "vs__dropdown-option--deselect": i.isOptionDeselectable(o) && p === e.typeAheadPointer,
              "vs__dropdown-option--selected": i.isOptionSelected(o),
              "vs__dropdown-option--highlight": p === e.typeAheadPointer,
              "vs__dropdown-option--disabled": !s.selectable(o)
            }]),
            "aria-selected": p === e.typeAheadPointer ? !0 : null,
            onMouseover: (g) => s.selectable(o) ? e.typeAheadPointer = p : null,
            onClick: F((g) => s.selectable(o) ? i.select(o) : null, ["prevent", "stop"])
          }, [
            d(e.$slots, "option", h(c(i.normalizeOptionForSlot(o))), () => [
              _(O(s.getOptionLabel(o)), 1)
            ]),
            s.taggable && !i.optionExists(o) ? (a(), r("span", _e, O(s.newOptionLabel), 1)) : y("", !0)
          ], 42, be))), 128)),
          i.filteredOptions.length === 0 ? (a(), r("li", Oe, [
            d(e.$slots, "no-options", h(c(i.scope.noOptions)), () => [
              _(" Sorry, no matching options. ")
            ])
          ])) : y("", !0),
          d(e.$slots, "list-footer", h(c(i.scope.listFooter)))
        ], 40, me)), [
          [m]
        ]) : (a(), r("ul", {
          key: 1,
          id: `vs${s.uid}__listbox`,
          role: "listbox",
          style: { display: "none", visibility: "hidden" }
        }, null, 8, we))
      ]),
      _: 3
    }, 8, ["name"]),
    d(e.$slots, "footer", h(c(i.scope.footer)))
  ], 10, he);
}
const Ce = /* @__PURE__ */ V(de, [["render", ve]]);
export {
  Ce as default
};
