package org.code;

import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.*;

public class UserServiceTest {
    @Test
    void testSendEmail() {
        UserService mockService = mock(UserService.class);

        // Stub the void method
        doNothing().when(mockService).sendEmail("test@gmail.com");

        // Call the method
        mockService.sendEmail("test@gmail.com");

        // Verify it was called
        verify(mockService).sendEmail("test@gmail.com");
    }
}
