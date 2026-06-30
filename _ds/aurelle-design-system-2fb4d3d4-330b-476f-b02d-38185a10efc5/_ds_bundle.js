/* @ds-bundle: {"format":3,"namespace":"AurelleDesignSystem_2fb4d3","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"TextLink","sourcePath":"components/actions/TextLink.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"Divider","sourcePath":"components/content/Divider.jsx"},{"name":"Eyebrow","sourcePath":"components/content/Eyebrow.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"SiteNav","sourcePath":"components/navigation/SiteNav.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"98268eaca0e4","components/actions/IconButton.jsx":"3d9b534324ea","components/actions/TextLink.jsx":"0cd2306ce55e","components/brand/Wordmark.jsx":"77090911b49a","components/content/Badge.jsx":"5adbbcb54132","components/content/Card.jsx":"0d25c422e505","components/content/Divider.jsx":"ff3740aca9bb","components/content/Eyebrow.jsx":"ec90649a1832","components/forms/Checkbox.jsx":"01f2b95c1bc3","components/forms/Input.jsx":"6b7daec0f90a","components/forms/Select.jsx":"57b20de7f3d2","components/forms/Textarea.jsx":"60efdd1f1af7","components/navigation/SiteNav.jsx":"fd39dc05e615"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AurelleDesignSystem_2fb4d3 = window.AurelleDesignSystem_2fb4d3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Aurelle Button — quiet, precise, architectural. One job each.
 * Labels say exactly what happens ("Book a consultation"), never "Submit".
 */
function Button({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const sizes = {
    small: {
      padding: "0.5rem 1.25rem",
      fontSize: "0.8125rem"
    },
    medium: {
      padding: "0.75rem 2rem",
      fontSize: "0.9375rem"
    },
    large: {
      padding: "1rem 2.5rem",
      fontSize: "1rem"
    }
  };
  const base = {
    fontFamily: "var(--font-body)",
    fontWeight: "var(--weight-medium)",
    letterSpacing: "0.01em",
    lineHeight: 1,
    borderRadius: "var(--radius)",
    border: "1px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "background var(--duration-hover) var(--ease), color var(--duration-hover) var(--ease), border-color var(--duration-hover) var(--ease)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    opacity: disabled ? 0.5 : 1,
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: hover && !disabled ? "var(--bronze)" : "var(--espresso)",
      color: "var(--ivory)"
    },
    secondary: {
      background: hover && !disabled ? "var(--linen)" : "transparent",
      color: "var(--espresso)",
      borderColor: "var(--espresso)"
    },
    ghost: {
      background: hover && !disabled ? "var(--linen)" : "transparent",
      color: "var(--espresso)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      ...base,
      ...variants[variant],
      transform: active && !disabled ? "translateY(0.5px)" : "none",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Aurelle IconButton — a square, quiet affordance for a single hairline icon
 * (menu, close, arrow). Pass the icon as children (e.g. a Lucide <i data-lucide> or
 * an inline SVG). Always provide an ariaLabel; the icon alone is never the label.
 */
function IconButton({
  children,
  ariaLabel,
  size = "medium",
  variant = "ghost",
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const dims = {
    small: 32,
    medium: 40,
    large: 48
  }[size];
  const variants = {
    ghost: {
      background: hover && !disabled ? "var(--linen)" : "transparent",
      color: "var(--espresso)",
      border: "1px solid transparent"
    },
    outline: {
      background: hover && !disabled ? "var(--linen)" : "transparent",
      color: "var(--espresso)",
      border: "1px solid var(--stone)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dims,
      height: dims,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "background var(--duration-hover) var(--ease)",
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/actions/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Aurelle TextLink — Espresso at rest with no underline; Bronze with a 1px
 * underline on hover. The quietest interactive element. Use inline or standalone.
 */
function TextLink({
  children,
  href = "#",
  withArrow = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "inherit",
      color: hover ? "var(--bronze)" : "var(--espresso)",
      textDecoration: "none",
      borderBottom: hover ? "1px solid var(--bronze)" : "1px solid transparent",
      paddingBottom: "1px",
      display: "inline-flex",
      alignItems: "center",
      gap: "0.4rem",
      transition: "color var(--duration-hover) var(--ease), border-color var(--duration-hover) var(--ease)",
      ...style
    }
  }, rest), children, withArrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      transform: hover ? "translateX(3px)" : "none",
      transition: "transform var(--duration-hover) var(--ease)"
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Aurelle Wordmark — the logo rendered as live type, never artwork. Cormorant Garamond,
 * light weight, wide architectural tracking. Optional "Founded by Mansi" signature.
 * The brand forbids brushes, lips, crowns, diamonds, faces, flowers — it is abstract.
 */
function Wordmark({
  signature = false,
  size = 28,
  color = "var(--espresso)",
  as = "div",
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    "aria-label": "Aurelle",
    style: {
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "center",
      lineHeight: 1,
      color,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-regular)",
      fontSize: size,
      letterSpacing: "0.32em",
      textTransform: "uppercase",
      paddingLeft: "0.32em" /* optical balance for trailing tracking */
    }
  }, "Aurelle"), signature && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-regular)",
      fontSize: Math.max(8, size * 0.28),
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: "var(--taupe)",
      marginTop: size * 0.28,
      paddingLeft: "0.24em"
    }
  }, "Founded by Mansi"));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/content/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Aurelle Badge — a quiet capsule-free label. Architectural 2px radius (never a pill).
 * Use for editorial categories ("Bridal", "Journal") in muted tones, never for urgency.
 */
function Badge({
  children,
  tone = "neutral",
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      background: "var(--linen)",
      color: "var(--espresso)",
      border: "1px solid transparent"
    },
    outline: {
      background: "transparent",
      color: "var(--taupe)",
      border: "1px solid var(--stone)"
    },
    accent: {
      background: "var(--champagne)",
      color: "var(--espresso)",
      border: "1px solid transparent"
    },
    dark: {
      background: "var(--espresso)",
      color: "var(--ivory)",
      border: "1px solid transparent"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-eyebrow)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      padding: "0.3rem 0.7rem",
      borderRadius: "var(--radius)",
      lineHeight: 1.2,
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Aurelle Card — a Bone surface on the Ivory ground, separated by colour and space,
 * not shadow. Optional hairline Stone border; 2px radius; generous padding.
 * Set `interactive` for a quiet lift on hover (e.g. a portfolio or experience card).
 */
function Card({
  children,
  bordered = true,
  interactive = false,
  padding = "var(--space-5)",
  style,
  onClick,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: "var(--bone)",
      border: bordered ? "1px solid var(--stone)" : "1px solid transparent",
      borderRadius: "var(--radius)",
      padding,
      cursor: interactive ? "pointer" : "default",
      transform: interactive && hover ? "translateY(-4px)" : "none",
      boxShadow: interactive && hover ? "var(--shadow-float)" : "none",
      transition: "transform var(--duration-enter) var(--ease), box-shadow var(--duration-enter) var(--ease)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Aurelle Divider — a 1px Stone hairline used to structure, never to decorate.
 * `ornament` adds a centred middot for an editorial section break.
 */
function Divider({
  ornament = false,
  spacing = "var(--space-5)",
  style,
  ...rest
}) {
  if (ornament) {
    return /*#__PURE__*/React.createElement("div", _extends({
      role: "separator",
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        margin: `${spacing} 0`,
        color: "var(--mushroom)",
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--stone)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        fontSize: "0.75rem",
        letterSpacing: "0.3em"
      }
    }, "\xB7"), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--stone)"
      }
    }));
  }
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: "none",
      borderTop: "1px solid var(--stone)",
      margin: `${spacing} 0`,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Divider.jsx", error: String((e && e.message) || e) }); }

// components/content/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Aurelle Eyebrow — the one uppercase element in the system. Inter 500, 0.18em tracking,
 * Taupe by default. It labels a section quietly; it never shouts.
 */
function Eyebrow({
  children,
  color = "var(--taupe)",
  as = "div",
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-eyebrow)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      lineHeight: "var(--lh-eyebrow)",
      color,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Aurelle Checkbox — a small square (radius 2px) with a hairline Stone border that
 * fills Espresso when checked. Calm, no animation beyond a 200ms fade.
 */
function Checkbox({
  label,
  id,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.625rem",
      fontFamily: "var(--font-body)",
      fontSize: "0.9375rem",
      color: "var(--espresso)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled,
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      width: 18,
      height: 18,
      margin: 0,
      flexShrink: 0,
      borderRadius: "var(--radius)",
      border: "1px solid var(--stone)",
      background: checked ?? defaultChecked ? "var(--espresso)" : "var(--bone)",
      backgroundImage: checked ?? defaultChecked ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2.5 6.2 5 8.5 9.5 3.5' fill='none' stroke='%23F4EFE6' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")" : "none",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background var(--duration-hover) var(--ease)"
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Aurelle Input — Bone field, 1px Stone border, Espresso text, Taupe placeholder.
 * Label sits above in Caption size. Errors speak calmly in Bronze, never red.
 */
function Input({
  label,
  id,
  type = "text",
  placeholder,
  value,
  defaultValue,
  onChange,
  error,
  disabled = false,
  required = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-caption)",
      letterSpacing: "var(--ls-caption)",
      color: "var(--taupe)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      fontFamily: "var(--font-body)",
      fontSize: "0.9375rem",
      color: "var(--espresso)",
      background: "var(--bone)",
      border: `1px solid ${error ? "var(--bronze)" : "var(--stone)"}`,
      borderRadius: "var(--radius)",
      padding: "0.75rem 1rem",
      outline: focus ? "2px solid var(--champagne)" : "none",
      outlineOffset: "1px",
      opacity: disabled ? 0.5 : 1,
      transition: "border-color var(--duration-hover) var(--ease)"
    }
  }, rest)), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.8125rem",
      color: "var(--bronze)"
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Aurelle Select — Bone field with a hairline Stone border and a quiet caret.
 * Options passed as an array of { value, label } or strings.
 */
function Select({
  label,
  id,
  options = [],
  value,
  defaultValue,
  onChange,
  disabled = false,
  placeholder,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const norm = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-caption)",
      letterSpacing: "var(--ls-caption)",
      color: "var(--taupe)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      appearance: "none",
      WebkitAppearance: "none",
      fontFamily: "var(--font-body)",
      fontSize: "0.9375rem",
      color: "var(--espresso)",
      background: "var(--bone)",
      border: "1px solid var(--stone)",
      borderRadius: "var(--radius)",
      padding: "0.75rem 2.5rem 0.75rem 1rem",
      outline: focus ? "2px solid var(--champagne)" : "none",
      outlineOffset: "1px",
      opacity: disabled ? 0.5 : 1,
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), norm.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: "1rem",
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--taupe)",
      pointerEvents: "none",
      fontSize: "0.7rem"
    }
  }, "\u25BE")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Aurelle Textarea — multi-line counterpart to Input, same Bone/Stone/Champagne language.
 */
function Textarea({
  label,
  id,
  placeholder,
  value,
  defaultValue,
  onChange,
  error,
  rows = 4,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-caption)",
      letterSpacing: "var(--ls-caption)",
      color: "var(--taupe)"
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      fontFamily: "var(--font-body)",
      fontSize: "0.9375rem",
      lineHeight: 1.6,
      color: "var(--espresso)",
      background: "var(--bone)",
      border: `1px solid ${error ? "var(--bronze)" : "var(--stone)"}`,
      borderRadius: "var(--radius)",
      padding: "0.75rem 1rem",
      outline: focus ? "2px solid var(--champagne)" : "none",
      outlineOffset: "1px",
      resize: "vertical",
      opacity: disabled ? 0.5 : 1,
      transition: "border-color var(--duration-hover) var(--ease)"
    }
  }, rest)), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.8125rem",
      color: "var(--bronze)"
    }
  }, error));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Aurelle SiteNav — minimal horizontal navigation. Wordmark left, sentence-case links
 * right with generous tracking. Quiet by default; pass onDark for full-bleed sections.
 * Links are { label, href }. The active link is underlined in Bronze.
 */
function SiteNav({
  links = [],
  activeHref,
  cta,
  onDark = false,
  style,
  ...rest
}) {
  const ink = onDark ? "var(--ivory)" : "var(--espresso)";
  const muted = onDark ? "rgba(244,239,230,0.7)" : "var(--taupe)";
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "var(--space-3) var(--space-5)",
      background: onDark ? "transparent" : "var(--ivory)",
      borderBottom: onDark ? "1px solid rgba(244,239,230,0.18)" : "1px solid var(--stone)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 22,
    color: ink
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, links.map(l => /*#__PURE__*/React.createElement(NavLink, {
    key: l.href,
    link: l,
    active: l.href === activeHref,
    ink: ink,
    muted: muted
  })), cta && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "var(--space-2)"
    }
  }, cta)));
}
function NavLink({
  link,
  active,
  ink,
  muted
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: link.href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "0.875rem",
      letterSpacing: "0.04em",
      textDecoration: "none",
      color: active ? ink : hover ? ink : muted,
      borderBottom: active ? "1px solid var(--bronze)" : "1px solid transparent",
      paddingBottom: "2px",
      transition: "color var(--duration-hover) var(--ease)",
      whiteSpace: "nowrap"
    }
  }, link.label);
}
Object.assign(__ds_scope, { SiteNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteNav.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.SiteNav = __ds_scope.SiteNav;

})();
