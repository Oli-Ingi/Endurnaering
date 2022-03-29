
Entities are reusable, content agnostic, complex mixtures of elements and modules.
They are the highest level of style/markup-only components.


Rules of Entities
- They handle their own inner media transitions.
- They are not aware of their content.
- They do not engage in data fetching.
- They do not have a parent container - only Fragments, so that templates can decide their behaviour. ?
- They should have a many to 1 reliation with features, i.e. a feature should rely on only one entity as a component.
- entities can depend on the theme, elements, modules, other entities and nothing else.
- They do not set their own margins/width (templates handle that, along with "outer" media transitions)
- They have a className prop so that templates can target them
- They can have an inner state/effect that is content agnostic, such as opened/closed or similar visual logic effects.