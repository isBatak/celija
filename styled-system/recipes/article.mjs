import { splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const articleFn = /* @__PURE__ */ createRecipe('article', {
  "size": "md"
}, [])

const articleVariantMap = {
  "size": [
    "sm",
    "md",
    "lg"
  ]
}

const articleVariantKeys = Object.keys(articleVariantMap)

export const article = /* @__PURE__ */ Object.assign(articleFn, {
  __recipe__: true,
  __name__: 'article',
  raw: (props) => props,
  variantKeys: articleVariantKeys,
  variantMap: articleVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, articleVariantKeys)
  },
})