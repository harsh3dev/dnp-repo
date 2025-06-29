package org.code;

import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.*;

public class UserServiceTest {
    @Test
    public void testArgumentMatching(){
        UserService mockService = mock(UserService.class);
        mockService.registerUser("sreyasree-001","test@gmail.com");

        verify(mockService).registerUser(eq("sreyasree-001"), contains("test@gmail.com"));
        verify(mockService, times(1)).registerUser(anyString(), anyString());
    }
}
