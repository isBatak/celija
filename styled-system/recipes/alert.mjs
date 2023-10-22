import { splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const alertFn = /* @__PURE__ */ createRecipe('alert', {}, [])

const alertVariantMap = {}

const alertVariantKeys = Object.keys(alertVariantMap)

export const alert = /* @__PURE__ */ Object.assign(alertFn, {
  __recipe__: true,
  __name__: 'alert',
  raw: (props) => props,
  variantKeys: alertVariantKeys,
  variantMap: alertVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, alertVariantKeys)
  },
})