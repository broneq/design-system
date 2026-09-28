/* @ds-bundle: {"format":4,"namespace":"BroniszewskiDesignSystem_db82bc","components":[{"name":"CaseStudyCard","sourcePath":"components/cards/CaseStudyCard/CaseStudyCard.jsx"},{"name":"CooperationCard","sourcePath":"components/cards/CooperationCard/CooperationCard.jsx"},{"name":"ServiceCard","sourcePath":"components/cards/ServiceCard/ServiceCard.jsx"},{"name":"ArticleImage","sourcePath":"components/content/ArticleImage/ArticleImage.jsx"},{"name":"ArticleLayout","sourcePath":"components/content/ArticleLayout/ArticleLayout.jsx"},{"name":"CaseFacts","sourcePath":"components/content/CaseFacts/CaseFacts.jsx"},{"name":"CaseSection","sourcePath":"components/content/CaseSection/CaseSection.jsx"},{"name":"Pagination","sourcePath":"components/content/Pagination/Pagination.jsx"},{"name":"ProblemListItem","sourcePath":"components/content/ProblemListItem/ProblemListItem.jsx"},{"name":"TextSeparator","sourcePath":"components/content/ProblemListItem/ProblemListItem.jsx"},{"name":"PullQuote","sourcePath":"components/content/PullQuote/PullQuote.jsx"},{"name":"TimelineItem","sourcePath":"components/content/TimelineItem/TimelineItem.jsx"},{"name":"Timeline","sourcePath":"components/content/TimelineItem/TimelineItem.jsx"},{"name":"Button","sourcePath":"components/core/Button/Button.jsx"},{"name":"CheckList","sourcePath":"components/core/CheckList/CheckList.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow/Eyebrow.jsx"},{"name":"LiveBadge","sourcePath":"components/core/LiveBadge/LiveBadge.jsx"},{"name":"PageHeader","sourcePath":"components/core/PageHeader/PageHeader.jsx"},{"name":"SectionHeader","sourcePath":"components/core/SectionHeader/SectionHeader.jsx"},{"name":"Segments","sourcePath":"components/core/Segments/Segments.jsx"},{"name":"Counter","sourcePath":"components/core/Segments/Segments.jsx"},{"name":"Stat","sourcePath":"components/core/Stat/Stat.jsx"},{"name":"Tag","sourcePath":"components/core/Tag/Tag.jsx"},{"name":"TagList","sourcePath":"components/core/Tag/Tag.jsx"},{"name":"ContactForm","sourcePath":"components/forms/ContactForm/ContactForm.jsx"},{"name":"FinalCTA","sourcePath":"components/layout/FinalCTA/FinalCTA.jsx"},{"name":"Footer","sourcePath":"components/layout/Footer/Footer.jsx"},{"name":"Logo","sourcePath":"components/layout/Header/Header.jsx"},{"name":"Header","sourcePath":"components/layout/Header/Header.jsx"},{"name":"Hero","sourcePath":"components/layout/Hero/Hero.jsx"}],"sourceHashes":{"components/cards/CaseStudyCard/CaseStudyCard.jsx":"9330f17c3c04","components/cards/CooperationCard/CooperationCard.jsx":"0c0f410c7b9f","components/cards/ServiceCard/ServiceCard.jsx":"5049e8d8d56b","components/content/ArticleImage/ArticleImage.jsx":"1d36790ed362","components/content/ArticleLayout/ArticleLayout.jsx":"77d78fbc1040","components/content/CaseFacts/CaseFacts.jsx":"7c36c9609f27","components/content/CaseSection/CaseSection.jsx":"bef88fb0495f","components/content/Pagination/Pagination.jsx":"b007de27b6fe","components/content/ProblemListItem/ProblemListItem.jsx":"7b600462d885","components/content/PullQuote/PullQuote.jsx":"85e6b3c6de24","components/content/TimelineItem/TimelineItem.jsx":"f8e1bd503d70","components/core/Button/Button.jsx":"a8ef412238b2","components/core/CheckList/CheckList.jsx":"2fe1eea8d852","components/core/Eyebrow/Eyebrow.jsx":"be11d8da1607","components/core/LiveBadge/LiveBadge.jsx":"cd5b0ea8abb0","components/core/PageHeader/PageHeader.jsx":"df6fd0205bf7","components/core/SectionHeader/SectionHeader.jsx":"2b70d4176675","components/core/Segments/Segments.jsx":"b8c7c25b73bc","components/core/Stat/Stat.jsx":"8355c3d12afe","components/core/Tag/Tag.jsx":"93687b7bd5aa","components/forms/ContactForm/ContactForm.jsx":"731f4d2ab810","components/layout/FinalCTA/FinalCTA.jsx":"084326b7e5fe","components/layout/Footer/Footer.jsx":"fd9875f8705a","components/layout/Header/Header.jsx":"61650e789e5c","components/layout/Hero/Hero.jsx":"cecb9393afd4","explorations/image-slot.js":"fff26d081c8d","ui_kits/website/CaseStudiesScreen.jsx":"111ed102bb0e","ui_kits/website/CaseStudyScreen.jsx":"165823a54e6c","ui_kits/website/ContactScreen.jsx":"0d801427d9af","ui_kits/website/HomeScreen.jsx":"a8ff03e6f167","ui_kits/website/ServiceScreen.jsx":"119fd6f2b6dd","ui_kits/website/data.js":"bb6d4ded440a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BroniszewskiDesignSystem_db82bc = window.BroniszewskiDesignSystem_db82bc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/ArticleImage/ArticleImage.jsx
try { (() => {
function ArticleImage({
  src,
  alt,
  caption
}) {
  return /*#__PURE__*/React.createElement("figure", {
    className: "bn-article-image"
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    loading: "lazy"
  }), caption && /*#__PURE__*/React.createElement("figcaption", null, caption));
}
Object.assign(__ds_scope, { ArticleImage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ArticleImage/ArticleImage.jsx", error: String((e && e.message) || e) }); }

// components/content/ArticleLayout/ArticleLayout.jsx
try { (() => {
function ArticleLayout({
  children
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "bn-article"
  }, children);
}
Object.assign(__ds_scope, { ArticleLayout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ArticleLayout/ArticleLayout.jsx", error: String((e && e.message) || e) }); }

// components/content/CaseFacts/CaseFacts.jsx
try { (() => {
function CaseFacts({
  items = []
}) {
  return /*#__PURE__*/React.createElement("dl", {
    className: "bn-facts"
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.label,
    className: "row"
  }, /*#__PURE__*/React.createElement("dt", null, it.label), /*#__PURE__*/React.createElement("dd", null, it.value))));
}
Object.assign(__ds_scope, { CaseFacts });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CaseFacts/CaseFacts.jsx", error: String((e && e.message) || e) }); }

// components/content/CaseSection/CaseSection.jsx
try { (() => {
function CaseSection({
  index,
  title,
  children
}) {
  const id = React.useId();
  return /*#__PURE__*/React.createElement("section", {
    className: "bn-case-section",
    "aria-labelledby": id
  }, /*#__PURE__*/React.createElement("div", {
    className: "head"
  }, index != null && /*#__PURE__*/React.createElement("span", {
    className: "num",
    "aria-hidden": "true"
  }, String(index).padStart(2, '0')), /*#__PURE__*/React.createElement("h2", {
    className: "title",
    id: id
  }, title)), /*#__PURE__*/React.createElement("div", {
    className: "bn-article body"
  }, children));
}
Object.assign(__ds_scope, { CaseSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CaseSection/CaseSection.jsx", error: String((e && e.message) || e) }); }

// components/content/Pagination/Pagination.jsx
try { (() => {
function Pagination({
  current = 1,
  total = 1,
  onChange,
  prevLabel = '← Poprzednia',
  nextLabel = 'Następna →'
}) {
  if (total <= 1) return null;
  const go = n => onChange && onChange(n);
  return /*#__PURE__*/React.createElement("nav", {
    className: "bn-pagination",
    "aria-label": "Paginacja"
  }, /*#__PURE__*/React.createElement("button", {
    className: "nav-link",
    style: {
      visibility: current > 1 ? 'visible' : 'hidden'
    },
    onClick: () => go(current - 1)
  }, prevLabel), /*#__PURE__*/React.createElement("ul", {
    className: "page-list"
  }, Array.from({
    length: total
  }, (_, i) => i + 1).map(n => /*#__PURE__*/React.createElement("li", {
    key: n
  }, /*#__PURE__*/React.createElement("button", {
    className: 'page-num' + (n === current ? ' active' : ''),
    onClick: () => go(n)
  }, String(n).padStart(2, '0'))))), /*#__PURE__*/React.createElement("button", {
    className: "nav-link",
    style: {
      visibility: current < total ? 'visible' : 'hidden'
    },
    onClick: () => go(current + 1)
  }, nextLabel));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Pagination/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/content/ProblemListItem/ProblemListItem.jsx
try { (() => {
const withDot = t => typeof t === 'string' && t.endsWith('.') ? /*#__PURE__*/React.createElement(React.Fragment, null, t.slice(0, -1), /*#__PURE__*/React.createElement("span", {
  className: "bn-dot"
}, ".")) : t;
function ProblemListItem({
  text,
  marker = '→'
}) {
  return /*#__PURE__*/React.createElement("li", {
    className: "bn-problem-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk",
    "aria-hidden": "true"
  }, marker), /*#__PURE__*/React.createElement("span", {
    className: "txt"
  }, text));
}
function TextSeparator({
  children
}) {
  return /*#__PURE__*/React.createElement("p", {
    className: "bn-text-separator"
  }, withDot(children));
}
Object.assign(__ds_scope, { ProblemListItem, TextSeparator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProblemListItem/ProblemListItem.jsx", error: String((e && e.message) || e) }); }

// components/content/PullQuote/PullQuote.jsx
try { (() => {
function PullQuote({
  quote,
  author,
  role
}) {
  return /*#__PURE__*/React.createElement("figure", {
    className: "bn-pull-quote"
  }, /*#__PURE__*/React.createElement("blockquote", null, /*#__PURE__*/React.createElement("p", null, "\u201E", quote, "\u201D")), (author || role) && /*#__PURE__*/React.createElement("figcaption", null, author && /*#__PURE__*/React.createElement("span", {
    className: "author"
  }, author), role && /*#__PURE__*/React.createElement("span", {
    className: "role"
  }, role)));
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PullQuote/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/core/Button/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LEGACY = {
  outline: 'secondary',
  'white-outline': 'inverse'
};
function Button({
  variant = 'primary',
  size = 'md',
  arrow,
  as = 'a',
  href,
  type = 'button',
  target,
  rel,
  block,
  disabled,
  className,
  onClick,
  children,
  ...rest
}) {
  const v = LEGACY[variant] || variant;
  const cls = ['bn-btn', 'bn-btn--' + v, size === 'sm' && 'bn-btn--sm', block && 'bn-btn--block', className].filter(Boolean).join(' ');
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, children, arrow && /*#__PURE__*/React.createElement("span", {
    className: "arr",
    "aria-hidden": "true"
  }, arrow === true ? '→' : arrow));
  if (as === 'button') return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    disabled: disabled,
    onClick: onClick
  }, rest), inner);
  const relValue = target === '_blank' ? rel || 'noopener noreferrer' : rel;
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: cls,
    target: target,
    rel: relValue,
    onClick: onClick
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/CheckList/CheckList.jsx
try { (() => {
function CheckList({
  items,
  className
}) {
  return /*#__PURE__*/React.createElement("ul", {
    className: ['list-check', className].filter(Boolean).join(' ')
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, it)));
}
Object.assign(__ds_scope, { CheckList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CheckList/CheckList.jsx", error: String((e && e.message) || e) }); }

// components/cards/ServiceCard/ServiceCard.jsx
try { (() => {
function ServiceCard({
  number,
  icon,
  title,
  description,
  points = [],
  cta,
  link = '#',
  onClick
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "bn-service-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "head"
  }, number != null ? /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, String(number).padStart(2, '0')) : /*#__PURE__*/React.createElement("span", null), icon && /*#__PURE__*/React.createElement("span", {
    className: "bn-icon-box"
  }, /*#__PURE__*/React.createElement("i", {
    className: 'fa ' + icon,
    "aria-hidden": "true"
  }))), /*#__PURE__*/React.createElement("h3", {
    className: "title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, description && /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: points.length ? 16 : 0
    }
  }, description), points.length > 0 && /*#__PURE__*/React.createElement(__ds_scope.CheckList, {
    items: points
  })), cta && /*#__PURE__*/React.createElement("a", {
    href: link,
    className: "link",
    onClick: onClick
  }, cta, " \u2192"));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ServiceCard/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  prefix = '//',
  tone = 'muted',
  as = 'p',
  className
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, {
    className: ['bn-eyebrow', tone === 'accent' && 'bn-eyebrow--accent', className].filter(Boolean).join(' ')
  }, prefix && /*#__PURE__*/React.createElement("span", {
    className: "pre"
  }, prefix), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/LiveBadge/LiveBadge.jsx
try { (() => {
function LiveBadge({
  children,
  className
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: ['bn-live', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("i", {
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { LiveBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/LiveBadge/LiveBadge.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeader/SectionHeader.jsx
try { (() => {
const withDot = t => typeof t === 'string' && t.endsWith('.') ? /*#__PURE__*/React.createElement(React.Fragment, null, t.slice(0, -1), /*#__PURE__*/React.createElement("span", {
  className: "bn-dot"
}, ".")) : t;
function SectionHeader({
  eyebrow,
  eyebrowPrefix = '//',
  title,
  titleMuted,
  subtitle,
  as = 'h2',
  align = 'left'
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement("header", {
    className: 'bn-section-header ' + align
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    prefix: eyebrowPrefix
  }, eyebrow), /*#__PURE__*/React.createElement(Tag, {
    className: "title"
  }, withDot(title), titleMuted && /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, titleMuted)), subtitle && /*#__PURE__*/React.createElement("p", {
    className: "subtitle"
  }, subtitle));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeader/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/Segments/Segments.jsx
try { (() => {
function Segments({
  count,
  current = 0,
  done,
  labels,
  className,
  style
}) {
  const n = count || (labels ? labels.length : 4);
  const doneUntil = done == null ? current : done;
  return /*#__PURE__*/React.createElement("div", {
    className: ['bn-segments', className].filter(Boolean).join(' '),
    style: style,
    role: "progressbar",
    "aria-valuemin": 1,
    "aria-valuemax": n,
    "aria-valuenow": current + 1
  }, Array.from({
    length: n
  }, (_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: i === current ? 'current' : i < doneUntil ? 'done' : ''
  }, /*#__PURE__*/React.createElement("span", {
    className: "bar"
  }), labels && labels[i] && /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, labels[i]))));
}
function Counter({
  current = 1,
  total = 1,
  className
}) {
  const p = x => String(x).padStart(2, '0');
  return /*#__PURE__*/React.createElement("span", {
    className: ['bn-counter', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("b", null, p(current)), " / ", p(total));
}
Object.assign(__ds_scope, { Segments, Counter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Segments/Segments.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat/Stat.jsx
try { (() => {
function Stat({
  value,
  label,
  note
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "bn-stat"
  }, /*#__PURE__*/React.createElement("p", {
    className: "value"
  }, value), /*#__PURE__*/React.createElement("p", {
    className: "label"
  }, label), note && /*#__PURE__*/React.createElement("p", {
    className: "note"
  }, note));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag/Tag.jsx
try { (() => {
function Tag({
  children,
  variant = 'outline',
  className
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: ['bn-tag', variant !== 'outline' && 'bn-tag--' + variant, className].filter(Boolean).join(' ')
  }, children);
}
function TagList({
  items = [],
  variant
}) {
  return /*#__PURE__*/React.createElement("ul", {
    className: "bn-tag-list"
  }, items.map(t => /*#__PURE__*/React.createElement("li", {
    key: t
  }, /*#__PURE__*/React.createElement(Tag, {
    variant: variant
  }, t))));
}
Object.assign(__ds_scope, { Tag, TagList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag/Tag.jsx", error: String((e && e.message) || e) }); }

// components/cards/CaseStudyCard/CaseStudyCard.jsx
try { (() => {
function CaseStudyCard({
  title,
  href = '#',
  excerpt,
  image,
  tags,
  readMore = 'Zobacz case study',
  onClick
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    className: "bn-case-card",
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "media"
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    loading: "lazy"
  })), tags && tags.length > 0 && /*#__PURE__*/React.createElement(__ds_scope.TagList, {
    items: tags
  }), /*#__PURE__*/React.createElement("h3", {
    className: "title"
  }, title), excerpt && /*#__PURE__*/React.createElement("p", {
    className: "excerpt"
  }, excerpt), /*#__PURE__*/React.createElement("span", {
    className: "read-more"
  }, readMore, " ", /*#__PURE__*/React.createElement("span", {
    className: "arrow",
    "aria-hidden": "true"
  }, "\u2192")));
}
Object.assign(__ds_scope, { CaseStudyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CaseStudyCard/CaseStudyCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/CooperationCard/CooperationCard.jsx
try { (() => {
function CooperationCard({
  icon,
  title,
  subtitle,
  ideal,
  scope = '',
  examples = '',
  scopeHeading = 'Zakres'
}) {
  const items = [...scope.split(','), ...examples.split(',')].map(i => i.trim()).filter(Boolean);
  return /*#__PURE__*/React.createElement("article", {
    className: "bn-coop-card"
  }, /*#__PURE__*/React.createElement("header", {
    className: "head"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "bn-icon-box"
  }, /*#__PURE__*/React.createElement("i", {
    className: 'fa ' + icon,
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    className: "title-group"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "title"
  }, title), subtitle && /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    variant: "accent"
  }, subtitle))), ideal && /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, ideal), items.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "scope-heading"
  }, scopeHeading), /*#__PURE__*/React.createElement(__ds_scope.CheckList, {
    items: items
  })));
}
Object.assign(__ds_scope, { CooperationCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CooperationCard/CooperationCard.jsx", error: String((e && e.message) || e) }); }

// components/content/TimelineItem/TimelineItem.jsx
try { (() => {
function TimelineItem({
  label,
  step,
  stepPrefix = 'Krok',
  title,
  meta,
  description,
  items,
  status,
  current
}) {
  const lbl = label || (step != null ? stepPrefix + ' ' + String(step).padStart(2, '0') : '');
  return /*#__PURE__*/React.createElement("li", {
    className: "bn-timeline-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, lbl), /*#__PURE__*/React.createElement("div", {
    className: "head"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "title"
  }, title), meta && /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, meta)), /*#__PURE__*/React.createElement("div", {
    className: "desc"
  }, description && /*#__PURE__*/React.createElement("p", null, description), items && items.length > 0 && /*#__PURE__*/React.createElement("ul", {
    className: "list-check",
    style: {
      marginTop: description ? 12 : 0
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, it)))), /*#__PURE__*/React.createElement("div", {
    className: "status"
  }, status && /*#__PURE__*/React.createElement("span", {
    className: 'bn-tag' + (current ? ' now' : '')
  }, status)));
}
function Timeline({
  children
}) {
  return /*#__PURE__*/React.createElement("ol", {
    className: "bn-timeline"
  }, children);
}
Object.assign(__ds_scope, { TimelineItem, Timeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TimelineItem/TimelineItem.jsx", error: String((e && e.message) || e) }); }

// components/core/PageHeader/PageHeader.jsx
try { (() => {
const withDot = t => typeof t === 'string' && t.endsWith('.') ? /*#__PURE__*/React.createElement(React.Fragment, null, t.slice(0, -1), /*#__PURE__*/React.createElement("span", {
  className: "bn-dot"
}, ".")) : t;
function PageHeader({
  title,
  subtitle,
  eyebrow,
  tags,
  dark = true,
  size = 'lg',
  back,
  aside,
  children
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: 'bn-page-header bn-grid' + (size === 'md' ? ' bn-page-header--md' : '') + (aside ? ' bn-page-header--aside' : '') + (dark ? ' bn-dark' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "container inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "main"
  }, back && /*#__PURE__*/React.createElement("a", {
    className: "back",
    href: back.href,
    onClick: back.onClick
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2190"), back.label), eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "page-title"
  }, withDot(title)), subtitle && /*#__PURE__*/React.createElement("p", {
    className: "page-subtitle"
  }, subtitle), tags && tags.length > 0 && /*#__PURE__*/React.createElement(__ds_scope.TagList, {
    items: tags
  })), aside && /*#__PURE__*/React.createElement("div", {
    className: "aside"
  }, aside)), children && /*#__PURE__*/React.createElement("div", {
    className: "container extra"
  }, children));
}
Object.assign(__ds_scope, { PageHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PageHeader/PageHeader.jsx", error: String((e && e.message) || e) }); }

// components/forms/ContactForm/ContactForm.jsx
try { (() => {
const REQUIRED = ['name', 'company', 'email', 'team', 'description'];
function ContactForm({
  onSubmit,
  submitLabel = 'Wyślij zapytanie'
}) {
  const [v, setV] = React.useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    team: '',
    description: ''
  });
  const [invalid, setInvalid] = React.useState({});
  const [alert, setAlert] = React.useState(null);
  const set = k => e => setV({
    ...v,
    [k]: e.target.value
  });
  const submit = e => {
    e.preventDefault();
    const errs = {};
    REQUIRED.forEach(f => {
      if (!v[f].trim()) errs[f] = 'To pole jest wymagane';
    });
    if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) errs.email = 'Nieprawidłowy adres email';
    setInvalid(errs);
    if (Object.keys(errs).length) {
      const only = errs.email === 'Nieprawidłowy adres email' && Object.keys(errs).length === 1;
      setAlert({
        type: 'error',
        msg: only ? errs.email : 'Uzupełnij wymagane pola.'
      });
      return;
    }
    setAlert({
      type: 'success',
      msg: 'Dzięki. Odezwę się w ciągu 1 dnia roboczego.'
    });
    onSubmit && onSubmit(v);
    setV({
      name: '',
      company: '',
      email: '',
      phone: '',
      team: '',
      description: ''
    });
  };
  const cls = k => 'bn-input' + (invalid[k] ? ' is-invalid' : '');
  const Req = () => /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: 'bn-alert' + (alert ? ' visible ' + alert.type : ''),
    role: "alert",
    "aria-live": "polite"
  }, alert && alert.msg), /*#__PURE__*/React.createElement("form", {
    className: "bn-form",
    noValidate: true,
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "group"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "cf-name"
  }, "Imi\u0119 i nazwisko ", /*#__PURE__*/React.createElement(Req, null)), /*#__PURE__*/React.createElement("input", {
    id: "cf-name",
    className: cls('name'),
    value: v.name,
    onChange: set('name')
  })), /*#__PURE__*/React.createElement("div", {
    className: "group"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "cf-company"
  }, "Nazwa firmy ", /*#__PURE__*/React.createElement(Req, null)), /*#__PURE__*/React.createElement("input", {
    id: "cf-company",
    className: cls('company'),
    value: v.company,
    onChange: set('company')
  })), /*#__PURE__*/React.createElement("div", {
    className: "group"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "cf-email"
  }, "Email ", /*#__PURE__*/React.createElement(Req, null)), /*#__PURE__*/React.createElement("input", {
    id: "cf-email",
    type: "email",
    className: cls('email'),
    value: v.email,
    onChange: set('email')
  })), /*#__PURE__*/React.createElement("div", {
    className: "group"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "cf-phone"
  }, "Telefon"), /*#__PURE__*/React.createElement("input", {
    id: "cf-phone",
    type: "tel",
    className: "bn-input",
    value: v.phone,
    onChange: set('phone')
  })), /*#__PURE__*/React.createElement("div", {
    className: "group full"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "cf-team"
  }, "Wielko\u015B\u0107 zespo\u0142u IT ", /*#__PURE__*/React.createElement(Req, null)), /*#__PURE__*/React.createElement("select", {
    id: "cf-team",
    className: cls('team'),
    value: v.team,
    onChange: set('team')
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Wybierz..."), /*#__PURE__*/React.createElement("option", {
    value: "1-5"
  }, "1-5"), /*#__PURE__*/React.createElement("option", {
    value: "6-15"
  }, "6-15"), /*#__PURE__*/React.createElement("option", {
    value: "16+"
  }, "16+")))), /*#__PURE__*/React.createElement("div", {
    className: "group full"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "cf-desc"
  }, "Opis wyzwania ", /*#__PURE__*/React.createElement(Req, null)), /*#__PURE__*/React.createElement("textarea", {
    id: "cf-desc",
    rows: 8,
    className: cls('description'),
    value: v.description,
    onChange: set('description')
  })), /*#__PURE__*/React.createElement("div", {
    className: "actions"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    as: "button",
    type: "submit",
    arrow: true
  }, submitLabel))));
}
Object.assign(__ds_scope, { ContactForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ContactForm/ContactForm.jsx", error: String((e && e.message) || e) }); }

// components/layout/FinalCTA/FinalCTA.jsx
try { (() => {
const withDot = t => typeof t === 'string' && t.endsWith('.') ? /*#__PURE__*/React.createElement(React.Fragment, null, t.slice(0, -1), /*#__PURE__*/React.createElement("span", {
  className: "bn-dot"
}, ".")) : t;
function FinalCTA({
  title = 'Porozmawiajmy o Twoim zespole.',
  intro,
  eyebrow = 'Podczas rozmowy',
  points = [],
  avatar,
  invitation = '30 minut, bez zobowiązań',
  author = 'Przemysław Broniszewski',
  ctaLabel = 'Umów rozmowę',
  ctaHref = '/kontakt',
  onCta,
  note
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "bn-final-cta bn-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, withDot(title)), intro && /*#__PURE__*/React.createElement("p", {
    className: "intro"
  }, intro), points.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "// ", eyebrow), /*#__PURE__*/React.createElement("ul", null, points.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, p))))), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "trust"
  }, avatar ? /*#__PURE__*/React.createElement("img", {
    className: "avatar",
    src: avatar,
    alt: author
  }) : /*#__PURE__*/React.createElement("span", {
    className: "avatar"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "invite"
  }, invitation), /*#__PURE__*/React.createElement("p", {
    className: "author"
  }, author))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    block: true,
    href: ctaHref,
    onClick: onCta,
    arrow: true
  }, ctaLabel), note && /*#__PURE__*/React.createElement("p", {
    className: "next"
  }, note))));
}
Object.assign(__ds_scope, { FinalCTA });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/FinalCTA/FinalCTA.jsx", error: String((e && e.message) || e) }); }

// components/layout/Header/Header.jsx
try { (() => {
const DEFAULT_LINKS = [{
  href: '/o-mnie',
  label: 'O mnie'
}, {
  href: '/uslugi',
  label: 'Usługi'
}, {
  href: '/doswiadczenie',
  label: 'Doświadczenie'
}, {
  href: '/wiedza',
  label: 'Wiedza'
}];
const FOCUSABLE = 'a[href], button:not([disabled])';
function Logo({
  onClick
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: "bn-logo",
    href: "/",
    onClick: onClick
  }, "Broniszewski", /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, "."));
}
function Header({
  links = DEFAULT_LINKS,
  current,
  onNavigate,
  ctaLabel = 'Porozmawiajmy',
  ctaHref = '/kontakt',
  dark = false,
  extra,
  skipTo = '#main',
  status,
  email,
  linkedin
}) {
  const [open, setOpen] = React.useState(false);
  const toggleRef = React.useRef(null);
  const closeRef = React.useRef(null);
  const menuRef = React.useRef(null);
  React.useEffect(() => {
    if (!open) return undefined;
    const root = document.documentElement;
    root.style.overflow = 'hidden';
    closeRef.current.focus();
    const onKey = e => {
      if (e.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (e.key !== 'Tab') return;
      // Keep focus inside the open menu (aria-modal)
      const items = menuRef.current.querySelectorAll(FOCUSABLE);
      const first = items[0],
        last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      root.style.overflow = '';
      if (toggleRef.current) toggleRef.current.focus();
    };
  }, [open]);
  const nav = href => e => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
    setOpen(false);
  };
  // The CTA already leads to ctaHref, so the menu list skips that link
  const menuLinks = links.filter(l => l.href !== ctaHref);
  return /*#__PURE__*/React.createElement("header", {
    className: 'bn-header' + (dark ? ' bn-dark' : '')
  }, skipTo && /*#__PURE__*/React.createElement("a", {
    className: "bn-skip-link",
    href: skipTo
  }, "Przejd\u017A do tre\u015Bci"), /*#__PURE__*/React.createElement("div", {
    className: "container inner"
  }, /*#__PURE__*/React.createElement(Logo, {
    onClick: nav('/')
  }), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "G\u0142\xF3wna nawigacja"
  }, /*#__PURE__*/React.createElement("ul", null, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.href
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href,
    className: current === l.href ? 'current' : '',
    "aria-current": current === l.href ? 'page' : undefined,
    onClick: nav(l.href)
  }, l.label))))), /*#__PURE__*/React.createElement("div", {
    className: "right"
  }, extra && /*#__PURE__*/React.createElement("span", {
    className: "extra bn-label"
  }, extra), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    href: ctaHref,
    onClick: nav(ctaHref)
  }, ctaLabel), /*#__PURE__*/React.createElement("button", {
    ref: toggleRef,
    className: "hamburger",
    "aria-label": "Otw\xF3rz menu",
    "aria-expanded": open,
    "aria-controls": "bn-mobile-menu",
    onClick: () => setOpen(true)
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-bars",
    "aria-hidden": "true"
  })))), /*#__PURE__*/React.createElement("div", {
    ref: menuRef,
    id: "bn-mobile-menu",
    className: 'bn-mobile-menu bn-dark bn-grid' + (open ? ' open' : ''),
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Menu"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container inner"
  }, /*#__PURE__*/React.createElement(Logo, {
    onClick: nav('/')
  }), /*#__PURE__*/React.createElement("button", {
    ref: closeRef,
    className: "close",
    "aria-label": "Zamknij menu",
    onClick: () => setOpen(false)
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-xmark",
    "aria-hidden": "true"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "container body"
  }, /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Menu mobilne"
  }, /*#__PURE__*/React.createElement("ol", null, menuLinks.map((l, i) => /*#__PURE__*/React.createElement("li", {
    key: l.href,
    style: {
      '--i': i
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href,
    "aria-current": current === l.href ? 'page' : undefined,
    onClick: nav(l.href)
  }, /*#__PURE__*/React.createElement("span", {
    className: "num",
    "aria-hidden": "true"
  }, String(i + 1).padStart(2, '0')), l.label))))), /*#__PURE__*/React.createElement("div", {
    className: "foot"
  }, status && /*#__PURE__*/React.createElement(__ds_scope.LiveBadge, null, status), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    block: true,
    href: ctaHref,
    onClick: nav(ctaHref),
    arrow: true
  }, ctaLabel), (email || linkedin) && /*#__PURE__*/React.createElement("ul", {
    className: "contact"
  }, email && /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + email
  }, email)), linkedin && /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: linkedin,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fab fa-linkedin",
    "aria-hidden": "true"
  }), "LinkedIn")))))));
}
Object.assign(__ds_scope, { Logo, Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Header/Header.jsx", error: String((e && e.message) || e) }); }

// components/layout/Footer/Footer.jsx
try { (() => {
const DEFAULT_LINKS = [{
  href: '/o-mnie',
  label: 'O mnie'
}, {
  href: '/uslugi',
  label: 'Usługi'
}, {
  href: '/wiedza',
  label: 'Wiedza'
}, {
  href: '/kontakt',
  label: 'Kontakt'
}];
function Footer({
  links = DEFAULT_LINKS,
  onNavigate,
  tagline = 'Architektura, procesy i AI w cyklu wytwarzania oprogramowania.',
  status,
  linkedin = 'https://www.linkedin.com/in/przemys%C5%82aw-broniszewski/',
  email,
  year = new Date().getFullYear()
}) {
  const nav = href => e => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
  };
  return /*#__PURE__*/React.createElement("footer", {
    className: "bn-footer bn-dark bn-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    onClick: nav('/')
  }), /*#__PURE__*/React.createElement("p", {
    className: "tagline"
  }, tagline), status && /*#__PURE__*/React.createElement(__ds_scope.LiveBadge, null, status)), /*#__PURE__*/React.createElement("nav", {
    "aria-labelledby": "bn-footer-nav"
  }, /*#__PURE__*/React.createElement("h2", {
    id: "bn-footer-nav",
    className: "head"
  }, "Nawigacja"), /*#__PURE__*/React.createElement("ul", null, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.href
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href,
    onClick: nav(l.href)
  }, l.label))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "head"
  }, "Kontakt"), /*#__PURE__*/React.createElement("ul", {
    className: "social"
  }, email && /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + email
  }, email)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: linkedin,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fab fa-linkedin",
    "aria-hidden": "true"
  }), "LinkedIn"))))), /*#__PURE__*/React.createElement("div", {
    className: "mega",
    "aria-hidden": "true"
  }, "Broniszewski", /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, ".")), /*#__PURE__*/React.createElement("div", {
    className: "bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", year, " broniszewski.net"), /*#__PURE__*/React.createElement("a", {
    href: "/polityka-prywatnosci",
    onClick: nav('/polityka-prywatnosci')
  }, "Polityka prywatno\u015Bci"))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Footer/Footer.jsx", error: String((e && e.message) || e) }); }

// components/layout/Hero/Hero.jsx
try { (() => {
const withDot = t => typeof t === 'string' && t.endsWith('.') ? /*#__PURE__*/React.createElement(React.Fragment, null, t.slice(0, -1), /*#__PURE__*/React.createElement("span", {
  className: "bn-dot"
}, ".")) : t;
function Hero({
  eyebrow,
  title,
  subheading,
  primaryCta,
  secondaryCta,
  status,
  tags,
  trust,
  image,
  imageAlt = '',
  dark = true,
  children
}) {
  const lines = Array.isArray(title) ? title : [title];
  const t = tags || trust;
  return /*#__PURE__*/React.createElement("section", {
    className: 'bn-hero bn-grid' + (dark ? ' bn-dark' : '')
  }, image && /*#__PURE__*/React.createElement("div", {
    className: "media"
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt
  })), image && /*#__PURE__*/React.createElement("div", {
    className: "fade"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "content fade-in"
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h1", null, lines.map((l, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("br", null), withDot(l)))), subheading && /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, subheading), (primaryCta || secondaryCta) && /*#__PURE__*/React.createElement("div", {
    className: "cta-group"
  }, primaryCta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    href: primaryCta.href,
    onClick: primaryCta.onClick,
    arrow: true
  }, primaryCta.label), secondaryCta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    href: secondaryCta.href,
    onClick: secondaryCta.onClick
  }, secondaryCta.label)), status && /*#__PURE__*/React.createElement("div", {
    className: "status"
  }, /*#__PURE__*/React.createElement(__ds_scope.LiveBadge, null, status)), t && t.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "tags"
  }, /*#__PURE__*/React.createElement(__ds_scope.TagList, {
    items: t
  })), children)));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Hero/Hero.jsx", error: String((e && e.message) || e) }); }

// explorations/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "explorations/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/website/CaseStudiesScreen.jsx
try { (() => {
function CaseStudiesScreen({
  go
}) {
  const {
    PageHeader,
    CaseStudyCard,
    Pagination
  } = window.BroniszewskiDesignSystem_db82bc;
  const d = window.BN_DATA;
  const [page, setPage] = React.useState(1);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Case studies",
    title: "Wyniki, nie slajdy.",
    subtitle: "Projekty, w kt\xF3rych zmiana procesu i architektury da\u0142a mierzalny efekt."
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bn-cols bn-cols--3"
  }, d.cases.map(c => /*#__PURE__*/React.createElement(CaseStudyCard, {
    key: c.slug,
    title: c.title,
    excerpt: c.excerpt,
    tags: c.tags,
    image: d.img + c.image,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('case', c.slug);
    }
  }))), /*#__PURE__*/React.createElement(Pagination, {
    current: page,
    total: 1,
    onChange: setPage
  }))));
}
window.CaseStudiesScreen = CaseStudiesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CaseStudiesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CaseStudyScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CaseStudyScreen({
  go,
  slug
}) {
  const {
    PageHeader,
    CaseFacts,
    TagList,
    Stat,
    CaseSection,
    PullQuote,
    FinalCTA
  } = window.BroniszewskiDesignSystem_db82bc;
  const d = window.BN_DATA;
  const i = Math.max(0, d.cases.findIndex(c => c.slug === slug));
  const post = d.cases[i],
    prev = d.cases[i - 1],
    next = d.cases[i + 1];
  const open = c => e => {
    e.preventDefault();
    go('case', c.slug);
  };
  const facts = [{
    label: 'Klient',
    value: post.client
  }, {
    label: 'Okres',
    value: post.period
  }, {
    label: 'Rola',
    value: post.role
  }, {
    label: 'Stack',
    value: /*#__PURE__*/React.createElement(TagList, {
      items: post.tags
    })
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    size: "md",
    back: {
      label: 'Wszystkie case studies',
      href: '#/cases',
      onClick: e => {
        e.preventDefault();
        go('cases');
      }
    },
    eyebrow: 'Case study · ' + post.sector,
    title: post.title,
    subtitle: post.excerpt,
    aside: /*#__PURE__*/React.createElement(CaseFacts, {
      items: facts
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "bn-cols bn-cols--3"
  }, post.stats.map(s => /*#__PURE__*/React.createElement(Stat, _extends({
    key: s.label
  }, s))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("figure", {
    className: "bn-case-cover"
  }, /*#__PURE__*/React.createElement("img", {
    src: d.img + post.image,
    alt: ""
  })))), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(CaseSection, {
    index: 1,
    title: "Kontekst"
  }, /*#__PURE__*/React.createElement("p", null, post.context)), /*#__PURE__*/React.createElement(CaseSection, {
    index: 2,
    title: "Problem"
  }, /*#__PURE__*/React.createElement("p", null, post.problem))), /*#__PURE__*/React.createElement("section", {
    className: "section section--subtle bn-grid bn-grid--fade"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(PullQuote, {
    quote: post.quote,
    role: post.quoteAuthor
  }))), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(CaseSection, {
    index: 3,
    title: "Co zrobi\u0142em"
  }, /*#__PURE__*/React.createElement("ul", null, post.approach.map(a => /*#__PURE__*/React.createElement("li", {
    key: a
  }, a)))), /*#__PURE__*/React.createElement(CaseSection, {
    index: 4,
    title: "Efekt"
  }, post.outcome.map((p, n) => /*#__PURE__*/React.createElement("p", {
    key: p,
    className: n === 0 ? 'lead' : undefined
  }, p))), /*#__PURE__*/React.createElement("nav", {
    className: "bn-post-nav",
    "aria-label": "Inne case studies"
  }, prev && /*#__PURE__*/React.createElement("a", {
    className: "prev",
    href: '#/case/' + prev.slug,
    onClick: open(prev)
  }, /*#__PURE__*/React.createElement("span", {
    className: "dir"
  }, "\u2190 Poprzedni"), /*#__PURE__*/React.createElement("span", {
    className: "title"
  }, prev.title)), next && /*#__PURE__*/React.createElement("a", {
    className: "next",
    href: '#/case/' + next.slug,
    onClick: open(next)
  }, /*#__PURE__*/React.createElement("span", {
    className: "dir"
  }, "Nast\u0119pny \u2192"), /*#__PURE__*/React.createElement("span", {
    className: "title"
  }, next.title)))), /*#__PURE__*/React.createElement(FinalCTA, {
    title: "Masz podobny problem?",
    intro: "Opowiedz, jak dzi\u015B wygl\u0105da Wasz proces. Po 30 minutach b\u0119dziesz wiedzie\u0107, od czego zacz\u0105\u0107.",
    points: ['Gdzie praca naprawdę czeka', 'Co da się zmienić w jednym sprincie', 'Czy warto iść dalej - szczerze'],
    avatar: d.img + 'profile.png',
    onCta: e => {
      e.preventDefault();
      go('contact');
    }
  }));
}
window.CaseStudyScreen = CaseStudyScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CaseStudyScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
function ContactScreen() {
  const {
    PageHeader,
    SectionHeader,
    ProblemListItem,
    ContactForm,
    LiveBadge,
    Eyebrow
  } = window.BroniszewskiDesignSystem_db82bc;
  const next = ['Odpisuję w ciągu 24 godzin z propozycją terminu.', 'Rozmawiamy 30 minut o Waszym procesie i celach.', 'Dostajesz notatkę z 2–3 miejscami, gdzie AI da najwięcej.'];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Kontakt",
    title: "Porozmawiajmy.",
    subtitle: "30 minut o tym, jak dzi\u015B wygl\u0105da Wasz proces. Bez prezentacji sprzeda\u017Cowej."
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container bn-cols bn-cols--split"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Co dalej",
    title: "Trzy kroki."
  }), /*#__PURE__*/React.createElement("ul", null, next.map((t, i) => /*#__PURE__*/React.createElement(ProblemListItem, {
    key: t,
    marker: String(i + 1).padStart(2, '0'),
    text: t
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Bezpo\u015Brednio"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:kontakt@broniszewski.net",
    style: {
      display: 'inline-block',
      paddingBlock: 6,
      fontSize: 20,
      fontWeight: 500
    }
  }, "kontakt@broniszewski.net"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.linkedin.com/in/przemys%C5%82aw-broniszewski/",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      display: 'inline-block',
      paddingBlock: 6,
      fontSize: 20,
      fontWeight: 500
    }
  }, "LinkedIn \u2197"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(LiveBadge, null, "Wolne terminy od listopada")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ContactForm, null)))));
}
window.ContactScreen = ContactScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function HomeScreen({
  go
}) {
  const {
    Hero,
    SectionHeader,
    ProblemListItem,
    TextSeparator,
    ServiceCard,
    Segments,
    Timeline,
    TimelineItem,
    CaseStudyCard,
    CooperationCard,
    FinalCTA,
    Button
  } = window.BroniszewskiDesignSystem_db82bc;
  const d = window.BN_DATA;
  const click = fn => e => {
    e.preventDefault();
    fn();
  };
  const AI_STEP = 2;
  const steps = [{
    t: 'Diagnoza',
    d: 'Przechodzę z zespołem drogę od ticketu do produkcji i mierzę, gdzie praca naprawdę czeka.',
    p: ['Warsztat z zespołem', 'Mapa SDLC', 'Baseline metryk']
  }, {
    t: 'Architektura',
    d: 'Projektuję rolę AI w procesie: gdzie agent, gdzie asystent, gdzie człowiek.',
    p: ['Zasady i guardraile', 'Dobór narzędzi', 'Plan pilotażu']
  }, {
    t: 'Wdrożenie AI',
    d: 'Pilotaż na jednym zespole z cotygodniowym przeglądem efektów.',
    p: ['Coaching w pracy', 'Prompty i szablony', 'Przeglądy tygodniowe']
  }, {
    t: 'Utrwalenie',
    d: 'Playbook, metryki i ludzie, którzy rozwijają proces beze mnie.',
    p: ['Playbook', 'Szkolenie liderów', 'Plan skalowania']
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    eyebrow: "Architekt \xB7 AI w SDLC",
    title: ['Szybszy', 'SDLC.'],
    subheading: "Architektura, procesy i AI w jednym. Pomagam zespo\u0142om deweloperskim dowozi\u0107 szybciej bez utraty jako\u015Bci.",
    primaryCta: {
      label: 'Umów rozmowę',
      href: '#',
      onClick: click(() => go('contact'))
    },
    secondaryCta: {
      label: 'Case studies',
      href: '#',
      onClick: click(() => go('cases'))
    },
    status: "Wolne terminy od listopada",
    image: d.img + 'profile.png',
    imageAlt: "Przemys\u0142aw Broniszewski"
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container bn-cols bn-cols--split"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Rozpoznajesz to?",
    title: "AI jest.",
    titleMuted: "Efektu nie ma."
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, ['Każdy w zespole używa AI inaczej i nikt nie wie, co działa.', 'Kod powstaje szybciej, ale kolejka do review rośnie.', 'Licencje kosztują, a lead time się nie zmienił.', 'Nikt nie odpowiada za to, jak AI wpływa na jakość.'].map(p => /*#__PURE__*/React.createElement(ProblemListItem, {
    key: p,
    text: p
  }))), /*#__PURE__*/React.createElement(TextSeparator, null, "Problemem nie jest narz\u0119dzie. Jest nim proces.")))), /*#__PURE__*/React.createElement("section", {
    className: "section bn-dark bn-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Proces",
    eyebrowPrefix: "01 \u2014",
    title: "Cztery kroki.",
    titleMuted: "Od diagnozy do procesu, kt\xF3ry dzia\u0142a beze mnie."
  }), /*#__PURE__*/React.createElement("ol", {
    className: "bn-cols bn-cols--4",
    style: {
      '--cols-gap': '16px',
      listStyle: 'none'
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: s.t,
    className: "bn-step"
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(Segments, {
    count: 1,
    current: i === AI_STEP ? 0 : -1
  })), /*#__PURE__*/React.createElement(ServiceCard, {
    number: i + 1,
    title: s.t,
    description: s.d,
    points: s.p
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Wsp\xF3\u0142praca",
    eyebrowPrefix: "02 \u2014",
    title: "Trzy formaty."
  }), /*#__PURE__*/React.createElement("div", {
    className: "bn-cols bn-cols--3",
    style: {
      '--cols-gap': '16px'
    }
  }, /*#__PURE__*/React.createElement(CooperationCard, {
    icon: "fa-magnifying-glass-chart",
    title: "Diagnoza SDLC",
    subtitle: "2 tygodnie",
    ideal: "Chcesz wiedzie\u0107, gdzie AI da Twojemu zespo\u0142owi najwi\u0119cej, zanim wydasz bud\u017Cet.",
    scope: "Warsztaty, Mapa procesu, Raport z rekomendacjami"
  }), /*#__PURE__*/React.createElement(CooperationCard, {
    icon: "fa-rocket",
    title: "Pilota\u017C AI w SDLC",
    subtitle: "6\u201310 tygodni",
    ideal: "Chcesz przej\u015B\u0107 od eksperyment\xF3w do procesu na jednym zespole.",
    scope: "Projekt roli AI, Coaching, Metryki przed / po, Playbook"
  }), /*#__PURE__*/React.createElement(CooperationCard, {
    icon: "fa-people-group",
    title: "Warsztaty dla zespo\u0142u",
    subtitle: "1\u20132 dni",
    ideal: "Chcesz, \u017Ceby zesp\xF3\u0142 pracowa\u0142 z AI \u015Bwiadomie i wed\u0142ug wsp\xF3lnych zasad.",
    scope: "Code review z AI, Testy, Praca z agentami"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section section--subtle bn-grid bn-grid--fade"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Do\u015Bwiadczenie",
    eyebrowPrefix: "03 \u2014",
    title: "20 lat w software.",
    titleMuted: "Od kodu do architektury procesu."
  }), /*#__PURE__*/React.createElement(Timeline, null, /*#__PURE__*/React.createElement(TimelineItem, {
    label: "2024 \u2014 teraz",
    title: "Architekt / konsultant AI w SDLC",
    meta: "Niezale\u017Cnie",
    description: 'Wdrożenia AI w procesie wytwarzania dla zespołów 10–\u206080 osób.',
    status: "Teraz",
    current: true
  }), /*#__PURE__*/React.createElement(TimelineItem, {
    label: "2016 \u2014 2024",
    title: "CTO / Head of Engineering",
    meta: "TSL \xB7 e-commerce",
    description: "Transformacja cyfrowa, platforma CI/CD, skalowanie zespo\u0142u z 6 do 40 os\xF3b.",
    status: "8 lat"
  }), /*#__PURE__*/React.createElement(TimelineItem, {
    label: "2006 \u2014 2016",
    title: "Software Architect",
    meta: "Software house",
    description: "Architektura system\xF3w integracyjnych, Kafka, Kubernetes.",
    status: "10 lat"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bn-section-row"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Case studies",
    eyebrowPrefix: "04 \u2014",
    title: "Wyniki, nie slajdy."
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    href: "#",
    onClick: click(() => go('cases')),
    arrow: true
  }, "Wszystkie"))), /*#__PURE__*/React.createElement("div", {
    className: "bn-cols bn-cols--3"
  }, d.cases.map(c => /*#__PURE__*/React.createElement(CaseStudyCard, {
    key: c.slug,
    title: c.title,
    excerpt: c.excerpt,
    image: d.img + c.image,
    tags: c.tags.slice(0, 2),
    href: "#",
    onClick: click(() => go('case', c.slug))
  }))))), /*#__PURE__*/React.createElement(FinalCTA, {
    intro: "Opowiedz, jak dzi\u015B wygl\u0105da Wasz proces. Wska\u017C\u0119 2\u20133 miejsca, gdzie AI da najwi\u0119cej.",
    points: ['Mapa Waszego SDLC w 30 minut', 'Szybkie zwycięstwa na najbliższy sprint', 'Czy pilotaż ma sens — szczerze'],
    avatar: d.img + 'profile.png',
    onCta: click(() => go('contact'))
  }));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServiceScreen.jsx
try { (() => {
function ServiceScreen({
  go
}) {
  const {
    PageHeader,
    SectionHeader,
    ProblemListItem,
    TextSeparator,
    ServiceCard,
    Timeline,
    TimelineItem,
    Stat,
    FinalCTA
  } = window.BroniszewskiDesignSystem_db82bc;
  const d = window.BN_DATA;
  const toContact = e => {
    e.preventDefault();
    go('contact');
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Us\u0142uga",
    title: "Pilota\u017C AI w SDLC.",
    subtitle: "6\u201310 tygodni na jednym zespole. Od eksperyment\xF3w z narz\u0119dziami do wsp\xF3lnego procesu z mierzalnym efektem.",
    tags: ['6–10 tygodni', '1 zespół', 'Metryki przed / po']
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container bn-cols bn-cols--split"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Punkt wyj\u015Bcia",
    title: "Narz\u0119dzia s\u0105.",
    titleMuted: "Procesu nie ma."
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, ['Każdy programista używa AI po swojemu.', 'Pull requesty rosną szybciej niż przepustowość review.', 'Nikt nie wie, czy AI skraca lead time, czy tylko przesuwa pracę.', 'Zasady bezpieczeństwa kończą się na „nie wklejaj kodu klienta”.'].map(p => /*#__PURE__*/React.createElement(ProblemListItem, {
    key: p,
    text: p
  }))), /*#__PURE__*/React.createElement(TextSeparator, null, "Pilota\u017C zamienia eksperymenty w proces.")))), /*#__PURE__*/React.createElement("section", {
    className: "section section--subtle bn-grid bn-grid--fade"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrowPrefix: "01 \u2014",
    eyebrow: "Co dostajesz",
    title: "Trzy rezultaty.",
    titleMuted: "Zostaj\u0105 w zespole po moim wyj\u015Bciu."
  }), /*#__PURE__*/React.createElement("div", {
    className: "bn-cols bn-cols--3",
    style: {
      '--cols-gap': '16px'
    }
  }, /*#__PURE__*/React.createElement(ServiceCard, {
    number: 1,
    icon: "fa-map",
    title: "Mapa procesu",
    description: "Droga od ticketu do produkcji z zaznaczonymi miejscami, gdzie praca czeka.",
    points: ['Warsztat z zespołem', 'Baseline metryk', 'Priorytety zmian']
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    number: 2,
    icon: "fa-book",
    title: "Playbook zespo\u0142u",
    description: "Wsp\xF3lne zasady pracy z AI: kiedy agent, kiedy asystent, kiedy cz\u0142owiek.",
    points: ['Guardraile i bezpieczeństwo', 'Prompty i szablony', 'Definicja review']
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    number: 3,
    icon: "fa-chart-line",
    title: "Metryki przed / po",
    description: "Dow\xF3d, co si\u0119 zmieni\u0142o, zanim skalujesz na kolejne zespo\u0142y.",
    points: ['Lead time', 'Czas review', 'Jakość wydań']
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrowPrefix: "02 \u2014",
    eyebrow: "Przebieg",
    title: "Tydzie\u0144 po tygodniu."
  }), /*#__PURE__*/React.createElement(Timeline, null, /*#__PURE__*/React.createElement(TimelineItem, {
    label: "Tydzie\u0144 1\u20132",
    title: "Diagnoza",
    meta: "Warsztat \xB7 pomiary",
    description: "Przechodz\u0119 z zespo\u0142em ca\u0142\u0105 drog\u0119 zmiany i mierz\u0119, gdzie praca stoi.",
    status: "2 tyg."
  }), /*#__PURE__*/React.createElement(TimelineItem, {
    label: "Tydzie\u0144 3",
    title: "Architektura",
    meta: "Zasady \xB7 narz\u0119dzia",
    description: "Projektuj\u0119 rol\u0119 AI w procesie i ustalam, co mierzymy.",
    status: "1 tydz."
  }), /*#__PURE__*/React.createElement(TimelineItem, {
    label: "Tydzie\u0144 4\u20138",
    title: "Wdro\u017Cenie AI",
    meta: "Coaching w pracy",
    description: "Zesp\xF3\u0142 pracuje nowym procesem, a ja co tydzie\u0144 przegl\u0105dam efekty.",
    status: "Pilota\u017C",
    current: true
  }), /*#__PURE__*/React.createElement(TimelineItem, {
    label: "Tydzie\u0144 9\u201310",
    title: "Utrwalenie",
    meta: "Playbook \xB7 liderzy",
    description: "Przekazuj\u0119 proces liderom, \u017Ceby dzia\u0142a\u0142 beze mnie.",
    status: "2 tyg."
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section section--subtle bn-grid bn-grid--fade"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrowPrefix: "03 \u2014",
    eyebrow: "Efekt",
    title: "Co mierz\u0119.",
    titleMuted: "Przyk\u0142ad z pilota\u017Cu w zespole 12 os\xF3b."
  }), /*#__PURE__*/React.createElement("div", {
    className: "bn-cols bn-cols--3"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "\u221235%",
    label: "Lead time",
    note: "Od ticketu do produkcji"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "\u221250%",
    label: "Czas review",
    note: "Mediana dla pull request\xF3w"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "0",
    label: "Regresji z kodu AI",
    note: "W ci\u0105gu 8 tygodni"
  })))), /*#__PURE__*/React.createElement(FinalCTA, {
    title: "Sprawd\u017Amy, czy pilota\u017C ma sens.",
    intro: "W 30 minut ocenimy, czy Tw\xF3j zesp\xF3\u0142 jest gotowy i od czego zacz\u0105\u0107.",
    points: ['Stan obecnego procesu', 'Zespół, od którego warto zacząć', 'Realny zakres i czas'],
    avatar: d.img + 'profile.png',
    onCta: toContact
  }));
}
window.ServiceScreen = ServiceScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServiceScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Placeholder content for the UI kit - copy is not final.
window.BN_DATA = {
  img: '../../assets/images/',
  cases: [{
    slug: 'od-arkuszy-do-tms',
    sector: 'Logistyka · TSL',
    image: 'tms.png',
    client: 'Firma transportowa, 400 osób',
    period: '2016-2024',
    role: 'CTO, architekt systemu',
    outcome: ['Planowanie, które wymagało sześciu osób z arkuszami, obsługuje dziś dwóch planistów w jednym systemie. Wiedza o klientach przestała siedzieć w głowach i trafiła do danych.', 'Firma podwoiła liczbę zleceń bez zatrudniania kolejnych planistów, a puste przebiegi przestały być tematem zarządu.'],
    title: 'Od arkuszy do systemu TMS.',
    excerpt: 'Osiem lat budowy systemu transportowego: od pierwszego arkusza do platformy, na której pracuje cała firma.',
    tags: ['TMS', 'Automatyzacja', 'Logistyka'],
    stats: [{
      value: '3×',
      label: 'Wydajność planowania',
      note: 'Po 18 miesiącach od startu'
    }, {
      value: '8 lat',
      label: 'Czas współpracy'
    }, {
      value: '6 → 40',
      label: 'Zespół'
    }],
    context: 'Firma transportowa planowała kilkaset kursów dziennie w arkuszach. Każdy planista miał własną wersję prawdy, a wiedza o klientach siedziała w głowach dwóch osób.',
    problem: 'Wzrost zamówień oznaczał zatrudnianie kolejnych planistów. Błędy w arkuszach kosztowały puste przebiegi i kary umowne.',
    approach: ['Zmapowałem proces planowania z zespołem operacyjnym, zanim powstała pierwsza linia kodu.', 'Zaprojektowałem system modułowo: najpierw zlecenia, potem planowanie, na końcu rozliczenia.', 'Wdrażałem co dwa tygodnie, zawsze na jednym oddziale przed resztą firmy.'],
    quote: 'Nie chcieliśmy kolejnego narzędzia. Chcieliśmy zmienić sposób, w jaki pracujemy.',
    quoteAuthor: 'Dyrektor operacyjny'
  }, {
    slug: 'synchronizacja-kafka',
    sector: 'Integracja danych',
    image: 'kafka.png',
    client: 'Grupa dystrybucyjna',
    period: '2021, 9 miesięcy',
    role: 'Architekt integracji',
    outcome: ['Raporty pokazują stan z bieżącej minuty, a nie sprzed doby. Nowy system podłącza się do strumienia zdarzeń w dni, a nie w miesiące.', 'Awaria jednej integracji nie zatrzymuje już pozostałych, bo każda czyta strumień we własnym tempie.'],
    title: '480 GB w czasie rzeczywistym.',
    excerpt: 'Synchronizacja dwóch centrów danych i czterech systemów z opóźnieniem poniżej 50 ms.',
    tags: ['Apache Kafka', 'CDC', 'Integracja'],
    stats: [{
      value: '<50 ms',
      label: 'Opóźnienie synchronizacji'
    }, {
      value: '480 GB',
      label: 'Wolumen danych'
    }, {
      value: '4',
      label: 'Zintegrowane systemy'
    }],
    context: 'Dwa centra danych, cztery systemy i nocne eksporty CSV. Dane rozjeżdżały się w ciągu dnia, a raporty pokazywały stan sprzed doby.',
    problem: 'Każda nowa integracja była osobnym projektem, a awaria jednego eksportu blokowała pozostałe.',
    approach: ['Zastąpiłem eksporty strumieniem zmian (CDC) na Apache Kafka.', 'Ustaliłem z zespołami jeden kontrakt zdarzeń zamiast czterech formatów.', 'Dodałem monitoring opóźnień widoczny dla biznesu, nie tylko dla IT.'],
    quote: 'Pierwszy raz raport o 9:00 pokazuje to, co dzieje się o 9:00.',
    quoteAuthor: 'Kierownik controllingu'
  }, {
    slug: 'wdrozenia-kubernetes',
    sector: 'DevOps · Platforma',
    image: 'kubernetes.png',
    client: 'Software house, 60 osób',
    period: '2020, 6 miesięcy',
    role: 'Architekt platformy',
    outcome: ['Zespół wdraża codziennie, w godzinach pracy i bez nocnych dyżurów. Nowe środowisko powstaje w kilka minut, a nie w kilka dni.', 'Platforma działa bez mnie: zespół sam ją rozwija i szkoli kolejne osoby.'],
    title: 'Wdrożenie bez nocnych telefonów.',
    excerpt: 'Migracja na Kubernetes i CI/CD: wdrożenie przestało być wydarzeniem i stało się 30-minutową rutyną.',
    tags: ['Kubernetes', 'CI/CD', 'DevOps'],
    stats: [{
      value: '30 min',
      label: 'Czas wdrożenia',
      note: 'Wcześniej cała noc'
    }, {
      value: 'Codziennie',
      label: 'Częstotliwość wdrożeń'
    }, {
      value: '0',
      label: 'Nocnych incydentów w kwartale'
    }],
    context: 'Wdrożenia odbywały się raz w miesiącu, w nocy, z udziałem całego zespołu. Tylko jedna osoba wiedziała, jak odtworzyć środowisko.',
    problem: 'Rzadkie wdrożenia oznaczały duże zmiany, a duże zmiany oznaczały awarie. Koło się zamykało.',
    approach: ['Opisałem infrastrukturę jako kod, żeby każde środowisko dało się odtworzyć w minutach.', 'Zbudowałem potok CI/CD z testami, który wdraża małe zmiany bez udziału człowieka.', 'Przeszkoliłem zespół, żeby platforma nie zależała ode mnie.'],
    quote: 'Wdrożenie w piątek po południu przestało być żartem.',
    quoteAuthor: 'Tech lead'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.CaseStudyCard = __ds_scope.CaseStudyCard;

__ds_ns.CooperationCard = __ds_scope.CooperationCard;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.ArticleImage = __ds_scope.ArticleImage;

__ds_ns.ArticleLayout = __ds_scope.ArticleLayout;

__ds_ns.CaseFacts = __ds_scope.CaseFacts;

__ds_ns.CaseSection = __ds_scope.CaseSection;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.ProblemListItem = __ds_scope.ProblemListItem;

__ds_ns.TextSeparator = __ds_scope.TextSeparator;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.TimelineItem = __ds_scope.TimelineItem;

__ds_ns.Timeline = __ds_scope.Timeline;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CheckList = __ds_scope.CheckList;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.LiveBadge = __ds_scope.LiveBadge;

__ds_ns.PageHeader = __ds_scope.PageHeader;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Segments = __ds_scope.Segments;

__ds_ns.Counter = __ds_scope.Counter;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.TagList = __ds_scope.TagList;

__ds_ns.ContactForm = __ds_scope.ContactForm;

__ds_ns.FinalCTA = __ds_scope.FinalCTA;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.Hero = __ds_scope.Hero;

})();
