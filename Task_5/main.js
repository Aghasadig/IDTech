const form = document.querySelector(".employe-add-form");
const table = document.querySelector(".employe-table");

const employes = [];

const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function Employee(fullName, age, position, experiance, skills, startDate) {
  this.id = uid()
  this.fullName = fullName,
  this.age = age;
  this.position = position;
  this.experiance = experiance;
  this.skills = skills;
  this.startDate = startDate;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
  
    const fullName = formData.get("fullname");
    const age = Number(formData.get("age"));
    const position = formData.get("position");
    const experiance = Number(formData.get("experiance"));
    const skills = formData.get("skills");
    const startDate = formData.get("startDate");
  
    if (fullName.length < 4 || fullName.length > 50 || /[^a-zA-Z\s]+/.test(fullName)) {
      return alert("Ad və Soyadinızdakı simvolların sayı minimum 3 maksimum 50 simvoldan ibarət ola bilər!");
    }

    if (age < 18 || age > 65) {
        return alert("Qeydiyyat ucun minimum 18 maksimum 65 yaşında olmalısınız!");
      }
    
      if(age < (experiance + 18)){
        return alert("Yaş və ya təcrübə doğru qeyd edilməyib!")
      }
    
      const employeeDate = new Date(startDate);
      const today =  Date.now();
    
      if(employeeDate >= today) {
        return alert("Tarix doğru deyil!")
      }
    
      const employeeData = new Employee(
        fullName,
        age,
        position,
        experiance,
        skills,
        startDate
      );
    
      employes.push(employeeData);

      form.reset();
    
      showTable()
    });
    
    function showTable() {
      table.innerHTML = ` 
                <thead  id="table-header">
                    <tr>
                        <th>№</th>
                        <th>Ad və Soyad</th>
                        <th>Yaş</th>
                        <th>Vəzifə</th>
                        <th>Əməliyyatlar</th>
                      </tr>
                </thead>
                `;
    
      employees.map((employee, index) => {
        const tableRow = `
        <tr>
                  <td>${index + 1}</td>
                  <td>${employee.fullName}</td>
                  <td>${employee.age}</td>
                  <td>${employee.position}</td>
                  <td>
                    <button class="operations-btn"><a href="">Düzəliş</a></button>
                    <button class="remove-btn"><a href="">Sil</a></button>  
                  </td>
                </tr>
            `;
    
            table.innerHTML += tableRow;
      });
    }
