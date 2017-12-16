package com.example.adenwang.schoop;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import org.w3c.dom.Text;

public class MainActivity extends AppCompatActivity {

    //Step1 : Declaration
    Button sqrtButton, clearButton;
    EditText inputBox1;
    TextView resultsView;
    int op1, result;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //Step2 : Hoopup Step
        sqrtButton = (Button) findViewById(R.id.button);
        clearButton = (Button) findViewById(R.id.button3);
        inputBox1 = (EditText) findViewById(R.id.editText);
        resultsView = (TextView) findViewById(R.id.textView);

        //Step 3 : Do Something
        sqrtButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                op1 = Integer.parseInt(inputBox1.getText().toString());
                resultsView.setText(String.valueOf(Math.sqrt(op1)));
            }
        });
    }
}
