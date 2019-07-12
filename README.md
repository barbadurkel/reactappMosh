# React Tips and tricks:


*Props vs State*
- Props includes data that we GIVE to a component
- State includes data that is LOCAL to that component
- Props are READONLY inside a component
- RULE : The component that owns a piece of the state should be the one to modify it (example: deleting a counter is handled by the Counters component BUT the 'event' of deletion is raised in the Counter component)
- props can be propertis or (even better) OBJECTS
- Components RAISE events and Parent-components HANDLE those events (onDelete, handleDelete) 
- RULE : Keep states only in Parent components
