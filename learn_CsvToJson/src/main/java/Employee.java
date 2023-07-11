public class Employee implements Comparable<Employee> {
    private String name;
    private int salary;

    public String getName() {
        return name;
    }

    Employee(String name, int salary){
        this.name=name;
        this.salary=salary;
    }
    public void setSalary(int salary) {
        this.salary = salary;
    }
    public int getSalary() {
        return salary;
    }

    public int compareTo(Employee o) {
        if(getSalary() < o.getSalary())
            return -1;
        if(getSalary() > o.getSalary())
            return 1;
        else
            return 0;
    }}