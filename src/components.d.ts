/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */


declare global {
  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }
}



import {
  AppMarked as AppMarked
} from './components/app-marked/app-marked';

declare global {
  interface HTMLAppMarkedElement extends AppMarked, HTMLStencilElement {
  }
  var HTMLAppMarkedElement: {
    prototype: HTMLAppMarkedElement;
    new (): HTMLAppMarkedElement;
  };
  interface HTMLElementTagNameMap {
    "app-marked": HTMLAppMarkedElement;
  }
  interface ElementTagNameMap {
    "app-marked": HTMLAppMarkedElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-marked": JSXElements.AppMarkedAttributes;
    }
  }
  namespace JSXElements {
    export interface AppMarkedAttributes extends HTMLAttributes {
      doc?: string;
    }
  }
}


import {
  DemosPage as DemosPage
} from './components/demos-page/demos-page';

declare global {
  interface HTMLDemosPageElement extends DemosPage, HTMLStencilElement {
  }
  var HTMLDemosPageElement: {
    prototype: HTMLDemosPageElement;
    new (): HTMLDemosPageElement;
  };
  interface HTMLElementTagNameMap {
    "demos-page": HTMLDemosPageElement;
  }
  interface ElementTagNameMap {
    "demos-page": HTMLDemosPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "demos-page": JSXElements.DemosPageAttributes;
    }
  }
  namespace JSXElements {
    export interface DemosPageAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  DocumentComponent as DocumentComponent
} from './components/document-component/document-component';

declare global {
  interface HTMLDocumentComponentElement extends DocumentComponent, HTMLStencilElement {
  }
  var HTMLDocumentComponentElement: {
    prototype: HTMLDocumentComponentElement;
    new (): HTMLDocumentComponentElement;
  };
  interface HTMLElementTagNameMap {
    "document-component": HTMLDocumentComponentElement;
  }
  interface ElementTagNameMap {
    "document-component": HTMLDocumentComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "document-component": JSXElements.DocumentComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface DocumentComponentAttributes extends HTMLAttributes {
      pages?: string[];
    }
  }
}


import {
  LandingPage as LandingPage
} from './components/landing-page/landing-page';

declare global {
  interface HTMLLandingPageElement extends LandingPage, HTMLStencilElement {
  }
  var HTMLLandingPageElement: {
    prototype: HTMLLandingPageElement;
    new (): HTMLLandingPageElement;
  };
  interface HTMLElementTagNameMap {
    "landing-page": HTMLLandingPageElement;
  }
  interface ElementTagNameMap {
    "landing-page": HTMLLandingPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "landing-page": JSXElements.LandingPageAttributes;
    }
  }
  namespace JSXElements {
    export interface LandingPageAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  LazyIframe as LazyIframe
} from './components/lazy-iframe/lazy-iframe';

declare global {
  interface HTMLLazyIframeElement extends LazyIframe, HTMLStencilElement {
  }
  var HTMLLazyIframeElement: {
    prototype: HTMLLazyIframeElement;
    new (): HTMLLazyIframeElement;
  };
  interface HTMLElementTagNameMap {
    "lazy-iframe": HTMLLazyIframeElement;
  }
  interface ElementTagNameMap {
    "lazy-iframe": HTMLLazyIframeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "lazy-iframe": JSXElements.LazyIframeAttributes;
    }
  }
  namespace JSXElements {
    export interface LazyIframeAttributes extends HTMLAttributes {
      frameBorder?: string;
      height?: string;
      scrolling?: string;
      src?: string;
      title?: string;
      width?: string;
    }
  }
}


import {
  pwasPage as PwasPage
} from './components/pwas-page/pwas-page';

declare global {
  interface HTMLPwasPageElement extends PwasPage, HTMLStencilElement {
  }
  var HTMLPwasPageElement: {
    prototype: HTMLPwasPageElement;
    new (): HTMLPwasPageElement;
  };
  interface HTMLElementTagNameMap {
    "pwas-page": HTMLPwasPageElement;
  }
  interface ElementTagNameMap {
    "pwas-page": HTMLPwasPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "pwas-page": JSXElements.PwasPageAttributes;
    }
  }
  namespace JSXElements {
    export interface PwasPageAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  ResourcesPage as ResourcesPage
} from './components/resources-page/resources-page';

declare global {
  interface HTMLResourcesPageElement extends ResourcesPage, HTMLStencilElement {
  }
  var HTMLResourcesPageElement: {
    prototype: HTMLResourcesPageElement;
    new (): HTMLResourcesPageElement;
  };
  interface HTMLElementTagNameMap {
    "resources-page": HTMLResourcesPageElement;
  }
  interface ElementTagNameMap {
    "resources-page": HTMLResourcesPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "resources-page": JSXElements.ResourcesPageAttributes;
    }
  }
  namespace JSXElements {
    export interface ResourcesPageAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  SiteHeader as SiteHeader
} from './components/site-header/site-header';

declare global {
  interface HTMLSiteHeaderElement extends SiteHeader, HTMLStencilElement {
  }
  var HTMLSiteHeaderElement: {
    prototype: HTMLSiteHeaderElement;
    new (): HTMLSiteHeaderElement;
  };
  interface HTMLElementTagNameMap {
    "site-header": HTMLSiteHeaderElement;
  }
  interface ElementTagNameMap {
    "site-header": HTMLSiteHeaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "site-header": JSXElements.SiteHeaderAttributes;
    }
  }
  namespace JSXElements {
    export interface SiteHeaderAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  SiteMenu as SiteMenu
} from './components/site-menu/site-menu';

declare global {
  interface HTMLSiteMenuElement extends SiteMenu, HTMLStencilElement {
  }
  var HTMLSiteMenuElement: {
    prototype: HTMLSiteMenuElement;
    new (): HTMLSiteMenuElement;
  };
  interface HTMLElementTagNameMap {
    "site-menu": HTMLSiteMenuElement;
  }
  interface ElementTagNameMap {
    "site-menu": HTMLSiteMenuElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "site-menu": JSXElements.SiteMenuAttributes;
    }
  }
  namespace JSXElements {
    export interface SiteMenuAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  App as StencilSite
} from './components/stencil-site/stencil-site';

declare global {
  interface HTMLStencilSiteElement extends StencilSite, HTMLStencilElement {
  }
  var HTMLStencilSiteElement: {
    prototype: HTMLStencilSiteElement;
    new (): HTMLStencilSiteElement;
  };
  interface HTMLElementTagNameMap {
    "stencil-site": HTMLStencilSiteElement;
  }
  interface ElementTagNameMap {
    "stencil-site": HTMLStencilSiteElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "stencil-site": JSXElements.StencilSiteAttributes;
    }
  }
  namespace JSXElements {
    export interface StencilSiteAttributes extends HTMLAttributes {
      
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
