/* @ds-bundle: {"format":4,"namespace":"BroniszewskiDesignSystem_db82bc","components":[{"name":"CaseStudyCard","sourcePath":"components/cards/CaseStudyCard/CaseStudyCard.jsx"},{"name":"CooperationCard","sourcePath":"components/cards/CooperationCard/CooperationCard.jsx"},{"name":"ServiceCard","sourcePath":"components/cards/ServiceCard/ServiceCard.jsx"},{"name":"ArticleHeader","sourcePath":"components/content/ArticleHeader/ArticleHeader.jsx"},{"name":"ArticleImage","sourcePath":"components/content/ArticleImage/ArticleImage.jsx"},{"name":"ArticleLayout","sourcePath":"components/content/ArticleLayout/ArticleLayout.jsx"},{"name":"ArticleToc","sourcePath":"components/content/ArticleToc/ArticleToc.jsx"},{"name":"ChallengeBlock","sourcePath":"components/content/ChallengeBlock/ChallengeBlock.jsx"},{"name":"Faq","sourcePath":"components/content/Faq/Faq.jsx"},{"name":"Pagination","sourcePath":"components/content/Pagination/Pagination.jsx"},{"name":"ProblemListItem","sourcePath":"components/content/ProblemListItem/ProblemListItem.jsx"},{"name":"TextSeparator","sourcePath":"components/content/ProblemListItem/ProblemListItem.jsx"},{"name":"PullQuote","sourcePath":"components/content/PullQuote/PullQuote.jsx"},{"name":"TimelineItem","sourcePath":"components/content/TimelineItem/TimelineItem.jsx"},{"name":"Timeline","sourcePath":"components/content/TimelineItem/TimelineItem.jsx"},{"name":"Button","sourcePath":"components/core/Button/Button.jsx"},{"name":"CheckList","sourcePath":"components/core/CheckList/CheckList.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow/Eyebrow.jsx"},{"name":"LiveBadge","sourcePath":"components/core/LiveBadge/LiveBadge.jsx"},{"name":"PageHeader","sourcePath":"components/core/PageHeader/PageHeader.jsx"},{"name":"SectionHeader","sourcePath":"components/core/SectionHeader/SectionHeader.jsx"},{"name":"Segments","sourcePath":"components/core/Segments/Segments.jsx"},{"name":"Counter","sourcePath":"components/core/Segments/Segments.jsx"},{"name":"Stat","sourcePath":"components/core/Stat/Stat.jsx"},{"name":"Tag","sourcePath":"components/core/Tag/Tag.jsx"},{"name":"TagList","sourcePath":"components/core/Tag/Tag.jsx"},{"name":"ContactForm","sourcePath":"components/forms/ContactForm/ContactForm.jsx"},{"name":"FinalCTA","sourcePath":"components/layout/FinalCTA/FinalCTA.jsx"},{"name":"Footer","sourcePath":"components/layout/Footer/Footer.jsx"},{"name":"Logo","sourcePath":"components/layout/Header/Header.jsx"},{"name":"Header","sourcePath":"components/layout/Header/Header.jsx"},{"name":"Hero","sourcePath":"components/layout/Hero/Hero.jsx"}],"sourceHashes":{"components/cards/CaseStudyCard/CaseStudyCard.jsx":"689ffca15512","components/cards/CooperationCard/CooperationCard.jsx":"8e86f50c5b6d","components/cards/ServiceCard/ServiceCard.jsx":"aea63aaf1f01","components/content/ArticleHeader/ArticleHeader.jsx":"99ba36457b22","components/content/ArticleImage/ArticleImage.jsx":"1d36790ed362","components/content/ArticleLayout/ArticleLayout.jsx":"8d4dd2f9fa03","components/content/ArticleToc/ArticleToc.jsx":"2a3b50feaf7d","components/content/ChallengeBlock/ChallengeBlock.jsx":"5b7cce543d6a","components/content/Faq/Faq.jsx":"2f15dd3c3148","components/content/Pagination/Pagination.jsx":"b007de27b6fe","components/content/ProblemListItem/ProblemListItem.jsx":"7b600462d885","components/content/PullQuote/PullQuote.jsx":"85e6b3c6de24","components/content/TimelineItem/TimelineItem.jsx":"1dc826ee1b5a","components/core/Button/Button.jsx":"a8ef412238b2","components/core/CheckList/CheckList.jsx":"2fe1eea8d852","components/core/Eyebrow/Eyebrow.jsx":"be11d8da1607","components/core/LiveBadge/LiveBadge.jsx":"cd5b0ea8abb0","components/core/PageHeader/PageHeader.jsx":"7f4f1b74b502","components/core/SectionHeader/SectionHeader.jsx":"2b70d4176675","components/core/Segments/Segments.jsx":"b8c7c25b73bc","components/core/Stat/Stat.jsx":"8355c3d12afe","components/core/Tag/Tag.jsx":"93687b7bd5aa","components/forms/ContactForm/ContactForm.jsx":"ce72289c1e4a","components/layout/FinalCTA/FinalCTA.jsx":"084326b7e5fe","components/layout/Footer/Footer.jsx":"fd9875f8705a","components/layout/Header/Header.jsx":"61650e789e5c","components/layout/Hero/Hero.jsx":"cecb9393afd4","ui_kits/website/CaseStudiesScreen.jsx":"ab020fe4592c","ui_kits/website/CaseStudyScreen.jsx":"8db12ee18e9a","ui_kits/website/ContactScreen.jsx":"b4a22b24d2a9","ui_kits/website/HomeScreen.jsx":"82bcb0eb326c","ui_kits/website/ServiceScreen.jsx":"76ec2714e9e2","ui_kits/website/data.js":"d40d4f947579"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BroniszewskiDesignSystem_db82bc = window.BroniszewskiDesignSystem_db82bc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/CaseStudyCard/CaseStudyCard.jsx
try { (() => {
function CaseStudyCard({
  title,
  href = '#',
  excerpt,
  image,
  meta = [],
  featured = false,
  readMore = 'Zobacz case study',
  onClick
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    className: 'bn-case-card' + (featured ? ' bn-case-card--featured' : ''),
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "media"
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    loading: featured ? undefined : 'lazy'
  })), meta.length > 0 && /*#__PURE__*/React.createElement("ul", {
    className: "meta"
  }, meta.map(m => /*#__PURE__*/React.createElement("li", {
    key: m
  }, m))), /*#__PURE__*/React.createElement("h3", {
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

// components/content/ArticleToc/ArticleToc.jsx
try { (() => {
// Marks the last chapter whose heading has reached the upper third of the viewport,
// so a chapter counts as current as soon as it is the one being read, not only once its heading hits the header.
function useCurrent(ids) {
  const [current, setCurrent] = React.useState(ids[0]);
  React.useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight / 3;
      let next = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) next = id;
      }
      setCurrent(next);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [ids.join('|')]);
  return current;
}
function ArticleToc({
  items = [],
  title = 'Spis treści',
  collapsible = false
}) {
  const current = useCurrent(items.map(it => it.id));
  const details = React.useRef(null);
  const list = /*#__PURE__*/React.createElement("ol", null, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: it.id
  }, /*#__PURE__*/React.createElement("a", {
    href: '#' + it.id,
    "aria-current": it.id === current ? 'true' : undefined,
    onClick: e => {
      const el = document.getElementById(it.id);
      if (!el) return;
      e.preventDefault();
      if (details.current) details.current.open = false;
      el.scrollIntoView();
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "num",
    "aria-hidden": "true"
  }, String(i + 1).padStart(2, '0')), it.label))));
  if (collapsible) {
    return /*#__PURE__*/React.createElement("nav", {
      className: "bn-toc bn-toc--collapsible",
      "aria-label": title
    }, /*#__PURE__*/React.createElement("details", {
      ref: details
    }, /*#__PURE__*/React.createElement("summary", {
      className: "head"
    }, title, /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, String(items.length).padStart(2, '0'))), list));
  }
  return /*#__PURE__*/React.createElement("nav", {
    className: "bn-toc",
    "aria-label": title
  }, /*#__PURE__*/React.createElement("p", {
    className: "head"
  }, title), list);
}
Object.assign(__ds_scope, { ArticleToc });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ArticleToc/ArticleToc.jsx", error: String((e && e.message) || e) }); }

// components/content/ArticleLayout/ArticleLayout.jsx
try { (() => {
function ArticleLayout({
  toc,
  tocTitle,
  children
}) {
  const article = /*#__PURE__*/React.createElement("article", {
    className: "bn-article"
  }, children);
  if (!toc || !toc.length) return article;
  return /*#__PURE__*/React.createElement("div", {
    className: "bn-article-grid"
  }, /*#__PURE__*/React.createElement(__ds_scope.ArticleToc, {
    items: toc,
    title: tocTitle
  }), /*#__PURE__*/React.createElement(__ds_scope.ArticleToc, {
    items: toc,
    title: tocTitle,
    collapsible: true
  }), article);
}
Object.assign(__ds_scope, { ArticleLayout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ArticleLayout/ArticleLayout.jsx", error: String((e && e.message) || e) }); }

// components/content/ChallengeBlock/ChallengeBlock.jsx
try { (() => {
function ChallengeBlock({
  label = 'Wyzwanie',
  title,
  problem,
  solution,
  result
}) {
  const rows = [['Problem', problem], ['Rozwiązanie', solution], ['Rezultat', result]].filter(([, v]) => v);
  return /*#__PURE__*/React.createElement("div", {
    className: "bn-challenge"
  }, /*#__PURE__*/React.createElement("p", {
    className: "label"
  }, label), title && /*#__PURE__*/React.createElement("h3", {
    className: "title"
  }, title), /*#__PURE__*/React.createElement("dl", null, rows.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: 'row' + (k === 'Rezultat' ? ' result' : '')
  }, /*#__PURE__*/React.createElement("dt", null, k), /*#__PURE__*/React.createElement("dd", null, v)))));
}
Object.assign(__ds_scope, { ChallengeBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ChallengeBlock/ChallengeBlock.jsx", error: String((e && e.message) || e) }); }

// components/content/Faq/Faq.jsx
try { (() => {
// Native <details>: works without JS, keyboard and screen-reader friendly, several answers can stay open.
function Faq({
  items = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "bn-faq"
  }, items.map(it => /*#__PURE__*/React.createElement("details", {
    key: it.q,
    className: "item"
  }, /*#__PURE__*/React.createElement("summary", {
    className: "q"
  }, it.q), /*#__PURE__*/React.createElement("div", {
    className: "a"
  }, /*#__PURE__*/React.createElement("p", null, it.a)))));
}
Object.assign(__ds_scope, { Faq });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Faq/Faq.jsx", error: String((e && e.message) || e) }); }

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

// components/cards/CooperationCard/CooperationCard.jsx
try { (() => {
function CooperationCard({
  title,
  duration,
  ideal,
  scope = [],
  featured = false,
  badge = 'Główna usługa',
  link,
  linkLabel = 'Szczegóły',
  onClick
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: 'bn-coop-card' + (featured ? ' bn-coop-card--featured' : '')
  }, /*#__PURE__*/React.createElement("p", {
    className: "duration"
  }, /*#__PURE__*/React.createElement("span", null, duration), featured && /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, badge)), /*#__PURE__*/React.createElement("h3", {
    className: "title"
  }, title), ideal && /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, ideal), scope.length > 0 && /*#__PURE__*/React.createElement(__ds_scope.CheckList, {
    items: scope
  }), link && /*#__PURE__*/React.createElement("div", {
    className: "link"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "link",
    href: link,
    onClick: onClick,
    arrow: true
  }, linkLabel)));
}
Object.assign(__ds_scope, { CooperationCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CooperationCard/CooperationCard.jsx", error: String((e && e.message) || e) }); }

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
  onClick,
  plain = false
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: 'bn-service-card' + (plain ? ' bn-service-card--plain' : '')
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

// components/content/ArticleHeader/ArticleHeader.jsx
try { (() => {
const withDot = t => typeof t === 'string' && t.endsWith('.') ? /*#__PURE__*/React.createElement(React.Fragment, null, t.slice(0, -1), /*#__PURE__*/React.createElement("span", {
  className: "bn-dot"
}, ".")) : t;
function ArticleHeader({
  back,
  eyebrow,
  title,
  excerpt,
  meta = [],
  cover,
  coverAlt = ''
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: 'bn-article-header' + (cover ? ' bn-article-header--cover' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "top bn-dark bn-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container bn-article-grid"
  }, back && /*#__PURE__*/React.createElement("a", {
    className: "back",
    href: back.href,
    onClick: back.onClick
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2190"), back.label), /*#__PURE__*/React.createElement("div", {
    className: "main"
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, withDot(title)), excerpt && /*#__PURE__*/React.createElement("p", {
    className: "excerpt"
  }, excerpt), meta.length > 0 && /*#__PURE__*/React.createElement("ul", {
    className: "meta"
  }, meta.map(m => /*#__PURE__*/React.createElement("li", {
    key: m
  }, m)))))), cover && /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("figure", {
    className: "cover"
  }, /*#__PURE__*/React.createElement("img", {
    src: cover,
    alt: coverAlt
  }))));
}
Object.assign(__ds_scope, { ArticleHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ArticleHeader/ArticleHeader.jsx", error: String((e && e.message) || e) }); }

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
    className: 'bn-timeline-item' + (current ? ' current' : '')
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
  }, it)))), status && /*#__PURE__*/React.createElement("div", {
    className: "status"
  }, /*#__PURE__*/React.createElement("span", {
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
  actions,
  dark = true,
  size = 'lg'
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: 'bn-page-header bn-grid' + (size === 'md' ? ' bn-page-header--md' : '') + (dark ? ' bn-dark' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "container inner"
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "page-title"
  }, withDot(title)), subtitle && /*#__PURE__*/React.createElement("p", {
    className: "page-subtitle"
  }, subtitle), tags && tags.length > 0 && /*#__PURE__*/React.createElement(__ds_scope.TagList, {
    items: tags
  }), actions && /*#__PURE__*/React.createElement("div", {
    className: "actions"
  }, actions)));
}
Object.assign(__ds_scope, { PageHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PageHeader/PageHeader.jsx", error: String((e && e.message) || e) }); }

// components/forms/ContactForm/ContactForm.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FIELDS = [{
  id: 'name',
  label: 'Imię i nazwisko',
  required: true,
  autoComplete: 'name'
}, {
  id: 'company',
  label: 'Nazwa firmy',
  required: true,
  autoComplete: 'organization'
}, {
  id: 'email',
  label: 'Email',
  required: true,
  type: 'email',
  autoComplete: 'email'
}, {
  id: 'phone',
  label: 'Telefon',
  type: 'tel',
  autoComplete: 'tel'
}, {
  id: 'team',
  label: 'Wielkość zespołu IT',
  required: true,
  full: true,
  options: ['do 10 osób', '10–30 osób', '30–80 osób', 'ponad 80 osób']
}, {
  id: 'description',
  label: 'Opis wyzwania',
  required: true,
  full: true,
  multiline: true
}];
const EMPTY = Object.fromEntries(FIELDS.map(f => [f.id, '']));
function validate(v) {
  const errs = {};
  FIELDS.forEach(f => {
    if (f.required && !v[f.id].trim()) errs[f.id] = 'To pole jest wymagane.';
  });
  if (!errs.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) errs.email = 'Wpisz adres w formacie nazwa@firma.pl.';
  return errs;
}
function ContactForm({
  onSubmit,
  submitLabel = 'Wyślij zapytanie',
  privacyHref
}) {
  const [v, setV] = React.useState(EMPTY);
  const [errs, setErrs] = React.useState({});
  const [tried, setTried] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const form = React.useRef(null);
  const done = React.useRef(null);
  // After the first submit, errors follow the input so a fixed field clears at once.
  const set = k => e => {
    const next = {
      ...v,
      [k]: e.target.value
    };
    setV(next);
    if (tried) setErrs(validate(next));
  };
  const submit = e => {
    e.preventDefault();
    const found = validate(v);
    setTried(true);
    setErrs(found);
    const first = FIELDS.find(f => found[f.id]);
    if (first) {
      const el = form.current.querySelector('#cf-' + first.id);
      el.focus({
        preventScroll: true
      });
      el.scrollIntoView({
        block: 'center'
      });
      return;
    }
    onSubmit && onSubmit(v);
    setSent(true);
  };
  React.useEffect(() => {
    if (sent && done.current) {
      done.current.focus({
        preventScroll: true
      });
      done.current.scrollIntoView({
        block: 'center'
      });
    }
  }, [sent]);
  if (sent) {
    return /*#__PURE__*/React.createElement("div", {
      className: "bn-form-done",
      ref: done,
      tabIndex: -1,
      role: "status"
    }, /*#__PURE__*/React.createElement("p", {
      className: "title"
    }, "Dzi\u0119ki, wiadomo\u015B\u0107 dotar\u0142a."), /*#__PURE__*/React.createElement("p", {
      className: "text"
    }, "Odezw\u0119 si\u0119 w ci\u0105gu jednego dnia roboczego z propozycj\u0105 terminu rozmowy."), /*#__PURE__*/React.createElement(__ds_scope.Button, {
      as: "button",
      type: "button",
      variant: "link",
      onClick: () => {
        setV(EMPTY);
        setErrs({});
        setTried(false);
        setSent(false);
      }
    }, "Wy\u015Blij kolejne zapytanie"));
  }
  const count = Object.keys(errs).length;
  const field = f => {
    const id = 'cf-' + f.id,
      err = errs[f.id];
    const common = {
      id,
      className: 'bn-input' + (err ? ' is-invalid' : ''),
      value: v[f.id],
      onChange: set(f.id),
      required: f.required,
      'aria-invalid': err ? 'true' : undefined,
      'aria-describedby': err ? id + '-err' : undefined
    };
    return /*#__PURE__*/React.createElement("div", {
      key: f.id,
      className: 'group' + (f.full ? ' full' : '')
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: id
    }, f.label, f.required && /*#__PURE__*/React.createElement("span", {
      className: "req",
      "aria-hidden": "true"
    }, " *")), f.options ? /*#__PURE__*/React.createElement("select", common, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Wybierz\u2026"), f.options.map(o => /*#__PURE__*/React.createElement("option", {
      key: o,
      value: o
    }, o))) : f.multiline ? /*#__PURE__*/React.createElement("textarea", _extends({}, common, {
      rows: 8
    })) : /*#__PURE__*/React.createElement("input", _extends({}, common, {
      type: f.type || 'text',
      autoComplete: f.autoComplete
    })), err && /*#__PURE__*/React.createElement("p", {
      className: "error",
      id: id + '-err'
    }, err));
  };
  return /*#__PURE__*/React.createElement("form", {
    className: "bn-form",
    noValidate: true,
    onSubmit: submit,
    ref: form
  }, /*#__PURE__*/React.createElement("p", {
    className: "bn-sr-only",
    role: "status",
    "aria-live": "polite"
  }, count ? count === 1 ? 'Popraw jedno pole.' : 'Popraw ' + count + (count < 5 ? ' pola.' : ' pól.') : ''), /*#__PURE__*/React.createElement("div", {
    className: "grid"
  }, FIELDS.filter(f => !f.multiline).map(field)), FIELDS.filter(f => f.multiline).map(field), /*#__PURE__*/React.createElement("div", {
    className: "actions"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    as: "button",
    type: "submit",
    arrow: true
  }, submitLabel), /*#__PURE__*/React.createElement("p", {
    className: "note"
  }, "Dane z formularza wykorzystam tylko do odpowiedzi na zapytanie.", privacyHref && /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("a", {
    href: privacyHref
  }, "Polityka prywatno\u015Bci")))));
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
  const [latest, ...rest] = d.cases;
  const card = (c, featured) => /*#__PURE__*/React.createElement(CaseStudyCard, {
    key: c.slug,
    featured: featured,
    title: c.title,
    excerpt: c.excerpt,
    meta: [c.sector, d.readingTime(c)],
    image: d.img + c.image,
    href: '#/case/' + c.slug,
    onClick: e => {
      e.preventDefault();
      go('case', c.slug);
    }
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Case studies",
    title: "Wyniki, nie slajdy.",
    subtitle: "Projekty, w kt\xF3rych zmiana procesu i architektury da\u0142a mierzalny efekt."
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, card(latest, true), rest.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "bn-cols bn-cols--3"
  }, rest.map(c => card(c, false))), /*#__PURE__*/React.createElement(Pagination, {
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
// Heading ids for the table of contents: "Wnioski dla firm TSL" -> "wnioski-dla-firm-tsl"
const slugify = t => t.toLowerCase().replace(/ł/g, 'l').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
function CaseStudyScreen({
  go,
  slug
}) {
  const {
    ArticleHeader,
    ArticleLayout,
    TagList,
    Stat,
    ChallengeBlock,
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
  const chapters = post.body.map(c => ({
    ...c,
    id: slugify(c.title)
  }));
  const block = (b, k) => b.lead ? /*#__PURE__*/React.createElement("p", {
    key: k,
    className: "lead"
  }, b.lead) : b.p ? /*#__PURE__*/React.createElement("p", {
    key: k
  }, b.p) : b.h3 ? /*#__PURE__*/React.createElement("h3", {
    key: k
  }, b.h3) : b.list ? /*#__PURE__*/React.createElement("ul", {
    key: k
  }, b.list.map(li => /*#__PURE__*/React.createElement("li", {
    key: li
  }, li))) : b.quote ? /*#__PURE__*/React.createElement("blockquote", {
    key: k
  }, /*#__PURE__*/React.createElement("p", null, "\u201E", b.quote, "\u201D"), /*#__PURE__*/React.createElement("footer", null, b.by)) : b.challenge ? /*#__PURE__*/React.createElement(ChallengeBlock, {
    key: k,
    label: b.challenge,
    title: b.title,
    problem: b.problem,
    solution: b.solution,
    result: b.result
  }) : b.pullQuote ? /*#__PURE__*/React.createElement(PullQuote, {
    key: k,
    quote: post.quote,
    role: post.quoteAuthor
  }) : b.stats ? /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "bn-cols bn-cols--3"
  }, post.stats.map(s => /*#__PURE__*/React.createElement(Stat, _extends({
    key: s.label
  }, s)))) : null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ArticleHeader, {
    back: {
      label: 'Case studies',
      href: '#/cases',
      onClick: e => {
        e.preventDefault();
        go('cases');
      }
    },
    eyebrow: 'Case study · ' + post.sector,
    title: post.title,
    excerpt: post.excerpt,
    meta: [post.period, post.role, d.readingTime(post)],
    cover: d.img + post.image
  }), /*#__PURE__*/React.createElement("div", {
    className: "container bn-article-body"
  }, /*#__PURE__*/React.createElement(ArticleLayout, {
    toc: chapters.map(c => ({
      id: c.id,
      label: c.title
    }))
  }, chapters.map((c, ci) => [/*#__PURE__*/React.createElement("h2", {
    key: c.id,
    id: c.id
  }, /*#__PURE__*/React.createElement("span", {
    className: "num",
    "aria-hidden": "true"
  }, String(ci + 1).padStart(2, '0')), c.title), ...c.blocks.map((b, bi) => block(b, c.id + bi))]), /*#__PURE__*/React.createElement(TagList, {
    items: post.tags
  }))), /*#__PURE__*/React.createElement("div", {
    className: "container bn-article-grid"
  }, /*#__PURE__*/React.createElement("nav", {
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
    title: "Masz podobne wyzwanie?",
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
  const next = ['Odpisuję w ciągu jednego dnia roboczego z propozycją terminu.', 'Rozmawiamy 30 minut o Waszym procesie i celach.', 'Dostajesz notatkę z 2–3 miejscami, gdzie AI da najwięcej.'];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Kontakt",
    title: "Porozmawiajmy.",
    subtitle: "30 minut o tym, jak dzi\u015B wygl\u0105da Wasz proces. Bez prezentacji sprzeda\u017Cowej."
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container bn-cols bn-cols--split bn-cols--mobile-reverse"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Co dalej",
    title: "Trzy kroki."
  }), /*#__PURE__*/React.createElement("ul", null, next.map((t, i) => /*#__PURE__*/React.createElement(ProblemListItem, {
    key: t,
    marker: String(i + 1).padStart(2, '0'),
    text: t
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bn-contact-direct"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Bezpo\u015Brednio"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:kontakt@broniszewski.net"
  }, "kontakt@broniszewski.net"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.linkedin.com/in/przemys%C5%82aw-broniszewski/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "LinkedIn \u2197"), /*#__PURE__*/React.createElement(LiveBadge, null, "Wolne terminy od listopada"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Formularz",
    title: "Opisz wyzwanie."
  }), /*#__PURE__*/React.createElement(ContactForm, {
    privacyHref: "#"
  })))));
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
    eyebrowPrefix: "01 /",
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
    eyebrowPrefix: "02 /",
    title: "Trzy formaty."
  }), /*#__PURE__*/React.createElement("div", {
    className: "bn-cols bn-cols--3"
  }, /*#__PURE__*/React.createElement(CooperationCard, {
    duration: "1\u20132 dni",
    title: "Warsztaty dla zespo\u0142u",
    ideal: "Chcesz, \u017Ceby zesp\xF3\u0142 pracowa\u0142 z AI \u015Bwiadomie i wed\u0142ug wsp\xF3lnych zasad.",
    scope: ['Code review z AI', 'Testy z AI', 'Praca z agentami'],
    link: "#/contact",
    linkLabel: "Zapytaj",
    onClick: click(() => go('contact'))
  }), /*#__PURE__*/React.createElement(CooperationCard, {
    duration: "2 tygodnie",
    title: "Diagnoza SDLC",
    ideal: "Chcesz wiedzie\u0107, gdzie AI da Waszemu zespo\u0142owi najwi\u0119cej, zanim wydasz bud\u017Cet.",
    scope: ['Warsztat i pomiary', 'Raport z priorytetami', 'Rekomendacja: pilotaż czy nie'],
    link: "#/contact",
    linkLabel: "Zapytaj",
    onClick: click(() => go('contact'))
  }), /*#__PURE__*/React.createElement(CooperationCard, {
    featured: true,
    duration: "6\u201310 tygodni",
    title: "Pilota\u017C AI w SDLC",
    ideal: "Chcesz przej\u015B\u0107 od eksperyment\xF3w do procesu na jednym zespole.",
    scope: ['Cały proces, kroki 01–04', 'Coaching w pracy zespołu', 'Metryki przed / po'],
    link: "#/service",
    onClick: click(() => go('service'))
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section section--subtle bn-grid bn-grid--fade"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Do\u015Bwiadczenie",
    eyebrowPrefix: "03 /",
    title: "20 lat w software.",
    titleMuted: "Od kodu do architektury procesu."
  }), /*#__PURE__*/React.createElement(Timeline, null, /*#__PURE__*/React.createElement(TimelineItem, {
    label: "2024\u2013teraz",
    title: "Architekt / konsultant AI w SDLC",
    meta: "Niezale\u017Cnie",
    description: 'Wdrożenia AI w procesie wytwarzania dla zespołów 10–\u206080 osób.',
    status: "Teraz",
    current: true
  }), /*#__PURE__*/React.createElement(TimelineItem, {
    label: "2016\u20132024",
    title: "CTO / Head of Engineering",
    meta: "TSL \xB7 e-commerce",
    description: "Transformacja cyfrowa, platforma CI/CD, skalowanie zespo\u0142u z 6 do 40 os\xF3b.",
    status: "8 lat"
  }), /*#__PURE__*/React.createElement(TimelineItem, {
    label: "2006\u20132016",
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
    eyebrowPrefix: "04 /",
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
    meta: [c.sector, d.readingTime(c)],
    href: "#",
    onClick: click(() => go('case', c.slug))
  }))))), /*#__PURE__*/React.createElement(FinalCTA, {
    intro: "Opowiedz, jak dzi\u015B wygl\u0105da Wasz proces. Wska\u017C\u0119 2\u20133 miejsca, gdzie AI da najwi\u0119cej.",
    points: ['Mapa Waszego SDLC w 30 minut', 'Szybkie zwycięstwa na najbliższy sprint', 'Czy pilotaż ma sens - szczerze'],
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
    Faq,
    Eyebrow,
    Button,
    FinalCTA
  } = window.BroniszewskiDesignSystem_db82bc;
  const d = window.BN_DATA;
  const toContact = e => {
    e.preventDefault();
    go('contact');
  };
  const fits = ['Zespół 10–80 osób już używa narzędzi AI, ale każdy po swojemu.', 'Macie CI/CD i zgodę na zebranie podstawowych metryk.', 'Lider zespołu znajdzie 2–3 godziny tygodniowo na pilotaż.'];
  const misfits = ['Szukacie jednorazowego szkolenia z promptowania.', 'Firma nie dopuszcza jeszcze AI do pracy z kodem.', 'Zespół jest w trakcie dużej reorganizacji.'];
  const faq = [{
    q: 'Ile kosztuje pilotaż?',
    a: 'Stała cena za cały pilotaż, ustalana po pierwszej rozmowie. Zależy od wielkości zespołu i czasu trwania, nie od liczby godzin.'
  }, {
    q: 'Ile czasu zabiera to zespołowi?',
    a: 'Pół dnia warsztatu na start, potem około godziny tygodniowo na przegląd efektów. Reszta dzieje się w codziennej pracy.'
  }, {
    q: 'Jakich narzędzi używamy?',
    a: 'Tych, które już macie albo na które firma się zgodzi. Pilotaż dotyczy procesu, nie konkretnego dostawcy.'
  }, {
    q: 'Co z bezpieczeństwem kodu?',
    a: 'Zasady ustalamy w pierwszym tygodniu: jakie dane mogą trafić do modeli, gdzie potrzebny jest self-hosting i co zawsze wymaga review człowieka.'
  }, {
    q: 'Co po pilotażu?',
    a: 'Zespół zostaje z playbookiem i metrykami. Jeśli wyniki są dobre, pomagam przenieść proces na kolejne zespoły.'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Us\u0142uga",
    title: "Pilota\u017C AI w SDLC.",
    subtitle: "6\u201310 tygodni na jednym zespole. Od eksperyment\xF3w z narz\u0119dziami do wsp\xF3lnego procesu z mierzalnym efektem.",
    actions: /*#__PURE__*/React.createElement(Button, {
      href: "#/contact",
      onClick: toContact,
      arrow: true
    }, "Um\xF3w rozmow\u0119")
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
    eyebrow: "Co dostajesz",
    title: "Trzy rezultaty.",
    subtitle: "Zostaj\u0105 w zespole po moim wyj\u015Bciu."
  }), /*#__PURE__*/React.createElement("div", {
    className: "bn-cols bn-cols--3 bn-cols--fixed"
  }, /*#__PURE__*/React.createElement(ServiceCard, {
    plain: true,
    number: 1,
    title: "Mapa procesu",
    description: "Droga od ticketu do produkcji z zaznaczonymi miejscami, gdzie praca czeka.",
    points: ['Warsztat z zespołem', 'Baseline metryk', 'Priorytety zmian']
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    plain: true,
    number: 2,
    title: "Playbook zespo\u0142u",
    description: "Wsp\xF3lne zasady pracy z AI: kiedy agent, kiedy asystent, kiedy cz\u0142owiek.",
    points: ['Guardraile i bezpieczeństwo', 'Prompty i szablony', 'Definicja review']
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    plain: true,
    number: 3,
    title: "Metryki przed / po",
    description: "Dow\xF3d, co si\u0119 zmieni\u0142o, zanim przeniesiecie proces na kolejne zespo\u0142y.",
    points: ['Lead time', 'Czas review', 'Jakość wydań']
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Przebieg",
    title: "Tydzie\u0144 po tygodniu."
  }), /*#__PURE__*/React.createElement(Timeline, null, /*#__PURE__*/React.createElement(TimelineItem, {
    label: "Tydzie\u0144 1\u20132",
    title: "Diagnoza",
    meta: "Warsztat \xB7 pomiary",
    description: "Przechodz\u0119 z zespo\u0142em ca\u0142\u0105 drog\u0119 zmiany i mierz\u0119, gdzie praca stoi."
  }), /*#__PURE__*/React.createElement(TimelineItem, {
    label: "Tydzie\u0144 3",
    title: "Architektura",
    meta: "Zasady \xB7 narz\u0119dzia",
    description: "Projektuj\u0119 rol\u0119 AI w procesie i ustalam, co mierzymy."
  }), /*#__PURE__*/React.createElement(TimelineItem, {
    label: "Tydzie\u0144 4\u20138",
    title: "Wdro\u017Cenie AI",
    meta: "Coaching w pracy",
    description: "Zesp\xF3\u0142 pracuje nowym procesem, a ja co tydzie\u0144 przegl\u0105dam efekty.",
    current: true
  }), /*#__PURE__*/React.createElement(TimelineItem, {
    label: "Tydzie\u0144 9\u201310",
    title: "Utrwalenie",
    meta: "Playbook \xB7 liderzy",
    description: "Przekazuj\u0119 proces liderom, \u017Ceby dzia\u0142a\u0142 beze mnie."
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section section--subtle bn-grid bn-grid--fade"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Efekt",
    title: "Co mierz\u0119."
  }), /*#__PURE__*/React.createElement("div", {
    className: "bn-cols bn-cols--3 bn-cols--fixed"
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
  })), /*#__PURE__*/React.createElement("p", {
    className: "bn-footnote"
  }, "Przyk\u0142ad z pilota\u017Cu w zespole 12 os\xF3b."))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Dla kogo",
    title: "Kiedy warto zacz\u0105\u0107."
  }), /*#__PURE__*/React.createElement("div", {
    className: "bn-cols bn-cols--2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Ma sens, gdy"), /*#__PURE__*/React.createElement("ul", {
    className: "bn-fit-list"
  }, fits.map(t => /*#__PURE__*/React.createElement(ProblemListItem, {
    key: t,
    marker: "+",
    text: t
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Nie ma sensu, gdy"), /*#__PURE__*/React.createElement("ul", {
    className: "bn-fit-list"
  }, misfits.map(t => /*#__PURE__*/React.createElement(ProblemListItem, {
    key: t,
    marker: "\u2212",
    text: t
  }))))))), /*#__PURE__*/React.createElement("section", {
    className: "section section--subtle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container bn-cols bn-cols--split"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "FAQ",
    title: "Zanim zapytasz."
  }), /*#__PURE__*/React.createElement(Faq, {
    items: faq
  }))), /*#__PURE__*/React.createElement(FinalCTA, {
    title: "Sprawd\u017Amy, czy pilota\u017C ma sens.",
    intro: "W 30 minut ocenimy, czy Wasz zesp\xF3\u0142 jest gotowy i od czego zacz\u0105\u0107.",
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
// A post `body` is a list of chapters ({ title, blocks }); each chapter becomes an h2 and a table of contents entry.
// Blocks: { lead } | { p } | { h3 } | { list: [] } | { quote, by } | { challenge, title, problem, solution, result }
//   | { pullQuote: true } (the post's `quote`, once) | { stats: true } (the post's `stats` as a row).
window.BN_DATA = {
  img: '../../assets/images/',
  // Reading time of a post body at ~180 words a minute, shared by the listing and the article
  readingTime: post => Math.max(1, Math.round(JSON.stringify(post.body).split(/\s+/).length / 180)) + ' min czytania',
  cases: [{
    slug: 'od-arkuszy-do-tms',
    sector: 'Logistyka',
    image: 'tms.png',
    period: '2015-2023',
    role: 'Architekt i lider projektu',
    title: 'Od arkuszy do automatyzacji.',
    excerpt: 'Osiem lat budowy systemu TMS od podstaw: od Excela i telefonów do kierowców do platformy, na której pracuje cała firma.',
    tags: ['TMS', 'PostgreSQL', 'Apache Kafka', 'Logistyka'],
    stats: [{
      value: '+300%',
      label: 'Wydajność transportu'
    }, {
      value: '−95%',
      label: 'Błędy w rozliczeniach'
    }, {
      value: '3 dni → 1',
      label: 'Czas rozliczeń'
    }],
    quote: 'Nie chcieliśmy kolejnego narzędzia. Chcieliśmy rozwiązania, które zmieni sposób, w jaki pracujemy.',
    quoteAuthor: 'Dyrektor operacyjny',
    body: [{
      title: 'Punkt wyjścia',
      blocks: [{
        lead: 'Spedytorzy prowadzili ewidencję zleceń w Excelu, kierowcy dzwonili z pytaniami o kolejne kursy, a zarząd potrzebował tygodnia na raport wykorzystania floty. Tak wyglądała ta firma transportowa w 2015 roku.'
      }, {
        p: 'Dziś ten sam system obsługuje setki pojazdów i tysiące zleceń miesięcznie, a raporty powstają w czasie rzeczywistym. Oto historia tej transformacji.'
      }]
    }, {
      title: 'Wyzwania',
      blocks: [{
        p: 'Branża transportowa wciąż zmaga się z cyfrową fragmentacją. Większość firm TSL prowadzi operacje w kilkunastu narzędziach, od arkuszy po karteczki. Informacje o flocie, statusie zleceń i rozliczeniach są rozproszone, więc szybkie decyzje operacyjne są niemożliwe.'
      }, {
        p: 'Spedytorzy spędzali godziny na ręcznym zbieraniu danych, kierowcy dzwonili do biura, a zarząd nie miał realnego obrazu rentowności tras. Małe problemy operacyjne kumulowały się w straty czasu i pieniędzy.'
      }, {
        quote: 'Spędzałem 3 godziny dziennie na dzwonieniu do kierowców, żeby sprawdzić status zleceń.',
        by: 'Główny spedytor'
      }, {
        quote: 'Nigdy nie wiedzieliśmy na bieżąco, ile naprawdę zarabiamy na poszczególnych trasach.',
        by: 'Menedżer operacyjny'
      }]
    }, {
      title: 'Cele biznesowe',
      blocks: [{
        p: 'System TMS to nie projekt IT, tylko zmiana sposobu działania całej firmy. Zaczęliśmy od mapowania codziennych procesów: jak spedytor planuje trasy, jak kierowcy dostają zlecenia, jak księgowość rozlicza dokumenty i jak zarząd monitoruje rentowność.'
      }, {
        p: 'Sukces zdefiniowaliśmy konkretnie, zanim powstała pierwsza linia kodu:'
      }, {
        list: ['Czas planowania tras krótszy o co najmniej 70%', 'Wykorzystanie floty powyżej 80%', 'Raport finansowy w ciągu jednego dnia roboczego']
      }, {
        p: 'Każda grupa użytkowników miała inne priorytety. Dyspozytorzy potrzebowali przejrzystego zarządzania zleceniami, kierowcy informacji w telefonie, księgowość automatycznych dokumentów, a zarząd dashboardów. Wspólny cel był jeden: mniej ręcznej pracy.'
      }, {
        pullQuote: true
      }]
    }, {
      title: 'Architektura',
      blocks: [{
        p: 'Technologia miała wynikać z potrzeb biznesu i możliwości zespołu, a nie z trendów. PHP dał szybkość rozwoju i łatwy dostęp do programistów. PostgreSQL w układzie master-slave oddzielił operacje transakcyjne od ciężkich zapytań raportowych. Od początku zakładaliśmy kilkukrotny wzrost liczby zleceń.'
      }, {
        p: 'Każda operacja trafiała do dziennika zdarzeń (audit log) ze względów prawnych i wymogów ISO. System obsługuje wrażliwe dane finansowe, więc dostał wielopoziomowe uprawnienia, szyfrowanie połączeń i regularne backupy z szybkim odtwarzaniem.'
      }, {
        challenge: 'Wyzwanie',
        title: 'Dwustronna integracja ze starym systemem rozliczeń',
        problem: 'Rozliczenia nadal działały w starym systemie, który przechowywał znacznie uboższą strukturę danych niż nowy TMS.',
        solution: 'Kolejkowy system integracji, który zachowywał kolejność zdarzeń i mapował bogate dane na strukturę starego systemu.',
        result: 'Oba systemy pracowały równolegle bez utraty krytycznych informacji.'
      }, {
        p: 'Każdy obszar funkcjonalny był osobnym modułem, rozwijanym i testowanym niezależnie. Najlepsza architektura to ta, którą zespół klienta utrzyma po zakończeniu projektu, dlatego stawiałem na przejrzysty kod i dokumentację.'
      }]
    }, {
      title: 'Wdrożenie',
      blocks: [{
        p: 'Wdrożenie TMS to maraton, nie sprint, bo firma musi cały czas działać. Zanim powstał kod, przeprowadziliśmy setki godzin rozmów z kierownikami transportu własnego, spedycji, sprzedaży i operacji. To mapowanie procesów było fundamentem projektu.'
      }, {
        p: 'MVP objęło tylko najbardziej krytyczne operacje: zlecenia i statusy. Potem co kilka dni kolejny zespół zaczynał pracę w systemie, a jego uwagi trafiały do poprawek od razu.'
      }, {
        quote: 'Pierwsza wersja była prosta, ale już wtedy oszczędzała mi godzinę dziennie.',
        by: 'Spedytor z grupy pilotażowej'
      }, {
        challenge: 'Wyzwanie 01',
        title: 'Opór zespołu wobec zmian',
        problem: 'Doświadczeni spedytorzy obawiali się, że system utrudni im pracę i zastąpi ich doświadczenie.',
        solution: 'Program ambasadorów: najbardziej doświadczeni pracownicy jako pierwsi użytkownicy, a potem trenerzy pozostałych zespołów.',
        result: 'Opór spadł z 60% do 15% zespołu w trzy miesiące.'
      }, {
        challenge: 'Wyzwanie 02',
        title: 'Dwa systemy równolegle',
        problem: 'Przez trzy miesiące stary i nowy system działały jednocześnie, co podwajało pracę administracyjną.',
        solution: 'Migracja zespół po zespole z weryfikacją krzyżową zleceń w obu systemach.',
        result: 'Zero utraconych danych i przejście bez zakłócenia operacji.'
      }, {
        challenge: 'Wyzwanie 03',
        title: 'Rozliczenia bez API',
        problem: 'Stary system rozliczeniowy nie miał API, a wymiana danych musiała działać w obie strony.',
        solution: 'Własny konektor z kolejką synchronizacji, który mapował dane między systemami.',
        result: 'Błędy w rozliczeniach spadły o 95%, a raport powstaje w dzień zamiast tygodnia.'
      }, {
        p: 'Wdrażaliśmy nie tylko system, ale nowe procesy pracy w całej organizacji, od sprzedaży po rozliczenia.'
      }]
    }, {
      title: 'Rezultaty',
      blocks: [{
        lead: 'Dokumenty przewozowe, faktury i raporty, które przygotowywano przez pół dnia, powstają w kilka minut. Spedytorzy widzą każdy pojazd i status zlecenia na mapie w czasie rzeczywistym.'
      }, {
        stats: true
      }, {
        p: 'Kierowcy dostają zlecenia w aplikacji zamiast faksem, więc czas reakcji spadł z godzin do minut. Wizualne harmonogramy pojazdów uprościły planowanie floty własnej.'
      }, {
        p: 'Na open space zawisły ekrany z dostępnością pojazdów na żywo. Każdy widzi „dziurę” w harmonogramie, na przykład anulowane zlecenie albo wcześniejszy powrót z trasy, i od razu ją zagospodarowuje.'
      }, {
        quote: 'Kierowcy przestali dzwonić z pytaniem, gdzie odebrać przesyłkę. Widzą to w aplikacji.',
        by: 'Kierownik działu spedycji'
      }, {
        p: 'Rozliczenia, które trwały do trzech dni roboczych, zajmują jeden dzień. Decyzje zapadają na podstawie danych z bieżącego dnia, a nie raportów sprzed tygodni.'
      }]
    }, {
      title: 'Skalowanie',
      blocks: [{
        p: 'System rósł razem z firmą. Aplikacja mobilna dla kierowców powstała na prośbę zespołu operacyjnego. Panel dla przewoźników zewnętrznych uprościł współpracę z podwykonawcami, a rozliczanie dokumentów na bieżąco zastąpiło comiesięczne sesje, które paraliżowały księgowość.'
      }, {
        challenge: 'Wyzwanie',
        title: 'Kilkukrotnie więcej danych niż zakładano',
        problem: 'Po roku intensywnej pracy część operacji zwolniła.',
        solution: 'Refaktoring bazy PostgreSQL, nowe indeksy, cache i kolejki Apache Kafka dla raportów i synchronizacji z systemami zewnętrznymi.',
        result: 'System działa płynnie przy znacznie większym obciążeniu.'
      }, {
        p: 'Integracje z telematyką dały dokładne czasy realizacji, a integracje z kluczowymi klientami przekazują statusy bez ręcznego raportowania.'
      }, {
        quote: 'Kiedy potrzebujemy nowej funkcji, wiemy, że można ją dodać bez przebudowy wszystkiego.',
        by: 'Dyrektor operacyjny'
      }]
    }, {
      title: 'Wnioski dla firm TSL',
      blocks: [{
        p: 'Decyzja „budować czy kupować” zależy od procesów firmy. Gotowy SaaS sprawdza się w standardowych operacjach. Gdy procesy są unikalne, własny system bywa tańszy w długim terminie.'
      }, {
        h3: 'Sygnały ostrzegawcze'
      }, {
        list: ['Dostawca nie pyta o specyfikę Twojej branży i sprzedaje „uniwersalne rozwiązanie”', 'Nie da się przetestować systemu na prawdziwych danych przez co najmniej miesiąc', 'Przez miesiąc nie widzisz działającej funkcji', 'Nikt nie zajmuje się niechęcią zespołu do zmiany']
      }, {
        lead: 'Sukces systemu TMS zależy w 70% od zarządzania zmianą, a tylko w 30% od technologii.'
      }]
    }, {
      title: 'Co zrobiłbym inaczej',
      blocks: [{
        h3: 'Więcej czasu na szkolenia'
      }, {
        p: 'Planowałem dwa tygodnie na wdrożenie zespołu, a potrzebowałem sześciu. Każdy dział miał własny sposób pracy, który trzeba było przełożyć na system.'
      }, {
        h3: 'Szkolenia z każdej nowej funkcji'
      }, {
        p: 'Nowe funkcje ogłaszałem krótką wiadomością na Slacku. Zespół nie wiedział, po co są, więc leżały nieużywane miesiącami. Dziś każda dostałaby 15\u2011minutowe demo i krótkie wideo dla nowych pracowników.'
      }, {
        quote: 'Gdybym zaczynał dziś, poświęciłbym więcej czasu na zrozumienie codziennej pracy spedytorów.',
        by: 'Przemysław Broniszewski'
      }]
    }]
  }, {
    slug: 'synchronizacja-kafka',
    sector: 'Integracja danych',
    image: 'kafka.png',
    period: '2021, 9 miesięcy',
    role: 'Architekt integracji',
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
    quote: 'Pierwszy raz raport o 9:00 pokazuje to, co dzieje się o 9:00.',
    quoteAuthor: 'Kierownik controllingu',
    body: [{
      title: 'Kontekst',
      blocks: [{
        p: 'Dwa centra danych, cztery systemy i nocne eksporty CSV. Dane rozjeżdżały się w ciągu dnia, a raporty pokazywały stan sprzed doby.'
      }]
    }, {
      title: 'Problem',
      blocks: [{
        p: 'Każda nowa integracja była osobnym projektem, a awaria jednego eksportu blokowała pozostałe.'
      }, {
        pullQuote: true
      }]
    }, {
      title: 'Co zrobiłem',
      blocks: [{
        list: ['Zastąpiłem eksporty strumieniem zmian (CDC) na Apache Kafka.', 'Ustaliłem z zespołami jeden kontrakt zdarzeń zamiast czterech formatów.', 'Dodałem monitoring opóźnień widoczny dla biznesu, nie tylko dla IT.']
      }]
    }, {
      title: 'Efekt',
      blocks: [{
        lead: 'Raporty pokazują stan z bieżącej minuty, a nie sprzed doby. Nowy system podłącza się do strumienia w dni, a nie w miesiące.'
      }, {
        stats: true
      }, {
        p: 'Awaria jednej integracji nie zatrzymuje pozostałych, bo każda czyta strumień we własnym tempie.'
      }]
    }]
  }, {
    slug: 'wdrozenia-kubernetes',
    sector: 'DevOps',
    image: 'kubernetes.png',
    period: '2020, 6 miesięcy',
    role: 'Architekt platformy',
    title: 'Wdrożenie bez nocnych telefonów.',
    excerpt: 'Migracja na Kubernetes i CI/CD: wdrożenie przestało być wydarzeniem i stało się 30-minutową rutyną.',
    tags: ['Kubernetes', 'CI/CD', 'DevOps'],
    stats: [{
      value: '30 min',
      label: 'Czas wdrożenia'
    }, {
      value: 'Codziennie',
      label: 'Częstotliwość wdrożeń'
    }, {
      value: '0',
      label: 'Nocnych incydentów w kwartale'
    }],
    quote: 'Wdrożenie w piątek po południu przestało być żartem.',
    quoteAuthor: 'Tech lead',
    body: [{
      title: 'Kontekst',
      blocks: [{
        p: 'Wdrożenia odbywały się raz w miesiącu, w nocy, z udziałem całego zespołu. Tylko jedna osoba wiedziała, jak odtworzyć środowisko.'
      }]
    }, {
      title: 'Problem',
      blocks: [{
        p: 'Rzadkie wdrożenia oznaczały duże zmiany, a duże zmiany oznaczały awarie. Koło się zamykało.'
      }, {
        pullQuote: true
      }]
    }, {
      title: 'Co zrobiłem',
      blocks: [{
        list: ['Opisałem infrastrukturę jako kod, żeby każde środowisko dało się odtworzyć w minutach.', 'Zbudowałem potok CI/CD z testami, który wdraża małe zmiany bez udziału człowieka.', 'Przeszkoliłem zespół, żeby platforma nie zależała ode mnie.']
      }]
    }, {
      title: 'Efekt',
      blocks: [{
        lead: 'Zespół wdraża codziennie, w godzinach pracy i bez nocnych dyżurów. Nowe środowisko powstaje w kilka minut.'
      }, {
        stats: true
      }, {
        p: 'Platforma działa bez mnie: zespół sam ją rozwija i szkoli kolejne osoby.'
      }]
    }]
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.CaseStudyCard = __ds_scope.CaseStudyCard;

__ds_ns.CooperationCard = __ds_scope.CooperationCard;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.ArticleHeader = __ds_scope.ArticleHeader;

__ds_ns.ArticleImage = __ds_scope.ArticleImage;

__ds_ns.ArticleLayout = __ds_scope.ArticleLayout;

__ds_ns.ArticleToc = __ds_scope.ArticleToc;

__ds_ns.ChallengeBlock = __ds_scope.ChallengeBlock;

__ds_ns.Faq = __ds_scope.Faq;

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
