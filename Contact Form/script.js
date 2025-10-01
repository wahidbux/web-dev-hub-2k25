const form = document.getElementById('contactForm');
const formAlert = document.getElementById('formAlert');

const validators = {
  name: v => v.trim().length >= 2 || 'Please enter your name (min 2 chars).',
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Please enter a valid email address.',
  message: v => v.length <= 500 || 'Message must be 500 characters or less.'
};

function showError(field, msg){
  const el = document.querySelector(`.error[data-for="${field}"]`);
  if(el) el.textContent = msg || '';
}

function validateField(name, value){
  const rule = validators[name];
  if(!rule) return true;
  const ok = rule(value);
  return ok === true ? true : ok; 
}

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  formAlert.textContent = '';

  const data = new FormData(form);
  let hasError = false;

  for(const [name, value] of data.entries()){
    const res = validateField(name, value);
    if(res !== true){
      showError(name, res);
      hasError = true;
    } else {
      showError(name, '');
    }
  }

  if(hasError){
    formAlert.textContent = 'Please fix the errors above.';
    return;
  }

  formAlert.textContent = 'Message sent. (demo)';
  form.reset();
});

const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', ()=>{ form.reset(); document.querySelectorAll('.error').forEach(e=>e.textContent=''); formAlert.textContent=''; });

const paras = document.getElementById('paras');
const addParaBtn = document.getElementById('addPara');
const clearParasBtn = document.getElementById('clearParas');
let paraCount = 0;

addParaBtn.addEventListener('click', ()=>{
  paraCount += 1;
  const p = document.createElement('p');
  p.textContent = `Paragraph ${paraCount}`;
  p.style.padding = '8px 0';
  paras.appendChild(p);
});
clearParasBtn.addEventListener('click', ()=>{ paras.innerHTML = ''; paraCount = 0; });

const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodo');
const todoListEl = document.getElementById('todoList');
const clearCompletedBtn = document.getElementById('clearCompleted');
const clearAllBtn = document.getElementById('clearAll');

let todos = JSON.parse(localStorage.getItem('todos_v1') || '[]');

function saveTodos(){ localStorage.setItem('todos_v1', JSON.stringify(todos)); }

function renderTodos(){
  todoListEl.innerHTML = '';
  todos.forEach((t, idx)=>{
    const li = document.createElement('li');
    li.className = 'todo-item' + (t.done ? ' done' : '');

    li.innerHTML = `
      <div>
        <input type="checkbox" data-idx="${idx}" ${t.done? 'checked' : ''} />
        <span style="margin-left:8px">${escapeHtml(t.text)}</span>
      </div>
      <div class="todo-actions">
        <button data-action="del" data-idx="${idx}">Delete</button>
      </div>
    `;

    todoListEl.appendChild(li);
  });
}

function escapeHtml(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

addTodoBtn.addEventListener('click', ()=>{
  const v = todoInput.value.trim();
  if(!v) return;
  todos.push({ text: v, done: false });
  todoInput.value = '';
  saveTodos(); renderTodos();
});

todoListEl.addEventListener('click', (e)=>{
  const del = e.target.closest('button[data-action="del"]');
  if(del){
    const idx = Number(del.dataset.idx);
    todos.splice(idx,1); saveTodos(); renderTodos();
  }
});

todoListEl.addEventListener('change', (e)=>{
  const cb = e.target.closest('input[type="checkbox"][data-idx]');
  if(cb){
    const idx = Number(cb.dataset.idx);
    todos[idx].done = cb.checked; saveTodos(); renderTodos();
  }
});

clearCompletedBtn.addEventListener('click', ()=>{
  todos = todos.filter(t=>!t.done); saveTodos(); renderTodos();
});
clearAllBtn.addEventListener('click', ()=>{ todos = []; saveTodos(); renderTodos(); });

renderTodos();
