SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE SafeTransferFunds(
    p_from_account IN NUMBER,
    p_to_account IN NUMBER,
    p_amount IN NUMBER
)
AS
    v_source_balance NUMBER;
    v_from_customer_id NUMBER;
    v_to_customer_id NUMBER;
    e_insufficient_funds EXCEPTION;
    PRAGMA EXCEPTION_INIT(e_insufficient_funds, -20001);
BEGIN
    SELECT balance, customerid INTO v_source_balance, v_from_customer_id 
    FROM accounts WHERE accountid = p_from_account;
    
    SELECT customerid INTO v_to_customer_id 
    FROM accounts WHERE accountid = p_to_account;

    IF v_source_balance < p_amount THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds in source account for transfer');
    END IF;

    UPDATE accounts
    SET balance = balance - p_amount
    WHERE accountid = p_from_account;
    
    UPDATE customers
    SET balance = balance - p_amount
    WHERE customerid = v_from_customer_id;

    UPDATE accounts
    SET balance = balance + p_amount
    WHERE accountid = p_to_account;
    
    UPDATE customers
    SET balance = balance + p_amount
    WHERE customerid = v_to_customer_id;

    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Fund transfer executed successfully');
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('ERROR: Account not found during transfer process');
    WHEN e_insufficient_funds THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('ERROR: ' || SQLERRM);
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('ERROR: Fund transfer failed - ' || SQLERRM);
END SafeTransferFunds;
/

DECLARE
    v_source_acc NUMBER;
    v_target_acc NUMBER;
    v_transfer_amount NUMBER;
BEGIN
    v_source_acc := &from_account_id;
    v_target_acc := &to_account_id;
    v_transfer_amount := &transfer_amount;
    
    SafeTransferFunds(v_source_acc, v_target_acc, v_transfer_amount);
END;
/