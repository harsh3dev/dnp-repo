package org.code;

import org.junit.jupiter.api.Test;
import org.mockito.InOrder;

import static org.mockito.Mockito.*;

public class InteractionOrderTest {

    @Test
    void testMethodCallOrder(){
        //mock
        OrderService mockService = mock(OrderService.class);

        mockService.placeOrder();
        mockService.cancelOrder(5);

        InOrder inOrder = inOrder(mockService);
        inOrder.verify(mockService).placeOrder();
        inOrder.verify(mockService).cancelOrder(5);

    }
}
