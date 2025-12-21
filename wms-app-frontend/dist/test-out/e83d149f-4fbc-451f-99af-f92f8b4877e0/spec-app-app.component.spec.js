import {
  AuthService,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  init_auth_service,
  init_router
} from "./chunk-Z2KJ4WFC.js";
import {
  A11yModule,
  AriaDescriber,
  CdkScrollableModule,
  ComponentPortal,
  DOWN_ARROW,
  Directionality,
  DomPortalOutlet,
  ENTER,
  ESCAPE,
  FocusKeyManager,
  FocusMonitor,
  LEFT_ARROW,
  MatButtonModule,
  MatCommonModule,
  MatRipple,
  MatRippleModule,
  OverlayConfig,
  OverlayModule,
  Platform,
  RIGHT_ARROW,
  SPACE,
  ScrollDispatcher,
  TemplatePortal,
  UP_ARROW,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _StructuralStylesLoader,
  _animationsDisabled,
  coerceBooleanProperty,
  coerceNumberProperty,
  createFlexibleConnectedPositionStrategy,
  createOverlayRef,
  createRepositionScrollStrategy,
  hasModifierKey,
  init_a11y,
  init_animation_DfMFjxHu,
  init_bidi,
  init_button,
  init_coercion,
  init_common_module_cKSwHniA,
  init_index_BFRo2fUq,
  init_keycodes,
  init_overlay,
  init_platform,
  init_portal,
  init_private,
  init_ripple_BYgV4oZC,
  init_scrolling,
  init_structural_styles_CObeNzjn,
  isFakeMousedownFromScreenReader,
  isFakeTouchstartFromScreenReader,
  normalizePassiveListenerOptions
} from "./chunk-TJLW6MN2.js";
import {
  IconModule,
  init_icon
} from "./chunk-74M2HE4R.js";
import "./chunk-E6TO2F7F.js";
import "./chunk-K7Q3UDTJ.js";
import {
  NgClass,
  init_common
} from "./chunk-RXRLVWQJ.js";
import {
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  FactoryTarget,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  QueryList,
  Renderer2,
  Subject,
  Subscription,
  TemplateRef,
  TestBed,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  __decorate,
  afterNextRender,
  booleanAttribute,
  core_exports,
  filter,
  init_core,
  init_esm,
  init_operators,
  init_testing,
  init_tslib_es6,
  inject,
  merge,
  of,
  startWith,
  switchMap,
  take,
  takeUntil,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-PPYATBK3.js";
import {
  __async,
  __commonJS,
  __esm,
  __spreadProps,
  __spreadValues
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/app.component.html
var app_component_default;
var init_app_component = __esm({
  "angular:jit:template:src/app/app.component.html"() {
    app_component_default = '<div class="content">\n    <app-header></app-header>\n    \n    <div class="main-content">\n        <main>\n            <router-outlet></router-outlet>\n        </main>\n    </div>\n</div>';
  }
});

// angular:jit:style:src/app/app.component.scss
var app_component_default2;
var init_app_component2 = __esm({
  "angular:jit:style:src/app/app.component.scss"() {
    app_component_default2 = "/* src/app/app.component.scss */\n/*# sourceMappingURL=app.component.css.map */\n";
  }
});

// angular:jit:template:src/app/shared/ui/header/header-presenter.component.html
var header_presenter_component_default;
var init_header_presenter_component = __esm({
  "angular:jit:template:src/app/shared/ui/header/header-presenter.component.html"() {
    header_presenter_component_default = `<header class="bg-gray-50 shadow-lg py-2.5">
  <div class="px-6 flex items-center justify-between">
    <!-- Left side -->
    <div class="flex items-center space-x-4">
      <a routerLink="/" class="flex items-center space-x-4">
        <!-- <img src="/favicon.png" class="h-14 w-14" /> -->
        <h1 class="text-4xl font-semibold text-gray-800">\u{1F400} Warehouse</h1>
      </a>

      <div class="border-l border-gray-300 h-14"></div>

      <div class="menu-items flex items-center">
        @for (item of menuItems; track $index) {
        <a
          mat-button
          [routerLink]="item.link"
          routerLinkActive="active"
          #rla="routerLinkActive"
          [color]="'error'"
          class="flex items-center"
        >
          <fa-icon [icon]="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
        }
      </div>
    </div>

    <!-- Right side -->
    <div class="flex items-center space-x-4">
      @if (authUser() !== undefined) {
      <h2 class="text-2xl font-semibold text-gray-800">
        Hello, {{ authUser()?.first_name }} \u2600\uFE0F
      </h2>
      <a mat-stroked-button routerLink="/auth/logout" class="flex items-center">
        <fa-icon [icon]="'sign-out-alt'" />
        <span class="ml-2">Logout</span>
      </a>
      } @else {
      <a mat-stroked-button routerLink="/auth/login" class="flex items-center">
        <fa-icon [icon]="'sign-in-alt'" />
        <span class="ml-2">Login</span>
      </a>

      <div class="border-l border-gray-300 h-14"></div>

      <a
        mat-stroked-button
        routerLink="/auth/register"
        class="flex items-center"
      >
        <fa-icon [icon]="'user'" />
        <span class="ml-2">Register</span>
      </a>
      }
    </div>
  </div>
</header>
`;
  }
});

// node_modules/@angular/material/fesm2022/menu.mjs
function throwMatMenuInvalidPositionX() {
  throw Error(`xPosition value must be either 'before' or after'.
      Example: <mat-menu xPosition="before" #menu="matMenu"></mat-menu>`);
}
function throwMatMenuInvalidPositionY() {
  throw Error(`yPosition value must be either 'above' or below'.
      Example: <mat-menu yPosition="above" #menu="matMenu"></mat-menu>`);
}
function throwMatMenuRecursiveError() {
  throw Error(`matMenuTriggerFor: menu cannot contain its own trigger. Assign a menu that is not a parent of the trigger or move the trigger outside of the menu.`);
}
function MAT_MENU_DEFAULT_OPTIONS_FACTORY() {
  return {
    overlapTrigger: false,
    xPosition: "after",
    yPosition: "below",
    backdropClass: "cdk-overlay-transparent-backdrop"
  };
}
function MAT_MENU_SCROLL_STRATEGY_FACTORY(_overlay) {
  const injector = inject(Injector);
  return () => createRepositionScrollStrategy(injector);
}
var MAT_MENU_PANEL, MatMenuItem, MAT_MENU_CONTENT, MatMenuContent, MAT_MENU_DEFAULT_OPTIONS, ENTER_ANIMATION, EXIT_ANIMATION, MatMenu, MAT_MENU_SCROLL_STRATEGY, MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER, PANELS_TO_TRIGGERS, MatMenuTrigger, MatMenuModule, matMenuAnimations, fadeInItems, transformMenu;
var init_menu = __esm({
  "node_modules/@angular/material/fesm2022/menu.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_a11y();
    init_keycodes();
    init_esm();
    init_operators();
    init_private();
    init_structural_styles_CObeNzjn();
    init_ripple_BYgV4oZC();
    init_portal();
    init_animation_DfMFjxHu();
    init_bidi();
    init_overlay();
    init_scrolling();
    init_index_BFRo2fUq();
    init_common_module_cKSwHniA();
    MAT_MENU_PANEL = new InjectionToken("MAT_MENU_PANEL");
    MatMenuItem = class _MatMenuItem {
      _elementRef = inject(ElementRef);
      _document = inject(DOCUMENT);
      _focusMonitor = inject(FocusMonitor);
      _parentMenu = inject(MAT_MENU_PANEL, { optional: true });
      _changeDetectorRef = inject(ChangeDetectorRef);
      /** ARIA role for the menu item. */
      role = "menuitem";
      /** Whether the menu item is disabled. */
      disabled = false;
      /** Whether ripples are disabled on the menu item. */
      disableRipple = false;
      /** Stream that emits when the menu item is hovered. */
      _hovered = new Subject();
      /** Stream that emits when the menu item is focused. */
      _focused = new Subject();
      /** Whether the menu item is highlighted. */
      _highlighted = false;
      /** Whether the menu item acts as a trigger for a sub-menu. */
      _triggersSubmenu = false;
      constructor() {
        inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
        this._parentMenu?.addItem?.(this);
      }
      /** Focuses the menu item. */
      focus(origin, options) {
        if (this._focusMonitor && origin) {
          this._focusMonitor.focusVia(this._getHostElement(), origin, options);
        } else {
          this._getHostElement().focus(options);
        }
        this._focused.next(this);
      }
      ngAfterViewInit() {
        if (this._focusMonitor) {
          this._focusMonitor.monitor(this._elementRef, false);
        }
      }
      ngOnDestroy() {
        if (this._focusMonitor) {
          this._focusMonitor.stopMonitoring(this._elementRef);
        }
        if (this._parentMenu && this._parentMenu.removeItem) {
          this._parentMenu.removeItem(this);
        }
        this._hovered.complete();
        this._focused.complete();
      }
      /** Used to set the `tabindex`. */
      _getTabIndex() {
        return this.disabled ? "-1" : "0";
      }
      /** Returns the host DOM element. */
      _getHostElement() {
        return this._elementRef.nativeElement;
      }
      /** Prevents the default element actions if it is disabled. */
      _checkDisabled(event) {
        if (this.disabled) {
          event.preventDefault();
          event.stopPropagation();
        }
      }
      /** Emits to the hover stream. */
      _handleMouseEnter() {
        this._hovered.next(this);
      }
      /** Gets the label to be used when determining whether the option should be focused. */
      getLabel() {
        const clone = this._elementRef.nativeElement.cloneNode(true);
        const icons = clone.querySelectorAll("mat-icon, .material-icons");
        for (let i = 0; i < icons.length; i++) {
          icons[i].remove();
        }
        return clone.textContent?.trim() || "";
      }
      _setHighlighted(isHighlighted) {
        this._highlighted = isHighlighted;
        this._changeDetectorRef.markForCheck();
      }
      _setTriggersSubmenu(triggersSubmenu) {
        this._triggersSubmenu = triggersSubmenu;
        this._changeDetectorRef.markForCheck();
      }
      _hasFocus() {
        return this._document && this._document.activeElement === this._getHostElement();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatMenuItem, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: _MatMenuItem, isStandalone: true, selector: "[mat-menu-item]", inputs: { role: "role", disabled: ["disabled", "disabled", booleanAttribute], disableRipple: ["disableRipple", "disableRipple", booleanAttribute] }, host: { listeners: { "click": "_checkDisabled($event)", "mouseenter": "_handleMouseEnter()" }, properties: { "attr.role": "role", "class.mat-mdc-menu-item-highlighted": "_highlighted", "class.mat-mdc-menu-item-submenu-trigger": "_triggersSubmenu", "attr.tabindex": "_getTabIndex()", "attr.aria-disabled": "disabled", "attr.disabled": "disabled || null" }, classAttribute: "mat-mdc-menu-item mat-focus-indicator" }, exportAs: ["matMenuItem"], ngImport: core_exports, template: '<ng-content select="mat-icon, [matMenuItemIcon]"></ng-content>\n<span class="mat-mdc-menu-item-text"><ng-content></ng-content></span>\n<div class="mat-mdc-menu-ripple" matRipple\n     [matRippleDisabled]="disableRipple || disabled"\n     [matRippleTrigger]="_getHostElement()">\n</div>\n\n@if (_triggersSubmenu) {\n     <svg\n       class="mat-mdc-menu-submenu-icon"\n       viewBox="0 0 5 10"\n       focusable="false"\n       aria-hidden="true"><polygon points="0,0 5,5 0,10"/></svg>\n}\n', dependencies: [{ kind: "directive", type: MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"], exportAs: ["matRipple"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatMenuItem, decorators: [{
      type: Component,
      args: [{ selector: "[mat-menu-item]", exportAs: "matMenuItem", host: {
        "[attr.role]": "role",
        "class": "mat-mdc-menu-item mat-focus-indicator",
        "[class.mat-mdc-menu-item-highlighted]": "_highlighted",
        "[class.mat-mdc-menu-item-submenu-trigger]": "_triggersSubmenu",
        "[attr.tabindex]": "_getTabIndex()",
        "[attr.aria-disabled]": "disabled",
        "[attr.disabled]": "disabled || null",
        "(click)": "_checkDisabled($event)",
        "(mouseenter)": "_handleMouseEnter()"
      }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [MatRipple], template: '<ng-content select="mat-icon, [matMenuItemIcon]"></ng-content>\n<span class="mat-mdc-menu-item-text"><ng-content></ng-content></span>\n<div class="mat-mdc-menu-ripple" matRipple\n     [matRippleDisabled]="disableRipple || disabled"\n     [matRippleTrigger]="_getHostElement()">\n</div>\n\n@if (_triggersSubmenu) {\n     <svg\n       class="mat-mdc-menu-submenu-icon"\n       viewBox="0 0 5 10"\n       focusable="false"\n       aria-hidden="true"><polygon points="0,0 5,5 0,10"/></svg>\n}\n' }]
    }], ctorParameters: () => [], propDecorators: { role: [{
      type: Input
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], disableRipple: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }] } });
    MAT_MENU_CONTENT = new InjectionToken("MatMenuContent");
    MatMenuContent = class _MatMenuContent {
      _template = inject(TemplateRef);
      _appRef = inject(ApplicationRef);
      _injector = inject(Injector);
      _viewContainerRef = inject(ViewContainerRef);
      _document = inject(DOCUMENT);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _portal;
      _outlet;
      /** Emits when the menu content has been attached. */
      _attached = new Subject();
      constructor() {
      }
      /**
       * Attaches the content with a particular context.
       * @docs-private
       */
      attach(context = {}) {
        if (!this._portal) {
          this._portal = new TemplatePortal(this._template, this._viewContainerRef);
        }
        this.detach();
        if (!this._outlet) {
          this._outlet = new DomPortalOutlet(this._document.createElement("div"), this._appRef, this._injector);
        }
        const element = this._template.elementRef.nativeElement;
        element.parentNode.insertBefore(this._outlet.outletElement, element);
        this._changeDetectorRef.markForCheck();
        this._portal.attach(this._outlet, context);
        this._attached.next();
      }
      /**
       * Detaches the content.
       * @docs-private
       */
      detach() {
        if (this._portal?.isAttached) {
          this._portal.detach();
        }
      }
      ngOnDestroy() {
        this.detach();
        this._outlet?.dispose();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatMenuContent, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatMenuContent, isStandalone: true, selector: "ng-template[matMenuContent]", providers: [{ provide: MAT_MENU_CONTENT, useExisting: _MatMenuContent }], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatMenuContent, decorators: [{
      type: Directive,
      args: [{
        selector: "ng-template[matMenuContent]",
        providers: [{ provide: MAT_MENU_CONTENT, useExisting: MatMenuContent }]
      }]
    }], ctorParameters: () => [] });
    MAT_MENU_DEFAULT_OPTIONS = new InjectionToken("mat-menu-default-options", {
      providedIn: "root",
      factory: MAT_MENU_DEFAULT_OPTIONS_FACTORY
    });
    ENTER_ANIMATION = "_mat-menu-enter";
    EXIT_ANIMATION = "_mat-menu-exit";
    MatMenu = class _MatMenu {
      _elementRef = inject(ElementRef);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _injector = inject(Injector);
      _keyManager;
      _xPosition;
      _yPosition;
      _firstItemFocusRef;
      _exitFallbackTimeout;
      /** Whether animations are currently disabled. */
      _animationsDisabled = _animationsDisabled();
      /** All items inside the menu. Includes items nested inside another menu. */
      _allItems;
      /** Only the direct descendant menu items. */
      _directDescendantItems = new QueryList();
      /** Classes to be applied to the menu panel. */
      _classList = {};
      /** Current state of the panel animation. */
      _panelAnimationState = "void";
      /** Emits whenever an animation on the menu completes. */
      _animationDone = new Subject();
      /** Whether the menu is animating. */
      _isAnimating = false;
      /** Parent menu of the current menu panel. */
      parentMenu;
      /** Layout direction of the menu. */
      direction;
      /** Class or list of classes to be added to the overlay panel. */
      overlayPanelClass;
      /** Class to be added to the backdrop element. */
      backdropClass;
      /** aria-label for the menu panel. */
      ariaLabel;
      /** aria-labelledby for the menu panel. */
      ariaLabelledby;
      /** aria-describedby for the menu panel. */
      ariaDescribedby;
      /** Position of the menu in the X axis. */
      get xPosition() {
        return this._xPosition;
      }
      set xPosition(value) {
        if (value !== "before" && value !== "after" && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throwMatMenuInvalidPositionX();
        }
        this._xPosition = value;
        this.setPositionClasses();
      }
      /** Position of the menu in the Y axis. */
      get yPosition() {
        return this._yPosition;
      }
      set yPosition(value) {
        if (value !== "above" && value !== "below" && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throwMatMenuInvalidPositionY();
        }
        this._yPosition = value;
        this.setPositionClasses();
      }
      /** @docs-private */
      templateRef;
      /**
       * List of the items inside of a menu.
       * @deprecated
       * @breaking-change 8.0.0
       */
      items;
      /**
       * Menu content that will be rendered lazily.
       * @docs-private
       */
      lazyContent;
      /** Whether the menu should overlap its trigger. */
      overlapTrigger;
      /** Whether the menu has a backdrop. */
      hasBackdrop;
      /**
       * This method takes classes set on the host mat-menu element and applies them on the
       * menu template that displays in the overlay container.  Otherwise, it's difficult
       * to style the containing menu from outside the component.
       * @param classes list of class names
       */
      set panelClass(classes) {
        const previousPanelClass = this._previousPanelClass;
        const newClassList = __spreadValues({}, this._classList);
        if (previousPanelClass && previousPanelClass.length) {
          previousPanelClass.split(" ").forEach((className) => {
            newClassList[className] = false;
          });
        }
        this._previousPanelClass = classes;
        if (classes && classes.length) {
          classes.split(" ").forEach((className) => {
            newClassList[className] = true;
          });
          this._elementRef.nativeElement.className = "";
        }
        this._classList = newClassList;
      }
      _previousPanelClass;
      /**
       * This method takes classes set on the host mat-menu element and applies them on the
       * menu template that displays in the overlay container.  Otherwise, it's difficult
       * to style the containing menu from outside the component.
       * @deprecated Use `panelClass` instead.
       * @breaking-change 8.0.0
       */
      get classList() {
        return this.panelClass;
      }
      set classList(classes) {
        this.panelClass = classes;
      }
      /** Event emitted when the menu is closed. */
      closed = new EventEmitter();
      /**
       * Event emitted when the menu is closed.
       * @deprecated Switch to `closed` instead
       * @breaking-change 8.0.0
       */
      close = this.closed;
      panelId = inject(_IdGenerator).getId("mat-menu-panel-");
      constructor() {
        const defaultOptions = inject(MAT_MENU_DEFAULT_OPTIONS);
        this.overlayPanelClass = defaultOptions.overlayPanelClass || "";
        this._xPosition = defaultOptions.xPosition;
        this._yPosition = defaultOptions.yPosition;
        this.backdropClass = defaultOptions.backdropClass;
        this.overlapTrigger = defaultOptions.overlapTrigger;
        this.hasBackdrop = defaultOptions.hasBackdrop;
      }
      ngOnInit() {
        this.setPositionClasses();
      }
      ngAfterContentInit() {
        this._updateDirectDescendants();
        this._keyManager = new FocusKeyManager(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd();
        this._keyManager.tabOut.subscribe(() => this.closed.emit("tab"));
        this._directDescendantItems.changes.pipe(startWith(this._directDescendantItems), switchMap((items) => merge(...items.map((item) => item._focused)))).subscribe((focusedItem) => this._keyManager.updateActiveItem(focusedItem));
        this._directDescendantItems.changes.subscribe((itemsList) => {
          const manager = this._keyManager;
          if (this._panelAnimationState === "enter" && manager.activeItem?._hasFocus()) {
            const items = itemsList.toArray();
            const index = Math.max(0, Math.min(items.length - 1, manager.activeItemIndex || 0));
            if (items[index] && !items[index].disabled) {
              manager.setActiveItem(index);
            } else {
              manager.setNextItemActive();
            }
          }
        });
      }
      ngOnDestroy() {
        this._keyManager?.destroy();
        this._directDescendantItems.destroy();
        this.closed.complete();
        this._firstItemFocusRef?.destroy();
        clearTimeout(this._exitFallbackTimeout);
      }
      /** Stream that emits whenever the hovered menu item changes. */
      _hovered() {
        const itemChanges = this._directDescendantItems.changes;
        return itemChanges.pipe(startWith(this._directDescendantItems), switchMap((items) => merge(...items.map((item) => item._hovered))));
      }
      /*
       * Registers a menu item with the menu.
       * @docs-private
       * @deprecated No longer being used. To be removed.
       * @breaking-change 9.0.0
       */
      addItem(_item) {
      }
      /**
       * Removes an item from the menu.
       * @docs-private
       * @deprecated No longer being used. To be removed.
       * @breaking-change 9.0.0
       */
      removeItem(_item) {
      }
      /** Handle a keyboard event from the menu, delegating to the appropriate action. */
      _handleKeydown(event) {
        const keyCode = event.keyCode;
        const manager = this._keyManager;
        switch (keyCode) {
          case ESCAPE:
            if (!hasModifierKey(event)) {
              event.preventDefault();
              this.closed.emit("keydown");
            }
            break;
          case LEFT_ARROW:
            if (this.parentMenu && this.direction === "ltr") {
              this.closed.emit("keydown");
            }
            break;
          case RIGHT_ARROW:
            if (this.parentMenu && this.direction === "rtl") {
              this.closed.emit("keydown");
            }
            break;
          default:
            if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
              manager.setFocusOrigin("keyboard");
            }
            manager.onKeydown(event);
            return;
        }
      }
      /**
       * Focus the first item in the menu.
       * @param origin Action from which the focus originated. Used to set the correct styling.
       */
      focusFirstItem(origin = "program") {
        this._firstItemFocusRef?.destroy();
        this._firstItemFocusRef = afterNextRender(() => {
          const menuPanel = this._resolvePanel();
          if (!menuPanel || !menuPanel.contains(document.activeElement)) {
            const manager = this._keyManager;
            manager.setFocusOrigin(origin).setFirstItemActive();
            if (!manager.activeItem && menuPanel) {
              menuPanel.focus();
            }
          }
        }, { injector: this._injector });
      }
      /**
       * Resets the active item in the menu. This is used when the menu is opened, allowing
       * the user to start from the first option when pressing the down arrow.
       */
      resetActiveItem() {
        this._keyManager.setActiveItem(-1);
      }
      /**
       * @deprecated No longer used and will be removed.
       * @breaking-change 21.0.0
       */
      setElevation(_depth) {
      }
      /**
       * Adds classes to the menu panel based on its position. Can be used by
       * consumers to add specific styling based on the position.
       * @param posX Position of the menu along the x axis.
       * @param posY Position of the menu along the y axis.
       * @docs-private
       */
      setPositionClasses(posX = this.xPosition, posY = this.yPosition) {
        this._classList = __spreadProps(__spreadValues({}, this._classList), {
          ["mat-menu-before"]: posX === "before",
          ["mat-menu-after"]: posX === "after",
          ["mat-menu-above"]: posY === "above",
          ["mat-menu-below"]: posY === "below"
        });
        this._changeDetectorRef.markForCheck();
      }
      /** Callback that is invoked when the panel animation completes. */
      _onAnimationDone(state) {
        const isExit = state === EXIT_ANIMATION;
        if (isExit || state === ENTER_ANIMATION) {
          if (isExit) {
            clearTimeout(this._exitFallbackTimeout);
            this._exitFallbackTimeout = void 0;
          }
          this._animationDone.next(isExit ? "void" : "enter");
          this._isAnimating = false;
        }
      }
      _onAnimationStart(state) {
        if (state === ENTER_ANIMATION || state === EXIT_ANIMATION) {
          this._isAnimating = true;
        }
      }
      _setIsOpen(isOpen) {
        this._panelAnimationState = isOpen ? "enter" : "void";
        if (isOpen) {
          if (this._keyManager.activeItemIndex === 0) {
            const menuPanel = this._resolvePanel();
            if (menuPanel) {
              menuPanel.scrollTop = 0;
            }
          }
        } else if (!this._animationsDisabled) {
          this._exitFallbackTimeout = setTimeout(() => this._onAnimationDone(EXIT_ANIMATION), 200);
        }
        if (this._animationsDisabled) {
          setTimeout(() => {
            this._onAnimationDone(isOpen ? ENTER_ANIMATION : EXIT_ANIMATION);
          });
        }
        this._changeDetectorRef.markForCheck();
      }
      /**
       * Sets up a stream that will keep track of any newly-added menu items and will update the list
       * of direct descendants. We collect the descendants this way, because `_allItems` can include
       * items that are part of child menus, and using a custom way of registering items is unreliable
       * when it comes to maintaining the item order.
       */
      _updateDirectDescendants() {
        this._allItems.changes.pipe(startWith(this._allItems)).subscribe((items) => {
          this._directDescendantItems.reset(items.filter((item) => item._parentMenu === this));
          this._directDescendantItems.notifyOnChanges();
        });
      }
      /** Gets the menu panel DOM node. */
      _resolvePanel() {
        let menuPanel = null;
        if (this._directDescendantItems.length) {
          menuPanel = this._directDescendantItems.first._getHostElement().closest('[role="menu"]');
        }
        return menuPanel;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatMenu, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.0.0", type: _MatMenu, isStandalone: true, selector: "mat-menu", inputs: { backdropClass: "backdropClass", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], ariaDescribedby: ["aria-describedby", "ariaDescribedby"], xPosition: "xPosition", yPosition: "yPosition", overlapTrigger: ["overlapTrigger", "overlapTrigger", booleanAttribute], hasBackdrop: ["hasBackdrop", "hasBackdrop", (value) => value == null ? null : booleanAttribute(value)], panelClass: ["class", "panelClass"], classList: "classList" }, outputs: { closed: "closed", close: "close" }, host: { properties: { "attr.aria-label": "null", "attr.aria-labelledby": "null", "attr.aria-describedby": "null" } }, providers: [{ provide: MAT_MENU_PANEL, useExisting: _MatMenu }], queries: [{ propertyName: "lazyContent", first: true, predicate: MAT_MENU_CONTENT, descendants: true }, { propertyName: "_allItems", predicate: MatMenuItem, descendants: true }, { propertyName: "items", predicate: MatMenuItem }], viewQueries: [{ propertyName: "templateRef", first: true, predicate: TemplateRef, descendants: true }], exportAs: ["matMenu"], ngImport: core_exports, template: `<ng-template>
  <div
    class="mat-mdc-menu-panel"
    [id]="panelId"
    [class]="_classList"
    [class.mat-menu-panel-animations-disabled]="_animationsDisabled"
    [class.mat-menu-panel-exit-animation]="_panelAnimationState === 'void'"
    [class.mat-menu-panel-animating]="_isAnimating"
    (click)="closed.emit('click')"
    tabindex="-1"
    role="menu"
    (animationstart)="_onAnimationStart($event.animationName)"
    (animationend)="_onAnimationDone($event.animationName)"
    (animationcancel)="_onAnimationDone($event.animationName)"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="ariaLabelledby || null"
    [attr.aria-describedby]="ariaDescribedby || null">
    <div class="mat-mdc-menu-content">
      <ng-content></ng-content>
    </div>
  </div>
</ng-template>
`, styles: ['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;outline:0}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight))}@keyframes _mat-menu-enter{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:none}}@keyframes _mat-menu-exit{from{opacity:1}to{opacity:0}}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;box-sizing:border-box;outline:0;animation:_mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);border-radius:var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mat-menu-container-color, var(--mat-sys-surface-container));box-shadow:var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));will-change:transform,opacity}.mat-mdc-menu-panel.mat-menu-panel-exit-animation{animation:_mat-menu-exit 100ms 25ms linear forwards}.mat-mdc-menu-panel.mat-menu-panel-animations-disabled{animation:none}.mat-mdc-menu-panel.mat-menu-panel-animating{pointer-events:none}.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty){display:none}@media(forced-colors: active){.mat-mdc-menu-panel{outline:solid 1px}}.mat-mdc-menu-panel .mat-divider{color:var(--mat-menu-divider-color, var(--mat-sys-surface-variant));margin-bottom:var(--mat-menu-divider-bottom-spacing, 8px);margin-top:var(--mat-menu-divider-top-spacing, 8px)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;min-height:48px;padding-left:var(--mat-menu-item-leading-spacing, 12px);padding-right:var(--mat-menu-item-trailing-spacing, 12px);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-menu-item::-moz-focus-inner{border:0}[dir=rtl] .mat-mdc-menu-item{padding-left:var(--mat-menu-item-trailing-spacing, 12px);padding-right:var(--mat-menu-item-leading-spacing, 12px)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-trailing-spacing, 12px)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-trailing-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-leading-spacing, 12px)}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item:focus{outline:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing, 12px);height:var(--mat-menu-item-icon-size, 24px);width:var(--mat-menu-item-icon-size, 24px)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing, 12px)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}@media(forced-colors: active){.mat-mdc-menu-item{margin-top:1px}}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size, 24px);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing, 12px)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing, 12px);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1);transform-origin:center}@media(forced-colors: active){.mat-mdc-menu-submenu-icon{fill:CanvasText}}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n'], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatMenu, decorators: [{
      type: Component,
      args: [{ selector: "mat-menu", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, exportAs: "matMenu", host: {
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.aria-describedby]": "null"
      }, providers: [{ provide: MAT_MENU_PANEL, useExisting: MatMenu }], template: `<ng-template>
  <div
    class="mat-mdc-menu-panel"
    [id]="panelId"
    [class]="_classList"
    [class.mat-menu-panel-animations-disabled]="_animationsDisabled"
    [class.mat-menu-panel-exit-animation]="_panelAnimationState === 'void'"
    [class.mat-menu-panel-animating]="_isAnimating"
    (click)="closed.emit('click')"
    tabindex="-1"
    role="menu"
    (animationstart)="_onAnimationStart($event.animationName)"
    (animationend)="_onAnimationDone($event.animationName)"
    (animationcancel)="_onAnimationDone($event.animationName)"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="ariaLabelledby || null"
    [attr.aria-describedby]="ariaDescribedby || null">
    <div class="mat-mdc-menu-content">
      <ng-content></ng-content>
    </div>
  </div>
</ng-template>
`, styles: ['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;outline:0}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight))}@keyframes _mat-menu-enter{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:none}}@keyframes _mat-menu-exit{from{opacity:1}to{opacity:0}}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;box-sizing:border-box;outline:0;animation:_mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);border-radius:var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mat-menu-container-color, var(--mat-sys-surface-container));box-shadow:var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));will-change:transform,opacity}.mat-mdc-menu-panel.mat-menu-panel-exit-animation{animation:_mat-menu-exit 100ms 25ms linear forwards}.mat-mdc-menu-panel.mat-menu-panel-animations-disabled{animation:none}.mat-mdc-menu-panel.mat-menu-panel-animating{pointer-events:none}.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty){display:none}@media(forced-colors: active){.mat-mdc-menu-panel{outline:solid 1px}}.mat-mdc-menu-panel .mat-divider{color:var(--mat-menu-divider-color, var(--mat-sys-surface-variant));margin-bottom:var(--mat-menu-divider-bottom-spacing, 8px);margin-top:var(--mat-menu-divider-top-spacing, 8px)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;min-height:48px;padding-left:var(--mat-menu-item-leading-spacing, 12px);padding-right:var(--mat-menu-item-trailing-spacing, 12px);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-menu-item::-moz-focus-inner{border:0}[dir=rtl] .mat-mdc-menu-item{padding-left:var(--mat-menu-item-trailing-spacing, 12px);padding-right:var(--mat-menu-item-leading-spacing, 12px)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-trailing-spacing, 12px)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-trailing-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-leading-spacing, 12px)}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item:focus{outline:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing, 12px);height:var(--mat-menu-item-icon-size, 24px);width:var(--mat-menu-item-icon-size, 24px)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing, 12px)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}@media(forced-colors: active){.mat-mdc-menu-item{margin-top:1px}}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size, 24px);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing, 12px)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing, 12px);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1);transform-origin:center}@media(forced-colors: active){.mat-mdc-menu-submenu-icon{fill:CanvasText}}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n'] }]
    }], ctorParameters: () => [], propDecorators: { _allItems: [{
      type: ContentChildren,
      args: [MatMenuItem, { descendants: true }]
    }], backdropClass: [{
      type: Input
    }], ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }], ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }], ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }], xPosition: [{
      type: Input
    }], yPosition: [{
      type: Input
    }], templateRef: [{
      type: ViewChild,
      args: [TemplateRef]
    }], items: [{
      type: ContentChildren,
      args: [MatMenuItem, { descendants: false }]
    }], lazyContent: [{
      type: ContentChild,
      args: [MAT_MENU_CONTENT]
    }], overlapTrigger: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], hasBackdrop: [{
      type: Input,
      args: [{ transform: (value) => value == null ? null : booleanAttribute(value) }]
    }], panelClass: [{
      type: Input,
      args: ["class"]
    }], classList: [{
      type: Input
    }], closed: [{
      type: Output
    }], close: [{
      type: Output
    }] } });
    MAT_MENU_SCROLL_STRATEGY = new InjectionToken("mat-menu-scroll-strategy", {
      providedIn: "root",
      factory: () => {
        const injector = inject(Injector);
        return () => createRepositionScrollStrategy(injector);
      }
    });
    MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER = {
      provide: MAT_MENU_SCROLL_STRATEGY,
      deps: [],
      useFactory: MAT_MENU_SCROLL_STRATEGY_FACTORY
    };
    PANELS_TO_TRIGGERS = /* @__PURE__ */ new WeakMap();
    MatMenuTrigger = class _MatMenuTrigger {
      _element = inject(ElementRef);
      _viewContainerRef = inject(ViewContainerRef);
      _menuItemInstance = inject(MatMenuItem, { optional: true, self: true });
      _dir = inject(Directionality, { optional: true });
      _focusMonitor = inject(FocusMonitor);
      _ngZone = inject(NgZone);
      _injector = inject(Injector);
      _scrollStrategy = inject(MAT_MENU_SCROLL_STRATEGY);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _animationsDisabled = _animationsDisabled();
      _cleanupTouchstart;
      _portal;
      _overlayRef = null;
      _menuOpen = false;
      _closingActionsSubscription = Subscription.EMPTY;
      _hoverSubscription = Subscription.EMPTY;
      _menuCloseSubscription = Subscription.EMPTY;
      _pendingRemoval;
      /**
       * We're specifically looking for a `MatMenu` here since the generic `MatMenuPanel`
       * interface lacks some functionality around nested menus and animations.
       */
      _parentMaterialMenu;
      /**
       * Cached value of the padding of the parent menu panel.
       * Used to offset sub-menus to compensate for the padding.
       */
      _parentInnerPadding;
      // Tracking input type is necessary so it's possible to only auto-focus
      // the first item of the list when the menu is opened via the keyboard
      _openedBy = void 0;
      /**
       * @deprecated
       * @breaking-change 8.0.0
       */
      get _deprecatedMatMenuTriggerFor() {
        return this.menu;
      }
      set _deprecatedMatMenuTriggerFor(v) {
        this.menu = v;
      }
      /** References the menu instance that the trigger is associated with. */
      get menu() {
        return this._menu;
      }
      set menu(menu) {
        if (menu === this._menu) {
          return;
        }
        this._menu = menu;
        this._menuCloseSubscription.unsubscribe();
        if (menu) {
          if (menu === this._parentMaterialMenu && (typeof ngDevMode === "undefined" || ngDevMode)) {
            throwMatMenuRecursiveError();
          }
          this._menuCloseSubscription = menu.close.subscribe((reason) => {
            this._destroyMenu(reason);
            if ((reason === "click" || reason === "tab") && this._parentMaterialMenu) {
              this._parentMaterialMenu.closed.emit(reason);
            }
          });
        }
        this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu());
      }
      _menu;
      /** Data to be passed along to any lazily-rendered content. */
      menuData;
      /**
       * Whether focus should be restored when the menu is closed.
       * Note that disabling this option can have accessibility implications
       * and it's up to you to manage focus, if you decide to turn it off.
       */
      restoreFocus = true;
      /** Event emitted when the associated menu is opened. */
      menuOpened = new EventEmitter();
      /**
       * Event emitted when the associated menu is opened.
       * @deprecated Switch to `menuOpened` instead
       * @breaking-change 8.0.0
       */
      // tslint:disable-next-line:no-output-on-prefix
      onMenuOpen = this.menuOpened;
      /** Event emitted when the associated menu is closed. */
      menuClosed = new EventEmitter();
      /**
       * Event emitted when the associated menu is closed.
       * @deprecated Switch to `menuClosed` instead
       * @breaking-change 8.0.0
       */
      // tslint:disable-next-line:no-output-on-prefix
      onMenuClose = this.menuClosed;
      constructor() {
        const parentMenu = inject(MAT_MENU_PANEL, { optional: true });
        const renderer = inject(Renderer2);
        this._parentMaterialMenu = parentMenu instanceof MatMenu ? parentMenu : void 0;
        this._cleanupTouchstart = renderer.listen(this._element.nativeElement, "touchstart", (event) => {
          if (!isFakeTouchstartFromScreenReader(event)) {
            this._openedBy = "touch";
          }
        }, { passive: true });
      }
      ngAfterContentInit() {
        this._handleHover();
      }
      ngOnDestroy() {
        if (this.menu && this._ownsMenu(this.menu)) {
          PANELS_TO_TRIGGERS.delete(this.menu);
        }
        this._cleanupTouchstart();
        this._pendingRemoval?.unsubscribe();
        this._menuCloseSubscription.unsubscribe();
        this._closingActionsSubscription.unsubscribe();
        this._hoverSubscription.unsubscribe();
        if (this._overlayRef) {
          this._overlayRef.dispose();
          this._overlayRef = null;
        }
      }
      /** Whether the menu is open. */
      get menuOpen() {
        return this._menuOpen;
      }
      /** The text direction of the containing app. */
      get dir() {
        return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
      }
      /** Whether the menu triggers a sub-menu or a top-level one. */
      triggersSubmenu() {
        return !!(this._menuItemInstance && this._parentMaterialMenu && this.menu);
      }
      /** Toggles the menu between the open and closed states. */
      toggleMenu() {
        return this._menuOpen ? this.closeMenu() : this.openMenu();
      }
      /** Opens the menu. */
      openMenu() {
        const menu = this.menu;
        if (this._menuOpen || !menu) {
          return;
        }
        this._pendingRemoval?.unsubscribe();
        const previousTrigger = PANELS_TO_TRIGGERS.get(menu);
        PANELS_TO_TRIGGERS.set(menu, this);
        if (previousTrigger && previousTrigger !== this) {
          previousTrigger.closeMenu();
        }
        const overlayRef = this._createOverlay(menu);
        const overlayConfig = overlayRef.getConfig();
        const positionStrategy = overlayConfig.positionStrategy;
        this._setPosition(menu, positionStrategy);
        overlayConfig.hasBackdrop = menu.hasBackdrop == null ? !this.triggersSubmenu() : menu.hasBackdrop;
        if (!overlayRef.hasAttached()) {
          overlayRef.attach(this._getPortal(menu));
          menu.lazyContent?.attach(this.menuData);
        }
        this._closingActionsSubscription = this._menuClosingActions().subscribe(() => this.closeMenu());
        menu.parentMenu = this.triggersSubmenu() ? this._parentMaterialMenu : void 0;
        menu.direction = this.dir;
        menu.focusFirstItem(this._openedBy || "program");
        this._setIsMenuOpen(true);
        if (menu instanceof MatMenu) {
          menu._setIsOpen(true);
          menu._directDescendantItems.changes.pipe(takeUntil(menu.close)).subscribe(() => {
            positionStrategy.withLockedPosition(false).reapplyLastPosition();
            positionStrategy.withLockedPosition(true);
          });
        }
      }
      /** Closes the menu. */
      closeMenu() {
        this.menu?.close.emit();
      }
      /**
       * Focuses the menu trigger.
       * @param origin Source of the menu trigger's focus.
       */
      focus(origin, options) {
        if (this._focusMonitor && origin) {
          this._focusMonitor.focusVia(this._element, origin, options);
        } else {
          this._element.nativeElement.focus(options);
        }
      }
      /**
       * Updates the position of the menu to ensure that it fits all options within the viewport.
       */
      updatePosition() {
        this._overlayRef?.updatePosition();
      }
      /** Closes the menu and does the necessary cleanup. */
      _destroyMenu(reason) {
        const overlayRef = this._overlayRef;
        const menu = this._menu;
        if (!overlayRef || !this.menuOpen) {
          return;
        }
        this._closingActionsSubscription.unsubscribe();
        this._pendingRemoval?.unsubscribe();
        if (menu instanceof MatMenu && this._ownsMenu(menu)) {
          this._pendingRemoval = menu._animationDone.pipe(take(1)).subscribe(() => {
            overlayRef.detach();
            menu.lazyContent?.detach();
          });
          menu._setIsOpen(false);
        } else {
          overlayRef.detach();
          menu?.lazyContent?.detach();
        }
        if (menu && this._ownsMenu(menu)) {
          PANELS_TO_TRIGGERS.delete(menu);
        }
        if (this.restoreFocus && (reason === "keydown" || !this._openedBy || !this.triggersSubmenu())) {
          this.focus(this._openedBy);
        }
        this._openedBy = void 0;
        this._setIsMenuOpen(false);
      }
      // set state rather than toggle to support triggers sharing a menu
      _setIsMenuOpen(isOpen) {
        if (isOpen !== this._menuOpen) {
          this._menuOpen = isOpen;
          this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();
          if (this.triggersSubmenu()) {
            this._menuItemInstance._setHighlighted(isOpen);
          }
          this._changeDetectorRef.markForCheck();
        }
      }
      /**
       * This method creates the overlay from the provided menu's template and saves its
       * OverlayRef so that it can be attached to the DOM when openMenu is called.
       */
      _createOverlay(menu) {
        if (!this._overlayRef) {
          const config = this._getOverlayConfig(menu);
          this._subscribeToPositions(menu, config.positionStrategy);
          this._overlayRef = createOverlayRef(this._injector, config);
          this._overlayRef.keydownEvents().subscribe((event) => {
            if (this.menu instanceof MatMenu) {
              this.menu._handleKeydown(event);
            }
          });
        }
        return this._overlayRef;
      }
      /**
       * This method builds the configuration object needed to create the overlay, the OverlayState.
       * @returns OverlayConfig
       */
      _getOverlayConfig(menu) {
        return new OverlayConfig({
          positionStrategy: createFlexibleConnectedPositionStrategy(this._injector, this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),
          backdropClass: menu.backdropClass || "cdk-overlay-transparent-backdrop",
          panelClass: menu.overlayPanelClass,
          scrollStrategy: this._scrollStrategy(),
          direction: this._dir || "ltr",
          disableAnimations: this._animationsDisabled
        });
      }
      /**
       * Listens to changes in the position of the overlay and sets the correct classes
       * on the menu based on the new position. This ensures the animation origin is always
       * correct, even if a fallback position is used for the overlay.
       */
      _subscribeToPositions(menu, position) {
        if (menu.setPositionClasses) {
          position.positionChanges.subscribe((change) => {
            this._ngZone.run(() => {
              const posX = change.connectionPair.overlayX === "start" ? "after" : "before";
              const posY = change.connectionPair.overlayY === "top" ? "below" : "above";
              menu.setPositionClasses(posX, posY);
            });
          });
        }
      }
      /**
       * Sets the appropriate positions on a position strategy
       * so the overlay connects with the trigger correctly.
       * @param positionStrategy Strategy whose position to update.
       */
      _setPosition(menu, positionStrategy) {
        let [originX, originFallbackX] = menu.xPosition === "before" ? ["end", "start"] : ["start", "end"];
        let [overlayY, overlayFallbackY] = menu.yPosition === "above" ? ["bottom", "top"] : ["top", "bottom"];
        let [originY, originFallbackY] = [overlayY, overlayFallbackY];
        let [overlayX, overlayFallbackX] = [originX, originFallbackX];
        let offsetY = 0;
        if (this.triggersSubmenu()) {
          overlayFallbackX = originX = menu.xPosition === "before" ? "start" : "end";
          originFallbackX = overlayX = originX === "end" ? "start" : "end";
          if (this._parentMaterialMenu) {
            if (this._parentInnerPadding == null) {
              const firstItem = this._parentMaterialMenu.items.first;
              this._parentInnerPadding = firstItem ? firstItem._getHostElement().offsetTop : 0;
            }
            offsetY = overlayY === "bottom" ? this._parentInnerPadding : -this._parentInnerPadding;
          }
        } else if (!menu.overlapTrigger) {
          originY = overlayY === "top" ? "bottom" : "top";
          originFallbackY = overlayFallbackY === "top" ? "bottom" : "top";
        }
        positionStrategy.withPositions([
          { originX, originY, overlayX, overlayY, offsetY },
          { originX: originFallbackX, originY, overlayX: overlayFallbackX, overlayY, offsetY },
          {
            originX,
            originY: originFallbackY,
            overlayX,
            overlayY: overlayFallbackY,
            offsetY: -offsetY
          },
          {
            originX: originFallbackX,
            originY: originFallbackY,
            overlayX: overlayFallbackX,
            overlayY: overlayFallbackY,
            offsetY: -offsetY
          }
        ]);
      }
      /** Returns a stream that emits whenever an action that should close the menu occurs. */
      _menuClosingActions() {
        const backdrop = this._overlayRef.backdropClick();
        const detachments = this._overlayRef.detachments();
        const parentClose = this._parentMaterialMenu ? this._parentMaterialMenu.closed : of();
        const hover = this._parentMaterialMenu ? this._parentMaterialMenu._hovered().pipe(filter((active) => this._menuOpen && active !== this._menuItemInstance)) : of();
        return merge(backdrop, parentClose, hover, detachments);
      }
      /** Handles mouse presses on the trigger. */
      _handleMousedown(event) {
        if (!isFakeMousedownFromScreenReader(event)) {
          this._openedBy = event.button === 0 ? "mouse" : void 0;
          if (this.triggersSubmenu()) {
            event.preventDefault();
          }
        }
      }
      /** Handles key presses on the trigger. */
      _handleKeydown(event) {
        const keyCode = event.keyCode;
        if (keyCode === ENTER || keyCode === SPACE) {
          this._openedBy = "keyboard";
        }
        if (this.triggersSubmenu() && (keyCode === RIGHT_ARROW && this.dir === "ltr" || keyCode === LEFT_ARROW && this.dir === "rtl")) {
          this._openedBy = "keyboard";
          this.openMenu();
        }
      }
      /** Handles click events on the trigger. */
      _handleClick(event) {
        if (this.triggersSubmenu()) {
          event.stopPropagation();
          this.openMenu();
        } else {
          this.toggleMenu();
        }
      }
      /** Handles the cases where the user hovers over the trigger. */
      _handleHover() {
        if (this.triggersSubmenu() && this._parentMaterialMenu) {
          this._hoverSubscription = this._parentMaterialMenu._hovered().subscribe((active) => {
            if (active === this._menuItemInstance && !active.disabled) {
              this._openedBy = "mouse";
              this.openMenu();
            }
          });
        }
      }
      /** Gets the portal that should be attached to the overlay. */
      _getPortal(menu) {
        if (!this._portal || this._portal.templateRef !== menu.templateRef) {
          this._portal = new TemplatePortal(menu.templateRef, this._viewContainerRef);
        }
        return this._portal;
      }
      /**
       * Determines whether the trigger owns a specific menu panel, at the current point in time.
       * This allows us to distinguish the case where the same panel is passed into multiple triggers
       * and multiple are open at a time.
       */
      _ownsMenu(menu) {
        return PANELS_TO_TRIGGERS.get(menu) === this;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatMenuTrigger, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatMenuTrigger, isStandalone: true, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", inputs: { _deprecatedMatMenuTriggerFor: ["mat-menu-trigger-for", "_deprecatedMatMenuTriggerFor"], menu: ["matMenuTriggerFor", "menu"], menuData: ["matMenuTriggerData", "menuData"], restoreFocus: ["matMenuTriggerRestoreFocus", "restoreFocus"] }, outputs: { menuOpened: "menuOpened", onMenuOpen: "onMenuOpen", menuClosed: "menuClosed", onMenuClose: "onMenuClose" }, host: { listeners: { "click": "_handleClick($event)", "mousedown": "_handleMousedown($event)", "keydown": "_handleKeydown($event)" }, properties: { "attr.aria-haspopup": 'menu ? "menu" : null', "attr.aria-expanded": "menuOpen", "attr.aria-controls": "menuOpen ? menu?.panelId : null" }, classAttribute: "mat-mdc-menu-trigger" }, exportAs: ["matMenuTrigger"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatMenuTrigger, decorators: [{
      type: Directive,
      args: [{
        selector: `[mat-menu-trigger-for], [matMenuTriggerFor]`,
        host: {
          "class": "mat-mdc-menu-trigger",
          "[attr.aria-haspopup]": 'menu ? "menu" : null',
          "[attr.aria-expanded]": "menuOpen",
          "[attr.aria-controls]": "menuOpen ? menu?.panelId : null",
          "(click)": "_handleClick($event)",
          "(mousedown)": "_handleMousedown($event)",
          "(keydown)": "_handleKeydown($event)"
        },
        exportAs: "matMenuTrigger"
      }]
    }], ctorParameters: () => [], propDecorators: { _deprecatedMatMenuTriggerFor: [{
      type: Input,
      args: ["mat-menu-trigger-for"]
    }], menu: [{
      type: Input,
      args: ["matMenuTriggerFor"]
    }], menuData: [{
      type: Input,
      args: ["matMenuTriggerData"]
    }], restoreFocus: [{
      type: Input,
      args: ["matMenuTriggerRestoreFocus"]
    }], menuOpened: [{
      type: Output
    }], onMenuOpen: [{
      type: Output
    }], menuClosed: [{
      type: Output
    }], onMenuClose: [{
      type: Output
    }] } });
    MatMenuModule = class _MatMenuModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatMenuModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatMenuModule, imports: [
        MatRippleModule,
        MatCommonModule,
        OverlayModule,
        MatMenu,
        MatMenuItem,
        MatMenuContent,
        MatMenuTrigger
      ], exports: [
        CdkScrollableModule,
        MatMenu,
        MatCommonModule,
        MatMenuItem,
        MatMenuContent,
        MatMenuTrigger
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatMenuModule, providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER], imports: [
        MatRippleModule,
        MatCommonModule,
        OverlayModule,
        CdkScrollableModule,
        MatCommonModule
      ] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatMenuModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [
          MatRippleModule,
          MatCommonModule,
          OverlayModule,
          MatMenu,
          MatMenuItem,
          MatMenuContent,
          MatMenuTrigger
        ],
        exports: [
          CdkScrollableModule,
          MatMenu,
          MatCommonModule,
          MatMenuItem,
          MatMenuContent,
          MatMenuTrigger
        ],
        providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
      }]
    }] });
    matMenuAnimations = {
      // Represents:
      // trigger('transformMenu', [
      //   state(
      //     'void',
      //     style({
      //       opacity: 0,
      //       transform: 'scale(0.8)',
      //     }),
      //   ),
      //   transition(
      //     'void => enter',
      //     animate(
      //       '120ms cubic-bezier(0, 0, 0.2, 1)',
      //       style({
      //         opacity: 1,
      //         transform: 'scale(1)',
      //       }),
      //     ),
      //   ),
      //   transition('* => void', animate('100ms 25ms linear', style({opacity: 0}))),
      // ])
      /**
       * This animation controls the menu panel's entry and exit from the page.
       *
       * When the menu panel is added to the DOM, it scales in and fades in its border.
       *
       * When the menu panel is removed from the DOM, it simply fades out after a brief
       * delay to display the ripple.
       */
      transformMenu: {
        type: 7,
        name: "transformMenu",
        definitions: [
          {
            type: 0,
            name: "void",
            styles: { type: 6, styles: { opacity: 0, transform: "scale(0.8)" }, offset: null }
          },
          {
            type: 1,
            expr: "void => enter",
            animation: {
              type: 4,
              styles: { type: 6, styles: { opacity: 1, transform: "scale(1)" }, offset: null },
              timings: "120ms cubic-bezier(0, 0, 0.2, 1)"
            },
            options: null
          },
          {
            type: 1,
            expr: "* => void",
            animation: {
              type: 4,
              styles: { type: 6, styles: { opacity: 0 }, offset: null },
              timings: "100ms 25ms linear"
            },
            options: null
          }
        ],
        options: {}
      },
      // Represents:
      // trigger('fadeInItems', [
      //   // TODO(crisbeto): this is inside the `transformMenu`
      //   // now. Remove next time we do breaking changes.
      //   state('showing', style({opacity: 1})),
      //   transition('void => *', [
      //     style({opacity: 0}),
      //     animate('400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)'),
      //   ]),
      // ])
      /**
       * This animation fades in the background color and content of the menu panel
       * after its containing element is scaled in.
       */
      fadeInItems: {
        type: 7,
        name: "fadeInItems",
        definitions: [
          {
            type: 0,
            name: "showing",
            styles: { type: 6, styles: { opacity: 1 }, offset: null }
          },
          {
            type: 1,
            expr: "void => *",
            animation: [
              { type: 6, styles: { opacity: 0 }, offset: null },
              { type: 4, styles: null, timings: "400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)" }
            ],
            options: null
          }
        ],
        options: {}
      }
    };
    fadeInItems = matMenuAnimations.fadeInItems;
    transformMenu = matMenuAnimations.transformMenu;
  }
});

// node_modules/@angular/material/fesm2022/module-CWxMD37a.mjs
function getMatTooltipInvalidPositionError(position) {
  return Error(`Tooltip position "${position}" is invalid.`);
}
function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY(_overlay) {
  const injector = inject(Injector);
  return () => createRepositionScrollStrategy(injector, { scrollThrottle: SCROLL_THROTTLE_MS });
}
function MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY() {
  return {
    showDelay: 0,
    hideDelay: 0,
    touchendHideDelay: 1500
  };
}
var SCROLL_THROTTLE_MS, MAT_TOOLTIP_SCROLL_STRATEGY, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_TOOLTIP_DEFAULT_OPTIONS, PANEL_CLASS, passiveListenerOptions, MIN_VIEWPORT_TOOLTIP_THRESHOLD, UNBOUNDED_ANCHOR_GAP, MIN_HEIGHT, MAX_WIDTH, MatTooltip, TooltipComponent, MatTooltipModule;
var init_module_CWxMD37a = __esm({
  "node_modules/@angular/material/fesm2022/module-CWxMD37a.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_a11y();
    init_overlay();
    init_scrolling();
    init_operators();
    init_coercion();
    init_keycodes();
    init_common();
    init_platform();
    init_bidi();
    init_portal();
    init_esm();
    init_animation_DfMFjxHu();
    init_common_module_cKSwHniA();
    SCROLL_THROTTLE_MS = 20;
    MAT_TOOLTIP_SCROLL_STRATEGY = new InjectionToken("mat-tooltip-scroll-strategy", {
      providedIn: "root",
      factory: () => {
        const injector = inject(Injector);
        return () => createRepositionScrollStrategy(injector, { scrollThrottle: SCROLL_THROTTLE_MS });
      }
    });
    MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER = {
      provide: MAT_TOOLTIP_SCROLL_STRATEGY,
      deps: [],
      useFactory: MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY
    };
    MAT_TOOLTIP_DEFAULT_OPTIONS = new InjectionToken("mat-tooltip-default-options", {
      providedIn: "root",
      factory: MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY
    });
    PANEL_CLASS = "tooltip-panel";
    passiveListenerOptions = normalizePassiveListenerOptions({ passive: true });
    MIN_VIEWPORT_TOOLTIP_THRESHOLD = 8;
    UNBOUNDED_ANCHOR_GAP = 8;
    MIN_HEIGHT = 24;
    MAX_WIDTH = 200;
    MatTooltip = class _MatTooltip {
      _elementRef = inject(ElementRef);
      _ngZone = inject(NgZone);
      _platform = inject(Platform);
      _ariaDescriber = inject(AriaDescriber);
      _focusMonitor = inject(FocusMonitor);
      _dir = inject(Directionality);
      _injector = inject(Injector);
      _viewContainerRef = inject(ViewContainerRef);
      _animationsDisabled = _animationsDisabled();
      _defaultOptions = inject(MAT_TOOLTIP_DEFAULT_OPTIONS, {
        optional: true
      });
      _overlayRef;
      _tooltipInstance;
      _overlayPanelClass;
      // Used for styling internally.
      _portal;
      _position = "below";
      _positionAtOrigin = false;
      _disabled = false;
      _tooltipClass;
      _viewInitialized = false;
      _pointerExitEventsInitialized = false;
      _tooltipComponent = TooltipComponent;
      _viewportMargin = 8;
      _currentPosition;
      _cssClassPrefix = "mat-mdc";
      _ariaDescriptionPending;
      _dirSubscribed = false;
      /** Allows the user to define the position of the tooltip relative to the parent element */
      get position() {
        return this._position;
      }
      set position(value) {
        if (value !== this._position) {
          this._position = value;
          if (this._overlayRef) {
            this._updatePosition(this._overlayRef);
            this._tooltipInstance?.show(0);
            this._overlayRef.updatePosition();
          }
        }
      }
      /**
       * Whether tooltip should be relative to the click or touch origin
       * instead of outside the element bounding box.
       */
      get positionAtOrigin() {
        return this._positionAtOrigin;
      }
      set positionAtOrigin(value) {
        this._positionAtOrigin = coerceBooleanProperty(value);
        this._detach();
        this._overlayRef = null;
      }
      /** Disables the display of the tooltip. */
      get disabled() {
        return this._disabled;
      }
      set disabled(value) {
        const isDisabled = coerceBooleanProperty(value);
        if (this._disabled !== isDisabled) {
          this._disabled = isDisabled;
          if (isDisabled) {
            this.hide(0);
          } else {
            this._setupPointerEnterEventsIfNeeded();
          }
          this._syncAriaDescription(this.message);
        }
      }
      /** The default delay in ms before showing the tooltip after show is called */
      get showDelay() {
        return this._showDelay;
      }
      set showDelay(value) {
        this._showDelay = coerceNumberProperty(value);
      }
      _showDelay;
      /** The default delay in ms before hiding the tooltip after hide is called */
      get hideDelay() {
        return this._hideDelay;
      }
      set hideDelay(value) {
        this._hideDelay = coerceNumberProperty(value);
        if (this._tooltipInstance) {
          this._tooltipInstance._mouseLeaveHideDelay = this._hideDelay;
        }
      }
      _hideDelay;
      /**
       * How touch gestures should be handled by the tooltip. On touch devices the tooltip directive
       * uses a long press gesture to show and hide, however it can conflict with the native browser
       * gestures. To work around the conflict, Angular Material disables native gestures on the
       * trigger, but that might not be desirable on particular elements (e.g. inputs and draggable
       * elements). The different values for this option configure the touch event handling as follows:
       * - `auto` - Enables touch gestures for all elements, but tries to avoid conflicts with native
       *   browser gestures on particular elements. In particular, it allows text selection on inputs
       *   and textareas, and preserves the native browser dragging on elements marked as `draggable`.
       * - `on` - Enables touch gestures for all elements and disables native
       *   browser gestures with no exceptions.
       * - `off` - Disables touch gestures. Note that this will prevent the tooltip from
       *   showing on touch devices.
       */
      touchGestures = "auto";
      /** The message to be displayed in the tooltip */
      get message() {
        return this._message;
      }
      set message(value) {
        const oldMessage = this._message;
        this._message = value != null ? String(value).trim() : "";
        if (!this._message && this._isTooltipVisible()) {
          this.hide(0);
        } else {
          this._setupPointerEnterEventsIfNeeded();
          this._updateTooltipMessage();
        }
        this._syncAriaDescription(oldMessage);
      }
      _message = "";
      /** Classes to be passed to the tooltip. Supports the same syntax as `ngClass`. */
      get tooltipClass() {
        return this._tooltipClass;
      }
      set tooltipClass(value) {
        this._tooltipClass = value;
        if (this._tooltipInstance) {
          this._setTooltipClass(this._tooltipClass);
        }
      }
      /** Manually-bound passive event listeners. */
      _passiveListeners = [];
      /** Timer started at the last `touchstart` event. */
      _touchstartTimeout = null;
      /** Emits when the component is destroyed. */
      _destroyed = new Subject();
      /** Whether ngOnDestroyed has been called. */
      _isDestroyed = false;
      constructor() {
        const defaultOptions = this._defaultOptions;
        if (defaultOptions) {
          this._showDelay = defaultOptions.showDelay;
          this._hideDelay = defaultOptions.hideDelay;
          if (defaultOptions.position) {
            this.position = defaultOptions.position;
          }
          if (defaultOptions.positionAtOrigin) {
            this.positionAtOrigin = defaultOptions.positionAtOrigin;
          }
          if (defaultOptions.touchGestures) {
            this.touchGestures = defaultOptions.touchGestures;
          }
          if (defaultOptions.tooltipClass) {
            this.tooltipClass = defaultOptions.tooltipClass;
          }
        }
        this._viewportMargin = MIN_VIEWPORT_TOOLTIP_THRESHOLD;
      }
      ngAfterViewInit() {
        this._viewInitialized = true;
        this._setupPointerEnterEventsIfNeeded();
        this._focusMonitor.monitor(this._elementRef).pipe(takeUntil(this._destroyed)).subscribe((origin) => {
          if (!origin) {
            this._ngZone.run(() => this.hide(0));
          } else if (origin === "keyboard") {
            this._ngZone.run(() => this.show());
          }
        });
      }
      /**
       * Dispose the tooltip when destroyed.
       */
      ngOnDestroy() {
        const nativeElement = this._elementRef.nativeElement;
        if (this._touchstartTimeout) {
          clearTimeout(this._touchstartTimeout);
        }
        if (this._overlayRef) {
          this._overlayRef.dispose();
          this._tooltipInstance = null;
        }
        this._passiveListeners.forEach(([event, listener]) => {
          nativeElement.removeEventListener(event, listener, passiveListenerOptions);
        });
        this._passiveListeners.length = 0;
        this._destroyed.next();
        this._destroyed.complete();
        this._isDestroyed = true;
        this._ariaDescriber.removeDescription(nativeElement, this.message, "tooltip");
        this._focusMonitor.stopMonitoring(nativeElement);
      }
      /** Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input */
      show(delay = this.showDelay, origin) {
        if (this.disabled || !this.message || this._isTooltipVisible()) {
          this._tooltipInstance?._cancelPendingAnimations();
          return;
        }
        const overlayRef = this._createOverlay(origin);
        this._detach();
        this._portal = this._portal || new ComponentPortal(this._tooltipComponent, this._viewContainerRef);
        const instance = this._tooltipInstance = overlayRef.attach(this._portal).instance;
        instance._triggerElement = this._elementRef.nativeElement;
        instance._mouseLeaveHideDelay = this._hideDelay;
        instance.afterHidden().pipe(takeUntil(this._destroyed)).subscribe(() => this._detach());
        this._setTooltipClass(this._tooltipClass);
        this._updateTooltipMessage();
        instance.show(delay);
      }
      /** Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input */
      hide(delay = this.hideDelay) {
        const instance = this._tooltipInstance;
        if (instance) {
          if (instance.isVisible()) {
            instance.hide(delay);
          } else {
            instance._cancelPendingAnimations();
            this._detach();
          }
        }
      }
      /** Shows/hides the tooltip */
      toggle(origin) {
        this._isTooltipVisible() ? this.hide() : this.show(void 0, origin);
      }
      /** Returns true if the tooltip is currently visible to the user */
      _isTooltipVisible() {
        return !!this._tooltipInstance && this._tooltipInstance.isVisible();
      }
      /** Create the overlay config and position strategy */
      _createOverlay(origin) {
        if (this._overlayRef) {
          const existingStrategy = this._overlayRef.getConfig().positionStrategy;
          if ((!this.positionAtOrigin || !origin) && existingStrategy._origin instanceof ElementRef) {
            return this._overlayRef;
          }
          this._detach();
        }
        const scrollableAncestors = this._injector.get(ScrollDispatcher).getAncestorScrollContainers(this._elementRef);
        const panelClass = `${this._cssClassPrefix}-${PANEL_CLASS}`;
        const strategy = createFlexibleConnectedPositionStrategy(this._injector, this.positionAtOrigin ? origin || this._elementRef : this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(false).withViewportMargin(this._viewportMargin).withScrollableContainers(scrollableAncestors);
        strategy.positionChanges.pipe(takeUntil(this._destroyed)).subscribe((change) => {
          this._updateCurrentPositionClass(change.connectionPair);
          if (this._tooltipInstance) {
            if (change.scrollableViewProperties.isOverlayClipped && this._tooltipInstance.isVisible()) {
              this._ngZone.run(() => this.hide(0));
            }
          }
        });
        this._overlayRef = createOverlayRef(this._injector, {
          direction: this._dir,
          positionStrategy: strategy,
          panelClass: this._overlayPanelClass ? [...this._overlayPanelClass, panelClass] : panelClass,
          scrollStrategy: this._injector.get(MAT_TOOLTIP_SCROLL_STRATEGY)(),
          disableAnimations: this._animationsDisabled
        });
        this._updatePosition(this._overlayRef);
        this._overlayRef.detachments().pipe(takeUntil(this._destroyed)).subscribe(() => this._detach());
        this._overlayRef.outsidePointerEvents().pipe(takeUntil(this._destroyed)).subscribe(() => this._tooltipInstance?._handleBodyInteraction());
        this._overlayRef.keydownEvents().pipe(takeUntil(this._destroyed)).subscribe((event) => {
          if (this._isTooltipVisible() && event.keyCode === ESCAPE && !hasModifierKey(event)) {
            event.preventDefault();
            event.stopPropagation();
            this._ngZone.run(() => this.hide(0));
          }
        });
        if (this._defaultOptions?.disableTooltipInteractivity) {
          this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`);
        }
        if (!this._dirSubscribed) {
          this._dirSubscribed = true;
          this._dir.change.pipe(takeUntil(this._destroyed)).subscribe(() => {
            if (this._overlayRef) {
              this._updatePosition(this._overlayRef);
            }
          });
        }
        return this._overlayRef;
      }
      /** Detaches the currently-attached tooltip. */
      _detach() {
        if (this._overlayRef && this._overlayRef.hasAttached()) {
          this._overlayRef.detach();
        }
        this._tooltipInstance = null;
      }
      /** Updates the position of the current tooltip. */
      _updatePosition(overlayRef) {
        const position = overlayRef.getConfig().positionStrategy;
        const origin = this._getOrigin();
        const overlay = this._getOverlayPosition();
        position.withPositions([
          this._addOffset(__spreadValues(__spreadValues({}, origin.main), overlay.main)),
          this._addOffset(__spreadValues(__spreadValues({}, origin.fallback), overlay.fallback))
        ]);
      }
      /** Adds the configured offset to a position. Used as a hook for child classes. */
      _addOffset(position) {
        const offset = UNBOUNDED_ANCHOR_GAP;
        const isLtr = !this._dir || this._dir.value == "ltr";
        if (position.originY === "top") {
          position.offsetY = -offset;
        } else if (position.originY === "bottom") {
          position.offsetY = offset;
        } else if (position.originX === "start") {
          position.offsetX = isLtr ? -offset : offset;
        } else if (position.originX === "end") {
          position.offsetX = isLtr ? offset : -offset;
        }
        return position;
      }
      /**
       * Returns the origin position and a fallback position based on the user's position preference.
       * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
       */
      _getOrigin() {
        const isLtr = !this._dir || this._dir.value == "ltr";
        const position = this.position;
        let originPosition;
        if (position == "above" || position == "below") {
          originPosition = { originX: "center", originY: position == "above" ? "top" : "bottom" };
        } else if (position == "before" || position == "left" && isLtr || position == "right" && !isLtr) {
          originPosition = { originX: "start", originY: "center" };
        } else if (position == "after" || position == "right" && isLtr || position == "left" && !isLtr) {
          originPosition = { originX: "end", originY: "center" };
        } else if (typeof ngDevMode === "undefined" || ngDevMode) {
          throw getMatTooltipInvalidPositionError(position);
        }
        const { x, y } = this._invertPosition(originPosition.originX, originPosition.originY);
        return {
          main: originPosition,
          fallback: { originX: x, originY: y }
        };
      }
      /** Returns the overlay position and a fallback position based on the user's preference */
      _getOverlayPosition() {
        const isLtr = !this._dir || this._dir.value == "ltr";
        const position = this.position;
        let overlayPosition;
        if (position == "above") {
          overlayPosition = { overlayX: "center", overlayY: "bottom" };
        } else if (position == "below") {
          overlayPosition = { overlayX: "center", overlayY: "top" };
        } else if (position == "before" || position == "left" && isLtr || position == "right" && !isLtr) {
          overlayPosition = { overlayX: "end", overlayY: "center" };
        } else if (position == "after" || position == "right" && isLtr || position == "left" && !isLtr) {
          overlayPosition = { overlayX: "start", overlayY: "center" };
        } else if (typeof ngDevMode === "undefined" || ngDevMode) {
          throw getMatTooltipInvalidPositionError(position);
        }
        const { x, y } = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY);
        return {
          main: overlayPosition,
          fallback: { overlayX: x, overlayY: y }
        };
      }
      /** Updates the tooltip message and repositions the overlay according to the new message length */
      _updateTooltipMessage() {
        if (this._tooltipInstance) {
          this._tooltipInstance.message = this.message;
          this._tooltipInstance._markForCheck();
          afterNextRender(() => {
            if (this._tooltipInstance) {
              this._overlayRef.updatePosition();
            }
          }, {
            injector: this._injector
          });
        }
      }
      /** Updates the tooltip class */
      _setTooltipClass(tooltipClass) {
        if (this._tooltipInstance) {
          this._tooltipInstance.tooltipClass = tooltipClass;
          this._tooltipInstance._markForCheck();
        }
      }
      /** Inverts an overlay position. */
      _invertPosition(x, y) {
        if (this.position === "above" || this.position === "below") {
          if (y === "top") {
            y = "bottom";
          } else if (y === "bottom") {
            y = "top";
          }
        } else {
          if (x === "end") {
            x = "start";
          } else if (x === "start") {
            x = "end";
          }
        }
        return { x, y };
      }
      /** Updates the class on the overlay panel based on the current position of the tooltip. */
      _updateCurrentPositionClass(connectionPair) {
        const { overlayY, originX, originY } = connectionPair;
        let newPosition;
        if (overlayY === "center") {
          if (this._dir && this._dir.value === "rtl") {
            newPosition = originX === "end" ? "left" : "right";
          } else {
            newPosition = originX === "start" ? "left" : "right";
          }
        } else {
          newPosition = overlayY === "bottom" && originY === "top" ? "above" : "below";
        }
        if (newPosition !== this._currentPosition) {
          const overlayRef = this._overlayRef;
          if (overlayRef) {
            const classPrefix = `${this._cssClassPrefix}-${PANEL_CLASS}-`;
            overlayRef.removePanelClass(classPrefix + this._currentPosition);
            overlayRef.addPanelClass(classPrefix + newPosition);
          }
          this._currentPosition = newPosition;
        }
      }
      /** Binds the pointer events to the tooltip trigger. */
      _setupPointerEnterEventsIfNeeded() {
        if (this._disabled || !this.message || !this._viewInitialized || this._passiveListeners.length) {
          return;
        }
        if (this._platformSupportsMouseEvents()) {
          this._passiveListeners.push([
            "mouseenter",
            (event) => {
              this._setupPointerExitEventsIfNeeded();
              let point = void 0;
              if (event.x !== void 0 && event.y !== void 0) {
                point = event;
              }
              this.show(void 0, point);
            }
          ]);
        } else if (this.touchGestures !== "off") {
          this._disableNativeGesturesIfNecessary();
          this._passiveListeners.push([
            "touchstart",
            (event) => {
              const touch = event.targetTouches?.[0];
              const origin = touch ? { x: touch.clientX, y: touch.clientY } : void 0;
              this._setupPointerExitEventsIfNeeded();
              if (this._touchstartTimeout) {
                clearTimeout(this._touchstartTimeout);
              }
              const DEFAULT_LONGPRESS_DELAY = 500;
              this._touchstartTimeout = setTimeout(() => {
                this._touchstartTimeout = null;
                this.show(void 0, origin);
              }, this._defaultOptions?.touchLongPressShowDelay ?? DEFAULT_LONGPRESS_DELAY);
            }
          ]);
        }
        this._addListeners(this._passiveListeners);
      }
      _setupPointerExitEventsIfNeeded() {
        if (this._pointerExitEventsInitialized) {
          return;
        }
        this._pointerExitEventsInitialized = true;
        const exitListeners = [];
        if (this._platformSupportsMouseEvents()) {
          exitListeners.push([
            "mouseleave",
            (event) => {
              const newTarget = event.relatedTarget;
              if (!newTarget || !this._overlayRef?.overlayElement.contains(newTarget)) {
                this.hide();
              }
            }
          ], ["wheel", (event) => this._wheelListener(event)]);
        } else if (this.touchGestures !== "off") {
          this._disableNativeGesturesIfNecessary();
          const touchendListener = () => {
            if (this._touchstartTimeout) {
              clearTimeout(this._touchstartTimeout);
            }
            this.hide(this._defaultOptions?.touchendHideDelay);
          };
          exitListeners.push(["touchend", touchendListener], ["touchcancel", touchendListener]);
        }
        this._addListeners(exitListeners);
        this._passiveListeners.push(...exitListeners);
      }
      _addListeners(listeners) {
        listeners.forEach(([event, listener]) => {
          this._elementRef.nativeElement.addEventListener(event, listener, passiveListenerOptions);
        });
      }
      _platformSupportsMouseEvents() {
        return !this._platform.IOS && !this._platform.ANDROID;
      }
      /** Listener for the `wheel` event on the element. */
      _wheelListener(event) {
        if (this._isTooltipVisible()) {
          const elementUnderPointer = this._injector.get(DOCUMENT).elementFromPoint(event.clientX, event.clientY);
          const element = this._elementRef.nativeElement;
          if (elementUnderPointer !== element && !element.contains(elementUnderPointer)) {
            this.hide();
          }
        }
      }
      /** Disables the native browser gestures, based on how the tooltip has been configured. */
      _disableNativeGesturesIfNecessary() {
        const gestures = this.touchGestures;
        if (gestures !== "off") {
          const element = this._elementRef.nativeElement;
          const style = element.style;
          if (gestures === "on" || element.nodeName !== "INPUT" && element.nodeName !== "TEXTAREA") {
            style.userSelect = style.msUserSelect = style.webkitUserSelect = style.MozUserSelect = "none";
          }
          if (gestures === "on" || !element.draggable) {
            style.webkitUserDrag = "none";
          }
          style.touchAction = "none";
          style.webkitTapHighlightColor = "transparent";
        }
      }
      /** Updates the tooltip's ARIA description based on it current state. */
      _syncAriaDescription(oldMessage) {
        if (this._ariaDescriptionPending) {
          return;
        }
        this._ariaDescriptionPending = true;
        this._ariaDescriber.removeDescription(this._elementRef.nativeElement, oldMessage, "tooltip");
        if (!this._isDestroyed) {
          afterNextRender({
            write: () => {
              this._ariaDescriptionPending = false;
              if (this.message && !this.disabled) {
                this._ariaDescriber.describe(this._elementRef.nativeElement, this.message, "tooltip");
              }
            }
          }, { injector: this._injector });
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTooltip, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatTooltip, isStandalone: true, selector: "[matTooltip]", inputs: { position: ["matTooltipPosition", "position"], positionAtOrigin: ["matTooltipPositionAtOrigin", "positionAtOrigin"], disabled: ["matTooltipDisabled", "disabled"], showDelay: ["matTooltipShowDelay", "showDelay"], hideDelay: ["matTooltipHideDelay", "hideDelay"], touchGestures: ["matTooltipTouchGestures", "touchGestures"], message: ["matTooltip", "message"], tooltipClass: ["matTooltipClass", "tooltipClass"] }, host: { properties: { "class.mat-mdc-tooltip-disabled": "disabled" }, classAttribute: "mat-mdc-tooltip-trigger" }, exportAs: ["matTooltip"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatTooltip, decorators: [{
      type: Directive,
      args: [{
        selector: "[matTooltip]",
        exportAs: "matTooltip",
        host: {
          "class": "mat-mdc-tooltip-trigger",
          "[class.mat-mdc-tooltip-disabled]": "disabled"
        }
      }]
    }], ctorParameters: () => [], propDecorators: { position: [{
      type: Input,
      args: ["matTooltipPosition"]
    }], positionAtOrigin: [{
      type: Input,
      args: ["matTooltipPositionAtOrigin"]
    }], disabled: [{
      type: Input,
      args: ["matTooltipDisabled"]
    }], showDelay: [{
      type: Input,
      args: ["matTooltipShowDelay"]
    }], hideDelay: [{
      type: Input,
      args: ["matTooltipHideDelay"]
    }], touchGestures: [{
      type: Input,
      args: ["matTooltipTouchGestures"]
    }], message: [{
      type: Input,
      args: ["matTooltip"]
    }], tooltipClass: [{
      type: Input,
      args: ["matTooltipClass"]
    }] } });
    TooltipComponent = class _TooltipComponent {
      _changeDetectorRef = inject(ChangeDetectorRef);
      _elementRef = inject(ElementRef);
      /* Whether the tooltip text overflows to multiple lines */
      _isMultiline = false;
      /** Message to display in the tooltip */
      message;
      /** Classes to be added to the tooltip. Supports the same syntax as `ngClass`. */
      tooltipClass;
      /** The timeout ID of any current timer set to show the tooltip */
      _showTimeoutId;
      /** The timeout ID of any current timer set to hide the tooltip */
      _hideTimeoutId;
      /** Element that caused the tooltip to open. */
      _triggerElement;
      /** Amount of milliseconds to delay the closing sequence. */
      _mouseLeaveHideDelay;
      /** Whether animations are currently disabled. */
      _animationsDisabled = _animationsDisabled();
      /** Reference to the internal tooltip element. */
      _tooltip;
      /** Whether interactions on the page should close the tooltip */
      _closeOnInteraction = false;
      /** Whether the tooltip is currently visible. */
      _isVisible = false;
      /** Subject for notifying that the tooltip has been hidden from the view */
      _onHide = new Subject();
      /** Name of the show animation and the class that toggles it. */
      _showAnimation = "mat-mdc-tooltip-show";
      /** Name of the hide animation and the class that toggles it. */
      _hideAnimation = "mat-mdc-tooltip-hide";
      constructor() {
      }
      /**
       * Shows the tooltip with an animation originating from the provided origin
       * @param delay Amount of milliseconds to the delay showing the tooltip.
       */
      show(delay) {
        if (this._hideTimeoutId != null) {
          clearTimeout(this._hideTimeoutId);
        }
        this._showTimeoutId = setTimeout(() => {
          this._toggleVisibility(true);
          this._showTimeoutId = void 0;
        }, delay);
      }
      /**
       * Begins the animation to hide the tooltip after the provided delay in ms.
       * @param delay Amount of milliseconds to delay showing the tooltip.
       */
      hide(delay) {
        if (this._showTimeoutId != null) {
          clearTimeout(this._showTimeoutId);
        }
        this._hideTimeoutId = setTimeout(() => {
          this._toggleVisibility(false);
          this._hideTimeoutId = void 0;
        }, delay);
      }
      /** Returns an observable that notifies when the tooltip has been hidden from view. */
      afterHidden() {
        return this._onHide;
      }
      /** Whether the tooltip is being displayed. */
      isVisible() {
        return this._isVisible;
      }
      ngOnDestroy() {
        this._cancelPendingAnimations();
        this._onHide.complete();
        this._triggerElement = null;
      }
      /**
       * Interactions on the HTML body should close the tooltip immediately as defined in the
       * material design spec.
       * https://material.io/design/components/tooltips.html#behavior
       */
      _handleBodyInteraction() {
        if (this._closeOnInteraction) {
          this.hide(0);
        }
      }
      /**
       * Marks that the tooltip needs to be checked in the next change detection run.
       * Mainly used for rendering the initial text before positioning a tooltip, which
       * can be problematic in components with OnPush change detection.
       */
      _markForCheck() {
        this._changeDetectorRef.markForCheck();
      }
      _handleMouseLeave({ relatedTarget }) {
        if (!relatedTarget || !this._triggerElement.contains(relatedTarget)) {
          if (this.isVisible()) {
            this.hide(this._mouseLeaveHideDelay);
          } else {
            this._finalizeAnimation(false);
          }
        }
      }
      /**
       * Callback for when the timeout in this.show() gets completed.
       * This method is only needed by the mdc-tooltip, and so it is only implemented
       * in the mdc-tooltip, not here.
       */
      _onShow() {
        this._isMultiline = this._isTooltipMultiline();
        this._markForCheck();
      }
      /** Whether the tooltip text has overflown to the next line */
      _isTooltipMultiline() {
        const rect = this._elementRef.nativeElement.getBoundingClientRect();
        return rect.height > MIN_HEIGHT && rect.width >= MAX_WIDTH;
      }
      /** Event listener dispatched when an animation on the tooltip finishes. */
      _handleAnimationEnd({ animationName }) {
        if (animationName === this._showAnimation || animationName === this._hideAnimation) {
          this._finalizeAnimation(animationName === this._showAnimation);
        }
      }
      /** Cancels any pending animation sequences. */
      _cancelPendingAnimations() {
        if (this._showTimeoutId != null) {
          clearTimeout(this._showTimeoutId);
        }
        if (this._hideTimeoutId != null) {
          clearTimeout(this._hideTimeoutId);
        }
        this._showTimeoutId = this._hideTimeoutId = void 0;
      }
      /** Handles the cleanup after an animation has finished. */
      _finalizeAnimation(toVisible) {
        if (toVisible) {
          this._closeOnInteraction = true;
        } else if (!this.isVisible()) {
          this._onHide.next();
        }
      }
      /** Toggles the visibility of the tooltip element. */
      _toggleVisibility(isVisible) {
        const tooltip = this._tooltip.nativeElement;
        const showClass = this._showAnimation;
        const hideClass = this._hideAnimation;
        tooltip.classList.remove(isVisible ? hideClass : showClass);
        tooltip.classList.add(isVisible ? showClass : hideClass);
        if (this._isVisible !== isVisible) {
          this._isVisible = isVisible;
          this._changeDetectorRef.markForCheck();
        }
        if (isVisible && !this._animationsDisabled && typeof getComputedStyle === "function") {
          const styles = getComputedStyle(tooltip);
          if (styles.getPropertyValue("animation-duration") === "0s" || styles.getPropertyValue("animation-name") === "none") {
            this._animationsDisabled = true;
          }
        }
        if (isVisible) {
          this._onShow();
        }
        if (this._animationsDisabled) {
          tooltip.classList.add("_mat-animation-noopable");
          this._finalizeAnimation(isVisible);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _TooltipComponent, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _TooltipComponent, isStandalone: true, selector: "mat-tooltip-component", host: { attributes: { "aria-hidden": "true" }, listeners: { "mouseleave": "_handleMouseLeave($event)" } }, viewQueries: [{ propertyName: "_tooltip", first: true, predicate: ["tooltip"], descendants: true, static: true }], ngImport: core_exports, template: '<div\n  #tooltip\n  class="mdc-tooltip mat-mdc-tooltip"\n  [ngClass]="tooltipClass"\n  (animationend)="_handleAnimationEnd($event)"\n  [class.mdc-tooltip--multiline]="_isMultiline">\n  <div class="mat-mdc-tooltip-surface mdc-tooltip__surface">{{message}}</div>\n</div>\n', styles: ['.mat-mdc-tooltip{position:relative;transform:scale(0);display:inline-flex}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-surface{word-break:normal;overflow-wrap:anywhere;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center;will-change:transform,opacity;background-color:var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));color:var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));font-family:var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));font-size:var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));line-height:var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));letter-spacing:var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking))}.mat-mdc-tooltip-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:right}.mat-mdc-tooltip-panel{line-height:normal}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}\n'], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: TooltipComponent, decorators: [{
      type: Component,
      args: [{ selector: "mat-tooltip-component", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
        "(mouseleave)": "_handleMouseLeave($event)",
        "aria-hidden": "true"
      }, imports: [NgClass], template: '<div\n  #tooltip\n  class="mdc-tooltip mat-mdc-tooltip"\n  [ngClass]="tooltipClass"\n  (animationend)="_handleAnimationEnd($event)"\n  [class.mdc-tooltip--multiline]="_isMultiline">\n  <div class="mat-mdc-tooltip-surface mdc-tooltip__surface">{{message}}</div>\n</div>\n', styles: ['.mat-mdc-tooltip{position:relative;transform:scale(0);display:inline-flex}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-surface{word-break:normal;overflow-wrap:anywhere;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center;will-change:transform,opacity;background-color:var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));color:var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));font-family:var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));font-size:var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));line-height:var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));letter-spacing:var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking))}.mat-mdc-tooltip-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:right}.mat-mdc-tooltip-panel{line-height:normal}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}\n'] }]
    }], ctorParameters: () => [], propDecorators: { _tooltip: [{
      type: ViewChild,
      args: ["tooltip", {
        // Use a static query here since we interact directly with
        // the DOM which can happen before `ngAfterViewInit`.
        static: true
      }]
    }] } });
    MatTooltipModule = class _MatTooltipModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTooltipModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTooltipModule, imports: [A11yModule, OverlayModule, MatCommonModule, MatTooltip, TooltipComponent], exports: [MatTooltip, TooltipComponent, MatCommonModule, CdkScrollableModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatTooltipModule, providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER], imports: [A11yModule, OverlayModule, MatCommonModule, MatCommonModule, CdkScrollableModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatTooltipModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [A11yModule, OverlayModule, MatCommonModule, MatTooltip, TooltipComponent],
        exports: [MatTooltip, TooltipComponent, MatCommonModule, CdkScrollableModule],
        providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/tooltip.mjs
var init_tooltip = __esm({
  "node_modules/@angular/material/fesm2022/tooltip.mjs"() {
    "use strict";
    init_module_CWxMD37a();
  }
});

// src/app/shared/ui/header/header-presenter.component.ts
var HeaderPresenterComponent;
var init_header_presenter_component2 = __esm({
  "src/app/shared/ui/header/header-presenter.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_header_presenter_component();
    init_core();
    init_button();
    init_menu();
    init_tooltip();
    init_router();
    init_icon();
    init_auth_service();
    HeaderPresenterComponent = class HeaderPresenterComponent2 {
      authService = inject(AuthService);
      //not sure if this is bad practice?
      authUser = this.authService.authUser;
      menuItems = [
        { link: "/", label: "Home", icon: "home" },
        { link: "/about", label: "About", icon: "info-circle" },
        { link: "/ware-management", label: "Ware Management", icon: "truck" },
        { link: "/stats", label: "Statistics", icon: "chart-simple" },
        { link: "/hike-planner", label: "Hike Planner", icon: "tree" }
      ];
    };
    HeaderPresenterComponent = __decorate([
      Component({
        selector: "app-header",
        imports: [
          RouterLink,
          RouterLinkActive,
          MatButtonModule,
          MatMenuModule,
          MatTooltipModule,
          IconModule
        ],
        template: header_presenter_component_default
      })
    ], HeaderPresenterComponent);
  }
});

// src/app/app.component.ts
var AppComponent;
var init_app_component3 = __esm({
  "src/app/app.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_app_component();
    init_app_component2();
    init_core();
    init_router();
    init_header_presenter_component2();
    AppComponent = class AppComponent2 {
      title = "frontend";
    };
    AppComponent = __decorate([
      Component({
        selector: "app-root",
        imports: [RouterOutlet, HeaderPresenterComponent],
        template: app_component_default,
        styles: [app_component_default2]
      })
    ], AppComponent);
  }
});

// src/app/app.component.spec.ts
var require_app_component_spec = __commonJS({
  "src/app/app.component.spec.ts"(exports) {
    init_testing();
    init_app_component3();
    describe("AppComponent", () => {
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [AppComponent]
        }).compileComponents();
      }));
      it("should create the app", () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });
      it(`should have the 'frontend' title`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual("frontend");
      });
      it("should render title", () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector("h1")?.textContent).toContain("Hello, frontend");
      });
    });
  }
});
export default require_app_component_spec();
//# sourceMappingURL=spec-app-app.component.spec.js.map
