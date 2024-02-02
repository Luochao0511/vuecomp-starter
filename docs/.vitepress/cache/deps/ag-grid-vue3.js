import {
  createVNode,
  defineComponent,
  getCurrentInstance,
  h,
  markRaw,
  render,
  toRaw
} from "./chunk-XKSR56VD.js";
import {
  BaseComponentWrapper,
  ComponentUtil,
  Events,
  VanillaFrameworkOverrides,
  createGrid
} from "./chunk-QDQ3MPMW.js";
import "./chunk-UXIASGQL.js";

// node_modules/.pnpm/ag-grid-vue3@31.0.3_vue@3.3.4/node_modules/ag-grid-vue3/lib/Utils.js
var kebabProperty = (property) => {
  return property.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
};
var kebabNameToAttrEventName = (kebabName) => {
  return `on${kebabName.charAt(0).toUpperCase()}${kebabName.substring(1, kebabName.length)}`;
};
var getAgGridProperties = () => {
  const props2 = {};
  const eventNameAsProps = ComponentUtil.PUBLIC_EVENTS.map((eventName) => kebabNameToAttrEventName(kebabProperty(eventName)));
  eventNameAsProps.forEach((eventName) => props2[eventName] = void 0);
  const computed2 = {
    props() {
      const options = {};
      ComponentUtil.ALL_PROPERTIES.forEach((propertyName) => {
        var _a;
        if (this[propertyName] === ComponentUtil.VUE_OMITTED_PROPERTY) {
          return;
        }
        if (propertyName in this || propertyName in this.gridOptions) {
          options[propertyName] = (_a = this[propertyName]) !== null && _a !== void 0 ? _a : this.gridOptions[propertyName];
        }
      });
      return options;
    }
  };
  const watch2 = {
    modelValue: {
      handler(currentValue, previousValue) {
        if (!this.gridCreated || !this.api) {
          return;
        }
        if (currentValue === previousValue) {
          return;
        }
        if (currentValue && previousValue) {
          if (currentValue.length === previousValue.length) {
            if (currentValue.every((item, index) => item === previousValue[index])) {
              return;
            }
          }
        }
        ComponentUtil.processOnChange({ rowData: currentValue }, this.api);
      },
      deep: true
    },
    props: {
      handler(currentValue, previousValue) {
        if (!this.gridCreated || !this.api) {
          return;
        }
        const changes = {};
        Object.entries(currentValue).forEach(([key, value]) => {
          if (previousValue[key] === value)
            return;
          changes[key] = value;
        });
        ComponentUtil.processOnChange(changes, this.api);
      },
      deep: true
    }
  };
  ComponentUtil.ALL_PROPERTIES.filter((propertyName) => propertyName != "gridOptions").forEach((propertyName) => {
    props2[propertyName] = {
      default: ComponentUtil.VUE_OMITTED_PROPERTY
    };
  });
  return [props2, computed2, watch2];
};

// node_modules/.pnpm/ag-grid-vue3@31.0.3_vue@3.3.4/node_modules/ag-grid-vue3/lib/VueComponentFactory.js
var VueComponentFactory = class _VueComponentFactory {
  static getComponentDefinition(component, parent) {
    let componentDefinition;
    if (typeof component === "string") {
      componentDefinition = this.searchForComponentInstance(parent, component);
    } else {
      componentDefinition = { extends: defineComponent(Object.assign({}, component)) };
    }
    if (!componentDefinition) {
      console.error(`Could not find component with name of ${component}. Is it in Vue.components?`);
    }
    if (componentDefinition.extends) {
      if (componentDefinition.extends.setup) {
        componentDefinition.setup = componentDefinition.extends.setup;
      }
      componentDefinition.extends.props = this.addParamsToProps(componentDefinition.extends.props);
    } else {
      componentDefinition.props = this.addParamsToProps(componentDefinition.props);
    }
    return componentDefinition;
  }
  static addParamsToProps(props2) {
    if (!props2 || Array.isArray(props2) && props2.indexOf("params") === -1) {
      props2 = ["params", ...props2 ? props2 : []];
    } else if (typeof props2 === "object" && !props2.params) {
      props2["params"] = {
        type: Object
      };
    }
    return props2;
  }
  static createAndMountComponent(component, params, parent, provides) {
    const componentDefinition = _VueComponentFactory.getComponentDefinition(component, parent);
    if (!componentDefinition) {
      return;
    }
    const { vNode, destroy, el } = this.mount(componentDefinition, { params: Object.freeze(params) }, parent, provides || {});
    return {
      componentInstance: vNode.component.proxy,
      element: el,
      destroy
    };
  }
  static mount(component, props2, parent, provides) {
    let vNode = createVNode(component, props2);
    vNode.appContext = parent.$.appContext;
    vNode.appContext.provides = Object.assign(Object.assign(Object.assign({}, provides), vNode.appContext.provides ? vNode.appContext.provides : {}), parent.$parent.$options.provide ? parent.$parent.$options.provide : {});
    let el = document.createElement("div");
    render(vNode, el);
    const destroy = () => {
      if (el) {
        render(null, el);
      }
      el = null;
      vNode = null;
    };
    return { vNode, destroy, el };
  }
  static searchForComponentInstance(parent, component, maxDepth = 10, suppressError = false) {
    let componentInstance = null;
    let currentParent = parent.$parent;
    let depth = 0;
    while (!componentInstance && currentParent && currentParent.$options && ++depth < maxDepth) {
      const currentParentAsThis = currentParent;
      if (currentParentAsThis.$options && currentParentAsThis.$options.components && currentParentAsThis.$options.components[component]) {
        componentInstance = currentParentAsThis.$options.components[component];
      } else if (currentParentAsThis[component]) {
        componentInstance = currentParentAsThis[component];
      }
      currentParent = currentParent.$parent;
    }
    if (!componentInstance) {
      const components = parent.$.appContext.components;
      if (components && components[component]) {
        componentInstance = components[component];
      }
    }
    if (!componentInstance && !suppressError) {
      console.error(`Could not find component with name of ${component}. Is it in Vue.components?`);
      return null;
    }
    return componentInstance;
  }
};

// node_modules/.pnpm/ag-grid-vue3@31.0.3_vue@3.3.4/node_modules/ag-grid-vue3/lib/VueFrameworkComponentWrapper.js
var VueFrameworkComponentWrapper = class _VueFrameworkComponentWrapper extends BaseComponentWrapper {
  constructor(parent, provides) {
    super();
    this.parent = parent;
    if (!_VueFrameworkComponentWrapper.provides) {
      _VueFrameworkComponentWrapper.provides = provides;
    }
  }
  createWrapper(component) {
    const that = this;
    class DynamicComponent extends VueComponent {
      init(params) {
        super.init(params);
      }
      hasMethod(name) {
        const componentInstance = wrapper.getFrameworkComponentInstance();
        if (!componentInstance[name]) {
          return componentInstance.$.setupState[name] != null;
        } else {
          return true;
        }
      }
      callMethod(name, args) {
        var _a;
        const componentInstance = this.getFrameworkComponentInstance();
        const frameworkComponentInstance = wrapper.getFrameworkComponentInstance();
        if (frameworkComponentInstance[name]) {
          return frameworkComponentInstance[name].apply(componentInstance, args);
        } else {
          return (_a = frameworkComponentInstance.$.setupState[name]) === null || _a === void 0 ? void 0 : _a.apply(componentInstance, args);
        }
      }
      addMethod(name, callback) {
        wrapper[name] = callback;
      }
      overrideProcessing(methodName) {
        return that.parent.autoParamsRefresh && methodName === "refresh";
      }
      processMethod(methodName, args) {
        if (methodName === "refresh") {
          this.getFrameworkComponentInstance().params = args[0];
        }
        if (this.hasMethod(methodName)) {
          return this.callMethod(methodName, args);
        }
        return methodName === "refresh";
      }
      createComponent(params) {
        return that.createComponent(component, params);
      }
    }
    const wrapper = new DynamicComponent();
    return wrapper;
  }
  createComponent(component, params) {
    return VueComponentFactory.createAndMountComponent(component, params, this.parent, _VueFrameworkComponentWrapper.provides);
  }
  createMethodProxy(wrapper, methodName, mandatory) {
    return function() {
      if (wrapper.overrideProcessing(methodName)) {
        return wrapper.processMethod(methodName, arguments);
      }
      if (wrapper.hasMethod(methodName)) {
        return wrapper.callMethod(methodName, arguments);
      }
      if (mandatory) {
        console.warn("AG Grid: Framework component is missing the method " + methodName + "()");
      }
      return null;
    };
  }
  destroy() {
    this.parent = null;
  }
};
var VueComponent = class {
  getGui() {
    return this.element;
  }
  destroy() {
    if (this.getFrameworkComponentInstance() && typeof this.getFrameworkComponentInstance().destroy === "function") {
      this.getFrameworkComponentInstance().destroy();
    }
    this.unmount();
  }
  getFrameworkComponentInstance() {
    return this.componentInstance;
  }
  init(params) {
    var _a;
    const { componentInstance, element, destroy: unmount } = this.createComponent(params);
    this.componentInstance = componentInstance;
    this.unmount = unmount;
    this.element = (_a = element.firstElementChild) !== null && _a !== void 0 ? _a : element;
  }
};

// node_modules/.pnpm/ag-grid-vue3@31.0.3_vue@3.3.4/node_modules/ag-grid-vue3/lib/VueFrameworkOverrides.js
var VueFrameworkOverrides = class extends VanillaFrameworkOverrides {
  constructor(parent) {
    super("vue");
    this.parent = parent;
  }
  /*
   * vue components are specified in the "components" part of the vue component - as such we need a way to determine
   * if a given component is within that context - this method provides this
   * Note: This is only really used/necessary with cellRendererSelectors
   */
  frameworkComponent(name, components) {
    let result = !!VueComponentFactory.searchForComponentInstance(this.parent, name, 10, true) ? name : null;
    if (!result && components && components[name]) {
      const indirectName = components[name];
      result = !!VueComponentFactory.searchForComponentInstance(this.parent, indirectName, 10, true) ? indirectName : null;
    }
    return result;
  }
  isFrameworkComponent(comp) {
    return typeof comp === "object";
  }
};

// node_modules/.pnpm/ag-grid-vue3@31.0.3_vue@3.3.4/node_modules/ag-grid-vue3/lib/AgGridVue.js
var ROW_DATA_EVENTS = /* @__PURE__ */ new Set(["rowDataUpdated", "cellValueChanged", "rowValueChanged"]);
var ALWAYS_SYNC_GLOBAL_EVENTS = /* @__PURE__ */ new Set([Events.EVENT_GRID_PRE_DESTROYED]);
var DATA_MODEL_ATTR_NAME = "onUpdate:modelValue";
var DATA_MODEL_EMIT_NAME = "update:modelValue";
var [props, computed, watch] = getAgGridProperties();
var AgGridVue = defineComponent({
  render() {
    return h("div");
  },
  props: Object.assign({ gridOptions: {
    type: Object,
    default: () => ({})
  }, autoParamsRefresh: {
    type: Boolean,
    default: () => false
  }, componentDependencies: {
    type: Array,
    default: () => []
  }, plugins: [], modules: {
    type: Array,
    default: () => []
  }, modelValue: {
    type: Array,
    default: void 0,
    required: false
  } }, props),
  data() {
    return {
      api: void 0,
      gridCreated: false,
      isDestroyed: false,
      gridReadyFired: false,
      emitRowModel: void 0
    };
  },
  computed,
  watch,
  methods: {
    globalEventListenerFactory(restrictToSyncOnly) {
      return (eventType, event) => {
        if (this.isDestroyed) {
          return;
        }
        if (eventType === "gridReady") {
          this.gridReadyFired = true;
        }
        const alwaysSync = ALWAYS_SYNC_GLOBAL_EVENTS.has(eventType);
        if (alwaysSync && !restrictToSyncOnly || !alwaysSync && restrictToSyncOnly) {
          return;
        }
        this.updateModelIfUsed(eventType);
      };
    },
    processChanges(propertyName, currentValue, previousValue) {
      if (this.gridCreated) {
        if (this.skipChange(propertyName, currentValue, previousValue)) {
          return;
        }
        const options = {
          [propertyName]: propertyName === "rowData" ? Object.isFrozen(currentValue) ? currentValue : markRaw(toRaw(currentValue)) : currentValue
        };
        ComponentUtil.processOnChange(options, this.api);
      }
    },
    checkForBindingConflicts() {
      const thisAsAny = this;
      if ((thisAsAny.rowData || this.gridOptions.rowData) && thisAsAny.modelValue) {
        console.warn("AG Grid: Using both rowData and v-model. rowData will be ignored.");
      }
    },
    getRowData() {
      var _a;
      const rowData = [];
      (_a = this.api) === null || _a === void 0 ? void 0 : _a.forEachNode((rowNode) => {
        rowData.push(rowNode.data);
      });
      return rowData;
    },
    updateModelIfUsed(eventType) {
      if (this.gridReadyFired && this.$attrs[DATA_MODEL_ATTR_NAME] && ROW_DATA_EVENTS.has(eventType)) {
        if (this.emitRowModel) {
          this.emitRowModel();
        }
      }
    },
    getRowDataBasedOnBindings() {
      const thisAsAny = this;
      const rowData = thisAsAny.modelValue;
      return rowData ? rowData : thisAsAny.rowData ? thisAsAny.rowData : thisAsAny.gridOptions.rowData;
    },
    getProvides() {
      let instance = getCurrentInstance();
      let provides = {};
      while (instance) {
        if (instance && instance.provides) {
          provides = Object.assign(Object.assign({}, provides), instance.provides);
        }
        instance = instance.parent;
      }
      return provides;
    },
    /*
    * Prevents an infinite loop when using v-model for the rowData
    */
    skipChange(propertyName, currentValue, previousValue) {
      if (this.gridReadyFired && propertyName === "rowData" && this.$attrs[DATA_MODEL_ATTR_NAME]) {
        if (currentValue === previousValue) {
          return true;
        }
        if (currentValue && previousValue) {
          const currentRowData = currentValue;
          const previousRowData = previousValue;
          if (currentRowData.length === previousRowData.length) {
            for (let i = 0; i < currentRowData.length; i++) {
              if (currentRowData[i] !== previousRowData[i]) {
                return false;
              }
            }
            return true;
          }
        }
      }
      return false;
    },
    debounce(func, delay) {
      let timeout;
      return () => {
        const later = function() {
          func();
        };
        window.clearTimeout(timeout);
        timeout = window.setTimeout(later, delay);
      };
    }
  },
  mounted() {
    this.emitRowModel = this.debounce(() => {
      this.$emit(DATA_MODEL_EMIT_NAME, Object.freeze(this.getRowData()));
    }, 20);
    const provides = this.getProvides();
    const frameworkComponentWrapper = new VueFrameworkComponentWrapper(this, provides);
    const gridOptions = markRaw(ComponentUtil.combineAttributesAndGridOptions(toRaw(this.gridOptions), this));
    this.checkForBindingConflicts();
    const rowData = this.getRowDataBasedOnBindings();
    if (rowData !== ComponentUtil.VUE_OMITTED_PROPERTY) {
      gridOptions.rowData = rowData ? Object.isFrozen(rowData) ? rowData : markRaw(toRaw(rowData)) : rowData;
    }
    const gridParams = {
      globalEventListener: this.globalEventListenerFactory().bind(this),
      globalSyncEventListener: this.globalEventListenerFactory(true).bind(this),
      frameworkOverrides: new VueFrameworkOverrides(this),
      providedBeanInstances: {
        frameworkComponentWrapper
      },
      modules: this.modules
    };
    this.api = createGrid(this.$el, gridOptions, gridParams);
    this.gridCreated = true;
  },
  unmounted() {
    var _a;
    if (this.gridCreated) {
      (_a = this.api) === null || _a === void 0 ? void 0 : _a.destroy();
      this.isDestroyed = true;
    }
  }
});
export {
  AgGridVue
};
//# sourceMappingURL=ag-grid-vue3.js.map