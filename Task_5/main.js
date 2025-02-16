const form = document.querySelector(".employe-add-form");
const table = document.querySelector(".employe-table");

const fullName = document.querySelector("#fullName");
const age = document.querySelector("#age");
const position = document.querySelector("#position");
const experience = document.querySelector("#experience");
const skills = document.querySelector("#skills");
const startDate = document.querySelector("#startDate");

let editModeId;

let employes = [];

const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

function Employee(fullName, age, position, experience, skills, startDate) {
  this.id = uid();
  this.fullName = fullName;
  this.age = age;
  this.position = position;
  this.experience = experience;
  this.skills = skills;
  this.startDate = startDate;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  e.stopPropagation();

  const formData = new FormData(e.target);

  const fullName = formData.get("fullName");
  const age = Number(formData.get("age"));
  const position = formData.get("position");
  const experience = Number(formData.get("experience"));
  const skills = formData.get("skills");
  const startDate = formData.get("startDate");

  if (
    fullName.length < 4 ||
    fullName.length > 50 ||
    /[^a-zA-ZçğıöşüÇĞİÖŞÜ\s]+/.test(fullName)
  ) {
    return alert(
      "Ad və Soyadinızdakı simvolların sayı minimum 3 maksimum 50 simvoldan ibarət ola bilər!"
    );
  }

  if (age < 18 || age > 65) {
    return alert("Qeydiyyat ücün minimum 18 maksimum 65 yaşında olmalısınız!");
  }

  if (age - 18 < experience) {
    return alert("Yaş və ya təcrübə doğru qeyd edilməyib!");
  }

  const employeeDate = new Date(startDate);
  const today = Date.now();

  if (employeeDate >= today) {
    return alert("Tarix doğru deyil!");
  }

  if (editModeId) {
    console.log(editModeId);
    employes = employes.map((employe) => {
      console.log(employe.id, editModeId);
      if (employe.id === editModeId) {
        return {
          ...employe,
          fullName,
          age,
          position,
          experience,
          skills,
          startDate,
        };
      }
      return employe;
    });

    console.log(employes);

    form.reset();

    editModeId = undefined;
    showTable();
    return;
  }

  const employeeData = new Employee(
    fullName,
    age,
    position,
    experience,
    skills,
    startDate
  );

  employes.push(employeeData);

  form.reset();

  showTable();
});

function showTable() {
  table.innerHTML = `
<thead id="table-header">
    <tr>
        <th>№</th>
        <th>Ad və Soyad</th>
        <th>Yaş</th>
        <th>Vəzifə</th>
        <th>Bacarıqlar</th>
        <th>Əməliyyatlar</th>
    </tr>
</thead>
`;

  employes.forEach((employee, index) => {
    table.innerHTML += `
           <tr>
                <td>${index + 1}</td>
               <td>${employee.fullName}</td>
               <td>${employee.age}</td>
              <td>${employee.position}</td>
              <td>${employee.skills}</td>
              <td>
                  <button data-id="${employee.id
      }" class="operations-btn">Düzəliş</button>
                   <button data-id="${employee.id
      }" class="remove-btn">Sil</button>  
                </td>
             </tr>
         `;
  });

  removeBtns();
  operationsBtns();
}

function removeBtns() {
  const removeBtn = document.querySelectorAll(".remove-btn");
  removeBtn.forEach((buttons) => {
    buttons.addEventListener("click", (e) => {
      const id = e.target.dataset.id;

      employes = employes.filter((employe) => employe.id !== id);
      showTable();
    });
  });
}

function operationsBtns() {
  const operationBtn = document.querySelectorAll(".operations-btn");

  operationBtn.forEach((buttons) => {
    buttons.addEventListener("click", (e) => {
      const id = e.target.dataset.id;

      const employeeData = employes.find((employe) => id === employe.id);

      fullName.value = employeeData.fullName;
      age.value = employeeData.age;
      position.value = employeeData.position;
      experience.value = employeeData.experience;
      skills.value = employeeData.skills;
      startDate.value = employeeData.startDate;

      editModeId = id;
    });
  });
}
