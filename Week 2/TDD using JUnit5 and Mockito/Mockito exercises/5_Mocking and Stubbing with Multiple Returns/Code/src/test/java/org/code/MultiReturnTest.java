package org.code;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class MultiReturnTest {
    @Test
    void testMultipleReturns() {
        //Mock
        ExternalApi api = mock(ExternalApi.class);

        //Stub with multiple returns
        when(api.getStatus()).thenReturn("Pending", "Processing", "Completed");

        //Verify
        assertEquals("Pending", api.getStatus());
        assertEquals("Processing", api.getStatus());
        assertEquals("Completed", api.getStatus());
    }
}
