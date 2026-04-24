const compose =
  (...hocs) =>
  (Component) => {
    return hocs.reduceRight((accumulator, hoc) => hoc(accumulator), Component);
  };

export default compose;
