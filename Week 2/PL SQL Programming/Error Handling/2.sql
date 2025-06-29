SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE UpdateSalary(
    p_employee_id IN EMPLOYEES.EMPLOYEEID%TYPE,
    p_percentage IN NUMBER
) AS
    v_current_salary EMPLOYEES.SALARY%TYPE;
    v_new_salary EMPLOYEES.SALARY%TYPE;
BEGIN
    SELECT SALARY INTO v_current_salary
    FROM EMPLOYEES
    WHERE EMPLOYEEID = p_employee_id;

    v_new_salary := v_current_salary * (1 + p_percentage / 100);

    UPDATE EMPLOYEES
    SET SALARY = v_new_salary,
        HIREDATE = SYSDATE
    WHERE EMPLOYEEID = p_employee_id;
    
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Salary updated successfully for employee ID: ' || p_employee_id);
    DBMS_OUTPUT.PUT_LINE('Previous salary: ' || v_current_salary || ', New salary: ' || v_new_salary);
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('ERROR: Employee ID ' || p_employee_id || ' does not exist in the system');
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('ERROR: Salary update failed - ' || SQLERRM);
END UpdateSalary;
/

DECLARE
    v_emp_id EMPLOYEES.EMPLOYEEID%TYPE;
    v_salary_increase NUMBER;
BEGIN
    v_emp_id := &employee_id;
    v_salary_increase := &percentage_increase;
    UpdateSalary(v_emp_id, v_salary_increase);
END;
/