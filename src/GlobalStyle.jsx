import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  font-family: 'Open Sans' ,sans-serif;
}

body {
  background: linear-gradient(
    90deg,
    rgba(48, 16, 255, 1) 0%,
    rgba(100, 115, 255, 1) 100%
  );
  color: #fff;
}

.todo-app {
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 90%;
  min-height: 600px;
  background: #161a2b;
  text-align: center;
  margin: 50px auto;
  border-radius: 10px;
  padding-bottom: 32px;
}

h1 {
  margin: 32px 0;
  color: #fff;
  font-size: 24px;
}

.complete {
  text-decoration: line-through;
  opacity: 0.4;
}

.todo-form {
  margin-bottom: 32px;
}

.todo-input {
  padding: 14px 32px 14px 16px;
  border-radius: 4px 0 0 4px;
  border: 2px solid #5d0cff;
  outline: none;
  width: 320px;
  background: transparent;
  color: #fff;
  margin: 10px
}

.todo-input::placeholder {
  color: #e2e2e2;
}

.todo-button {
  padding: 16px;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  outline: none;
  background: linear-gradient(
    90deg,
    rgba(93, 12, 255, 1) 0%,
    rgba(155, 0, 250, 1) 100%
  );
  color: #fff;
  text-transform: capitalize;
}

.todo-input.edit {
  border: 2px solid #149fff;
}

.todo-button.edit {
  background: linear-gradient(
    90deg,
    rgba(20, 159, 255, 1) 0%,
    rgba(17, 122, 255, 1) 100%
  );
  padding: 16px 22px;
}

.todo-container {
  display: flex;
  flex-direction: row;
  position: relative;
}

.todo-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px auto;
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(255, 118, 20, 1) 0%,
    rgba(255, 84, 17, 1) 100%
  );

  padding: 16px;
  border-radius: 5px;
  width: 90%;
}

.todo-row:nth-child(4n + 1) {
  background: linear-gradient(
    90deg,
    rgba(93, 12, 255, 1) 0%,
    rgba(155, 0, 250, 1) 100%
  );
}

.todo-row:nth-child(4n + 2) {
  background: linear-gradient(
    90deg,
    rgba(255, 12, 241, 1) 0%,
    rgba(250, 0, 135, 1) 100%
  );
}

.todo-row:nth-child(4n + 3) {
  background: linear-gradient(
    90deg,
    rgba(20, 159, 255, 1) 0%,
    rgba(17, 122, 255, 1) 100%
  );
}

.icons {
  display: flex;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
}

.delete-icon {
  margin-right: 5px;
  color: #fff;
}

.edit-icon {
  color: #fff;
}
`

export default GlobalStyle