SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE AddNewCustomer(
    p_customer_id IN CUSTOMERS.CUSTOMERID%TYPE,
    p_customer_name IN CUSTOMERS.NAME%TYPE,
    p_date_of_birth IN DATE,
    p_initial_balance IN CUSTOMERS.BALANCE%TYPE
) AS
BEGIN
    DBMS_OUTPUT.PUT_LINE('Initiating customer registration process...');
    DBMS_OUTPUT.PUT_LINE('Customer ID: ' || p_customer_id);
    DBMS_OUTPUT.PUT_LINE('Customer Name: ' || p_customer_name);
    DBMS_OUTPUT.PUT_LINE('Birth Date: ' || TO_CHAR(p_date_of_birth, 'DD-MON-YYYY'));
    DBMS_OUTPUT.PUT_LINE('Opening Balance: ' || p_initial_balance);
    
    INSERT INTO CUSTOMERS (CUSTOMERID, NAME, DOB, BALANCE, LASTMODIFIED)
    VALUES (p_customer_id, p_customer_name, p_date_of_birth, p_initial_balance, SYSDATE);
    
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Customer registration completed successfully');
EXCEPTION
    WHEN DUP_VAL_ON_INDEX THEN
        DBMS_OUTPUT.PUT_LINE('ERROR: Customer with ID ' || p_customer_id || ' already exists in the database');
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('ERROR: Customer registration failed - ' || SQLERRM);
END AddNewCustomer;
/

DECLARE
    v_customer_id CUSTOMERS.CUSTOMERID%TYPE;
    v_customer_name CUSTOMERS.NAME%TYPE;
    v_birth_date DATE;
    v_opening_balance CUSTOMERS.BALANCE%TYPE;
BEGIN
    v_customer_id := &customer_id;
    v_customer_name := '&customer_name';
    v_birth_date := TO_DATE('&date_of_birth', 'YYYY-MM-DD');
    v_opening_balance := &balance;
    AddNewCustomer(v_customer_id, v_customer_name, v_birth_date, v_opening_balance);
END;
/