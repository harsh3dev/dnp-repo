DECLARE
  v_notification_count NUMBER := 0;
  v_threshold_days CONSTANT NUMBER := 30;
BEGIN
  FOR payment_record IN (
    SELECT loan_id, customer_id, due_date
    FROM loans
    WHERE due_date <= SYSDATE + v_threshold_days
    ORDER BY customer_id, due_date
  ) 
  LOOP
    DBMS_OUTPUT.PUT_LINE('Notice: Client ' || payment_record.customer_id ||
                         ' has Loan #' || payment_record.loan_id ||
                         ' scheduled for ' || TO_CHAR(payment_record.due_date, 'DD-MON-YYYY'));
    
    v_notification_count := v_notification_count + 1;
  END LOOP;
  
  DBMS_OUTPUT.PUT_LINE('Notification process completed. Total alerts: ' || v_notification_count);
  
EXCEPTION
  WHEN NO_DATA_FOUND THEN
    DBMS_OUTPUT.PUT_LINE('No loans found requiring notifications');
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('System error during notification processing: ' || SQLERRM);
END;
/