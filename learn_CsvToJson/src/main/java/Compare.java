import java.util.*;

public class Compare {
    public static void main(String args[]){
        TreeSet<Employee> pList = new TreeSet<Employee>();
        pList.add(new Employee("Ajay Kumar", 34673));
        pList.add(new Employee("Vijay Kumar", 37847));
        pList.add(new Employee("Sanjay Kumar",33335));
        pList.add(new Employee("Dhananjay Kumar",74432));
        pList.add(new Employee("Ranjay Kumar",24757));
        System.out.println(pList);
        for(Employee e:pList){
            System.out.println(e.getName()+" : "+e.getSalary());
        }
    }

}
