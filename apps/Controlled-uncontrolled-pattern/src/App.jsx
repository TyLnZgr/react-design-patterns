import AutoFocusInput from "./components/AutoFocusInput";
import Counter from "./components/Counter";
import CounterWithRef from "./components/CounterWithRef";
import FeedbackForm from "./FeedbackForm";

function App() {
  return (
    <div>
      <div>
        <h1>DEMO</h1>
        <Counter />
        <AutoFocusInput />
        <CounterWithRef />
      </div>
      <div style={{ width: 500, margin: "0 auto" }}>
        <h1>Example</h1>
        <FeedbackForm />
      </div>
    </div>
  );
}

export default App;
