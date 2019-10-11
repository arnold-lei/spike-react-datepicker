## Date Picker Component Spike
### Components Tested:
* https://airbnb.io/react-dates (13.2k Used)
* https://reactdatepicker.com/ (21.6k Used)
* https://react-day-picker.js.org/examples/selected-week/ (7.2k Used)

### Figure Out:
1. Select Week
2. Children (toggle)

#### Airbnb React Dates:
1. A little hard to use
2. They have a lot of documentation, but not the easiest to get up and running.
3. Does not support children
4. Has an info panel that we would have to customize

### React Date Picker:
1. Doesn't use moment.js date objects?
2. Supports children (barely)

### React Day Picker
1. Nice demo examples
2. No Support for Children

### Suggestion:
1. Build our own component. The effort for customizing an existing component seems equal or more than to creating a new component. Since we already have the calendar service as well as the designs in place I think it would be simpler to convert our AngularJs Component to a React Component.
