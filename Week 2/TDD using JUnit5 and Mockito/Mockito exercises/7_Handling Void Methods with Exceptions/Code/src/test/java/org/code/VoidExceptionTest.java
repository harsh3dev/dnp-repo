package org.code;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

public class VoidExceptionTest {
    @Test
    void testException(){
        //mock
        UserService userService = mock(UserService.class);

        doThrow(new IllegalArgumentException("User not found"))
                .when(userService)
                .deleteUser("unknownUser");

        //Verify
        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            userService.deleteUser("unknownUser");
        });

        assertEquals("User not found", exception.getMessage());
        verify(userService).deleteUser("unknownUser");
    }
}
